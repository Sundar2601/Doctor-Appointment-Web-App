// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-787
// source=src/app/ui/breadcrumb.component.ts
// component=BreadcrumbComponent
import figma from 'figma'
const instance = figma.selectedInstance

// NOTE: the crumbs are plain text layers (not properties), read by layer name.
const first = instance.findText('Home')
const second = instance.findText('Components')
const current = instance.findText('Breadcrumb')

export default {
  example: figma.code`<app-breadcrumb [items]="[
  { label: '${first.textContent}', href: '/' },
  { label: '${second.textContent}', href: '/components' },
  { label: '${current.textContent}' }
]" />`,
  imports: ["import { BreadcrumbComponent } from '@/ui'"],
  id: 'breadcrumb',
  metadata: { nestable: true },
}
