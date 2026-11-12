import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AlertDialogComponent } from './alert-dialog.component'
import { ButtonDirective } from './button.directive'

const meta: Meta<AlertDialogComponent> = {
  title: 'Overlays/Alert Dialog',
  component: AlertDialogComponent,
  decorators: [moduleMetadata({ imports: [AlertDialogComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
  },
  args: {
    heading: 'Cancel this appointment?',
    description: 'This action cannot be undone. The slot will be released to other patients.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
  },
  render: (args) => ({
    props: { ...args, open: false, result: '' },
    template: `
      <button appButton variant="outline" (click)="open = true">Open alert dialog</button>
      <app-alert-dialog [heading]="heading" [description]="description" [confirmLabel]="confirmLabel" [cancelLabel]="cancelLabel"
        [(open)]="open" (confirm)="result = 'Confirmed'" (cancel)="result = 'Cancelled'" />
      <p class="mt-4 text-sm">Result: {{ result || 'none' }}</p>
    `,
  }),
}
export default meta
type Story = StoryObj<AlertDialogComponent>

export const Default: Story = {}
export const Destructive: Story = {
  args: { heading: 'Delete account?', description: 'All your data will be permanently removed.', confirmLabel: 'Delete', cancelLabel: 'Keep account' },
}
