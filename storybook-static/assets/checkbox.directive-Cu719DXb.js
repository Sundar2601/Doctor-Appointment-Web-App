import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';

/**
 * Figma "Checkbox": unchecked / checked / indeterminate × default / focus / disabled.
 * Usage: `<input type="checkbox" appCheckbox>`. Set `el.indeterminate = true` for the indeterminate state.
 * The check / minus glyphs are in `utilities.css` (`.ui-checkbox`).
 */
let CheckboxDirective = class CheckboxDirective {
};
CheckboxDirective = __decorate([
    Directive({
        selector: 'input[type=checkbox][appCheckbox]',
        host: {
            class: 'ui-checkbox border-input bg-background checked:bg-primary checked:border-primary indeterminate:bg-primary indeterminate:border-primary size-4 shrink-0 cursor-pointer appearance-none rounded-[4px] border shadow-xs focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        },
    })
], CheckboxDirective);

export { CheckboxDirective as C };
