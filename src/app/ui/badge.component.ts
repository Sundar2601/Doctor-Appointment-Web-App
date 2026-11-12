import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export type BadgeTone =
  'neutral' | 'primary' | 'outline' | 'info' | 'success' | 'warning' | 'danger' | 'default' | 'secondary' | 'destructive'
const TONE: Record<BadgeTone, string> = {
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
    () =>
      `inline-flex w-fit items-center rounded-md border border-transparent px-2 py-0.5 text-xs font-normal whitespace-nowrap ${TONE[this.tone()]}`,
  )
}
