// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=11-315
// source=src/app/ui/stepper.component.ts
// component=StepperComponent
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
// A Figma "Step" is one item of <app-stepper>. Single-step snippet: `current` is the zero-based active step,
// so complete = 1 (past index 0), current = 0, upcoming = -1 (before index 0).
const current = instance.getEnum('State', { complete: '1', current: '0', upcoming: '-1' })

export default {
  example: figma.code`<app-stepper [steps]="[{ title: '${title}', description: '${description}' }]" [current]="${current}" />`,
  imports: ["import { StepperComponent } from '@/ui'"],
  id: 'stepper',
  metadata: { nestable: true },
}
