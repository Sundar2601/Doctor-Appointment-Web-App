import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import { C as CARD_CLASS, l as linearScale, a as linePath } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Inline trend line, optionally inside a stat card with a headline value. */
let SparklineComponent = class SparklineComponent {
    title = input();
    description = input();
    values = input.required();
    value = input();
    delta = input();
    trend = input('up');
    width = input(260);
    height = input(100);
    bare = input(false);
    hostClass = computed(() => (this.bare() ? 'block' : CARD_CLASS));
    path = computed(() => {
        const v = this.values();
        const x = linearScale(0, Math.max(v.length - 1, 1), 2, this.width() - 2);
        const y = linearScale(Math.min(...v), Math.max(...v), this.height() - 4, 4);
        return linePath(v.map((n, i) => ({ x: x(i), y: y(n) })));
    });
    ariaLabel = computed(() => {
        const v = this.values();
        return `${this.title() ?? 'Trend'}: from ${v[0]} to ${v[v.length - 1]}`;
    });
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        values: [{ type: Input, args: [{ isSignal: true, alias: "values", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false, transform: undefined },] }],
        delta: [{ type: Input, args: [{ isSignal: true, alias: "delta", required: false, transform: undefined },] }],
        trend: [{ type: Input, args: [{ isSignal: true, alias: "trend", required: false, transform: undefined },] }],
        width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false, transform: undefined },] }],
        height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false, transform: undefined },] }],
        bare: [{ type: Input, args: [{ isSignal: true, alias: "bare", required: false, transform: undefined },] }]
    };
};
SparklineComponent = __decorate([
    Component({
        selector: 'app-sparkline',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'hostClass()' },
        template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5">
        @if (title()) {
          <h3 class="text-sm font-semibold">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-xs">{{ description() }}</p>
        }
      </div>
    }
    @if (value()) {
      <div class="flex flex-col gap-1">
        <p class="text-3xl font-bold">{{ value() }}</p>
        @if (delta()) {
          <p class="text-xs font-medium" [class]="trend() === 'down' ? 'text-destructive' : 'text-green-600'">{{ delta() }}</p>
        }
      </div>
    }
    <svg [attr.viewBox]="'0 0 ' + width() + ' ' + height()" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      <path [attr.d]="path()" fill="none" stroke="var(--chart-2)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
    </svg>
  `,
    })
], SparklineComponent);

const meta = {
  title: 'Charts/Sparkline',
  decorators: [moduleMetadata({
    imports: [SparklineComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Sparkline',
    description: 'Inline trend inside a stat or table cell.',
    value: '$24.5k',
    delta: '+8.2% vs last week',
    values: [12, 20, 16, 30, 24, 34, 28, 42, 36, 50, 46, 58, 54, 66]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-sparkline [title]="title" [description]="description" [value]="value" [delta]="delta" [values]="values" /></div>`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
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

export { Default, __namedExportsOrder, meta as default };
