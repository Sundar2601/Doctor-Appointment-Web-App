// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=8-118
// source=src/app/ui/card.component.ts
// component=CardComponent
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const content = instance.getString('Content')

export default {
  example: figma.code`<app-card heading="${title}" description="${description}">${content}</app-card>`,
  imports: ["import { CardComponent } from '@/ui'"],
  id: 'card',
  metadata: { nestable: true },
}
