import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, p as paletteColor, e as arcPath } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const CENTER = 100;
const OUTER = 96;
const THICKNESS = 14;
const GAP = 4;
function layoutRings(data, max) {
    return data.map((slice, i) => {
        const outer = OUTER - i * (THICKNESS + GAP);
        const inner = Math.max(outer - THICKNESS, 0);
        const sweep = (Math.min(Math.max(slice.value, 0), max) / max) * 360;
        return {
            track: arcPath(CENTER, CENTER, outer, inner, 0, 360),
            value: sweep > 0 ? arcPath(CENTER, CENTER, outer, inner, 0, sweep) : null,
            color: paletteColor(slice.color, i),
            tip: `${slice.label}: ${slice.value}`,
        };
    });
}
/** Concentric radial bars; the first item is the outermost ring. */
let RadialChartComponent = class RadialChartComponent {
    data = input.required();
    max = input(100);
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Radial chart');
    rings = computed(() => layoutRings(this.data(), this.max() || 1));
    legendItems = computed(() => this.data().map((s, i) => ({ label: s.label, color: paletteColor(s.color, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
RadialChartComponent = __decorate([
    Component({
        selector: 'app-radial-chart',
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
      <svg viewBox="0 0 200 200" class="mx-auto block h-auto w-full max-w-[220px]" role="img" [attr.aria-label]="ariaLabel()">
        @for (ring of rings(); track $index) {
          <path [attr.d]="ring.track" fill="var(--muted)" />
          @if (ring.value) {
            <path [attr.d]="ring.value" [attr.fill]="ring.color">
              <title>{{ ring.tip }}</title>
            </path>
          }
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
    })
], RadialChartComponent);

const meta = {
  title: 'Charts/Radial Chart',
  decorators: [moduleMetadata({
    imports: [RadialChartComponent]
  })],
  argTypes: {
    legend: {
      control: 'boolean'
    },
    max: {
      control: 'number'
    }
  },
  args: {
    data: [{
      label: 'Chrome',
      value: 86
    }, {
      label: 'Safari',
      value: 74
    }, {
      label: 'Firefox',
      value: 52
    }, {
      label: 'Edge',
      value: 34
    }],
    max: 100,
    legend: false,
    title: 'Radial Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-radial-chart [data]="data" [max]="max" [legend]="legend" [title]="title"
      [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const WithLegend = {
  args: {
    legend: true
  }
};
const __namedExportsOrder = ["Default", "WithLegend"];
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
WithLegend.parameters = {
  ...WithLegend.parameters,
  docs: {
    ...WithLegend.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    legend: true\n  }\n}",
      ...WithLegend.parameters?.docs?.source
    }
  }
};

export { Default, WithLegend, __namedExportsOrder, meta as default };
