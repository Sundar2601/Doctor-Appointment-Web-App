import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, h as lucidePlus, O as lucideMinus } from './ng-icons-lucide-DvOyu-Mi.js';
import { b as eventNumber } from './dom-events-CvB9dAwI.js';
import './preload-helper-D5QYaGzd.js';

/** Numeric stepper. Two-way: `[(value)]`. */
let NumberInputComponent = class NumberInputComponent {
    eventNumber = eventNumber;
    value = model(0);
    min = input(-Infinity);
    max = input(Infinity);
    stepBy = input(1);
    disabled = input(false);
    label = input('Value');
    step(dir) {
        this.set(this.value() + dir * this.stepBy());
    }
    set(n) {
        this.value.set(Number.isNaN(n) ? this.value() : Math.min(this.max(), Math.max(this.min(), n)));
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        stepBy: [{ type: Input, args: [{ isSignal: true, alias: "stepBy", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
NumberInputComponent = __decorate([
    Component({
        selector: 'app-number-input',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideMinus, lucidePlus })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'border-input bg-background focus-within:ring-ring/50 focus-within:border-ring inline-flex h-9 w-[136px] items-center overflow-hidden rounded-md border shadow-xs focus-within:ring-[3px]',
        },
        template: `
    <button
      type="button"
      class="hover:bg-accent focus-visible:ring-ring/50 inline-flex h-full w-9 items-center justify-center focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset disabled:opacity-50"
      aria-label="Decrease"
      [disabled]="disabled() || value() <= min()"
      (click)="step(-1)"
    >
      <ng-icon name="lucideMinus" size="16" strokeWidth="2.5" />
    </button>
    <input
      class="h-full w-16 min-w-0 bg-transparent text-center text-sm outline-none [appearance:textfield]"
      type="number"
      inputmode="numeric"
      [attr.aria-label]="label()"
      [min]="min()"
      [max]="max()"
      [step]="stepBy()"
      [disabled]="disabled()"
      [value]="value()"
      (change)="set(eventNumber($event))"
    />
    <button
      type="button"
      class="hover:bg-accent focus-visible:ring-ring/50 inline-flex h-full w-9 items-center justify-center focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset disabled:opacity-50"
      aria-label="Increase"
      [disabled]="disabled() || value() >= max()"
      (click)="step(1)"
    >
      <ng-icon name="lucidePlus" size="16" strokeWidth="2.5" />
    </button>
  `,
    })
], NumberInputComponent);

const meta = {
  title: 'Forms/Number Input',
  decorators: [moduleMetadata({
    imports: [NumberInputComponent]
  })],
  argTypes: {
    value: {
      control: 'number'
    },
    min: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    stepBy: {
      control: 'number'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    }
  },
  args: {
    value: 1,
    min: 0,
    max: 10,
    stepBy: 1,
    disabled: false,
    label: 'Quantity'
  },
  render: args => ({
    props: args,
    template: `<app-number-input [(value)]="value" [min]="min" [max]="max" [stepBy]="stepBy" [disabled]="disabled" [label]="label" />`
  })
};
const Default = {};
const AtMinimum = {
  args: {
    value: 0
  }
};
const BigStep = {
  args: {
    stepBy: 5,
    max: 100,
    value: 20
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Default", "AtMinimum", "BigStep", "Disabled"];
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
AtMinimum.parameters = {
  ...AtMinimum.parameters,
  docs: {
    ...AtMinimum.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 0\n  }\n}",
      ...AtMinimum.parameters?.docs?.source
    }
  }
};
BigStep.parameters = {
  ...BigStep.parameters,
  docs: {
    ...BigStep.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    stepBy: 5,\n    max: 100,\n    value: 20\n  }\n}",
      ...BigStep.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};

export { AtMinimum, BigStep, Default, Disabled, __namedExportsOrder, meta as default };
