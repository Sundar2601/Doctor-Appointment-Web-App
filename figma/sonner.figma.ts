// url=https://www.figma.com/design/9vmLsVzl4w2ZgPde9ZldZm/Doctor-Appoinment-Design-System?node-id=7-275
// source=src/app/ui/toast.service.ts
// component=ToastService
// NOTE: Sonner is rendered by <app-toaster /> and triggered through ToastService.show(); the example shows the call.
// The title/description text layers are not component properties, so they are read from the layers by name.
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('Event has been created').textContent
const description = instance.findText('Sunday, December 03, 2023 at 9:00 AM').textContent
const action = instance.getEnum('Action', {
  false: false,
  true: true,
})

export default {
  example: action
    ? figma.code`inject(ToastService).show('${title}', { description: '${description}', actionLabel: 'Undo' })`
    : figma.code`inject(ToastService).show('${title}', { description: '${description}' })`,
  imports: ["import { ToastService } from '@/ui'"],
  id: 'sonner',
  metadata: { nestable: false },
}
