// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-793
// source=src/app/ui/data-table.component.ts
// component=DataTableComponent
import figma from 'figma'

// NOTE: Figma "Table" (53:793, used by the Data Table frame) has no component properties.
// The Figma design shows a checkbox column and a filter box, so those are reflected as
// selectable / filterKey. The "Columns" button and the row-action ellipsis column have no code input.
export default {
  example: figma.code`<app-data-table [columns]="columns" [rows]="rows" [selectable]="true" filterKey="email" filterPlaceholder="Filter emails..." />`,
  imports: ["import { DataTableComponent } from '@/ui'"],
  id: 'data-table',
  metadata: { nestable: false },
}
