import { _ as __decorate, D as Directive, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';

const BASE = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';
const VARIANT = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
    outline: 'border bg-background shadow-xs focus-visible:border-ring hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
};
const SIZE = { sm: 'h-8 px-3', md: 'h-9 px-4', lg: 'h-10 px-6', icon: 'size-9' };
/** Usage: `<button appButton variant="outline" size="sm">`. Works on `button` and `a`. */
let ButtonDirective = class ButtonDirective {
    variant = input('primary');
    size = input('md');
    classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${this.variant() === 'link' ? '' : SIZE[this.size()]}`);
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
ButtonDirective = __decorate([
    Directive({ selector: 'button[appButton], a[appButton]', host: { '[class]': 'classes()' } })
], ButtonDirective);

export { ButtonDirective as B };
