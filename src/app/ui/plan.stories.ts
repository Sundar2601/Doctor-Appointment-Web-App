import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { PlanComponent } from './plan.component'

const meta: Meta<PlanComponent> = {
  title: 'AI/Plan',
  decorators: [moduleMetadata({ imports: [PlanComponent] })],
  args: {
    title: 'Book a follow-up appointment',
    steps: [
      { label: 'Look up the patient record', done: true },
      { label: 'Find open slots for Dr. Anand Kumar', done: true },
      { label: 'Reserve the chosen slot' },
      { label: 'Send the confirmation SMS' },
    ],
  },
  render: (args) => ({ props: args, template: `<div class="w-[420px]"><app-plan [title]="title" [steps]="steps" /></div>` }),
}
export default meta
type Story = StoryObj<PlanComponent>

export const Default: Story = {}
export const Complete: Story = {
  args: {
    steps: [
      { label: 'Find open slots', done: true },
      { label: 'Reserve the slot', done: true },
    ],
  },
}
