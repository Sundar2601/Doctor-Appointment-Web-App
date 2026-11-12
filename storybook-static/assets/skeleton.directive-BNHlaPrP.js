import { _ as __decorate, D as Directive, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';

/** Figma "Skeleton". Usage: `<div appSkeleton class="h-4 w-60"></div>` or `<div appSkeleton shape="circle" class="size-12"></div>`. */
let SkeletonDirective = class SkeletonDirective {
    shape = input('rect');
    classes = computed(() => `bg-muted block animate-pulse ${this.shape() === 'circle' ? 'rounded-full' : 'rounded-lg'}`);
    static propDecorators = {
        shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false, transform: undefined },] }]
    };
};
SkeletonDirective = __decorate([
    Directive({ selector: '[appSkeleton]', host: { '[class]': 'classes()', 'aria-hidden': 'true' } })
], SkeletonDirective);

export { SkeletonDirective as S };
