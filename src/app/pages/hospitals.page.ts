import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AppointmentStore } from '@/services/appointment.store'
import { SearchService } from '@/services/search.service'
import { AREAS } from '@/data/data'
import {
  BadgeComponent,
  ButtonDirective,
  CardComponent,
  ControlDirective,
  EmptyStateComponent,
  HeroComponent,
  SelectComponent,
  CheckboxDirective,
  eventValue,
  eventChecked,
} from '@/ui'

@Component({
  selector: 'app-hospitals-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    BadgeComponent,
    ButtonDirective,
    CardComponent,
    ControlDirective,
    EmptyStateComponent,
    HeroComponent,
    SelectComponent,
    CheckboxDirective,
  ],
  template: `
    <div class="flex flex-col gap-6">
      <app-hero
        title="Hospitals"
        subtitle="Hospitals across Puducherry, Karaikal, Mahé and Yanam. The list is not exhaustive."
        illustration="illustrations/hero-hospitals.svg"
      />
      <div class="flex flex-wrap items-center gap-2">
        <input
          appControl
          type="search"
          class="w-full sm:w-80"
          placeholder="Search hospital"
          aria-label="Search hospitals"
          [value]="q()"
          (input)="q.set(eventValue($event))"
        />
        <div class="w-44">
          <app-select
            ariaLabel="Filter by area"
            placeholder="All areas"
            [options]="areaOptions"
            [value]="area()"
            (valueChange)="area.set($event ?? '')"
          />
        </div>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" appCheckbox (change)="er.set(eventChecked($event))" />
          Emergency only
        </label>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (h of rows(); track h.id) {
          <app-card class="p-6!" [heading]="h.name" [description]="h.area + ' · ' + h.type">
            <p class="text-sm">{{ h.ownership }} · {{ doctorCount(h.id) }} demo doctors</p>
            <div class="mt-auto flex items-center justify-between gap-2">
              <a appButton routerLink="/doctors" [queryParams]="{ hospital: h.id }">View doctors</a>
              @if (h.emergency) {
                <app-badge tone="danger">24/7 ER</app-badge>
              }
            </div>
          </app-card>
        } @empty {
          <app-empty-state class="col-span-full" title="No hospitals found" description="No hospitals match your filters." />
        }
      </div>
    </div>
  `,
})
export class HospitalsPage {
  protected readonly eventValue = eventValue
  protected readonly eventChecked = eventChecked
  protected readonly store = inject(AppointmentStore)
  protected readonly areaOptions = [{ value: '', label: 'All areas' }, ...AREAS.map((a) => ({ value: a, label: a }))]
  protected readonly q = inject(SearchService).query
  protected readonly area = signal('')
  protected readonly er = signal(false)
  protected readonly rows = computed(() => {
    const q = this.q().toLowerCase().trim()
    return this.store.hospitals.filter(
      (h) => (!this.area() || h.area === this.area()) && (!this.er() || h.emergency) && (!q || h.name.toLowerCase().includes(q)),
    )
  })
  protected doctorCount = (id: string) => this.store.doctors.filter((d) => d.hospitalId === id).length
}
