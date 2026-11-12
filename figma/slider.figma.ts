// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-181
// source=src/app/ui/slider.directive.ts
// component=SliderDirective
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the directive has no inputs. 'State=disabled' -> `disabled`; 'focus' is visual only.
const disabled = instance.getEnum('State', { default: false, focus: false, disabled: true })

export default {
  example: figma.code`<input type="range" appSlider min="0" max="100"${disabled ? ' disabled' : ''} />`,
  imports: ["import { SliderDirective } from '@/ui'"],
  id: 'slider',
  metadata: { nestable: true },
}
