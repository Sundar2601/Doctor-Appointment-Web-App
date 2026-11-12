import { computed, Directive, input } from '@angular/core'

export type SeparatorOrientation = 'horizontal' | 'vertical'

/** Figma "Separator". Usage: `<div appSeparator></div>` or `<div appSeparator orientation="vertical" class="h-12"></div>`. */
@Directive({
  selector: '[appSeparator]',
  host: {
    '[class]': 'classes()',
    role: 'separator',
    '[attr.aria-orientation]': 'orientation()',
  },
})
export class SeparatorDirective {
  readonly orientation = input<SeparatorOrientation>('horizontal')
  protected readonly classes = computed(() => `bg-border block shrink-0 ${this.orientation() === 'vertical' ? 'h-full w-px' : 'h-px w-full'}`)
}
