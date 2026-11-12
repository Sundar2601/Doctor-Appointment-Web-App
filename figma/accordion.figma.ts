// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=8-182
// source=src/app/ui/accordion.component.ts
// component=AccordionItemComponent
// NOTE: the body text is a plain layer (not a property) and is read by layer name; it only exists when Open=true.
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.getString('Title')
const open = instance.getEnum('Open', {
  false: false,
  true: true,
})
const body = instance.findText('Yes. It adheres to the WAI-ARIA design pattern.')
const content = open ?body.textContent : ''

export default {
  example: open
    ? figma.code`<app-accordion><app-accordion-item heading="${heading}" [open]="true">${content}</app-accordion-item></app-accordion>`
    : figma.code`<app-accordion><app-accordion-item heading="${heading}">...</app-accordion-item></app-accordion>`,
  imports: ["import { AccordionComponent, AccordionItemComponent } from '@/ui'"],
  id: 'accordion',
  metadata: { nestable: true },
}
