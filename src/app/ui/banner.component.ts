import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircleAlert, lucideCircleCheck, lucideInfo, lucideTriangleAlert, lucideX } from '@ng-icons/lucide'

export type BannerVariant = 'info' | 'warning' | 'success' | 'destructive'

const ICONS: Record<BannerVariant, string> = {
  info: 'lucideInfo',
  warning: 'lucideTriangleAlert',
  success: 'lucideCircleCheck',
  destructive: 'lucideCircleAlert',
}
const TONES: Record<BannerVariant, string> = {
  info: 'bg-info border-info',
  warning: 'bg-warning border-warning',
  success: 'bg-success border-success',
  destructive: 'bg-destructive border-destructive',
}

/** Full-width announcement bar. Content is projected; add a `bannerAction` element for a trailing action. */
@Component({
  selector: 'app-banner',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCircleAlert, lucideCircleCheck, lucideInfo, lucideTriangleAlert, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[hidden]': 'closed()', role: 'status' },
  template: `
    <ng-icon [name]="icon()" size="16" class="shrink-0" />
    <div class="min-w-0 flex-1 text-sm"><ng-content /></div>
    <ng-content select="[bannerAction]" />
    @if (dismissible()) {
      <button
        type="button"
        class="text-foreground/70 hover:bg-foreground/10 focus-visible:ring-ring/50 inline-flex size-6 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
        aria-label="Dismiss"
        (click)="closed.set(true)"
      >
        <ng-icon name="lucideX" size="16" />
      </button>
    }
  `,
})
export class BannerComponent {
  readonly variant = input<BannerVariant>('info')
  readonly dismissible = input(true)
  protected readonly closed = signal(false)
  protected readonly icon = computed(() => ICONS[this.variant()])
  protected readonly classes = computed(
    () => `text-foreground flex w-full items-center gap-3 border min-h-13.5 px-4 py-2.5 ${TONES[this.variant()]}`,
  )
}
