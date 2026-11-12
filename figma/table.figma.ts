// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-792
// source=src/app/ui/table.directive.ts
// component=TableDirective
import figma from 'figma'

// NOTE: Figma "Table" (53:792) is a static composition with no component properties
// (header/rows/Badge cells are plain layers), so there is nothing to map.
export default {
  example: figma.code`<table appTable>
  <thead>
    <tr><th>Invoice</th><th>Status</th><th>Method</th><th class="num">Amount</th></tr>
  </thead>
  <tbody>
    <tr><td>INV001</td><td>Paid</td><td>Credit Card</td><td class="num">$250.00</td></tr>
  </tbody>
</table>`,
  imports: ["import { TableDirective } from '@/ui'"],
  id: 'table',
  metadata: { nestable: false },
}
