import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { AppointmentStore } from '@/services/appointment.store'
import { SearchService } from '@/services/search.service'
import type { ApptStatus } from '@/data/data'
import {
  AlertDialogComponent,
  AvatarComponent,
  BadgeComponent,
  type BadgeTone,
  ButtonDirective,
  ControlDirective,
  EmptyStateComponent,
  HeroComponent,
  SegmentedControlComponent,
  SelectComponent,
  TableDirective,
  eventValue,
} from '@/ui'

@Component({
  selector: 'app-appointments-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvatarComponent,
    BadgeComponent,
    ButtonDirective,
    ControlDirective,
    EmptyStateComponent,
    HeroComponent,
    SegmentedControlComponent,
    TableDirective,
    AlertDialogComponent,
    SelectComponent,
  ],
  template: `
    <app-hero
      title="My appointments"
      subtitle="Search, filter and cancel your bookings."
      illustration="illustrations/hero-appointments.svg"
    />
    <div class="flex flex-wrap items-center gap-2">
      <input
        appControl
        type="search"
        class="w-full! sm:w-[280px]!"
        placeholder="Search patient or reason"
        aria-label="Search appointments"
        [value]="q()"
        (input)="q.set(eventValue($event))"
      />
      <app-select
        class="w-full sm:w-[150px]"
        ariaLabel="Filter by status"
        placeholder="All statuses"
        [options]="statusOptions"
        [value]="status()"
        (valueChange)="status.set($event ?? '')"
      />
      <app-select
        class="w-full sm:w-[180px]"
        ariaLabel="Filter by doctor"
        placeholder="All doctors"
        [options]="doctorOptions"
        [value]="doctor()"
        (valueChange)="doctor.set($event ?? '')"
      />
      <app-segmented-control class="ml-auto" label="Status" [options]="tabs()" [(value)]="status" />
    </div>
    <div class="bg-card overflow-x-auto rounded-xl border shadow-sm">
      <table
        appTable
        class="[&_thead]:bg-muted [&_td]:px-3 [&_th]:px-3 [&_td]:py-3 [&_tbody_tr:last-child]:border-0 [&_td:first-child]:font-medium [&_td:first-child]:whitespace-nowrap"
      >
        <thead>
          <tr>
            @for (h of headings; track h) {
              <th scope="col">{{ h }}</th>
            }
            <th scope="col"><span class="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          @for (a of rows(); track a.id) {
            <tr>
              <td>{{ a.id }}</td>
              <td>
                <span class="flex items-center gap-2 font-normal whitespace-nowrap">
                  <app-avatar [name]="a.patient" size="sm" />
                  {{ a.patient }}
                </span>
              </td>
              <td class="font-normal">{{ store.doctor(a.doctorId)?.name }}</td>
              <td class="font-normal">{{ store.hospitalOfDoctor(a.doctorId)?.name }}</td>
              <td class="font-normal whitespace-nowrap">{{ a.date }} {{ a.time }}</td>
              <td class="font-normal">{{ a.reason }}</td>
              <td>
                <app-badge [tone]="tone[a.status]">
                  {{ a.status }}
                </app-badge>
              </td>
              <td class="text-right">
                @if (a.status === 'Scheduled') {
                  <button appButton variant="outline" size="sm" type="button" (click)="cancelTarget.set(a.id)">Cancel</button>
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
    <app-alert-dialog
      heading="Cancel appointment?"
      [description]="'Appointment ' + cancelTarget() + ' will be cancelled. This cannot be undone.'"
      confirmLabel="Cancel appointment"
      cancelLabel="Keep it"
      [open]="cancelTarget() !== null"
      (openChange)="!$event && cancelTarget.set(null)"
      (confirm)="confirmCancel()"
    />
  `,
})
export class AppointmentsPage {
  protected readonly eventValue = eventValue
  protected readonly store = inject(AppointmentStore)
  protected readonly tone: Record<ApptStatus, BadgeTone> = { Scheduled: 'primary', Completed: 'success', Cancelled: 'neutral' }
  protected readonly headings = ['ID', 'Patient', 'Doctor', 'Hospital', 'When', 'Reason', 'Status']
  protected readonly statuses = ['Scheduled', 'Completed', 'Cancelled']
  protected readonly q = inject(SearchService).query
  protected readonly status = signal('')
  protected readonly doctor = signal('')
  protected readonly tabs = computed(() => {
    const mine = this.store.mine()
    return [
      { value: '', label: `All · ${mine.length}` },
      ...this.statuses.map((s) => ({ value: s, label: `${s} · ${mine.filter((a) => a.status === s).length}` })),
    ]
  })
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
  protected readonly cancelTarget = signal<string | null>(null)
  protected readonly statusOptions = [{ value: '', label: 'All statuses' }, ...this.statuses.map((s) => ({ value: s, label: s }))]
  protected readonly doctorOptions = [
    { value: '', label: 'All doctors' },
    ...this.store.doctors.map((d) => ({ value: d.id, label: d.name })),
  ]
  protected confirmCancel() {
    const id = this.cancelTarget()
    if (id) this.store.cancel(id)
    this.cancelTarget.set(null)
  }
}
