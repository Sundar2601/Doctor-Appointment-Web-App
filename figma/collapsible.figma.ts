// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-796
// source=src/app/ui/collapsible.component.ts
// component=CollapsibleComponent
// NOTE: Figma "Header" has no component properties; heading comes from the text layer. The trigger Button (plus icon) is built into the code component.
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.findText('@peduarte starred 3 repositories').textContent

export default {
  example: figma.code`<app-collapsible heading="${heading}">...</app-collapsible>`,
  imports: ["import { CollapsibleComponent } from '@/ui'"],
  id: 'collapsible',
  metadata: { nestable: true },
}
