// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=8-156
// source=src/app/ui/separator.directive.ts
// component=SeparatorDirective
import figma from 'figma'
const instance = figma.selectedInstance

const orientation = instance.getEnum('Orientation', {
  horizontal: 'horizontal',
  vertical: 'vertical',
})

export default {
  example:
    orientation === 'vertical'
      ? figma.code`<div appSeparator orientation="vertical" class="h-12"></div>`
      : figma.code`<div appSeparator></div>`,
  imports: ["import { SeparatorDirective } from '@/ui'"],
  id: 'separator',
  metadata: { nestable: true },
}
