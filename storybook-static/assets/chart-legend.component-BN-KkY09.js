import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';

/** Row of colour dots with series names. */
let ChartLegendComponent = class ChartLegendComponent {
    items = input.required();
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }]
    };
};
ChartLegendComponent = __decorate([
    Component({
        selector: 'app-chart-legend',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-wrap items-center justify-center gap-4' },
        template: `
    @for (item of items(); track item.label) {
      <span class="text-muted-foreground inline-flex items-center gap-1.5 text-sm">
        <span class="size-2.5 rounded-full" [style.background]="item.color"></span>
        {{ item.label }}
      </span>
    }
  `,
    })
], ChartLegendComponent);

export { ChartLegendComponent as C };
