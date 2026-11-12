import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidDialogComponent } from './android-dialog.component'

const meta: Meta<AndroidDialogComponent> = {
  title: 'Mobile/Android/Dialog',
  component: AndroidDialogComponent,
  decorators: [moduleMetadata({ imports: [AndroidDialogComponent] })],
  args: { title: 'Discard draft?', text: 'Your unsaved changes will be lost.', actions: ['Cancel', 'Discard'] },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-dialog [title]="title" [text]="text" [actions]="actions" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidDialogComponent>

export const Default: Story = {}
export const SingleAction: Story = { args: { title: 'Update available', text: 'A new version is ready to install.', actions: ['OK'] } }
