// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-790
// source=src/app/ui/menu.component.ts
// component=MenubarComponent
import figma from 'figma'
const instance = figma.selectedInstance

// Figma "Menubar" has no component properties; it contains four text layers (File, Edit, View, Profiles).
// Code: [menus] array of { label, entries }. Entries have no Figma counterpart here.
const file = instance.findText('File').textContent
const edit = instance.findText('Edit').textContent
const view = instance.findText('View').textContent
const profiles = instance.findText('Profiles').textContent

export default {
  example: figma.code`<app-menubar
  [menus]="[
    { label: '${file}', entries: [] },
    { label: '${edit}', entries: [] },
    { label: '${view}', entries: [] },
    { label: '${profiles}', entries: [] },
  ]"
  (selected)="onSelect($event)"
/>`,
  imports: ["import { MenubarComponent } from '@/ui'"],
  id: 'menubar',
  metadata: { nestable: true },
}
