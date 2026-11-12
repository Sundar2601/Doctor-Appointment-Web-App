// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=9-349
// source=src/app/ui/popover.component.ts
// component=PopoverComponent
// NOTE: Figma has no properties; the panel body (dimension fields) is not mapped. Content is projected.
import figma from 'figma'

export default {
  example: figma.code`<app-popover [(open)]="open">
  <button trigger appButton variant="outline">Open popover</button>
  ...
</app-popover>`,
  imports: ["import { PopoverComponent, ButtonDirective } from '@/ui'"],
  id: 'popover',
  metadata: { nestable: true },
}
