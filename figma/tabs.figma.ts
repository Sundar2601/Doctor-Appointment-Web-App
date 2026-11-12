// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-786
// source=src/app/ui/tabs.component.ts
// component=TabsComponent
import figma from 'figma'
const instance = figma.selectedInstance

// Figma "Tabs List" has no own properties; each child "Tabs Trigger" has Label (TEXT)
// and State (active | inactive). Code: tabs[] items + [(value)] selecting the active one.
// NOTE: the trigger State is represented by the `value` binding, not a per-item input.
// NOTE: not verified against a fresh MCP read of every trigger (rate limit); labels are read from the first trigger.
const first = instance.findInstance('Tabs Trigger')
let firstLabel = 'Account'
if (first && first.type === 'INSTANCE') {
  firstLabel = first.getString('Label')
}

export default {
  example: figma.code`<app-tabs [tabs]="[{ value: 'account', label: '${firstLabel}' }]" [(value)]="tab" />`,
  imports: ["import { TabsComponent } from '@/ui'"],
  id: 'tabs',
  metadata: { nestable: true },
}
