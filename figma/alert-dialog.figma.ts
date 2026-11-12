// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=9-303
// source=src/app/ui/alert-dialog.component.ts
// component=AlertDialogComponent
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.getString('Title')
const description = instance.getString('Description')
// NOTE: the Cancel / Continue buttons are rendered by the component via confirmLabel / cancelLabel.

export default {
  example: figma.code`<app-alert-dialog [(open)]="open" heading="${heading}" description="${description}" (confirm)="onConfirm()" />`,
  imports: ["import { AlertDialogComponent } from '@/ui'"],
  id: 'alert-dialog',
  metadata: { nestable: true },
}
