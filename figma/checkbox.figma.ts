// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-120
// source=src/app/ui/checkbox.directive.ts
// component=CheckboxDirective
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the directive has no inputs. 'checked' maps to the native `checked` attribute;
// 'indeterminate' has no attribute equivalent (set `el.indeterminate = true` in code), so it is flagged in a comment.
const checked = instance.getEnum('Checked', { unchecked: 'unchecked', checked: 'checked', indeterminate: 'indeterminate' })
// NOTE: 'focus' is a visual state only (:focus-visible); 'disabled' maps to the native attribute.
const disabled = instance.getEnum('State', { default: false, focus: false, disabled: true })

export default {
  example: figma.code`<input type="checkbox" appCheckbox${checked === 'checked' ? ' checked' : ''}${disabled ? ' disabled' : ''} />${checked === 'indeterminate' ? ' <!-- set el.indeterminate = true -->' : ''}`,
  imports: ["import { CheckboxDirective } from '@/ui'"],
  id: 'checkbox',
  metadata: { nestable: true },
}
