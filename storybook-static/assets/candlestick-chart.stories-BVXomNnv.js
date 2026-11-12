import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, l as linearScale } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Open, high, low and close per period. */
let CandlestickChartComponent = class CandlestickChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    candles = computed(() => {
        const d = this.data();
        const y = linearScale(Math.min(...d.map((c) => c.low)), Math.max(...d.map((c) => c.high)), 124, 6);
        const slot = 300 / d.length;
        return d.map((c, i) => {
            const up = c.close >= c.open;
            const yTop = y(Math.max(c.open, c.close));
            return {
                label: c.label,
                cx: i * slot + slot / 2,
                w: Math.min(16, slot * 0.5),
                yHigh: y(c.high),
                yLow: y(c.low),
                yTop,
                h: Math.max(2, y(Math.min(c.open, c.close)) - yTop),
                color: up ? 'var(--success, #00a63e)' : 'var(--destructive, #e7000b)',
            };
        });
    });
    ariaLabel = computed(() => `${this.title() ?? 'Candlestick'}: ${this.data().length} periods`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
CandlestickChartComponent = __decorate([
    Component({
        selector: 'app-candlestick-chart',
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
    <svg viewBox="0 0 300 130" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (c of candles(); track c.label) {
        <line [attr.x1]="c.cx" [attr.x2]="c.cx" [attr.y1]="c.yHigh" [attr.y2]="c.yLow" [attr.stroke]="c.color" stroke-width="2" />
        <rect [attr.x]="c.cx - c.w / 2" [attr.y]="c.yTop" [attr.width]="c.w" [attr.height]="c.h" rx="2" [attr.fill]="c.color">
          <title>{{ c.label }}</title>
        </rect>
      }
    </svg>
  `,
    })
], CandlestickChartComponent);

const meta = {
  title: 'Charts/Candlestick',
  decorators: [moduleMetadata({
    imports: [CandlestickChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Candlestick',
    description: 'Open, high, low and close per period.',
    data: [{
      label: 'W1',
      open: 40,
      high: 58,
      low: 34,
      close: 52
    }, {
      label: 'W2',
      open: 52,
      high: 66,
      low: 42,
      close: 46
    }, {
      label: 'W3',
      open: 46,
      high: 60,
      low: 40,
      close: 56
    }, {
      label: 'W4',
      open: 56,
      high: 74,
      low: 52,
      close: 70
    }, {
      label: 'W5',
      open: 70,
      high: 72,
      low: 50,
      close: 54
    }, {
      label: 'W6',
      open: 54,
      high: 70,
      low: 48,
      close: 64
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-candlestick-chart [title]="title" [description]="description" [data]="data" /></div>`
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
