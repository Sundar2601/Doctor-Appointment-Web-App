// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=8-150
// source=src/app/ui/avatar.component.ts
// component=AvatarComponent
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', { sm: 'sm', default: 'md', lg: 'lg' })

export default {
  // `name` is required in code (initials are derived); Figma has no matching property.
  example: figma.code`<app-avatar name="Full Name" size="${size}" />`,
  imports: ["import { AvatarComponent } from '@/ui'"],
  id: 'avatar',
  metadata: { nestable: true },
}
