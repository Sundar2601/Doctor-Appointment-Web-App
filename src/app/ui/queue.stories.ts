import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { QueueComponent } from './queue.component'

const meta: Meta<QueueComponent> = {
  title: 'AI/Queue',
  decorators: [moduleMetadata({ imports: [QueueComponent] })],
  args: {
    items: [
      { label: 'Check doctor availability', status: 'running' },
      { label: 'Reserve the slot', status: 'pending' },
      { label: 'Send reminder', status: 'done' },
    ],
  },
  render: (args) => ({ props: args, template: `<app-queue [items]="items" />` }),
}
export default meta
type Story = StoryObj<QueueComponent>

export const Default: Story = {}
