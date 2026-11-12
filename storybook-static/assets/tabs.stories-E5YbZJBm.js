import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, m as model, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Tab list (role=tablist, arrow/Home/End keys). Usage:
 * `<app-tabs [tabs]="tabs" [(value)]="tab" /> @if (tab() === 'a') { ... }`. Panels: give yours `role="tabpanel"` and `[attr.aria-labelledby]="'app-tab-' + value"`.
 */
let TabsComponent = class TabsComponent {
    tabs = input.required();
    value = model();
    label = input();
    onKey(e) {
        const enabled = this.tabs().filter((t) => !t.disabled);
        if (!enabled.length)
            return;
        const i = enabled.findIndex((t) => t.value === this.value());
        let n = -1;
        if (e.key === 'ArrowRight')
            n = (i + 1) % enabled.length;
        else if (e.key === 'ArrowLeft')
            n = (i - 1 + enabled.length) % enabled.length;
        else if (e.key === 'Home')
            n = 0;
        else if (e.key === 'End')
            n = enabled.length - 1;
        const target = enabled[n];
        if (n < 0 || !target)
            return;
        e.preventDefault();
        this.value.set(target.value);
        e.currentTarget.querySelector(`#app-tab-${CSS.escape(target.value)}`)?.focus();
    }
    static propDecorators = {
        tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
TabsComponent = __decorate([
    Component({
        selector: 'app-tabs',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block', '(keydown)': 'onKey($event)' },
        template: `
    <div
      role="tablist"
      [attr.aria-label]="label()"
      class="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
    >
      @for (t of tabs(); track t.value) {
        <button
          type="button"
          role="tab"
          [id]="'app-tab-' + t.value"
          [attr.aria-selected]="t.value === value()"
          [attr.tabindex]="t.value === value() ? 0 : -1"
          [disabled]="t.disabled"
          (click)="value.set(t.value)"
          class="focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none inline-flex h-[calc(100%-1px)] items-center justify-center rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50"
          [class]="t.value === value() ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'"
        >
          {{ t.label }}
        </button>
      }
    </div>
  `,
    })
], TabsComponent);

const meta = {
  title: 'Navigation/Tabs',
  component: TabsComponent,
  decorators: [moduleMetadata({
    imports: [TabsComponent]
  })],
  argTypes: {
    value: {
      control: 'text'
    },
    label: {
      control: 'text'
    }
  },
  args: {
    label: 'Appointments',
    value: 'upcoming',
    tabs: [{
      value: 'upcoming',
      label: 'Upcoming'
    }, {
      value: 'past',
      label: 'Past'
    }, {
      value: 'cancelled',
      label: 'Cancelled'
    }]
  },
  render: args => ({
    props: args,
    template: `
      <app-tabs [tabs]="tabs" [label]="label" [(value)]="value" />
      <div role="tabpanel" [attr.aria-labelledby]="'app-tab-' + value" class="mt-4 text-sm">Showing {{ value }} appointments.</div>
    `
  })
};
const Default = {};
const WithDisabledTab = {
  args: {
    tabs: [{
      value: 'upcoming',
      label: 'Upcoming'
    }, {
      value: 'past',
      label: 'Past'
    }, {
      value: 'cancelled',
      label: 'Cancelled',
      disabled: true
    }]
  }
};
const __namedExportsOrder = ["Default", "WithDisabledTab"];
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
WithDisabledTab.parameters = {
  ...WithDisabledTab.parameters,
  docs: {
    ...WithDisabledTab.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tabs: [{\n      value: 'upcoming',\n      label: 'Upcoming'\n    }, {\n      value: 'past',\n      label: 'Past'\n    }, {\n      value: 'cancelled',\n      label: 'Cancelled',\n      disabled: true\n    }]\n  }\n}",
      ...WithDisabledTab.parameters?.docs?.source
    }
  }
};

export { Default, WithDisabledTab, __namedExportsOrder, meta as default };
