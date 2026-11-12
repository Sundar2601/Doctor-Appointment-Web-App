// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=8-229
// source=src/app/ui/item.component.ts
// component=ItemComponent
// NOTE: the leading icon/file instance is the default [itemMedia] fallback in code, so it is not emitted.
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.getString('Title')
const description = instance.getString('Description')
const button = instance.findInstance('Button')
let actions
if (button && button.type === 'INSTANCE') {
  actions = button.executeTemplate().example
}

export default {
  example: figma.code`<app-item heading="${heading}" description="${description}">${actions}</app-item>`,
  imports: ["import { ItemComponent } from '@/ui'"],
  id: 'item',
  metadata: { nestable: true },
}
