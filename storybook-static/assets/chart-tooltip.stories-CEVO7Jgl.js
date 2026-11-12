import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Floating tooltip card: heading plus a dot, label and value per series. */
let ChartTooltipComponent = class ChartTooltipComponent {
    title = input();
    items = input.required();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }]
    };
};
ChartTooltipComponent = __decorate([
    Component({
        selector: 'app-chart-tooltip',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-popover text-popover-foreground inline-flex min-w-36 flex-col gap-2 rounded-lg border p-3 text-sm shadow-md' },
        template: `
    @if (title()) {
      <p class="font-medium">{{ title() }}</p>
    }
    @for (item of items(); track item.label) {
      <div class="flex items-center gap-2">
        <span class="size-2.5 shrink-0 rounded-full" [style.background]="item.color"></span>
        <span class="text-muted-foreground">{{ item.label }}</span>
        <span class="ml-auto pl-4 font-medium tabular-nums">{{ item.value }}</span>
      </div>
    }
  `,
    })
], ChartTooltipComponent);

const meta = {
  title: 'Charts/Chart Tooltip',
  decorators: [moduleMetadata({
    imports: [ChartTooltipComponent]
  })],
  args: {
    title: 'Page Views',
    items: [{
      label: 'Desktop',
      value: 186,
      color: 'var(--chart-1)'
    }, {
      label: 'Mobile',
      value: 80,
      color: 'var(--chart-2)'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-chart-tooltip [title]="title" [items]="items" />`
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
