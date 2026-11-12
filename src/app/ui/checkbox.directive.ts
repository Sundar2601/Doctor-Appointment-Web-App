import { Directive } from '@angular/core'

/**
 * Figma "Checkbox": unchecked / checked / indeterminate × default / focus / disabled.
 * Usage: `<input type="checkbox" appCheckbox>`. Set `el.indeterminate = true` for the indeterminate state.
 * The check / minus glyphs are in `utilities.css` (`.ui-checkbox`).
 */
@Directive({
  selector: 'input[type=checkbox][appCheckbox]',
  host: {
    class:
      'ui-checkbox border-input bg-background focus-visible:outline-ring checked:bg-primary checked:border-primary indeterminate:bg-primary indeterminate:border-primary size-4 shrink-0 cursor-pointer appearance-none rounded-xs border shadow-xs focus-visible:outline-[3px] focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
  },
})
export class CheckboxDirective {}
