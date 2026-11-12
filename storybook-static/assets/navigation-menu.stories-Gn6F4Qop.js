import { R as RouterLink, m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, s as signal, b as inject, g as ElementRef, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, M as lucideChevronDown } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Usage: `<app-navigation-menu [items]="items" />`. Items with `children` open a panel of links; Esc / outside click closes. */
let NavigationMenuComponent = class NavigationMenuComponent {
    items = input.required();
    openIndex = signal(-1);
    el = inject(ElementRef);
    onDocClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.openIndex.set(-1);
    }
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }]
    };
};
NavigationMenuComponent = __decorate([
    Component({
        selector: 'app-navigation-menu',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [RouterLink, NgIcon],
        viewProviders: [provideIcons({ lucideChevronDown })],
        host: { class: 'block', '(document:click)': 'onDocClick($event)', '(keydown.escape)': 'openIndex.set(-1)' },
        template: `
    <nav aria-label="Main">
      <ul class="flex items-center gap-1">
        @for (item of items(); track item.label; let i = $index) {
          <li class="relative">
            @if (item.children) {
              <button
                type="button"
                [attr.aria-expanded]="openIndex() === i"
                [attr.aria-controls]="'app-navmenu-' + i"
                (click)="openIndex.set(openIndex() === i ? -1 : i)"
                class="hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none data-[open=true]:bg-accent inline-flex h-9 items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                [attr.data-open]="openIndex() === i"
              >
                {{ item.label }}<ng-icon name="lucideChevronDown" size="16" />
              </button>
              @if (openIndex() === i) {
                <ul
                  [id]="'app-navmenu-' + i"
                  class="bg-popover text-popover-foreground absolute top-full left-0 z-50 mt-1.5 grid w-[400px] gap-2 rounded-lg border p-4 shadow-md"
                >
                  @for (c of item.children; track c.href) {
                    <li>
                      <a
                        [routerLink]="c.href"
                        (click)="openIndex.set(-1)"
                        class="hover:bg-accent hover:text-accent-foreground block rounded-md p-3 text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                      >
                        <div class="font-medium">{{ c.label }}</div>
                        @if (c.description) {
                          <p class="text-muted-foreground line-clamp-2 text-sm leading-5">{{ c.description }}</p>
                        }
                      </a>
                    </li>
                  }
                </ul>
              }
            } @else {
              <a
                [routerLink]="item.href"
                class="hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >{{ item.label }}</a
              >
            }
          </li>
        }
      </ul>
    </nav>
  `,
    })
], NavigationMenuComponent);

const meta = {
  title: 'Navigation/Navigation Menu',
  component: NavigationMenuComponent,
  decorators: [moduleMetadata({
    imports: [NavigationMenuComponent]
  })],
  parameters: {
    layout: 'padded'
  },
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      children: [{
        label: 'Book appointment',
        href: '/book',
        description: 'Schedule a visit with a doctor.'
      }, {
        label: 'Telehealth',
        href: '/telehealth',
        description: 'Consult from home by video.'
      }, {
        label: 'Lab results',
        href: '/labs',
        description: 'View your latest reports.'
      }]
    }, {
      label: 'Doctors',
      children: [{
        label: 'Find a doctor',
        href: '/doctors'
      }, {
        label: 'Specialties',
        href: '/specialties'
      }]
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="min-height: 18rem"><app-navigation-menu [items]="items" /></div>`
  })
};
const Default = {};
const LinksOnly = {
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Doctors',
      href: '/doctors'
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  }
};
const __namedExportsOrder = ["Default", "LinksOnly"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
LinksOnly.parameters = {
  ...LinksOnly.parameters,
  docs: {
    ...LinksOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    items: [{\n      label: 'Home',\n      href: '/'\n    }, {\n      label: 'Doctors',\n      href: '/doctors'\n    }, {\n      label: 'Contact',\n      href: '/contact'\n    }]\n  }\n}",
      ...LinksOnly.parameters?.docs?.source
    }
  }
};

export { Default, LinksOnly, __namedExportsOrder, meta as default };
