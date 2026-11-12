// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=6-85
// source=src/app/ui/textarea.directive.ts
// component=TextareaDirective
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Text')
// NOTE: the directive has no inputs. 'error' -> aria-invalid (styled by the directive), 'disabled' -> native attribute; 'focus' is visual only.
const state = instance.getEnum('State', { default: 'default', focus: 'default', disabled: 'disabled', error: 'error' })

export default {
  example: figma.code`<textarea appTextarea placeholder="${placeholder}"${state === 'error' ? ' aria-invalid="true"' : ''}${state === 'disabled' ? ' disabled' : ''}></textarea>`,
  imports: ["import { TextareaDirective } from '@/ui'"],
  id: 'textarea',
  metadata: { nestable: true },
}
