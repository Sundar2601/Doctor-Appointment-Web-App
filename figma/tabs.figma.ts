// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-786
// source=src/app/ui/tabs.component.ts
// component=TabsComponent
// NOTE: Figma "Tabs List" has no properties; each nested "Tabs Trigger" has Label (TEXT) and State (active | inactive).
// In code the tabs are data ([tabs]) and the active one is the [(value)] binding, so this is a static example.
import figma from 'figma'

export default {
  example: figma.code`<app-tabs
  [tabs]="[
    { value: 'account', label: 'Account' },
    { value: 'password', label: 'Password' }
  ]"
  [(value)]="tab"
/>`,
  imports: ["import { TabsComponent } from '@/ui'"],
  id: 'tabs',
  metadata: { nestable: true },
}
