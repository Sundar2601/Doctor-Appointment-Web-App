import { computed, Directive, input } from '@angular/core'

export type SkeletonShape = 'rect' | 'circle'

/** Figma "Skeleton". Usage: `<div appSkeleton class="h-4 w-60"></div>` or `<div appSkeleton shape="circle" class="size-12"></div>`. */
@Directive({ selector: '[appSkeleton]', host: { '[class]': 'classes()', 'aria-hidden': 'true' } })
export class SkeletonDirective {
  readonly shape = input<SkeletonShape>('rect')
  protected readonly classes = computed(() => `bg-muted block animate-pulse ${this.shape() === 'circle' ? 'rounded-full' : 'rounded-lg'}`)
}
