import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, s as seriesColor, a as stackSeries, v as valueOf, n as niceScale, d as bandScale, Z as ZERO_RANGE, h as horizontalGrid, l as linearScale } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const WIDTH = 400;
const LABEL_WIDTH = 48;
const PAD = 8;
function layoutBars(data, series, stacked, horizontal) {
    const keys = series.map((s) => s.key);
    const stack = stackSeries(data, keys);
    const peak = data.reduce((max, d, i) => Math.max(max, stacked ? (stack[stack.length - 1]?.[i]?.y1 ?? 0) : Math.max(0, ...keys.map((k) => valueOf(d, k)))), 0);
    const { max, ticks } = niceScale(peak);
    const height = horizontal ? PAD * 2 + data.length * 32 : 270;
    const plotTop = PAD;
    const plotBottom = horizontal ? height - PAD : 230;
    const bars = [];
    const tip = (datum, s) => `${datum.label} · ${s.label}: ${valueOf(datum, s.key)}`;
    if (horizontal) {
        const rows = bandScale(data.length, plotTop, plotBottom, 0.3);
        const x = linearScale(0, max, LABEL_WIDTH, WIDTH);
        data.forEach((datum, i) => {
            const inner = bandScale(stacked ? 1 : series.length, rows.start(i), rows.start(i) + rows.width, stacked ? 0 : 0.1);
            series.forEach((s, j) => {
                const range = stack[j]?.[i] ?? ZERO_RANGE;
                const [from, to] = stacked ? [range.y0, range.y1] : [0, valueOf(datum, s.key)];
                bars.push({
                    x: x(from),
                    y: inner.start(stacked ? 0 : j),
                    width: Math.max(x(to) - x(from), 0),
                    height: inner.width,
                    color: seriesColor(s, j),
                    tip: tip(datum, s),
                });
            });
        });
        const step = (plotBottom - plotTop) / Math.max(data.length, 1);
        return {
            height,
            grid: Array.from({ length: data.length + 1 }, (_, i) => ({
                x1: LABEL_WIDTH,
                x2: WIDTH,
                y1: plotTop + i * step,
                y2: plotTop + i * step,
            })),
            bars,
            labels: data.map((d, i) => ({ x: 0, y: rows.center(i), text: d.label, anchor: 'start' })),
        };
    }
    const columns = bandScale(data.length, 0, WIDTH, 0.35);
    const y = linearScale(0, max, plotBottom, plotTop);
    data.forEach((datum, i) => {
        const inner = bandScale(stacked ? 1 : series.length, columns.start(i), columns.start(i) + columns.width, stacked ? 0 : 0.1);
        series.forEach((s, j) => {
            const range = stack[j]?.[i] ?? ZERO_RANGE;
            const [from, to] = stacked ? [range.y0, range.y1] : [0, valueOf(datum, s.key)];
            bars.push({
                x: inner.start(stacked ? 0 : j),
                y: y(to),
                width: inner.width,
                height: Math.max(y(from) - y(to), 0),
                color: seriesColor(s, j),
                tip: tip(datum, s),
            });
        });
    });
    return {
        height,
        grid: horizontalGrid(ticks, y, 0, WIDTH),
        bars,
        labels: data.map((d, i) => ({ x: columns.center(i), y: 254, text: d.label, anchor: 'middle' })),
    };
}
/** Vertical or horizontal, grouped or stacked bar chart. */
let BarChartComponent = class BarChartComponent {
    data = input.required();
    series = input.required();
    orientation = input('vertical');
    stacked = input(false);
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Bar chart');
    layout = computed(() => layoutBars(this.data(), this.series(), this.stacked(), this.orientation() === 'horizontal'));
    legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        series: [{ type: Input, args: [{ isSignal: true, alias: "series", required: true, transform: undefined },] }],
        orientation: [{ type: Input, args: [{ isSignal: true, alias: "orientation", required: false, transform: undefined },] }],
        stacked: [{ type: Input, args: [{ isSignal: true, alias: "stacked", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
BarChartComponent = __decorate([
    Component({
        selector: 'app-bar-chart',
        imports: [ChartFrameComponent, ChartLegendComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <app-chart-frame
      [title]="title()"
      [description]="description()"
      [footerTitle]="footerTitle()"
      [footerNote]="footerNote()"
      class="h-full"
    >
      <svg [attr.viewBox]="'0 0 400 ' + layout().height" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (bar of layout().bars; track $index) {
          <rect
            [attr.x]="bar.x"
            [attr.y]="bar.y"
            [attr.width]="bar.width"
            [attr.height]="bar.height"
            [attr.fill]="bar.color"
            [attr.rx]="stacked() ? 0 : 4"
          >
            <title>{{ bar.tip }}</title>
          </rect>
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
], BarChartComponent);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const desktop = [186, 305, 237, 73, 209, 214];
const mobile = [80, 200, 120, 190, 130, 140];
const data = months.map((label, i) => ({
  label,
  desktop: desktop[i] ?? 0,
  mobile: mobile[i] ?? 0
}));
const meta = {
  title: 'Charts/Bar Chart',
  decorators: [moduleMetadata({
    imports: [BarChartComponent]
  })],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal']
    },
    stacked: {
      control: 'boolean'
    },
    legend: {
      control: 'boolean'
    }
  },
  args: {
    data,
    series: [{
      key: 'desktop',
      label: 'Desktop',
      color: 'var(--chart-1)'
    }],
    orientation: 'vertical',
    stacked: false,
    legend: false,
    title: 'Bar Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-bar-chart [data]="data" [series]="series" [orientation]="orientation" [stacked]="stacked"
      [legend]="legend" [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const Stacked = {
  args: {
    stacked: true,
    title: 'Bar Chart – Stacked',
    series: [{
      key: 'desktop',
      label: 'Desktop',
      color: 'var(--chart-1)'
    }, {
      key: 'mobile',
      label: 'Mobile',
      color: 'var(--chart-2)'
    }]
  }
};
const Horizontal = {
  args: {
    orientation: 'horizontal',
    title: 'Bar Chart – Horizontal'
  }
};
const WithLegend = {
  args: {
    legend: true,
    title: 'Bar Chart – Multiple',
    series: [{
      key: 'desktop',
      label: 'Desktop',
      color: 'var(--chart-1)'
    }, {
      key: 'mobile',
      label: 'Mobile',
      color: 'var(--chart-2)'
    }]
  }
};
const __namedExportsOrder = ["Default", "Stacked", "Horizontal", "WithLegend"];
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
      originalSource: "{\n  args: {\n    stacked: true,\n    title: 'Bar Chart \u2013 Stacked',\n    series: [{\n      key: 'desktop',\n      label: 'Desktop',\n      color: 'var(--chart-1)'\n    }, {\n      key: 'mobile',\n      label: 'Mobile',\n      color: 'var(--chart-2)'\n    }]\n  }\n}",
      ...Stacked.parameters?.docs?.source
    }
  }
};
Horizontal.parameters = {
  ...Horizontal.parameters,
  docs: {
    ...Horizontal.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    orientation: 'horizontal',\n    title: 'Bar Chart \u2013 Horizontal'\n  }\n}",
      ...Horizontal.parameters?.docs?.source
    }
  }
};
WithLegend.parameters = {
  ...WithLegend.parameters,
  docs: {
    ...WithLegend.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    legend: true,\n    title: 'Bar Chart \u2013 Multiple',\n    series: [{\n      key: 'desktop',\n      label: 'Desktop',\n      color: 'var(--chart-1)'\n    }, {\n      key: 'mobile',\n      label: 'Mobile',\n      color: 'var(--chart-2)'\n    }]\n  }\n}",
      ...WithLegend.parameters?.docs?.source
    }
  }
};

export { Default, Horizontal, Stacked, WithLegend, __namedExportsOrder, meta as default };
