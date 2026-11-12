import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ReasoningComponent } from './reasoning.component'

const meta: Meta = {
  args: { streaming: false },
  title: 'AI/Reasoning',
  decorators: [moduleMetadata({ imports: [ReasoningComponent] })],
  render: (args) => ({
    props: args,
    template: `<app-reasoning [duration]="6" [streaming]="streaming"><p>Dr. Raman has the earliest cardiology opening in Puducherry on Thursday, and the patient prefers mornings, so I am suggesting the 10:30 AM slot.</p></app-reasoning>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}

export const Streaming: Story = { args: { streaming: true } }
