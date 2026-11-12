// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=9-333
// source=src/app/ui/drawer.component.ts
// component=DrawerComponent
// NOTE: Figma has no properties; title/description are plain text layers read by layer name. The goal stepper body is not mapped.
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.findText('Move Goal')
const description = instance.findText('Set your daily activity goal.')

export default {
  example: figma.code`<app-drawer [(open)]="open" heading="${heading.textContent}" description="${description.textContent}">
  ...
  <div drawerFooter><button appButton>Submit</button></div>
</app-drawer>`,
  imports: ["import { DrawerComponent, ButtonDirective } from '@/ui'"],
  id: 'drawer',
  metadata: { nestable: true },
}
