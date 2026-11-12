import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';

const TONE = {
    neutral: 'bg-secondary text-secondary-foreground',
    primary: 'bg-primary text-primary-foreground',
    outline: 'border-border! bg-background text-foreground',
    info: 'bg-info/10 text-foreground border-info/40',
    success: 'bg-success text-white',
    warning: 'bg-warning text-foreground',
    danger: 'bg-destructive text-white',
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    destructive: 'bg-destructive text-white',
};
let BadgeComponent = class BadgeComponent {
    tone = input('neutral');
    classes = computed(() => `inline-flex w-fit items-center rounded-md border border-transparent px-2 py-0.5 text-xs font-normal whitespace-nowrap ${TONE[this.tone()]}`);
    static propDecorators = {
        tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false, transform: undefined },] }]
    };
};
BadgeComponent = __decorate([
    Component({
        selector: 'app-badge',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'classes()' },
        template: '<ng-content />',
    })
], BadgeComponent);

export { BadgeComponent as B };
