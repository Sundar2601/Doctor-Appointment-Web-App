// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-777
// source=src/app/ui/toggle-group.component.ts
// component=ToggleGroupComponent
// NOTE: Figma has no properties on the group; the nested Toggle labels are not exposed as properties, so this is a static example.
import figma from 'figma'

export default {
  example: figma.code`<app-toggle-group type="multiple" [(value)]="selected">
  <button appToggleGroupItem value="bold">Bold</button>
  <button appToggleGroupItem value="italic">Italic</button>
  <button appToggleGroupItem value="underline">Underline</button>
</app-toggle-group>`,
  imports: ["import { ToggleGroupComponent, ToggleGroupItemDirective } from '@/ui'"],
  id: 'toggle-group',
  metadata: { nestable: true },
}
