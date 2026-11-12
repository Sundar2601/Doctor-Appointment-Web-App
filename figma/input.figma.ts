// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=6-71
// source=src/app/ui/control.directive.ts
// component=ControlDirective
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Text')
const state = instance.getEnum('State', {
  default: 'default',
  focus: 'default',
  filled: 'default',
  disabled: 'disabled',
  error: 'error',
})

export default {
  example: figma.code`<input appControl placeholder="${placeholder}"${state === 'disabled' ? ' disabled' : ''}${state === 'error' ? ' aria-invalid="true"' : ''} />`,
  imports: ["import { ControlDirective } from '@/ui'"],
  id: 'input',
  metadata: { nestable: true },
}
