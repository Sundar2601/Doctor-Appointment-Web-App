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
      'ui-radio border-input bg-background focus-visible:outline-ring checked:border-primary size-4 shrink-0 cursor-pointer appearance-none rounded-full border shadow-xs focus-visible:outline-[3px] focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
  },
})
export class RadioDirective {}
