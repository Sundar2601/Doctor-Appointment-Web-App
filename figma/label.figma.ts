// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=6-54
// source=src/app/ui/label.directive.ts
// component=LabelDirective
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text')

export default {
  example: figma.code`<label appLabel>${text}</label>`,
  imports: ["import { LabelDirective } from '@/ui'"],
  id: 'label',
  metadata: { nestable: true },
}
