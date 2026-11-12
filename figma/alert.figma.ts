// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-225
// source=src/app/ui/alert.component.ts
// component=AlertComponent
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const tone = instance.getEnum('Variant', {
  default: 'default',
  destructive: 'danger',
  success: 'success',
  warning: 'warning',
  info: 'info',
})

export default {
  example: figma.code`<app-alert tone="${tone}" heading="${title}">${description}</app-alert>`,
  imports: ["import { AlertComponent } from '@/ui'"],
  id: 'alert',
  metadata: { nestable: true },
}
