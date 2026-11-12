// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-241
// source=src/app/ui/badge.component.ts
// component=BadgeComponent
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const tone = instance.getEnum('Variant', {
  default: 'primary',
  secondary: 'neutral',
  destructive: 'danger',
  outline: 'outline',
  success: 'success',
  warning: 'warning',
})

export default {
  example: figma.code`<app-badge tone="${tone}">${label}</app-badge>`,
  imports: ["import { BadgeComponent } from '@/ui'"],
  id: 'badge',
  metadata: { nestable: true },
}
