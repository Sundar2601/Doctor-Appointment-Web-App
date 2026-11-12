import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export type BadgeTone = 'neutral' | 'info' | 'success' | 'danger'
const TONE: Record<BadgeTone, string> = {
  neutral: 'bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
  info: 'bg-muted text-foreground border',
  success: 'bg-foreground text-background',
  danger: 'bg-background text-foreground border border-foreground',
}

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class BadgeComponent {
  readonly tone = input<BadgeTone>('neutral')
  protected readonly classes = computed(() => `inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${TONE[this.tone()]}`)
}
