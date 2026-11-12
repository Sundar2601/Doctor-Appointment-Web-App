import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidSnackbarComponent } from './android-snackbar.component'

const meta: Meta<AndroidSnackbarComponent> = {
  title: 'Mobile/Android/Snackbar',
  component: AndroidSnackbarComponent,
  decorators: [moduleMetadata({ imports: [AndroidSnackbarComponent] })],
  args: { message: 'Message archived', action: 'Undo' },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-snackbar [message]="message" [action]="action" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidSnackbarComponent>

export const Default: Story = {}
export const WithoutAction: Story = { args: { action: undefined } }
