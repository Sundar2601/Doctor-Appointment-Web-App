import { computed, Directive, input } from '@angular/core'

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'icon'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50'
const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}
const SIZE: Record<ButtonSize, string> = { sm: 'h-8 px-3', md: 'h-9 px-4', icon: 'size-9' }

/** Usage: `<button appButton variant="outline" size="sm">`. Works on `button` and `a`. */
@Directive({ selector: 'button[appButton], a[appButton]', host: { '[class]': 'classes()' } })
export class ButtonDirective {
  readonly variant = input<ButtonVariant>('primary')
  readonly size = input<ButtonSize>('md')
  protected readonly classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${this.variant() === 'link' ? '' : SIZE[this.size()]}`)
}
