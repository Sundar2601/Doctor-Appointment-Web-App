import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, m as model, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DF7QvMAc.js';
import { A as ANDROID_ICONS } from './android-icons-D68AZP6J.js';
import './preload-helper-D5QYaGzd.js';

/** Material 3 segmented button (2-5 options); the selected segment shows a check. */
let AndroidSegmentedButtonComponent = class AndroidSegmentedButtonComponent {
    options = input.required();
    value = model();
    ariaLabel = input();
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
AndroidSegmentedButtonComponent = __decorate([
    Component({
        selector: 'app-android-segmented-button',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'border-border bg-background inline-flex h-10 overflow-hidden rounded-full border',
            role: 'radiogroup',
            '[attr.aria-label]': 'ariaLabel()',
        },
        template: `
    @for (option of options(); track option; let first = $first) {
      <button
        type="button"
        role="radio"
        class="text-foreground hover:bg-accent flex items-center gap-2 px-4 text-sm font-medium"
        [class.border-border]="!first"
        [class.border-l]="!first"
        [class.bg-secondary]="option === value()"
        [attr.aria-checked]="option === value()"
        (click)="value.set(option)"
      >
        @if (option === value()) {
          <ng-icon name="lucideCheck" size="18" />
        }
        {{ option }}
      </button>
    }
  `,
    })
], AndroidSegmentedButtonComponent);

const meta = {
  title: 'Mobile/Android/Segmented Button',
  component: AndroidSegmentedButtonComponent,
  decorators: [moduleMetadata({
    imports: [AndroidSegmentedButtonComponent]
  })],
  args: {
    options: ['Day', 'Week', 'Month'],
    value: 'Week',
    ariaLabel: 'Range'
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-segmented-button [options]="options" [(value)]="value" [ariaLabel]="ariaLabel" /></div>`
  })
};
const Default = {};
const TwoOptions = {
  args: {
    options: ['List', 'Map'],
    value: 'List'
  }
};
const __namedExportsOrder = ["Default", "TwoOptions"];
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

export { Default, TwoOptions, __namedExportsOrder, meta as default };
