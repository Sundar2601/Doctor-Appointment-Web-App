// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=5-267
// source=src/app/ui/button.directive.ts
// component=ButtonDirective
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  default: 'primary',
  destructive: 'destructive',
  outline: 'outline',
  secondary: 'secondary',
  ghost: 'ghost',
  link: 'link',
})
const size = instance.getEnum('Size', { default: 'md', sm: 'sm', lg: 'lg', icon: 'icon' })
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, disabled: true })

export default {
  example: figma.code`<button appButton variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>${label}</button>`,
  imports: ["import { ButtonDirective } from '@/ui'"],
  id: 'button',
  metadata: { nestable: true },
}
