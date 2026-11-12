import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, s as seriesColor, a as stackSeries, v as valueOf, n as niceScale, l as linearScale, b as linePath, c as areaPath, h as horizontalGrid } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const WIDTH = 400;
const TOP = 8;
const BOTTOM = 230;
function layoutAreas(data, series, stacked) {
    const keys = series.map((s) => s.key);
    const stack = stackSeries(data, keys);
    const peak = stacked
        ? Math.max(0, ...(stack[stack.length - 1] ?? []).map((v) => v.y1))
        : Math.max(0, ...data.flatMap((d) => keys.map((k) => valueOf(d, k))));
    const { max, ticks } = niceScale(peak);
    const y = linearScale(0, max, BOTTOM, TOP);
    const x = linearScale(0, Math.max(data.length - 1, 1), 0, WIDTH);
    const edge = (values) => values.map((v, i) => ({ x: x(i), y: y(v) }));
    return {
        grid: horizontalGrid(ticks, y, 0, WIDTH),
        // Draw the topmost stacked series first so lower series paint over it.
        areas: series
            .map((s, j) => {
            const top = edge(stacked ? (stack[j] ?? []).map((v) => v.y1) : data.map((d) => valueOf(d, s.key)));
            const bottom = edge(stacked ? (stack[j] ?? []).map((v) => v.y0) : data.map(() => 0));
            return { fill: areaPath(top, bottom), edge: linePath(top), color: seriesColor(s, j) };
        })
            .reverse(),
        labels: data.map((d, i) => ({
            x: x(i),
            y: 254,
            text: d.label,
            anchor: i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle',
        })),
    };
}
/** Overlapping or stacked area chart. */
let AreaChartComponent = class AreaChartComponent {
    data = input.required();
    series = input.required();
    stacked = input(false);
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Area chart');
    layout = computed(() => layoutAreas(this.data(), this.series(), this.stacked()));
    legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        series: [{ type: Input, args: [{ isSignal: true, alias: "series", required: true, transform: undefined },] }],
        stacked: [{ type: Input, args: [{ isSignal: true, alias: "stacked", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
AreaChartComponent = __decorate([
    Component({
        selector: 'app-area-chart',
        imports: [ChartFrameComponent, ChartLegendComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <app-chart-frame [title]="title()" [description]="description()" [footerTitle]="footerTitle()" [footerNote]="footerNote()">
      <svg viewBox="0 0 400 270" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (area of layout().areas; track $index) {
          <path [attr.d]="area.fill" [attr.fill]="area.color" [attr.fill-opacity]="stacked() ? 1 : 0.4" />
          @if (!stacked()) {
            <path [attr.d]="area.edge" fill="none" [attr.stroke]="area.color" stroke-width="2" stroke-linejoin="round" />
          }
        }
        @for (label of layout().labels; track $index) {
          <text
            [attr.x]="label.x"
            [attr.y]="label.y"
            [attr.text-anchor]="label.anchor"
            dominant-baseline="middle"
            font-size="12"
            fill="var(--muted-foreground)"
          >
            {{ label.text }}
          </text>
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
    })
], AreaChartComponent);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const desktop = [186, 305, 237, 73, 209, 214];
const mobile = [80, 200, 120, 190, 130, 140];
const meta = {
  title: 'Charts/Area Chart',
  decorators: [moduleMetadata({
    imports: [AreaChartComponent]
  })],
  argTypes: {
    stacked: {
      control: 'boolean'
    },
    legend: {
      control: 'boolean'
    }
  },
  args: {
    data: months.map((label, i) => ({
      label,
      desktop: desktop[i] ?? 0,
      mobile: mobile[i] ?? 0
    })),
    series: [{
      key: 'desktop',
      label: 'Desktop',
      color: 'var(--chart-1)'
    }, {
      key: 'mobile',
      label: 'Mobile',
      color: 'var(--chart-2)'
    }],
    stacked: false,
    legend: false,
    title: 'Area Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-area-chart [data]="data" [series]="series" [stacked]="stacked" [legend]="legend"
      [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const Stacked = {
  args: {
    stacked: true,
    title: 'Area Chart – Stacked'
  }
};
const __namedExportsOrder = ["Default", "Stacked"];
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
Stacked.parameters = {
  ...Stacked.parameters,
  docs: {
    ...Stacked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    stacked: true,\n    title: 'Area Chart \u2013 Stacked'\n  }\n}",
      ...Stacked.parameters?.docs?.source
    }
  }
};

export { Default, Stacked, __namedExportsOrder, meta as default };
