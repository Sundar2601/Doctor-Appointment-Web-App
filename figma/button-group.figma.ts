// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-779
// source=src/app/ui/button-group.component.ts
// component=ButtonGroupComponent
// NOTE: Figma has no properties on the group (3 outline Buttons); static example.
import figma from 'figma'

export default {
  example: figma.code`<app-button-group>
  <button appButton variant="outline">Button</button>
  <button appButton variant="outline">Button</button>
  <button appButton variant="outline">Button</button>
</app-button-group>`,
  imports: ["import { ButtonGroupComponent, ButtonDirective } from '@/ui'"],
  id: 'button-group',
  metadata: { nestable: true },
}
