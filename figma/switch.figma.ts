// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-164
// source=src/app/ui/switch.directive.ts
// component=SwitchDirective
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the directive has no inputs. 'Checked' -> native `checked`, 'State=disabled' -> `disabled`; 'focus' is visual only.
const checked = instance.getEnum('Checked', { false: false, true: true })
const disabled = instance.getEnum('State', { default: false, focus: false, disabled: true })

export default {
  example: figma.code`<input type="checkbox" appSwitch${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ["import { SwitchDirective } from '@/ui'"],
  id: 'switch',
  metadata: { nestable: true },
}
