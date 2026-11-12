// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-253
// source=src/app/ui/progress.component.ts
// component=ProgressComponent
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getEnum('Value', { '0': 0, '33': 33, '66': 66, '100': 100 })

export default {
  example: figma.code`<app-progress [value]="${value}" />`,
  imports: ["import { ProgressComponent } from '@/ui'"],
  id: 'progress',
  metadata: { nestable: true },
}
