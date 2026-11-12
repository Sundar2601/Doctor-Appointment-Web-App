import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AppointmentStore } from '@/services/appointment.store'
import { AREAS } from '@/data/data'
import { BadgeComponent, ButtonDirective, CardComponent, ControlDirective, EmptyStateComponent, PageHeaderComponent } from '@/ui'

@Component({
  selector: 'app-hospitals-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, BadgeComponent, ButtonDirective, CardComponent, ControlDirective, EmptyStateComponent, PageHeaderComponent],
  template: `
    <app-page-header title="Hospitals" subtitle="Hospitals across Puducherry, Karaikal, Mahé and Yanam. The list is not exhaustive." />
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <input appControl type="search" class="max-w-xs" placeholder="Search hospital" aria-label="Search hospitals" (input)="q.set($any($event.target).value)" />
      <select appControl class="w-auto" aria-label="Filter by area" (change)="area.set($any($event.target).value)">
        <option value="">All areas</option>
        @for (a of areas; track a) { <option [value]="a">{{ a }}</option> }
      </select>
      <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="accent-primary size-4" (change)="er.set($any($event.target).checked)" /> Emergency only</label>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      @for (h of rows(); track h.id) {
        <app-card [heading]="h.name" [description]="h.area + ' · ' + h.type">
          @if (h.emergency) { <app-badge cardAction tone="danger">24/7 ER</app-badge> }
          <p class="text-xs">{{ h.ownership }} · {{ doctorCount(h.id) }} demo doctors</p>
          <a appButton routerLink="/doctors" [queryParams]="{ hospital: h.id }">View doctors</a>
        </app-card>
      } @empty {
        <app-empty-state class="col-span-full" title="No hospitals found" description="No hospitals match your filters." />
      }
    </div>
  `,
})
export class HospitalsPage {
  protected readonly store = inject(AppointmentStore)
  protected readonly areas = AREAS
  protected readonly q = signal('')
  protected readonly area = signal('')
  protected readonly er = signal(false)
  protected readonly rows = computed(() => {
    const q = this.q().toLowerCase().trim()
    return this.store.hospitals.filter((h) => (!this.area() || h.area === this.area()) && (!this.er() || h.emergency) && (!q || h.name.toLowerCase().includes(q)))
  })
  protected doctorCount = (id: string) => this.store.doctors.filter((d) => d.hospitalId === id).length
}
