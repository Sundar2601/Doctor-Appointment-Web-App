// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=6-214
// source=src/app/ui/date-picker.component.ts
// component=DatePickerComponent
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: 'filled' shows a date in Figma; the code's value is bound by the consumer, so both states emit the same binding.
const filled = instance.getEnum('State', { empty: false, filled: true })

export default {
  example: filled
    ? figma.code`<app-date-picker [(value)]="date" />`
    : figma.code`<app-date-picker [(value)]="date" placeholder="Pick a date" />`,
  imports: ["import { DatePickerComponent } from '@/ui'"],
  id: 'date-picker',
  metadata: { nestable: true },
}
