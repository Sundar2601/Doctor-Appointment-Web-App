import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TimelineComponent, TimelineItem } from './timeline.component'

const items: TimelineItem[] = [
  { title: 'Appointment booked', description: 'Dr. Anand Kumar, Cardiology at JIPMER', time: '12 Nov, 10:02 AM' },
  { title: 'Confirmation sent', description: 'SMS sent to the registered mobile number', time: '12 Nov, 10:03 AM' },
  { title: 'Reminder', description: 'Please arrive 15 minutes early with your ID', time: '19 Nov, 06:00 PM' },
  { title: 'Consultation', time: '20 Nov, 09:30 AM' },
]

const meta: Meta<TimelineComponent> = {
  title: 'Data/Timeline',
  decorators: [moduleMetadata({ imports: [TimelineComponent] })],
  args: { items },
  render: (args) => ({ props: args, template: `<div class="w-96"><app-timeline [items]="items" /></div>` }),
}
export default meta
type Story = StoryObj<TimelineComponent>

export const Default: Story = {}
export const Minimal: Story = {
  args: { items: [{ title: 'Checked in' }, { title: 'Seen by doctor' }, { title: 'Discharged' }] },
}
