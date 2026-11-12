import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { AppointmentStore } from '@/services/appointment.store'
import type { ApptStatus } from '@/data/data'
import {
  BadgeComponent,
  type BadgeTone,
  ButtonDirective,
  ControlDirective,
  EmptyStateComponent,
  PageHeaderComponent,
  eventValue,
} from '@/ui'

@Component({
  selector: 'app-appointments-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, ButtonDirective, ControlDirective, EmptyStateComponent, PageHeaderComponent],
  template: `
    <app-page-header title="My appointments" subtitle="Search, filter and cancel your bookings." />
    <div class="mb-4 flex flex-wrap gap-2">
      <input
        appControl
        type="search"
        class="max-w-xs"
        placeholder="Search patient or reason"
        aria-label="Search appointments"
        (input)="q.set(eventValue($event))"
      />
      <select appControl class="w-auto" aria-label="Filter by status" (change)="status.set(eventValue($event))">
        <option value="">All statuses</option>
        @for (s of statuses; track s) {
          <option [value]="s">{{ s }}</option>
        }
      </select>
      <select appControl class="w-auto" aria-label="Filter by doctor" (change)="doctor.set(eventValue($event))">
        <option value="">All doctors</option>
        @for (d of store.doctors; track d.id) {
          <option [value]="d.id">{{ d.name }}</option>
        }
      </select>
    </div>
    <div class="bg-card overflow-x-auto rounded-xl border">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-muted-foreground border-b text-left">
            @for (h of headings; track h) {
              <th scope="col" class="h-10 px-3 font-medium">{{ h }}</th>
            }
            <th scope="col" class="px-3"><span class="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          @for (a of rows(); track a.id) {
            <tr class="border-b last:border-0">
              <td class="p-3 font-medium">{{ a.id }}</td>
              <td class="p-3">{{ a.patient }}</td>
              <td class="p-3">{{ store.doctor(a.doctorId)?.name }}</td>
              <td class="p-3">{{ store.hospitalOfDoctor(a.doctorId)?.name }}</td>
              <td class="p-3 whitespace-nowrap">{{ a.date }} {{ a.time }}</td>
              <td class="p-3">{{ a.reason }}</td>
              <td class="p-3">
                <app-badge [tone]="tone[a.status]">{{ a.status }}</app-badge>
              </td>
              <td class="p-3 text-right">
                @if (a.status === 'Scheduled') {
                  <button appButton variant="outline" size="sm" type="button" (click)="cancel(a.id)">Cancel</button>
                }
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="8"><app-empty-state title="No appointments" description="Nothing here yet. Book a visit to get started." /></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class AppointmentsPage {
  protected readonly eventValue = eventValue
  protected readonly store = inject(AppointmentStore)
  protected readonly tone: Record<ApptStatus, BadgeTone> = { Scheduled: 'info', Completed: 'success', Cancelled: 'neutral' }
  protected readonly headings = ['ID', 'Patient', 'Doctor', 'Hospital', 'When', 'Reason', 'Status']
  protected readonly statuses = ['Scheduled', 'Completed', 'Cancelled']
  protected readonly q = signal('')
  protected readonly status = signal('')
  protected readonly doctor = signal('')
  protected readonly rows = computed(() => {
    const q = this.q().toLowerCase().trim()
    return this.store
      .mine()
      .filter(
        (a) =>
          (!this.status() || a.status === this.status()) &&
          (!this.doctor() || a.doctorId === this.doctor()) &&
          (!q || `${a.patient} ${a.reason}`.toLowerCase().includes(q)),
      )
      .sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time))
  })
  protected cancel(id: string) {
    if (confirm(`Cancel appointment ${id}?`)) this.store.cancel(id)
  }
}
