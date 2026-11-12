import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AlertComponent } from './alert.component'

const meta: Meta<AlertComponent> = {
  title: 'Feedback/Alert',
  decorators: [moduleMetadata({ imports: [AlertComponent] })],
  argTypes: { tone: { control: 'select', options: ['danger', 'success'] } },
  args: { tone: 'danger' },
  render: (args) => ({ props: args, template: `<app-alert [tone]="tone">Something went wrong. Please try again.</app-alert>` }),
}
export default meta
type Story = StoryObj<AlertComponent>

export const Danger: Story = {}
export const Success: Story = {
  args: { tone: 'success' },
  render: (args) => ({ props: args, template: `<app-alert [tone]="tone">Your appointment has been booked.</app-alert>` }),
}
