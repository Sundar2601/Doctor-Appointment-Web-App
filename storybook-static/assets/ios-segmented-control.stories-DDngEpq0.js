import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** iOS segmented control for 2-5 mutually exclusive options. */
let IosSegmentedControlComponent = class IosSegmentedControlComponent {
    options = input.required();
    value = model();
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }]
    };
};
IosSegmentedControlComponent = __decorate([
    Component({
        selector: 'app-ios-segmented-control',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-muted flex h-[30px] w-full rounded-[9px] p-0.5', role: 'radiogroup' },
        template: `
    @for (option of options(); track option) {
      <button
        type="button"
        role="radio"
        class="text-foreground focus-visible:ring-ring/50 flex-1 rounded-[7px] text-[13px] transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
        [class.bg-background]="value() === option"
        [class.font-medium]="value() === option"
        [class.shadow-[0_3px_8px_rgb(0_0_0/0.12),0_3px_1px_rgb(0_0_0/0.04)]]="value() === option"
        [attr.aria-checked]="value() === option"
        (click)="value.set(option)"
      >
        {{ option }}
      </button>
    }
  `,
    })
], IosSegmentedControlComponent);

const meta = {
  title: 'Mobile/iOS/Segmented Control',
  decorators: [moduleMetadata({
    imports: [IosSegmentedControlComponent]
  })],
  args: {
    options: ['Day', 'Week', 'Month'],
    value: 'Week'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-segmented-control [options]="options" [(value)]="value" /></div>`
  })
};
const Default = {};
const TwoOptions = {
  args: {
    options: ['List', 'Map'],
    value: 'List'
  }
};
const FiveOptions = {
  args: {
    options: ['All', 'Today', 'Week', 'Month', 'Year'],
    value: 'All'
  }
};
const __namedExportsOrder = ["Default", "TwoOptions", "FiveOptions"];
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
TwoOptions.parameters = {
  ...TwoOptions.parameters,
  docs: {
    ...TwoOptions.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    options: ['List', 'Map'],\n    value: 'List'\n  }\n}",
      ...TwoOptions.parameters?.docs?.source
    }
  }
};
FiveOptions.parameters = {
  ...FiveOptions.parameters,
  docs: {
    ...FiveOptions.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    options: ['All', 'Today', 'Week', 'Month', 'Year'],\n    value: 'All'\n  }\n}",
      ...FiveOptions.parameters?.docs?.source
    }
  }
};

export { Default, FiveOptions, TwoOptions, __namedExportsOrder, meta as default };
