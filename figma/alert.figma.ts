// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-225
// source=src/app/ui/alert.component.ts
// component=AlertComponent
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
// NOTE: code tones are danger | success; warning falls back to 'danger', default/info to 'success'.
const tone = instance.getEnum('Variant', {
  default: 'success',
  destructive: 'danger',
  success: 'success',
  warning: 'danger',
  info: 'success',
})

export default {
  example: figma.code`<app-alert tone="${tone}"><strong>${title}</strong> ${description}</app-alert>`,
  imports: ["import { AlertComponent } from '@/ui'"],
  id: 'alert',
  metadata: { nestable: true },
}
