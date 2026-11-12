import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideInfo, lucideX } from '@ng-icons/lucide'

/** Full-width announcement bar. Content is projected. */
@Component({
  selector: 'app-banner',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideInfo, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[hidden]': 'closed()', role: 'status' },
  template: `
    <ng-icon name="lucideInfo" size="16" class="shrink-0" />
    <div class="flex-1 text-sm"><ng-content /></div>
    <ng-content select="[bannerAction]" />
    @if (dismissible()) {
      <button type="button" class="hover:bg-foreground/10 inline-flex size-6 items-center justify-center rounded-md" aria-label="Dismiss" (click)="closed.set(true)"><ng-icon name="lucideX" size="14" /></button>
    }
  `,
})
export class BannerComponent {
  readonly tone = input<'default' | 'muted'>('default')
  readonly dismissible = input(true)
  protected readonly closed = signal(false)
  protected readonly classes = computed(() => `flex w-full items-center gap-3 rounded-md px-4 py-2.5 ${this.tone() === 'default' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground border'}`)
}
