// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=5-337
// source=src/app/ui/toggle.directive.ts
// component=ToggleDirective
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { default: 'default', outline: 'outline' })
// NOTE: Figma 'default' size is the code's 'md'.
const size = instance.getEnum('Size', { default: 'md', sm: 'sm', lg: 'lg' })
// NOTE: 'on' -> pressed; 'hover' and 'focus' are visual only; 'disabled' -> native attribute.
const state = instance.getEnum('State', { off: 'off', on: 'on', hover: 'off', focus: 'off', disabled: 'disabled' })

export default {
  example: figma.code`<button appToggle variant="${variant}" size="${size}"${state === 'on' ? ' [pressed]="true"' : ''}${state === 'disabled' ? ' disabled' : ''}>${label}</button>`,
  imports: ["import { ToggleDirective } from '@/ui'"],
  id: 'toggle',
  metadata: { nestable: true },
}
