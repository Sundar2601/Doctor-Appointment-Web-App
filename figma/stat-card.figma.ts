// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=11-540
// source=src/app/ui/stat-card.component.ts
// component=StatCardComponent
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const trend = instance.getEnum('Trend', { up: 'up', down: 'down' })

// NOTE: the delta chip text (e.g. "12.5%") and caption (e.g. "Trending up this month") are plain text layers
// without component properties, so `delta` / `hint` are not emitted.
export default {
  example: figma.code`<app-stat-card label="${label}" value="${value}" trend="${trend}" />`,
  imports: ["import { StatCardComponent } from '@/ui'"],
  id: 'stat-card',
  metadata: { nestable: true },
}
