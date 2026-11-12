import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AppointmentStore } from '@/services/appointment.store'
import { AuthService } from '@/services/auth.service'
import { toIsoDate } from '@/data/data'
import { ButtonDirective, CardComponent, EmptyStateComponent, PageHeaderComponent } from '@/ui'

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ButtonDirective, CardComponent, EmptyStateComponent, PageHeaderComponent],
  template: `
    <app-page-header [title]="'Welcome back, ' + firstName()" subtitle="Your appointments across hospitals in Puducherry." />

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      @for (k of kpis(); track k.label) {
        <app-card>
          <p class="text-muted-foreground text-sm">{{ k.label }}</p>
          <p class="text-2xl font-semibold">{{ k.value }}</p>
        </app-card>
      }
    </div>

    <app-card class="mt-6" heading="My upcoming appointments">
      <a cardAction appButton variant="outline" size="sm" routerLink="/book">Book new</a>
      <ul class="divide-y text-sm">
        @for (a of store.upcoming().slice(0, 6); track a.id) {
          <li class="flex items-center justify-between gap-3 py-3">
            <span>
              <span class="font-medium">{{ a.patient }}</span>
              <span class="text-muted-foreground block">{{ store.doctor(a.doctorId)?.name }} · {{ store.hospitalOfDoctor(a.doctorId)?.name }}</span>
            </span>
            <span class="text-right whitespace-nowrap">{{ a.date }}<span class="text-muted-foreground block">{{ a.time }}</span></span>
          </li>
        } @empty {
          <li><app-empty-state title="No upcoming appointments" description="Book a visit to see it here." /></li>
        }
      </ul>
    </app-card>
  `,
})
export class DashboardPage {
  protected readonly store = inject(AppointmentStore)
  private readonly auth = inject(AuthService)
  protected readonly firstName = computed(() => (this.auth.user()?.name ?? '').split(' ')[0])
  protected readonly kpis = computed(() => {
    const all = this.store.mine()
    const today = toIsoDate(new Date())
    return [
      { label: 'Today', value: String(all.filter((a) => a.date === today && a.status !== 'Cancelled').length) },
      { label: 'Upcoming', value: String(this.store.upcoming().length) },
      { label: 'Completed', value: String(all.filter((a) => a.status === 'Completed').length) },
      { label: 'Cancelled', value: String(all.filter((a) => a.status === 'Cancelled').length) },
    ]
  })
}
