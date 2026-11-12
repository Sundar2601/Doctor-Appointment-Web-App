// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-279
// source=src/app/ui/tooltip.directive.ts
// component=TooltipDirective
// NOTE: Figma only has the tooltip bubble (Text); tooltipPosition has no Figma property and keeps its default ('top').
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text')

export default {
  example: figma.code`<button appTooltip="${text}">...</button>`,
  imports: ["import { TooltipDirective } from '@/ui'"],
  id: 'tooltip',
  metadata: { nestable: true },
}
