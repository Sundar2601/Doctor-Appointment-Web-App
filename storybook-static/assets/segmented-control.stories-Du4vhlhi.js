import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Single-choice pill toggle group. Two-way: `[(value)]`. */
let SegmentedControlComponent = class SegmentedControlComponent {
    options = input.required();
    value = model('');
    label = input('Options');
    key(e, i) {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d)
            return;
        e.preventDefault();
        const o = this.options();
        for (let n = 1; n <= o.length; n++) {
            const t = o[(i + d * n + o.length * n) % o.length];
            if (t && !t.disabled) {
                this.value.set(t.value);
                e.currentTarget.parentElement?.children[o.indexOf(t)]?.focus();
                return;
            }
        }
    }
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
SegmentedControlComponent = __decorate([
    Component({
        selector: 'app-segmented-control',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-muted text-muted-foreground inline-flex h-9 items-center rounded-lg p-0.75',
            role: 'radiogroup',
            '[attr.aria-label]': 'label()',
        },
        template: `
    @for (o of options(); track o.value) {
      <button
        type="button"
        role="radio"
        class="focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none inline-flex h-full items-center justify-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors disabled:opacity-50"
        [class]="o.value === value() ? 'bg-background text-foreground shadow-xs' : 'hover:text-foreground'"
        [attr.aria-checked]="o.value === value()"
        [tabindex]="o.value === value() ? 0 : -1"
        [disabled]="o.disabled"
        (click)="value.set(o.value)"
        (keydown)="key($event, $index)"
      >
        {{ o.label }}
      </button>
    }
  `,
    })
], SegmentedControlComponent);

const meta = {
  title: 'Navigation/Segmented Control',
  decorators: [moduleMetadata({
    imports: [SegmentedControlComponent]
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
    options: [{
      value: 'day',
      label: 'Day'
    }, {
      value: 'week',
      label: 'Week'
    }, {
      value: 'month',
      label: 'Month'
    }],
    value: 'week',
    label: 'View'
  },
  render: args => ({
    props: args,
    template: `<app-segmented-control [options]="options" [(value)]="value" [label]="label" />`
  })
};
const Default = {};
const WithDisabledOption = {
  args: {
    options: [{
      value: 'day',
      label: 'Day'
    }, {
      value: 'week',
      label: 'Week'
    }, {
      value: 'month',
      label: 'Month',
      disabled: true
    }]
  }
};
const __namedExportsOrder = ["Default", "WithDisabledOption"];
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
WithDisabledOption.parameters = {
  ...WithDisabledOption.parameters,
  docs: {
    ...WithDisabledOption.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    options: [{\n      value: 'day',\n      label: 'Day'\n    }, {\n      value: 'week',\n      label: 'Week'\n    }, {\n      value: 'month',\n      label: 'Month',\n      disabled: true\n    }]\n  }\n}",
      ...WithDisabledOption.parameters?.docs?.source
    }
  }
};

export { Default, WithDisabledOption, __namedExportsOrder, meta as default };
