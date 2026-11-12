// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-780
// source=src/app/ui/input-group.component.ts
// component=InputGroupComponent
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the prefix and value are plain text layers (not properties), read by layer name.
const prefix = instance.findText('https://')
const value = instance.findText('example.com')

export default {
  example: figma.code`<app-input-group>
  <span prefix>${prefix.textContent}</span>
  <input value="${value.textContent}" />
</app-input-group>`,
  imports: ["import { InputGroupComponent } from '@/ui'"],
  id: 'input-group',
  metadata: { nestable: true },
}
