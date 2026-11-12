import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, l as linearScale } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** How a start value becomes an end value through gains and losses. */
let WaterfallChartComponent = class WaterfallChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    bars = computed(() => {
        const d = this.data();
        let running = 0;
        const spans = d.map((s) => {
            const from = s.total ? 0 : running;
            const to = s.total ? s.value : running + s.value;
            running = to;
            return { s, lo: Math.min(from, to), hi: Math.max(from, to) };
        });
        const y = linearScale(0, Math.max(...spans.map((p) => p.hi)) || 1, 130, 8);
        const slot = 300 / d.length;
        const w = slot * 0.6;
        return spans.map((p, i) => ({
            label: p.s.label,
            x: i * slot + (slot - w) / 2,
            w,
            y: y(p.hi),
            h: Math.max(2, y(p.lo) - y(p.hi)),
            color: p.s.total ? 'var(--chart-1)' : p.s.value >= 0 ? 'var(--chart-2)' : 'var(--destructive)',
        }));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Waterfall'}: ${this.data()
        .map((s) => `${s.label} ${s.value}`)
        .join(', ')}`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
WaterfallChartComponent = __decorate([
    Component({
        selector: 'app-waterfall-chart',
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
      @for (b of bars(); track b.label) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="2" [attr.fill]="b.color" />
        <text [attr.x]="b.x + b.w / 2" y="146" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">{{ b.label }}</text>
      }
    </svg>
  `,
    })
], WaterfallChartComponent);

const meta = {
  title: 'Charts/Waterfall',
  decorators: [moduleMetadata({
    imports: [WaterfallChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Waterfall',
    description: 'How monthly revenue moves from start to end.',
    data: [{
      label: 'Start',
      value: 120,
      total: true
    }, {
      label: 'Visits',
      value: 35
    }, {
      label: 'Refunds',
      value: -18
    }, {
      label: 'Plans',
      value: 24
    }, {
      label: 'Costs',
      value: -12
    }, {
      label: 'End',
      value: 149,
      total: true
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-waterfall-chart [title]="title" [description]="description" [data]="data" /></div>`
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
