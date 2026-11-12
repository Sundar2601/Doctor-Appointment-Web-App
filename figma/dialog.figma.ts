// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=9-288
// source=src/app/ui/dialog.component.ts
// component=DialogComponent
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.getString('Title')
const description = instance.getString('Description')
// NOTE: the footer Buttons and close icon are built into the code component / projected via [dialogFooter].

export default {
  example: figma.code`<app-dialog [(open)]="open" heading="${heading}" description="${description}">
  ...
  <div dialogFooter><button appButton>Save changes</button></div>
</app-dialog>`,
  imports: ["import { DialogComponent, ButtonDirective } from '@/ui'"],
  id: 'dialog',
  metadata: { nestable: true },
}
