// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=53-795
// source=src/app/ui/avatar-group.component.ts
// component=AvatarGroupComponent
import figma from 'figma'

// NOTE: Figma "Avatar Group" (53:795) has no component properties; avatars and the "+3" chip are plain layers.
// max=3 mirrors the three visible avatars before the overflow chip.
export default {
  example: figma.code`<app-avatar-group [names]="names" [max]="3" />`,
  imports: ["import { AvatarGroupComponent } from '@/ui'"],
  id: 'avatar-group',
  metadata: { nestable: true },
}
