import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AppointmentStore } from '@/services/appointment.store'
import { money } from '@/data/data'
import { AvatarComponent, ButtonDirective, CardComponent, ControlDirective, EmptyStateComponent, PageHeaderComponent } from '@/ui'

const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

@Component({
  selector: 'app-doctors-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AvatarComponent, ButtonDirective, CardComponent, ControlDirective, EmptyStateComponent, PageHeaderComponent],
  template: `
    <app-page-header title="Doctors" subtitle="Choose a specialist and book a visit." />
    <select appControl class="mb-4 w-72" aria-label="Filter by hospital" (change)="picked.set($any($event.target).value)">
      <option value="">All hospitals</option>
      @for (h of store.hospitals; track h.id) { <option [value]="h.id" [selected]="h.id === hospitalId()">{{ h.name }}</option> }
    </select>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      @for (d of rows(); track d.id) {
        <app-card>
          <app-avatar [name]="d.name" size="lg" />
          <div>
            <p class="font-medium">{{ d.name }}</p>
            <p class="text-muted-foreground text-sm">{{ d.specialty }}</p>
            <p class="text-xs">{{ store.hospital(d.hospitalId)?.name }}</p>
          </div>
          <p class="text-xs">{{ days(d.days) }} · {{ d.startHour }}:00–{{ d.endHour }}:00</p>
          <p class="text-sm font-medium">{{ money(d.fee) }} / visit</p>
          <a appButton routerLink="/book" [queryParams]="{ doctor: d.id }">Book</a>
        </app-card>
      } @empty {
        <app-empty-state class="col-span-full" title="No doctors found" description="No doctors at this hospital yet." />
      }
    </div>
  `,
})
export class DoctorsPage {
  protected readonly store = inject(AppointmentStore)
  protected readonly money = money
  readonly hospital = input<string | undefined>()
  protected readonly picked = signal<string | null>(null)
  protected readonly hospitalId = computed(() => this.picked() ?? this.hospital() ?? '')
  protected readonly rows = computed(() => this.store.doctors.filter((d) => !this.hospitalId() || d.hospitalId === this.hospitalId()))
  protected days = (d: number[]) => d.map((i) => DAY[i]).join(', ')
}
