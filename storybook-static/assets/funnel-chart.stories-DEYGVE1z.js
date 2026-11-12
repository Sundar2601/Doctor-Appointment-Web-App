import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, s as seriesColor } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Drop-off across sequential steps; bar widths are proportional to value. */
let FunnelChartComponent = class FunnelChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    bars = computed(() => {
        const d = this.data();
        const max = Math.max(...d.map((s) => s.value)) || 1;
        return d.map((s, i) => {
            const w = Math.max(24, (s.value / max) * 300);
            return { label: s.label, w, x: (300 - w) / 2, y: i * 28, color: seriesColor(i) };
        });
    });
    ariaLabel = computed(() => `${this.title() ?? 'Funnel'}: ${this.data()
        .map((s) => `${s.label} ${s.value}`)
        .join(', ')}`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
FunnelChartComponent = __decorate([
    Component({
        selector: 'app-funnel-chart',
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
    <svg viewBox="0 0 300 160" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (s of bars(); track s.label) {
        <rect [attr.x]="s.x" [attr.y]="s.y" [attr.width]="s.w" height="22" rx="3" [attr.fill]="s.color" />
        @if (s.w > 60) {
          <text [attr.x]="150" [attr.y]="s.y + 15" text-anchor="middle" font-size="11" fill="var(--primary-foreground, #fff)">
            {{ s.label }}
          </text>
        }
      }
    </svg>
  `,
    })
], FunnelChartComponent);

const meta = {
  title: 'Charts/Funnel',
  decorators: [moduleMetadata({
    imports: [FunnelChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Funnel',
    description: 'Drop-off across the booking steps.',
    data: [{
      label: 'Visitors',
      value: 10000
    }, {
      label: 'Searches',
      value: 7200
    }, {
      label: 'Profile views',
      value: 4600
    }, {
      label: 'Bookings',
      value: 2100
    }, {
      label: 'Completed',
      value: 1500
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-funnel-chart [title]="title" [description]="description" [data]="data" /></div>`
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
