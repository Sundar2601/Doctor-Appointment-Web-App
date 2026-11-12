import { R as RouterLink, m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, x as lucideChevronRight } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** Usage: `<app-breadcrumb [items]="[{label:'Home', href:'/'}, {label:'Doctors'}]" />` (last item is the current page). */
let BreadcrumbComponent = class BreadcrumbComponent {
    items = input.required();
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }]
    };
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [RouterLink, NgIcon],
        viewProviders: [provideIcons({ lucideChevronRight })],
        host: { class: 'block', role: 'navigation', 'aria-label': 'Breadcrumb' },
        template: `
    <ol class="text-muted-foreground flex flex-wrap items-center gap-2 text-sm break-words sm:gap-2">
      @for (item of items(); track $index; let last = $last) {
        <li class="inline-flex items-center gap-1.5">
          @if (!last && item.href) {
            <a
              [routerLink]="item.href"
              class="hover:text-foreground rounded-sm transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              >{{ item.label }}</a
            >
          } @else {
            <span [attr.aria-current]="last ? 'page' : null" [class.text-foreground]="last" [class.font-normal]="last">{{
              item.label
            }}</span>
          }
        </li>
        @if (!last) {
          <li role="presentation" aria-hidden="true" class="text-foreground"><ng-icon name="lucideChevronRight" size="16" /></li>
        }
      }
    </ol>
  `,
    })
], BreadcrumbComponent);

const meta = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [moduleMetadata({
    imports: [BreadcrumbComponent]
  })],
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Doctors',
      href: '/doctors'
    }, {
      label: 'Dr. Smith'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-breadcrumb [items]="items" />`
  })
};
const Default = {};
const TwoLevels = {
  args: {
    items: [{
      label: 'Dashboard',
      href: '/'
    }, {
      label: 'Appointments'
    }]
  }
};
const __namedExportsOrder = ["Default", "TwoLevels"];
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
TwoLevels.parameters = {
  ...TwoLevels.parameters,
  docs: {
    ...TwoLevels.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    items: [{\n      label: 'Dashboard',\n      href: '/'\n    }, {\n      label: 'Appointments'\n    }]\n  }\n}",
      ...TwoLevels.parameters?.docs?.source
    }
  }
};

export { Default, TwoLevels, __namedExportsOrder, meta as default };
