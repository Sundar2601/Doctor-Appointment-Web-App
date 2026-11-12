// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=5-267
// source=src/app/ui/button.directive.ts
// component=ButtonDirective
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// NOTE: code has no 'destructive' / 'secondary' variant; they fall back to the closest style.
const variant = instance.getEnum('Variant', {
  default: 'primary',
  destructive: 'primary',
  outline: 'outline',
  secondary: 'outline',
  ghost: 'ghost',
  link: 'link',
})
// NOTE: code has no 'lg' size; falls back to 'md'.
const size = instance.getEnum('Size', { default: 'md', sm: 'sm', lg: 'md', icon: 'icon' })
const disabled = instance.getEnum('State', { default: false, hover: false, focus: false, disabled: true })

export default {
  example: figma.code`<button appButton variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>${label}</button>`,
  imports: ["import { ButtonDirective } from '@/ui'"],
  id: 'button',
  metadata: { nestable: true },
}
