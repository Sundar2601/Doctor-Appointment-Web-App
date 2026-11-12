import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Intensity across two categories; each cell is the series colour at an opacity scaled by value. */
let HeatmapChartComponent = class HeatmapChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    values = input.required();
    rowLabels = input([]);
    columnLabels = input([]);
    cells = computed(() => {
        const rows = this.values();
        const cols = Math.max(...rows.map((r) => r.length), 1);
        const flat = rows.flat();
        const min = Math.min(...flat);
        const max = Math.max(...flat);
        const gap = 4;
        const w = (300 - gap * (cols - 1)) / cols;
        const h = (150 - gap * (rows.length - 1)) / rows.length;
        return rows.flatMap((row, r) => row.map((v, c) => ({
            key: `${r}-${c}`,
            x: c * (w + gap),
            y: r * (h + gap),
            w,
            h,
            opacity: 0.12 + 0.88 * ((v - min) / (max - min || 1)),
            title: `${this.rowLabels()[r] ?? 'Row ' + (r + 1)}, ${this.columnLabels()[c] ?? 'Column ' + (c + 1)}: ${v}`,
        })));
    });
    ariaLabel = computed(() => `${this.title() ?? 'Heatmap'}: ${this.values().length} rows of intensity values`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        values: [{ type: Input, args: [{ isSignal: true, alias: "values", required: true, transform: undefined },] }],
        rowLabels: [{ type: Input, args: [{ isSignal: true, alias: "rowLabels", required: false, transform: undefined },] }],
        columnLabels: [{ type: Input, args: [{ isSignal: true, alias: "columnLabels", required: false, transform: undefined },] }]
    };
};
HeatmapChartComponent = __decorate([
    Component({
        selector: 'app-heatmap-chart',
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
      @for (c of cells(); track c.key) {
        <rect
          [attr.x]="c.x"
          [attr.y]="c.y"
          [attr.width]="c.w"
          [attr.height]="c.h"
          rx="3"
          fill="var(--chart-1)"
          [attr.fill-opacity]="c.opacity"
        >
          <title>{{ c.title }}</title>
        </rect>
      }
    </svg>
  `,
    })
], HeatmapChartComponent);

const meta = {
  title: 'Charts/Heatmap',
  decorators: [moduleMetadata({
    imports: [HeatmapChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Heatmap',
    description: 'Appointments by weekday and hour.',
    rowLabels: ['9am', '10am', '11am', '12pm', '1pm'],
    columnLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [[8, 12, 15, 11, 9, 4, 1], [14, 18, 20, 16, 13, 6, 2], [16, 22, 24, 19, 15, 7, 3], [6, 9, 10, 8, 7, 3, 1], [12, 15, 17, 14, 11, 5, 2]]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-heatmap-chart [title]="title" [description]="description" [values]="values" [rowLabels]="rowLabels" [columnLabels]="columnLabels" /></div>`
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
