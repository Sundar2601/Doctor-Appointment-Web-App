import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { NotificationItemComponent } from './notification-item.component'

const meta: Meta<NotificationItemComponent> = {
  title: 'Display/Notification Item',
  decorators: [moduleMetadata({ imports: [NotificationItemComponent] })],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    time: { control: 'text' },
    initials: { control: 'text' },
    unread: { control: 'boolean' },
  },
  args: { title: 'Appointment confirmed', description: 'Dr. Smith confirmed your visit on Tuesday.', time: '2 hours ago', unread: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><app-notification-item [title]="title" [description]="description" [time]="time" [initials]="initials" [unread]="unread" /></div>`,
  }),
}
export default meta
type Story = StoryObj<NotificationItemComponent>

export const Read: Story = {}
export const Unread: Story = { args: { unread: true } }
export const WithInitials: Story = { args: { initials: 'JS', unread: true } }
