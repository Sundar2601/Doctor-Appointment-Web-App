import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  lucideBuilding2,
  lucideCalendarPlus,
  lucideClipboardList,
  lucideLayoutDashboard,
  lucideLogOut,
  lucideMoon,
  lucideStethoscope,
  lucideSun,
} from '@ng-icons/lucide'
import { AuthService } from '@/services/auth.service'
import { AvatarComponent, ButtonDirective } from '@/ui'
import { ThemeService } from '@/services/theme.service'

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIcon, AvatarComponent, ButtonDirective],
  viewProviders: [
    provideIcons({
      lucideBuilding2,
      lucideCalendarPlus,
      lucideClipboardList,
      lucideLayoutDashboard,
      lucideLogOut,
      lucideMoon,
      lucideStethoscope,
      lucideSun,
    }),
  ],
  template: `
    @if (!auth.isLoggedIn()) {
      <router-outlet />
    } @else {
      <div class="flex min-h-svh">
        <aside class="bg-sidebar text-sidebar-foreground sticky top-0 hidden h-svh w-60 shrink-0 flex-col border-r md:flex">
          <a routerLink="/" class="flex h-16 items-center gap-2 border-b px-5 text-lg font-semibold tracking-tight">
            <span class="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md text-sm">D</span>
            Doctor Appointment App
          </a>
          <nav class="flex flex-1 flex-col gap-1 p-3 text-sm" aria-label="Main">
            @for (item of nav; track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                class="hover:bg-sidebar-accent flex items-center gap-3 rounded-md px-3 py-2"
              >
                <ng-icon [name]="item.icon" class="size-4" />{{ item.label }}
              </a>
            }
          </nav>
          <button appButton variant="ghost" type="button" class="mx-3 mb-2 justify-start" (click)="signOut()">
            <ng-icon name="lucideLogOut" />Sign out
          </button>
          <div class="text-muted-foreground border-t p-4 text-xs">Puducherry region</div>
        </aside>

        <div class="flex min-w-0 flex-1 flex-col">
          <header class="bg-background/80 sticky top-0 z-40 flex h-16 items-center gap-3 border-b px-4 backdrop-blur sm:px-6">
            <nav class="flex gap-1 md:hidden" aria-label="Mobile">
              @for (item of nav; track item.path) {
                <a [routerLink]="item.path" routerLinkActive="bg-accent" class="rounded-md p-2" [attr.aria-label]="item.label"
                  ><ng-icon [name]="item.icon"
                /></a>
              }
            </nav>
            <div class="ml-auto flex items-center gap-3">
              <button appButton variant="ghost" size="icon" type="button" aria-label="Toggle theme" (click)="theme.toggleTheme()">
                <ng-icon [name]="theme.themeMode() === 'dark' ? 'lucideSun' : 'lucideMoon'" />
              </button>
              <div class="flex items-center gap-2 text-sm">
                <app-avatar [name]="auth.user()?.name ?? ''" />
                <span class="hidden sm:block"
                  ><span class="block leading-tight font-medium">{{ auth.user()?.name }}</span
                  ><span class="text-muted-foreground block text-xs leading-tight">{{ auth.user()?.email }}</span></span
                >
              </div>
            </div>
          </header>
          <main class="w-full max-w-7xl flex-1 px-4 py-8 sm:px-6"><router-outlet /></main>
        </div>
      </div>
    }
  `,
})
export class AppComponent {
  protected readonly theme = inject(ThemeService)
  protected readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  protected signOut() {
    this.auth.signOut()
    void this.router.navigateByUrl('/signin')
  }
  protected readonly nav = [
    { path: '/dashboard', label: 'Dashboard', icon: 'lucideLayoutDashboard' },
    { path: '/hospitals', label: 'Hospitals', icon: 'lucideBuilding2' },
    { path: '/doctors', label: 'Doctors', icon: 'lucideStethoscope' },
    { path: '/book', label: 'Book appointment', icon: 'lucideCalendarPlus' },
    { path: '/appointments', label: 'Appointments', icon: 'lucideClipboardList' },
  ]
}
