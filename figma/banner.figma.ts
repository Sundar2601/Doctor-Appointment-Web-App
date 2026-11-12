// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=11-494
// source=src/app/ui/banner.component.ts
// component=BannerComponent
import figma from 'figma'
const instance = figma.selectedInstance

const message = instance.getString('Message')
const variant = instance.getEnum('Variant', {
  info: 'info',
  warning: 'warning',
  success: 'success',
  destructive: 'destructive',
})

// NOTE: the nested ghost "Button" action and the dismiss icon are not component properties; the action is
// projected via the [bannerAction] slot and dismissal is the `dismissible` input (default true).
export default {
  example: figma.code`<app-banner variant="${variant}">${message}</app-banner>`,
  imports: ["import { BannerComponent } from '@/ui'"],
  id: 'banner',
  metadata: { nestable: true },
}
