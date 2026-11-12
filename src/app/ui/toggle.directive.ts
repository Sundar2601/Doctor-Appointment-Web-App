import { computed, Directive, input, model } from '@angular/core'

export type ToggleVariant = 'default' | 'outline'
export type ToggleSize = 'sm' | 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-accent aria-pressed:text-accent-foreground'
const VARIANT: Record<ToggleVariant, string> = {
  default: '',
  outline: 'border border-input bg-background shadow-xs focus-visible:border-ring',
}
const SIZE: Record<ToggleSize, string> = { sm: 'h-8 min-w-8 px-1.5', md: 'h-9 min-w-9 px-2', lg: 'h-10 min-w-10 px-2.5' }

/** Figma "Toggle" (two-state button). Usage: `<button appToggle [(pressed)]="bold">Bold</button>`. */
@Directive({
  selector: 'button[appToggle]',
  host: {
    type: 'button',
    '[class]': 'classes()',
    '[attr.aria-pressed]': 'pressed()',
    '(click)': 'pressed.set(!pressed())',
  },
})
export class ToggleDirective {
  readonly pressed = model(false)
  readonly variant = input<ToggleVariant>('default')
  readonly size = input<ToggleSize>('md')
  protected readonly classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${SIZE[this.size()]}`)
}
