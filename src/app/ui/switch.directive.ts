import { Directive } from '@angular/core'

/**
 * Figma "Switch" (32×18 track, 14px thumb). Usage: `<input type="checkbox" appSwitch>`.
 * The thumb is in `utilities.css` (`.ui-switch`).
 */
@Directive({
  selector: 'input[type=checkbox][appSwitch]',
  host: {
    role: 'switch',
    class:
      'ui-switch bg-input checked:bg-primary h-[18px] w-8 shrink-0 border border-transparent cursor-pointer appearance-none rounded-full transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  },
})
export class SwitchDirective {}
