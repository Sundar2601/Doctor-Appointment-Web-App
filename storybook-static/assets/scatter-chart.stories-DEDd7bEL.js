import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, l as linearScale, s as seriesColor } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Relationship between two measures, coloured by group. */
let ScatterChartComponent = class ScatterChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    grid = [20, 70, 120];
    dots = computed(() => {
        const d = this.data();
        const xs = d.map((p) => p.x);
        const ys = d.map((p) => p.y);
        const sx = linearScale(Math.min(...xs), Math.max(...xs), 8, 292);
        const sy = linearScale(Math.min(...ys), Math.max(...ys), 135, 12);
        return d.map((p) => ({ x: sx(p.x), y: sy(p.y), color: seriesColor(p.group ?? 0) }));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Scatter chart'}: ${this.data().length} points`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
ScatterChartComponent = __decorate([
    Component({
        selector: 'app-scatter-chart',
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
      @for (p of dots(); track $index) {
        <circle [attr.cx]="p.x" [attr.cy]="p.y" r="4" [attr.fill]="p.color" />
      }
    </svg>
  `,
    })
], ScatterChartComponent);

const meta = {
  title: 'Charts/Scatter',
  decorators: [moduleMetadata({
    imports: [ScatterChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Scatter',
    description: 'Wait time against satisfaction; colour groups by clinic.',
    data: [{
      x: 5,
      y: 20,
      group: 0
    }, {
      x: 12,
      y: 38,
      group: 1
    }, {
      x: 15,
      y: 30,
      group: 2
    }, {
      x: 20,
      y: 55,
      group: 0
    }, {
      x: 24,
      y: 35,
      group: 1
    }, {
      x: 28,
      y: 48,
      group: 2
    }, {
      x: 33,
      y: 66,
      group: 0
    }, {
      x: 38,
      y: 50,
      group: 1
    }, {
      x: 42,
      y: 70,
      group: 2
    }, {
      x: 47,
      y: 62,
      group: 1
    }, {
      x: 52,
      y: 80,
      group: 0
    }, {
      x: 58,
      y: 78,
      group: 2
    }, {
      x: 64,
      y: 90,
      group: 1
    }, {
      x: 70,
      y: 84,
      group: 0
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-scatter-chart [title]="title" [description]="description" [data]="data" /></div>`
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
