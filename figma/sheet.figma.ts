// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=9-315
// source=src/app/ui/sheet.component.ts
// component=SheetComponent
// NOTE: Figma has no properties; title/description are plain text layers read by layer name. The form body is not mapped.
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.findText('Edit profile')
const description = instance.findText("Make changes to your profile here. Click save when you're done.")

export default {
  example: figma.code`<app-sheet [(open)]="open" side="right" heading="${heading.textContent}" description="${description.textContent}">
  ...
  <div sheetFooter><button appButton>Save changes</button></div>
</app-sheet>`,
  imports: ["import { SheetComponent, ButtonDirective } from '@/ui'"],
  id: 'sheet',
  metadata: { nestable: true },
}
