import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, b as arcPath } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Single value against a target range, drawn as a 240 degree arc. */
let GaugeChartComponent = class GaugeChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    value = input.required();
    min = input(0);
    max = input(100);
    unit = input('%');
    label = input();
    start = -120;
    end = 120;
    fraction = computed(() => {
        const f = (this.value() - this.min()) / (this.max() - this.min() || 1);
        return Math.min(1, Math.max(0, f));
    });
    track = computed(() => arcPath(100, 90, 70, this.start, this.end));
    arc = computed(() => arcPath(100, 90, 70, this.start, this.start + (this.end - this.start) * this.fraction()));
    displayValue = computed(() => `${this.value()}${this.unit()}`);
    ariaLabel = computed(() => `${this.title() ?? 'Gauge'}: ${this.displayValue()} ${this.label() ?? ''}`.trim());
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true, transform: undefined },] }],
        min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        unit: [{ type: Input, args: [{ isSignal: true, alias: "unit", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
GaugeChartComponent = __decorate([
    Component({
        selector: 'app-gauge-chart',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'cardClass' },
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
    <svg viewBox="0 0 200 150" class="mx-auto h-auto w-full max-w-64" role="img" [attr.aria-label]="ariaLabel()">
      <path [attr.d]="track()" fill="none" stroke="var(--muted)" stroke-width="18" stroke-linecap="round" />
      @if (fraction() > 0) {
        <path [attr.d]="arc()" fill="none" stroke="var(--chart-1)" stroke-width="18" stroke-linecap="round" />
      }
      <text x="100" y="92" text-anchor="middle" font-size="28" font-weight="700" fill="var(--foreground)">{{ displayValue() }}</text>
      @if (label()) {
        <text x="100" y="116" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">{{ label() }}</text>
      }
    </svg>
  `,
    })
], GaugeChartComponent);

const meta = {
  title: 'Charts/Gauge',
  decorators: [moduleMetadata({
    imports: [GaugeChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Gauge',
    description: 'Single value against a target range.',
    value: 72,
    label: 'of quarterly target'
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-gauge-chart [title]="title" [description]="description" [value]="value" [label]="label" /></div>`
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
