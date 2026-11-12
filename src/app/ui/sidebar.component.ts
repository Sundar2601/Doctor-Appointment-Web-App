import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  lucideBuilding2,
  lucideCalendar,
  lucideCalendarPlus,
  lucideClipboardList,
  lucideHouse,
  lucideLayoutDashboard,
  lucidePanelLeft,
  lucideSettings,
  lucideStethoscope,
  lucideUser,
  lucideUsers,
} from '@ng-icons/lucide'

export interface SidebarItem {
  label: string
  href: string
  /** lucide icon name, e.g. 'lucideHouse' (see registered set). */ icon?: string
}
export interface SidebarGroup {
  label?: string
  items: SidebarItem[]
}

/**
 * Collapsible sidebar. Usage: `<app-sidebar [groups]="groups" [(collapsed)]="c"><div sidebarHeader>Logo</div><div sidebarFooter>User</div></app-sidebar>`.
 * Registered icons: lucideBuilding2, lucideCalendar, lucideCalendarPlus, lucideClipboardList, lucideHouse, lucideLayoutDashboard, lucideSettings, lucideStethoscope, lucideUser, lucideUsers.
 */
@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NgIcon],
  viewProviders: [
    provideIcons({
      lucideBuilding2,
      lucideCalendar,
      lucideCalendarPlus,
      lucideClipboardList,
      lucideHouse,
      lucideLayoutDashboard,
      lucidePanelLeft,
      lucideSettings,
      lucideStethoscope,
      lucideUser,
      lucideUsers,
    }),
  ],
  host: {
    class: 'bg-sidebar text-sidebar-foreground border-sidebar-border flex h-full flex-col gap-2 border-r p-2 transition-[width]',
    '[class.w-64]': '!collapsed()',
    '[class.w-14]': 'collapsed()',
  },
  template: `
    <div class="flex items-center gap-2" [class.justify-center]="collapsed()">
      @if (!collapsed()) {
        <div class="min-w-0 flex-1"><ng-content select="[sidebarHeader]" /></div>
      }
      @if (collapsible()) {
        <button
          type="button"
          [attr.aria-label]="collapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
          [attr.aria-expanded]="!collapsed()"
          (click)="collapsed.set(!collapsed())"
          class="hover:bg-sidebar-accent focus-visible:outline-sidebar-ring flex size-8 shrink-0 items-center justify-center rounded-md focus-visible:outline-2"
        >
          <ng-icon name="lucidePanelLeft" size="16" />
        </button>
      }
    </div>
    <nav class="flex min-h-0 flex-1 flex-col gap-4 overflow-auto" aria-label="Sidebar">
      @for (g of groups(); track $index) {
        <div class="flex flex-col gap-1">
          @if (g.label && !collapsed()) {
            <div class="text-sidebar-foreground/70 px-2 py-1 text-xs font-medium">{{ g.label }}</div>
          }
          @for (item of g.items; track item.href) {
            <a
              [routerLink]="item.href"
              routerLinkActive="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
              [attr.title]="collapsed() ? item.label : null"
              [attr.aria-label]="collapsed() ? item.label : null"
              class="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-sidebar-ring flex h-8 items-center gap-2 rounded-md px-2 text-sm focus-visible:outline-2"
              [class.justify-center]="collapsed()"
            >
              @if (item.icon) {
                <ng-icon [name]="item.icon" size="16" class="shrink-0" />
              }
              @if (!collapsed()) {
                <span class="truncate">{{ item.label }}</span>
              }
            </a>
          }
        </div>
      }
    </nav>
    @if (!collapsed()) {
      <div><ng-content select="[sidebarFooter]" /></div>
    }
  `,
})
export class SidebarComponent {
  readonly groups = input.required<SidebarGroup[]>()
  readonly collapsed = model(false)
  /** Show the collapse toggle. Disable for a fixed app-shell sidebar. */
  readonly collapsible = input(true)
}
