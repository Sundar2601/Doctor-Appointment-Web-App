// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-135
// source=src/app/ui/radio.directive.ts
// component=RadioDirective
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the directive has no inputs. 'Checked' maps to the native `checked` attribute, 'State=disabled' to `disabled`.
// 'State=focus' is a visual state only (:focus-visible) and is not emitted.
const checked = instance.getEnum('Checked', { false: false, true: true })
const disabled = instance.getEnum('State', { default: false, focus: false, disabled: true })

export default {
  example: figma.code`<input type="radio" appRadio name="group"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ["import { RadioDirective } from '@/ui'"],
  id: 'radio',
  metadata: { nestable: true },
}
