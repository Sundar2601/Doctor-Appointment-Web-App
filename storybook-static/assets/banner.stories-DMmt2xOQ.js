import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, s as signal, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, l as lucideX, y as lucideTriangleAlert, z as lucideInfo, A as lucideCircleCheck, B as lucideCircleAlert } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

const ICONS = {
    info: 'lucideInfo',
    warning: 'lucideTriangleAlert',
    success: 'lucideCircleCheck',
    destructive: 'lucideCircleAlert',
};
const TONES = {
    info: 'bg-info border-info',
    warning: 'bg-warning border-warning',
    success: 'bg-success border-success',
    destructive: 'bg-destructive border-destructive',
};
/** Full-width announcement bar. Content is projected; add a `bannerAction` element for a trailing action. */
let BannerComponent = class BannerComponent {
    variant = input('info');
    dismissible = input(true);
    closed = signal(false);
    icon = computed(() => ICONS[this.variant()]);
    classes = computed(() => `text-foreground flex w-full items-center gap-3 border min-h-13.5 px-4 py-2.5 ${TONES[this.variant()]}`);
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        dismissible: [{ type: Input, args: [{ isSignal: true, alias: "dismissible", required: false, transform: undefined },] }]
    };
};
BannerComponent = __decorate([
    Component({
        selector: 'app-banner',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCircleAlert, lucideCircleCheck, lucideInfo, lucideTriangleAlert, lucideX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'classes()', '[hidden]': 'closed()', role: 'status' },
        template: `
    <ng-icon [name]="icon()" size="16" class="shrink-0" />
    <div class="min-w-0 flex-1 text-sm"><ng-content /></div>
    <ng-content select="[bannerAction]" />
    @if (dismissible()) {
      <button
        type="button"
        class="text-foreground/70 hover:bg-foreground/10 focus-visible:ring-ring/50 inline-flex size-6 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
        aria-label="Dismiss"
        (click)="closed.set(true)"
      >
        <ng-icon name="lucideX" size="16" />
      </button>
    }
  `,
    })
], BannerComponent);

const meta = {
  title: 'Feedback/Banner',
  decorators: [moduleMetadata({
    imports: [BannerComponent, ButtonDirective]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'success', 'destructive']
    },
    dismissible: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'info',
    dismissible: true
  },
  render: args => ({
    props: args,
    template: `<app-banner [variant]="variant" [dismissible]="dismissible">Scheduled maintenance this Sunday from 2 to 4 AM.</app-banner>`
  })
};
const Info = {};
const Warning = {
  args: {
    variant: 'warning'
  }
};
const Success = {
  args: {
    variant: 'success'
  }
};
const Destructive = {
  args: {
    variant: 'destructive'
  }
};
const WithAction = {
  render: args => ({
    props: args,
    template: `<app-banner [variant]="variant" [dismissible]="dismissible">A new version is available.<button bannerAction appButton variant="outline" size="sm">Update</button></app-banner>`
  })
};
const __namedExportsOrder = ["Info", "Warning", "Success", "Destructive", "WithAction"];
Info.parameters = {
  ...Info.parameters,
  docs: {
    ...Info.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Info.parameters?.docs?.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...Warning.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'warning'\n  }\n}",
      ...Warning.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'success'\n  }\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Destructive.parameters = {
  ...Destructive.parameters,
  docs: {
    ...Destructive.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'destructive'\n  }\n}",
      ...Destructive.parameters?.docs?.source
    }
  }
};
WithAction.parameters = {
  ...WithAction.parameters,
  docs: {
    ...WithAction.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<app-banner [variant]=\"variant\" [dismissible]=\"dismissible\">A new version is available.<button bannerAction appButton variant=\"outline\" size=\"sm\">Update</button></app-banner>`\n  })\n}",
      ...WithAction.parameters?.docs?.source
    }
  }
};

export { Destructive, Info, Success, Warning, WithAction, __namedExportsOrder, meta as default };
