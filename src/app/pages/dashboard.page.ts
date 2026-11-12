import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCalendar } from '@ng-icons/lucide'
import { AppointmentStore } from '@/services/appointment.store'
import { AuthService } from '@/services/auth.service'
import { toIsoDate } from '@/data/data'
import { ButtonDirective, EmptyStateComponent, HeroComponent, NotificationItemComponent, StatCardComponent, initialsOf } from '@/ui'

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIcon, ButtonDirective, EmptyStateComponent, HeroComponent, NotificationItemComponent, StatCardComponent],
  viewProviders: [provideIcons({ lucideCalendar })],
  template: `
    <app-hero
      [title]="'Welcome back, ' + firstName()"
      subtitle="Your appointments across hospitals in Puducherry."
      illustration="illustrations/hero-dashboard.svg"
    >
      @if (next(); as n) {
        <span heroChip class="bg-primary-foreground/20 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
          <ng-icon name="lucideCalendar" size="16" />
          Next: {{ n.date }} · {{ n.time }} · {{ store.doctor(n.doctorId)?.name }}
        </span>
      }
      <a heroActions appButton variant="outline" routerLink="/book" class="text-foreground">Book new</a>
    </app-hero>

    <section aria-label="Summary" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      @for (k of kpis(); track k.label) {
        <app-stat-card [label]="k.label" [value]="k.value" [hint]="k.hint" />
      }
    </section>

    <section class="grid gap-2" aria-labelledby="upcoming-heading">
      <h2 id="upcoming-heading" class="text-lg font-semibold">My upcoming appointments</h2>
      @for (a of upcoming(); track a.id) {
        <app-notification-item
          [title]="a.patient"
          [description]="description(a.doctorId, a.date, a.time)"
          [initials]="initialsOf(a.patient)"
          [unread]="a.date === next()?.date"
        />
      } @empty {
        <app-empty-state title="No upcoming appointments" description="Book a visit to see it here." />
      }
    </section>
  `,
})
export class DashboardPage {
  protected readonly store = inject(AppointmentStore)
  private readonly auth = inject(AuthService)
  protected readonly initialsOf = initialsOf
  protected readonly firstName = computed(() => (this.auth.user()?.name ?? '').split(' ')[0])
  protected readonly upcoming = computed(() => this.store.upcoming().slice(0, 6))
  protected readonly next = computed(() => this.store.upcoming()[0])
  protected readonly kpis = computed(() => {
    const all = this.store.mine()
    const today = toIsoDate(new Date())
    return [
      { label: 'Today', value: all.filter((a) => a.date === today && a.status !== 'Cancelled').length, hint: 'Appointments today' },
      { label: 'Upcoming', value: this.store.upcoming().length, hint: 'Scheduled visits' },
      { label: 'Completed', value: all.filter((a) => a.status === 'Completed').length, hint: 'Finished visits' },
      { label: 'Cancelled', value: all.filter((a) => a.status === 'Cancelled').length, hint: 'Cancelled bookings' },
    ]
  })

  protected description(doctorId: string, date: string, time: string): string {
    return `${this.store.doctor(doctorId)?.name} · ${this.store.hospitalOfDoctor(doctorId)?.name} · ${date} · ${time}`
  }
}
