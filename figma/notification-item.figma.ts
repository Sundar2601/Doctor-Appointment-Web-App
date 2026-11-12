// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=11-639
// source=src/app/ui/notification-item.component.ts
// component=NotificationItemComponent
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const unread = instance.getEnum('State', { unread: true, read: false })

// NOTE: the timestamp ("2 minutes ago") and avatar initials are not component properties, so
// `time` / `initials` are not emitted.
export default {
  example: figma.code`<app-notification-item title="${title}"${unread ? ' [unread]="true"' : ''} />`,
  imports: ["import { NotificationItemComponent } from '@/ui'"],
  id: 'notification-item',
  metadata: { nestable: true },
}
