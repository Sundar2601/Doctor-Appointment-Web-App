// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=6-178
// source=src/app/ui/combobox.component.ts
// component=ComboboxComponent
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Value')
// NOTE: 'State' (closed/open) is runtime state in code and is not emitted; options come from data.

export default {
  example: figma.code`<app-combobox [options]="options" [(value)]="value" placeholder="${placeholder}" />`,
  imports: ["import { ComboboxComponent } from '@/ui'"],
  id: 'combobox',
  metadata: { nestable: true },
}
