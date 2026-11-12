import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, s as signal, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, d as lucideStar } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** Star rating. Two-way: `[(value)]`. */
let RatingComponent = class RatingComponent {
    value = model(0);
    max = input(5);
    readonly = input(false);
    label = input('Rating');
    count = input();
    hover = signal(0);
    stars() {
        return Array.from({ length: this.max() }, (_, i) => i + 1);
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false, transform: undefined },] }]
    };
};
RatingComponent = __decorate([
    Component({
        selector: 'app-rating',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideStar })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'inline-flex items-center gap-1', role: 'radiogroup', '[attr.aria-label]': 'label()', '(mouseleave)': 'hover.set(0)' },
        template: `
    @for (n of stars(); track n) {
      <button
        type="button"
        role="radio"
        class="rounded-xs focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:cursor-default"
        [class]="n > (hover() || value()) ? 'text-muted-foreground' : 'text-warning'"
        [attr.aria-checked]="n === value()"
        [attr.aria-label]="n + (n === 1 ? ' star' : ' stars')"
        [disabled]="readonly()"
        (mouseenter)="hover.set(n)"
        (click)="value.set(n === value() ? 0 : n)"
      >
        <ng-icon name="lucideStar" size="20" [class]="n <= (hover() || value()) ? '[&_svg]:fill-current' : ''" />
      </button>
    }
    @if (count() !== undefined) {
      <span class="text-muted-foreground ml-1 text-sm">{{ value().toFixed(1) }} ({{ count() }})</span>
    }
  `,
    })
], RatingComponent);

const meta = {
  title: 'Forms/Rating',
  decorators: [moduleMetadata({
    imports: [RatingComponent]
  })],
  argTypes: {
    value: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    readonly: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    count: {
      control: 'number'
    }
  },
  args: {
    value: 0,
    max: 5,
    readonly: false,
    label: 'Rating',
    count: undefined
  },
  render: args => ({
    props: args,
    template: `<app-rating [(value)]="value" [max]="max" [readonly]="readonly" [label]="label" [count]="count" />`
  })
};
const Default = {};
const Selected = {
  args: {
    value: 3
  }
};
const ReadonlyWithCount = {
  args: {
    value: 4,
    readonly: true,
    count: 128
  }
};
const __namedExportsOrder = ["Default", "Selected", "ReadonlyWithCount"];
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
Selected.parameters = {
  ...Selected.parameters,
  docs: {
    ...Selected.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 3\n  }\n}",
      ...Selected.parameters?.docs?.source
    }
  }
};
ReadonlyWithCount.parameters = {
  ...ReadonlyWithCount.parameters,
  docs: {
    ...ReadonlyWithCount.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 4,\n    readonly: true,\n    count: 128\n  }\n}",
      ...ReadonlyWithCount.parameters?.docs?.source
    }
  }
};

export { Default, ReadonlyWithCount, Selected, __namedExportsOrder, meta as default };
