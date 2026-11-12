// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-241
// source=src/app/ui/badge.component.ts
// component=BadgeComponent
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// NOTE: code tones are neutral | info | success | danger; 'warning' falls back to 'danger'.
const tone = instance.getEnum('Variant', {
  default: 'neutral',
  secondary: 'info',
  destructive: 'danger',
  outline: 'info',
  success: 'success',
  warning: 'danger',
})

export default {
  example: figma.code`<app-badge tone="${tone}">${label}</app-badge>`,
  imports: ["import { BadgeComponent } from '@/ui'"],
  id: 'badge',
  metadata: { nestable: true },
}
