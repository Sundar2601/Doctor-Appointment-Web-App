import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as ChartFrameComponent, p as paletteColor, e as arcPath } from './chart-utils-CQoCQAKu.js';
import { C as ChartLegendComponent } from './chart-legend.component-BN-KkY09.js';
import './preload-helper-D5QYaGzd.js';

const CENTER = 100;
const OUTER = 96;
function layoutWedges(data, innerRadius) {
    const total = data.reduce((sum, s) => sum + Math.max(s.value, 0), 0);
    if (total <= 0)
        return [];
    let angle = 0;
    return data.map((slice, i) => {
        const sweep = (Math.max(slice.value, 0) / total) * 360;
        const wedge = {
            d: arcPath(CENTER, CENTER, OUTER, innerRadius, angle, angle + sweep),
            color: paletteColor(slice.color, i),
            tip: `${slice.label}: ${slice.value}`,
        };
        angle += sweep;
        return wedge;
    });
}
/** Pie chart; give `innerRadius` (0 to 96) for a donut and `centerLabel` for text in the hole. */
let PieChartComponent = class PieChartComponent {
    data = input.required();
    innerRadius = input(0);
    centerLabel = input();
    centerSubLabel = input();
    legend = input(false);
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    ariaLabel = input('Pie chart');
    wedges = computed(() => layoutWedges(this.data(), this.innerRadius()));
    legendItems = computed(() => this.data().map((s, i) => ({ label: s.label, color: paletteColor(s.color, i) })));
    static propDecorators = {
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }],
        innerRadius: [{ type: Input, args: [{ isSignal: true, alias: "innerRadius", required: false, transform: undefined },] }],
        centerLabel: [{ type: Input, args: [{ isSignal: true, alias: "centerLabel", required: false, transform: undefined },] }],
        centerSubLabel: [{ type: Input, args: [{ isSignal: true, alias: "centerSubLabel", required: false, transform: undefined },] }],
        legend: [{ type: Input, args: [{ isSignal: true, alias: "legend", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
PieChartComponent = __decorate([
    Component({
        selector: 'app-pie-chart',
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
        @for (wedge of wedges(); track $index) {
          <path [attr.d]="wedge.d" [attr.fill]="wedge.color" stroke="var(--card)" stroke-width="3" stroke-linejoin="round">
            <title>{{ wedge.tip }}</title>
          </path>
        }
        @if (centerLabel()) {
          <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-size="28" font-weight="700" fill="currentColor">
            {{ centerLabel() }}
          </text>
          @if (centerSubLabel()) {
            <text x="100" y="124" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="var(--muted-foreground)">
              {{ centerSubLabel() }}
            </text>
          }
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
    })
], PieChartComponent);

const meta = {
  title: 'Charts/Pie Chart',
  decorators: [moduleMetadata({
    imports: [PieChartComponent]
  })],
  argTypes: {
    innerRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 90,
        step: 1
      }
    },
    legend: {
      control: 'boolean'
    }
  },
  args: {
    data: [{
      label: 'Chrome',
      value: 275
    }, {
      label: 'Safari',
      value: 200
    }, {
      label: 'Firefox',
      value: 187
    }, {
      label: 'Edge',
      value: 173
    }, {
      label: 'Other',
      value: 90
    }],
    innerRadius: 0,
    legend: false,
    title: 'Pie Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-pie-chart [data]="data" [innerRadius]="innerRadius" [centerLabel]="centerLabel"
      [centerSubLabel]="centerSubLabel" [legend]="legend" [title]="title" [description]="description"
      [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`
  })
};
const Default = {};
const Donut = {
  args: {
    innerRadius: 58,
    title: 'Pie Chart – Donut'
  }
};
const DonutWithCentreText = {
  args: {
    innerRadius: 58,
    centerLabel: '1,125',
    centerSubLabel: 'Visitors',
    title: 'Pie Chart – Donut with text'
  }
};
const WithLegend = {
  args: {
    legend: true
  }
};
const __namedExportsOrder = ["Default", "Donut", "DonutWithCentreText", "WithLegend"];
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
Donut.parameters = {
  ...Donut.parameters,
  docs: {
    ...Donut.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    innerRadius: 58,\n    title: 'Pie Chart \u2013 Donut'\n  }\n}",
      ...Donut.parameters?.docs?.source
    }
  }
};
DonutWithCentreText.parameters = {
  ...DonutWithCentreText.parameters,
  docs: {
    ...DonutWithCentreText.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    innerRadius: 58,\n    centerLabel: '1,125',\n    centerSubLabel: 'Visitors',\n    title: 'Pie Chart \u2013 Donut with text'\n  }\n}",
      ...DonutWithCentreText.parameters?.docs?.source
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

export { Default, Donut, DonutWithCentreText, WithLegend, __namedExportsOrder, meta as default };
