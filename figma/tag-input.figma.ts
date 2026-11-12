// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-794
// source=src/app/ui/tag-input.component.ts
// component=TagInputComponent
import figma from 'figma'

// NOTE: Figma "Tag Input" (53:794) has no component properties; tag chips and the placeholder are plain layers.
export default {
  example: figma.code`<app-tag-input [(tags)]="tags" placeholder="Add tag..." />`,
  imports: ["import { TagInputComponent } from '@/ui'"],
  id: 'tag-input',
  metadata: { nestable: true },
}
