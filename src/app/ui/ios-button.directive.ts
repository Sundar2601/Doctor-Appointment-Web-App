import { computed, Directive, input } from '@angular/core'

export type IosButtonVariant = 'filled' | 'tinted' | 'plain'
export type IosButtonSize = 'large' | 'medium' | 'small'

const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold transition-opacity select-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none active:opacity-60 disabled:pointer-events-none disabled:opacity-40'
const VARIANT: Record<IosButtonVariant, string> = {
  filled: 'bg-primary text-primary-foreground',
  tinted: 'bg-primary/15 text-primary',
  plain: 'text-primary bg-transparent',
}
const SIZE: Record<IosButtonSize, string> = {
  large: 'h-[50px] min-w-[44px] rounded-[14px] px-6 text-[17px]',
  medium: 'h-[40px] min-w-[44px] rounded-[12px] px-5 text-[15px]',
  small: 'h-8 min-w-[44px] rounded-full px-3.5 text-[15px] font-medium',
}

/** Usage: `<button appIosButton variant="filled" size="large">Continue</button>`. */
@Directive({ selector: 'button[appIosButton]', host: { '[class]': 'classes()' } })
export class IosButtonDirective {
  readonly variant = input<IosButtonVariant>('filled')
  readonly size = input<IosButtonSize>('large')
  protected readonly classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${SIZE[this.size()]}`)
}
