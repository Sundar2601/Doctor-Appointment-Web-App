import { Directive, computed, input } from '@angular/core'

export type AndroidButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'

const VARIANTS: Record<AndroidButtonVariant, string> = {
  filled: 'bg-primary text-primary-foreground hover:bg-primary/90 px-6',
  tonal: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6',
  outlined: 'border-border text-primary hover:bg-accent border px-6',
  text: 'text-primary hover:bg-accent px-3',
  elevated: 'bg-card text-primary hover:bg-accent px-6 shadow-md',
}

/** Material 3 button (40dp, fully rounded). Use on a native `<button>`. */
@Directive({
  selector: 'button[appAndroidButton]',
  host: {
    '[class]': 'classes()',
    '[attr.type]': 'type',
  },
})
export class AndroidButtonDirective {
  readonly variant = input<AndroidButtonVariant>('filled')
  protected readonly type = 'button'

  protected readonly classes = computed(
    () =>
      `inline-flex h-10 items-center justify-center gap-2 rounded-full text-sm font-medium disabled:pointer-events-none disabled:opacity-40 ${VARIANTS[this.variant()]}`,
  )
}
