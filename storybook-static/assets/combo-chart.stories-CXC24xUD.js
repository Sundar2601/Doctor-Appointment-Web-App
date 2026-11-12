import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, l as linearScale, n as niceMax, a as linePath } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Bars for volume plus a line for a rate on the same x-axis. */
let ComboChartComponent = class ComboChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    top = 10;
    base = 130;
    grid = computed(() => [this.top + 10, 70, this.base]);
    bars = computed(() => {
        const d = this.data();
        const y = linearScale(0, niceMax(Math.max(...d.map((i) => i.value))), this.base, this.top + 20);
        const slot = 300 / d.length;
        const w = slot * 0.62;
        return d.map((i, n) => ({ label: i.label, x: n * slot + (slot - w) / 2, w, y: y(i.value), h: this.base - y(i.value) }));
    });
    line = computed(() => {
        const d = this.data();
        const y = linearScale(0, niceMax(Math.max(...d.map((i) => i.rate))), this.base, this.top);
        const slot = 300 / d.length;
        return linePath(d.map((i, n) => ({ x: n * slot + slot / 2, y: y(i.rate) })));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Combo chart'}: ${this.data().length} bars with a trend line`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
ComboChartComponent = __decorate([
    Component({
        selector: 'app-combo-chart',
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
    <svg viewBox="0 0 300 150" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (g of grid(); track g) {
        <line x1="0" x2="300" [attr.y1]="g" [attr.y2]="g" stroke="var(--border)" />
      }
      @for (b of bars(); track b.label) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="2" fill="var(--chart-2)" />
        <text [attr.x]="b.x + b.w / 2" y="146" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">{{ b.label }}</text>
      }
      <path [attr.d]="line()" fill="none" stroke="var(--chart-1)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
    </svg>
  `,
    })
], ComboChartComponent);

const meta = {
  title: 'Charts/Combo',
  decorators: [moduleMetadata({
    imports: [ComboChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Combo (bar + line)',
    description: 'Visits as bars, show rate as a line on the same x-axis.',
    data: [{
      label: 'Mon',
      value: 42,
      rate: 62
    }, {
      label: 'Tue',
      value: 58,
      rate: 71
    }, {
      label: 'Wed',
      value: 47,
      rate: 66
    }, {
      label: 'Thu',
      value: 66,
      rate: 79
    }, {
      label: 'Fri',
      value: 54,
      rate: 72
    }, {
      label: 'Sat',
      value: 72,
      rate: 85
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-combo-chart [title]="title" [description]="description" [data]="data" /></div>`
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
