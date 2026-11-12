// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=10-400
// source=src/app/ui/calendar.component.ts
// component=CalendarComponent
import figma from 'figma'
const instance = figma.selectedInstance

// Figma "Calendar Day" (10:400) is a single day cell; the code has no separate day component, only <app-calendar>.
// State: default | today | selected | outside | range | disabled
//  - selected  -> bound via [(value)]
//  - today / outside -> derived automatically by the component
//  - range / disabled -> no code equivalent (omitted)
// The "Day" text property is derived from the date, so it is not emitted.
const selected = instance.getEnum('State', {
  default: false,
  today: false,
  selected: true,
  outside: false,
  range: false,
  disabled: false,
})

export default {
  example: figma.code`<app-calendar${selected ? ' [(value)]="selectedDate"' : ''} />`,
  imports: ["import { CalendarComponent } from '@/ui'"],
  id: 'calendar',
  metadata: { nestable: false },
}
