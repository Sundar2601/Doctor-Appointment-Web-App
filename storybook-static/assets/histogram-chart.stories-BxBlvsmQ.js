import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import { C as CARD_CLASS, h as histogramBins, l as linearScale, n as niceMax } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Distribution of raw values across equal-width bins. */
let HistogramChartComponent = class HistogramChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    values = input.required();
    bins = input(12);
    grid = [20, 70, 120];
    bars = computed(() => {
        const bins = histogramBins(this.values(), this.bins());
        const y = linearScale(0, niceMax(Math.max(...bins.map((b) => b.count), 1)), 140, 10);
        const slot = 300 / bins.length;
        return bins.map((b, i) => ({
            x: i * slot + 0.5,
            w: slot - 1,
            y: y(b.count),
            h: 140 - y(b.count),
            title: `${Math.round(b.x0)}-${Math.round(b.x1)}: ${b.count}`,
        }));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Histogram'}: distribution of ${this.values().length} values`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        values: [{ type: Input, args: [{ isSignal: true, alias: "values", required: true, transform: undefined },] }],
        bins: [{ type: Input, args: [{ isSignal: true, alias: "bins", required: false, transform: undefined },] }]
    };
};
HistogramChartComponent = __decorate([
    Component({
        selector: 'app-histogram-chart',
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
      @for (g of grid; track g) {
        <line x1="0" x2="300" [attr.y1]="g" [attr.y2]="g" stroke="var(--border)" />
      }
      @for (b of bars(); track $index) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="1.5" fill="var(--chart-1)">
          <title>{{ b.title }}</title>
        </rect>
      }
    </svg>
  `,
    })
], HistogramChartComponent);

const meta = {
  title: 'Charts/Histogram',
  decorators: [moduleMetadata({
    imports: [HistogramChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Histogram',
    description: 'Distribution of wait times (minutes) across bins.',
    bins: 12,
    values: [...[4, 6, 8, 9, 10, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 18, 19, 19, 20, 20, 21, 21, 22, 23, 24], ...[25, 26, 26, 27, 28, 29, 30, 32, 34, 36, 40, 44]]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-histogram-chart [title]="title" [description]="description" [values]="values" [bins]="bins" /></div>`
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
