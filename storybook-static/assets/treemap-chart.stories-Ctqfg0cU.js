import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, d as squarify, s as seriesColor } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Part-to-whole across categories with nested size (squarified layout). */
let TreemapChartComponent = class TreemapChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    rects = computed(() => {
        const gap = 2;
        return squarify(this.data(), 300, 150).map((r, i) => ({
            label: r.label,
            x: r.x + gap / 2,
            y: r.y + gap / 2,
            w: Math.max(0, r.w - gap),
            h: Math.max(0, r.h - gap),
            color: seriesColor(i),
        }));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Treemap'}: ${this.data()
        .map((d) => `${d.label} ${d.value}`)
        .join(', ')}`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
TreemapChartComponent = __decorate([
    Component({
        selector: 'app-treemap-chart',
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
      @for (r of rects(); track r.label) {
        <rect [attr.x]="r.x" [attr.y]="r.y" [attr.width]="r.w" [attr.height]="r.h" rx="4" [attr.fill]="r.color" />
        @if (r.w > r.label.length * 6 + 16 && r.h > 20) {
          <text [attr.x]="r.x + 8" [attr.y]="r.y + 16" font-size="10" fill="var(--primary-foreground, #fff)">{{ r.label }}</text>
        }
      }
    </svg>
  `,
    })
], TreemapChartComponent);

const meta = {
  title: 'Charts/Treemap',
  decorators: [moduleMetadata({
    imports: [TreemapChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Treemap',
    description: 'Appointments by department.',
    data: [{
      label: 'General',
      value: 42
    }, {
      label: 'Cardiology',
      value: 24
    }, {
      label: 'Paediatrics',
      value: 16
    }, {
      label: 'Dermatology',
      value: 12
    }, {
      label: 'Orthopaedics',
      value: 9
    }, {
      label: 'ENT',
      value: 6
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-treemap-chart [title]="title" [description]="description" [data]="data" /></div>`
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
