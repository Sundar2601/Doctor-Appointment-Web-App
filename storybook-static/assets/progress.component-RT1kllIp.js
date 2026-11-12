import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';

let ProgressComponent = class ProgressComponent {
    value = input(0);
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false, transform: undefined },] }]
    };
};
ProgressComponent = __decorate([
    Component({
        selector: 'app-progress',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-muted block h-2 w-full overflow-hidden rounded-full',
            role: 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            '[attr.aria-valuenow]': 'value()',
        },
        template: '<span class="bg-primary block h-full rounded-full transition-[width]" [style.width.%]="value()"></span>',
    })
], ProgressComponent);

export { ProgressComponent as P };
