import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, s as seriesColor, v as valueOf, n as niceScale, d as bandScale, b as linePath, h as horizontalGrid, l as linearScale } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const WIDTH = 400;
const TOP = 8;
const BOTTOM = 230;
function layoutLines(data, series) {
    const peak = Math.max(0, ...data.flatMap((d) => series.map((s) => valueOf(d, s.key))));
    const { max, ticks } = niceScale(peak);
    const y = linearScale(0, max, BOTTOM, TOP);
    const columns = bandScale(data.length, 0, WIDTH, 0);
    return {
        grid: horizontalGrid(ticks, y, 0, WIDTH),
        lines: series.map((s, j) => {
            const points = data.map((d, i) => ({
                x: columns.center(i),
                y: y(valueOf(d, s.key)),
                tip: `${d.label} · ${s.label}: ${valueOf(d, s.key)}`,
            }));
            return { d: linePath(points), color: seriesColor(s, j), points };
        }),
        labels: data.map((d, i) => ({ x: columns.center(i), y: 254, text: d.label, anchor: 'middle' })),
    };
}
/** Multi-series line chart with optional point markers. */
let LineChartComponent = class LineChartComponent {
    data = input.required();
    series = input.required();
    dots = input(true);
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Line chart');
    layout = computed(() => layoutLines(this.data(), this.series()));
    legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        series: [{ type: Input, args: [{ isSignal: true, alias: "series", required: true, transform: undefined },] }],
        dots: [{ type: Input, args: [{ isSignal: true, alias: "dots", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
LineChartComponent = __decorate([
    Component({
        selector: 'app-line-chart',
        imports: [ChartFrameComponent, ChartLegendComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <app-chart-frame [title]="title()" [description]="description()" [footerTitle]="footerTitle()" [footerNote]="footerNote()">
      <svg viewBox="0 0 400 270" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (shape of layout().lines; track $index) {
          <path [attr.d]="shape.d" fill="none" [attr.stroke]="shape.color" stroke-width="2" stroke-linejoin="round" />
          @if (dots()) {
            @for (p of shape.points; track $index) {
              <circle [attr.cx]="p.x" [attr.cy]="p.y" r="4" [attr.fill]="shape.color">
                <title>{{ p.tip }}</title>
              </circle>
            }
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
], LineChartComponent);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const desktop = [186, 305, 237, 73, 209, 214];
const mobile = [80, 200, 120, 190, 130, 140];
const meta = {
  title: 'Charts/Line Chart',
  decorators: [moduleMetadata({
    imports: [LineChartComponent]
  })],
  argTypes: {
    dots: {
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
    dots: true,
    legend: false,
    title: 'Line Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-line-chart [data]="data" [series]="series" [dots]="dots" [legend]="legend"
      [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const WithoutDots = {
  args: {
    dots: false,
    legend: true
  }
};
const __namedExportsOrder = ["Default", "WithoutDots"];
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
WithoutDots.parameters = {
  ...WithoutDots.parameters,
  docs: {
    ...WithoutDots.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    dots: false,\n    legend: true\n  }\n}",
      ...WithoutDots.parameters?.docs?.source
    }
  }
};

export { Default, WithoutDots, __namedExportsOrder, meta as default };
