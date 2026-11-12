import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SkeletonDirective } from './skeleton.directive'

/** Figma "Skeleton card" loading placeholder. Usage: `<app-skeleton-card class="max-w-sm" />`. */
@Component({
  selector: 'app-skeleton-card',
  imports: [SkeletonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card flex flex-col gap-4 rounded-xl border p-3', role: 'status', 'aria-busy': 'true' },
  template: `
    <span class="sr-only">Loading</span>
    <div class="flex items-center gap-3">
      <div appSkeleton shape="circle" class="size-10 shrink-0"></div>
      <div class="flex flex-1 flex-col gap-2">
        <div appSkeleton class="h-3 w-4/5"></div>
        <div appSkeleton class="h-3 w-1/2"></div>
      </div>
    </div>
    <div appSkeleton class="h-30 w-full"></div>
    <div class="flex flex-col gap-3">
      <div appSkeleton class="h-3 w-full"></div>
      <div appSkeleton class="h-3 w-3/4"></div>
    </div>
  `,
})
export class SkeletonCardComponent {}
