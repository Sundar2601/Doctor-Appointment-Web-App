import { Directive } from '@angular/core'

/**
 * Figma "Radio Group" item. Usage: `<input type="radio" appRadio name="plan" value="a">`.
 * Group radios by sharing `name`; wrap in a `role="radiogroup"` element for a11y.
 * The inner dot is in `utilities.css` (`.ui-radio`).
 */
@Directive({
  selector: 'input[type=radio][appRadio]',
  host: {
    class:
      'ui-radio border-input bg-background checked:border-primary size-4 shrink-0 cursor-pointer appearance-none rounded-full border shadow-xs focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  },
})
export class RadioDirective {}
