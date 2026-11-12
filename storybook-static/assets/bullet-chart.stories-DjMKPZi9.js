import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, l as linearScale } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Actual versus target against qualitative ranges. */
let BulletChartComponent = class BulletChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    data = input.required();
    height = computed(() => this.data().length * 38 - 12);
    rows = computed(() => this.data().map((d, i) => {
        const x = linearScale(0, d.ranges[2], 0, 300);
        const opacity = [0.65, 0.4, 0.07];
        let prev = 0;
        const bands = d.ranges.map((upper, n) => {
            const band = { x: x(prev), w: x(upper) - x(prev), opacity: opacity[n] };
            prev = upper;
            return band;
        });
        return { label: d.label, y: i * 38, bands, barW: x(d.value), targetX: x(d.target) };
    }));
    ariaLabel = computed(() => `${this.title() ?? 'Bullet chart'}: ${this.data()
        .map((d) => `${d.label} ${d.value} of target ${d.target}`)
        .join(', ')}`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true, transform: undefined },] }]
    };
};
BulletChartComponent = __decorate([
    Component({
        selector: 'app-bullet-chart',
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
    <svg [attr.viewBox]="'0 0 300 ' + height()" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (r of rows(); track r.label) {
        <g>
          <title>{{ r.label }}</title>
          @for (b of r.bands; track $index) {
            <rect [attr.x]="b.x" [attr.y]="r.y" [attr.width]="b.w" height="26" fill="var(--foreground)" [attr.fill-opacity]="b.opacity" />
          }
          <rect x="0" [attr.y]="r.y + 9" [attr.width]="r.barW" height="8" fill="var(--chart-1)" />
          <rect [attr.x]="r.targetX - 1.5" [attr.y]="r.y + 3" width="3" height="20" fill="var(--foreground)" />
        </g>
      }
    </svg>
  `,
    })
], BulletChartComponent);

const meta = {
  title: 'Charts/Bullet',
  decorators: [moduleMetadata({
    imports: [BulletChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Bullet',
    description: 'Actual versus target against qualitative ranges.',
    data: [{
      label: 'Satisfaction',
      value: 78,
      target: 85,
      ranges: [50, 75, 100]
    }, {
      label: 'Occupancy',
      value: 45,
      target: 65,
      ranges: [50, 75, 100]
    }, {
      label: 'On-time rate',
      value: 60,
      target: 70,
      ranges: [50, 75, 100]
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-bullet-chart [title]="title" [description]="description" [data]="data" /></div>`
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
