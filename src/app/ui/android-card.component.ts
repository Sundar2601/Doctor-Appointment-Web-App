import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export type AndroidCardVariant = 'filled' | 'elevated' | 'outlined'

const VARIANTS: Record<AndroidCardVariant, string> = {
  filled: 'bg-secondary',
  elevated: 'bg-card shadow-sm',
  outlined: 'bg-card border-border border',
}

/** Material 3 card (12dp radius). Project any content. */
@Component({
  selector: 'app-android-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: `<ng-content />`,
})
export class AndroidCardComponent {
  readonly variant = input<AndroidCardVariant>('filled')
  protected readonly classes = computed(() => `text-card-foreground block rounded-xl p-4 ${VARIANTS[this.variant()]}`)
}
