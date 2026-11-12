import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideActivity, lucideLogOut, lucideMoon, lucideSearch, lucideSun, lucideUser } from '@ng-icons/lucide'
import { filter, map } from 'rxjs'
import { AuthService } from '@/services/auth.service'
import { ThemeService } from '@/services/theme.service'
import { AvatarComponent, BreadcrumbComponent, ButtonDirective, SidebarComponent, type SidebarGroup } from '@/ui'

const NAV: SidebarGroup[] = [
  {
    label: 'Menu',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: 'lucideLayoutDashboard' },
      { label: 'Hospitals', href: '/hospitals', icon: 'lucideBuilding2' },
      { label: 'Doctors', href: '/doctors', icon: 'lucideUsers' },
      { label: 'Appointments', href: '/appointments', icon: 'lucideCalendar' },
    ],
  },
]

/** Page titles for the breadcrumb, keyed by the first URL segment. */
const PAGE_TITLES: Record<string, string> = {
  dashboard: 'Dashboard',
  hospitals: 'Hospitals',
  doctors: 'Doctors',
  book: 'Book appointment',
  appointments: 'Appointments',
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, NgIcon, AvatarComponent, BreadcrumbComponent, ButtonDirective, SidebarComponent],
  viewProviders: [provideIcons({ lucideActivity, lucideLogOut, lucideMoon, lucideSearch, lucideSun, lucideUser })],
  template: `
    @if (!auth.isLoggedIn()) {
      <router-outlet />
    } @else {
      <div class="flex min-h-svh">
        <app-sidebar class="sticky top-0 hidden h-svh w-64 shrink-0 md:flex" [groups]="nav" [collapsible]="false">
          <a sidebarHeader routerLink="/" class="flex items-center gap-2 px-2 py-1">
            <span class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-md">
              <ng-icon name="lucideActivity" size="16" />
            </span>
            <span class="flex flex-col">
              <span class="text-sm leading-5 font-semibold">Doctor Appointment</span>
              <span class="text-muted-foreground text-xs">Puducherry region</span>
            </span>
          </a>
          <div sidebarFooter class="flex items-center gap-2 px-2 py-1">
            <span class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full"
              ><ng-icon name="lucideUser" size="16"
            /></span>
            <span class="min-w-0 flex-1">
              <span class="block truncate text-sm leading-5 font-medium">{{ auth.user()?.name }}</span>
              <span class="text-muted-foreground block truncate text-xs">{{ auth.user()?.email }}</span>
            </span>
            <button appButton variant="ghost" size="icon" type="button" aria-label="Sign out" (click)="signOut()">
              <ng-icon name="lucideLogOut" size="16" />
            </button>
          </div>
        </app-sidebar>

        <div class="flex min-w-0 flex-1 flex-col gap-6 px-4 py-8 sm:px-8 lg:px-16">
          <header class="flex items-center gap-4">
            <app-breadcrumb [items]="crumbs()" />
            <span class="flex-1"></span>
            <label class="text-muted-foreground relative hidden h-10 w-56 items-center gap-2 px-3 text-sm sm:flex">
              <ng-icon name="lucideSearch" size="16" />
              <span class="sr-only">Search</span>
              <input type="search" placeholder="Search..." class="placeholder:text-muted-foreground w-full bg-transparent outline-none" />
            </label>
            <button
              appButton
              variant="ghost"
              size="icon"
              type="button"
              aria-label="Toggle theme"
              [attr.aria-pressed]="theme.themeMode() === 'dark'"
              (click)="theme.toggleTheme()"
            >
              <ng-icon [name]="theme.themeMode() === 'dark' ? 'lucideSun' : 'lucideMoon'" size="16" />
            </button>
            <app-avatar [name]="auth.user()?.name ?? ''" />
          </header>
          <main class="min-w-0 flex-1 [&>:not(router-outlet)]:flex [&>:not(router-outlet)]:flex-col [&>:not(router-outlet)]:gap-6">
            <router-outlet />
          </main>
        </div>
      </div>
    }
  `,
})
export class AppComponent {
  protected readonly theme = inject(ThemeService)
  protected readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  protected readonly nav = NAV

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  )
  protected readonly crumbs = computed(() => {
    const segment = this.url().split(/[?#/]/).filter(Boolean)[0] ?? 'dashboard'
    return [{ label: 'Home', href: '/dashboard' }, { label: PAGE_TITLES[segment] ?? 'Dashboard' }]
  })

  protected signOut() {
    this.auth.signOut()
    void this.router.navigateByUrl('/signin')
  }
}
