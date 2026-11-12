import { computed, Directive, input } from '@angular/core'

export type ButtonVariant = 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-white hover:bg-destructive/90',
  outline: 'border bg-background shadow-xs focus-visible:border-ring hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}
const SIZE: Record<ButtonSize, string> = { sm: 'h-8 px-3', md: 'h-9 px-4', lg: 'h-10 px-6', icon: 'size-9' }

/** Usage: `<button appButton variant="outline" size="sm">`. Works on `button` and `a`. */
@Directive({ selector: 'button[appButton], a[appButton]', host: { '[class]': 'classes()' } })
export class ButtonDirective {
  readonly variant = input<ButtonVariant>('primary')
  readonly size = input<ButtonSize>('md')
  protected readonly classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${this.variant() === 'link' ? '' : SIZE[this.size()]}`)
}
