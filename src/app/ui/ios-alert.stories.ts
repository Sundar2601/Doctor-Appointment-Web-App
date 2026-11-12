import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosAlertComponent } from './ios-alert.component'

const meta: Meta<IosAlertComponent> = {
  title: 'Mobile/iOS/Alert',
  decorators: [moduleMetadata({ imports: [IosAlertComponent] })],
  args: {
    title: 'Delete this item?',
    message: 'This action cannot be undone.',
    actions: [{ label: 'Cancel' }, { label: 'Delete', destructive: true }],
  },
  render: (args) => ({ props: args, template: `<app-ios-alert [title]="title" [message]="message" [actions]="actions" />` }),
}
export default meta
type Story = StoryObj<IosAlertComponent>

export const Destructive: Story = {}
export const SingleAction: Story = { args: { title: 'Saved', message: 'Your changes were saved.', actions: [{ label: 'OK' }] } }
export const ThreeActions: Story = {
  args: { actions: [{ label: 'Delete', destructive: true }, { label: 'Archive' }, { label: 'Cancel' }] },
}
