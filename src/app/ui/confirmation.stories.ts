import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ConfirmationComponent } from './confirmation.component'

const meta: Meta<ConfirmationComponent> = {
  title: 'AI/Confirmation',
  decorators: [moduleMetadata({ imports: [ConfirmationComponent] })],
  args: {
    title: 'Book Dr. Anand Kumar on 20 Nov at 09:30?',
    description: 'The agent wants to confirm this appointment and notify the patient by SMS.',
    approveLabel: 'Approve',
    denyLabel: 'Deny',
  },
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><app-confirmation [title]="title" [description]="description" [approveLabel]="approveLabel" [denyLabel]="denyLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ConfirmationComponent>

export const Default: Story = {}
export const CustomLabels: Story = { args: { title: 'Cancel appointment APT-1001?', approveLabel: 'Cancel it', denyLabel: 'Keep' } }
