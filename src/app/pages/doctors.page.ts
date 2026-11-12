import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AppointmentStore } from '@/services/appointment.store'
import { SearchService } from '@/services/search.service'
import { money } from '@/data/data'
import { AvatarComponent, ButtonDirective, CardComponent, EmptyStateComponent, HeroComponent, SelectComponent } from '@/ui'

const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

@Component({
  selector: 'app-doctors-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AvatarComponent, ButtonDirective, CardComponent, EmptyStateComponent, HeroComponent, SelectComponent],
  template: `
    <div class="flex flex-col gap-6">
      <app-hero title="Doctors" subtitle="Choose a specialist and book a visit." illustration="illustrations/hero-doctors.svg" />
      <div class="w-full max-w-72">
        <app-select
          ariaLabel="Filter by hospital"
          placeholder="All hospitals"
          [options]="hospitalOptions()"
          [value]="hospitalId()"
          (valueChange)="picked.set($event ?? '')"
        />
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (d of rows(); track d.id) {
          <app-card class="p-6!" [heading]="d.name" [description]="d.specialty">
            <app-avatar cardAction [name]="d.name" size="lg" />
            <div class="flex flex-col text-sm">
              <span>{{ store.hospital(d.hospitalId)?.name }}</span>
              <span>{{ days(d.days) }} · {{ d.startHour }}:00–{{ d.endHour }}:00</span>
              <span>{{ d.fee ? money(d.fee) : 'Free / govt. rate' }} / visit</span>
            </div>
            <a appButton class="mt-auto self-start" routerLink="/book" [queryParams]="{ doctor: d.id }">Book</a>
          </app-card>
        } @empty {
          <app-empty-state class="col-span-full" title="No doctors found" description="No doctors at this hospital yet." />
        }
      </div>
    </div>
  `,
})
export class DoctorsPage {
  protected readonly store = inject(AppointmentStore)
  protected readonly money = money
  readonly hospital = input<string | undefined>()
  protected readonly picked = signal<string | null>(null)
  protected readonly hospitalId = computed(() => this.picked() ?? this.hospital() ?? '')
  private readonly search = inject(SearchService)
  protected readonly rows = computed(() => {
    const q = this.search.query().toLowerCase().trim()
    return this.store.doctors.filter(
      (d) => (!this.hospitalId() || d.hospitalId === this.hospitalId()) && (!q || `${d.name} ${d.specialty}`.toLowerCase().includes(q)),
    )
  })
  protected readonly hospitalOptions = computed(() => [
    { value: '', label: 'All hospitals' },
    ...this.store.hospitals.map((h) => ({ value: h.id, label: h.name })),
  ])
  protected days = (d: number[]) => d.map((i) => DAY[i]).join(', ')
}
