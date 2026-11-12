import { R as RouterLink, f as RouterLinkActive, m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, m as model, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, V as lucideUsers, b as lucideUser, W as lucideStethoscope, f as lucideSettings, X as lucidePanelLeft, Y as lucideLayoutDashboard, m as lucideHouse, Z as lucideClipboardList, _ as lucideCalendarPlus, s as lucideCalendar, $ as lucideBuilding2 } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Collapsible sidebar. Usage: `<app-sidebar [groups]="groups" [(collapsed)]="c"><div sidebarHeader>Logo</div><div sidebarFooter>User</div></app-sidebar>`.
 * Registered icons: lucideBuilding2, lucideCalendar, lucideCalendarPlus, lucideClipboardList, lucideHouse, lucideLayoutDashboard, lucideSettings, lucideStethoscope, lucideUser, lucideUsers.
 */
let SidebarComponent = class SidebarComponent {
    groups = input.required();
    collapsed = model(false);
    collapsible = input(true);
    static propDecorators = {
        groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: true, transform: undefined },] }],
        collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false },] }, { type: Output, args: ["collapsedChange",] }],
        collapsible: [{ type: Input, args: [{ isSignal: true, alias: "collapsible", required: false, transform: undefined },] }]
    };
};
SidebarComponent = __decorate([
    Component({
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
            class: 'bg-sidebar text-sidebar-foreground border-sidebar-border flex h-full flex-col gap-2 border-r p-3 transition-[width]',
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
          class="hover:bg-sidebar-accent focus-visible:ring-sidebar-ring/50 flex size-8 shrink-0 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
        >
          <ng-icon name="lucidePanelLeft" size="16" />
        </button>
      }
    </div>
    <nav class="flex min-h-0 flex-1 flex-col gap-4 overflow-auto" aria-label="Sidebar">
      @for (g of groups(); track $index) {
        <div class="flex flex-col gap-1">
          @if (g.label && !collapsed()) {
            <div class="text-sidebar-foreground/70 py-1 text-xs font-medium">{{ g.label }}</div>
          }
          @for (item of g.items; track item.href) {
            <a
              [routerLink]="item.href"
              routerLinkActive="bg-sidebar-accent text-sidebar-accent-foreground"
              [attr.title]="collapsed() ? item.label : null"
              [attr.aria-label]="collapsed() ? item.label : null"
              class="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-sidebar-ring/50 flex h-8 items-center gap-2 rounded-md px-2 text-sm focus-visible:ring-[3px] focus-visible:outline-none"
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
], SidebarComponent);

const meta = {
  title: 'Navigation/Sidebar',
  component: SidebarComponent,
  decorators: [moduleMetadata({
    imports: [SidebarComponent]
  })],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    collapsed: {
      control: 'boolean'
    }
  },
  args: {
    collapsed: false,
    groups: [{
      label: 'Main',
      items: [{
        label: 'Dashboard',
        href: '/dashboard',
        icon: 'lucideLayoutDashboard'
      }, {
        label: 'Appointments',
        href: '/appointments',
        icon: 'lucideCalendar'
      }, {
        label: 'Book',
        href: '/book',
        icon: 'lucideCalendarPlus'
      }, {
        label: 'Doctors',
        href: '/doctors',
        icon: 'lucideStethoscope'
      }]
    }, {
      label: 'Account',
      items: [{
        label: 'Profile',
        href: '/profile',
        icon: 'lucideUser'
      }, {
        label: 'Settings',
        href: '/settings',
        icon: 'lucideSettings'
      }]
    }]
  },
  render: args => ({
    props: args,
    template: `
      <div style="height: 600px">
        <app-sidebar [groups]="groups" [(collapsed)]="collapsed">
          <div sidebarHeader class="flex items-center gap-2 px-2 py-1">
            <span class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-semibold">A</span>
            <span class="flex flex-col"><span class="text-sm leading-5 font-semibold">Acme Inc</span><span class="text-muted-foreground text-xs">Enterprise</span></span>
          </div>
          <div sidebarFooter class="flex items-center gap-2 px-2 py-1">
            <span class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium">SC</span>
            <span class="flex flex-col"><span class="text-sm leading-5 font-medium">shadcn</span><span class="text-muted-foreground text-xs">m@example.com</span></span>
          </div>
        </app-sidebar>
      </div>
    `
  })
};
const Expanded = {};
const Collapsed = {
  args: {
    collapsed: true
  }
};
const __namedExportsOrder = ["Expanded", "Collapsed"];
Expanded.parameters = {
  ...Expanded.parameters,
  docs: {
    ...Expanded.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Expanded.parameters?.docs?.source
    }
  }
};
Collapsed.parameters = {
  ...Collapsed.parameters,
  docs: {
    ...Collapsed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    collapsed: true\n  }\n}",
      ...Collapsed.parameters?.docs?.source
    }
  }
};

export { Collapsed, Expanded, __namedExportsOrder, meta as default };
