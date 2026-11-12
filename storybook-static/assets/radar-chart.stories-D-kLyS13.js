import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, s as seriesColor, v as valueOf, n as niceScale, f as polarToCartesian, g as pointsAttr, l as linearScale } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const CX = 150;
const CY = 125;
const RADIUS = 90;
const LEVELS = 4;
function layoutRadar(data, series, maxInput) {
    const peak = Math.max(0, ...data.flatMap((d) => series.map((s) => valueOf(d, s.key))));
    const max = maxInput ?? niceScale(peak, LEVELS).max;
    const radius = linearScale(0, max, 0, RADIUS);
    const angleOf = (i) => (i * 360) / Math.max(data.length, 1);
    const polygon = (r) => pointsAttr(data.map((_, i) => polarToCartesian(CX, CY, r(i), angleOf(i))));
    return {
        rings: Array.from({ length: LEVELS }, (_, l) => polygon(() => (RADIUS * (l + 1)) / LEVELS)),
        shapes: series.map((s, j) => ({ points: polygon((i) => radius(data[i] ? valueOf(data[i], s.key) : 0)), color: seriesColor(s, j) })),
        labels: data.map((d, i) => {
            const p = polarToCartesian(CX, CY, RADIUS + 16, angleOf(i));
            const dx = p.x - CX;
            return { x: p.x, y: p.y, text: d.label, anchor: Math.abs(dx) < 4 ? 'middle' : dx > 0 ? 'start' : 'end' };
        }),
    };
}
/** Radar (spider) chart with one polygon per series. */
let RadarChartComponent = class RadarChartComponent {
    data = input.required();
    series = input.required();
    max = input();
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Radar chart');
    layout = computed(() => layoutRadar(this.data(), this.series(), this.max()));
    legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        series: [{ type: Input, args: [{ isSignal: true, alias: "series", required: true, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
RadarChartComponent = __decorate([
    Component({
        selector: 'app-radar-chart',
        imports: [ChartFrameComponent, ChartLegendComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <app-chart-frame
      align="center"
      [title]="title()"
      [description]="description()"
      [footerTitle]="footerTitle()"
      [footerNote]="footerNote()"
    >
      <svg viewBox="0 0 300 250" class="mx-auto block h-auto w-full max-w-[300px]" role="img" [attr.aria-label]="ariaLabel()">
        @for (ring of layout().rings; track $index) {
          <polygon [attr.points]="ring" fill="none" stroke="var(--border)" stroke-width="1" />
        }
        @for (shape of layout().shapes; track $index) {
          <polygon
            [attr.points]="shape.points"
            [attr.fill]="shape.color"
            fill-opacity="0.7"
            [attr.stroke]="shape.color"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
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
], RadarChartComponent);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const desktop = [186, 305, 237, 73, 209, 214];
const mobile = [80, 200, 120, 190, 130, 140];
const meta = {
  title: 'Charts/Radar Chart',
  decorators: [moduleMetadata({
    imports: [RadarChartComponent]
  })],
  argTypes: {
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
    }],
    legend: false,
    title: 'Radar Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-radar-chart [data]="data" [series]="series" [max]="max" [legend]="legend"
      [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const MultipleSeries = {
  args: {
    legend: true,
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
const __namedExportsOrder = ["Default", "MultipleSeries"];
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
MultipleSeries.parameters = {
  ...MultipleSeries.parameters,
  docs: {
    ...MultipleSeries.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    legend: true,\n    series: [{\n      key: 'desktop',\n      label: 'Desktop',\n      color: 'var(--chart-1)'\n    }, {\n      key: 'mobile',\n      label: 'Mobile',\n      color: 'var(--chart-2)'\n    }]\n  }\n}",
      ...MultipleSeries.parameters?.docs?.source
    }
  }
};

export { Default, MultipleSeries, __namedExportsOrder, meta as default };
