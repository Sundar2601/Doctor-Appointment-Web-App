import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export type BadgeTone = 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
const TONE: Record<BadgeTone, string> = {
  neutral: 'bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
  primary: 'bg-primary text-primary-foreground',
  info: 'bg-info/10 text-foreground border border-info/40',
  success: 'bg-success text-white',
  warning: 'bg-warning/15 text-foreground border border-warning/50',
  danger: 'bg-destructive text-white',
}

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class BadgeComponent {
  readonly tone = input<BadgeTone>('neutral')
  protected readonly classes = computed(
    () => `inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${TONE[this.tone()]}`,
  )
}
