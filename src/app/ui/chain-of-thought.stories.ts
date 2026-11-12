import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ChainOfThoughtComponent } from './chain-of-thought.component'

const steps = [
  { label: 'Searching cardiologists near Puducherry', icon: 'search' },
  { label: "Reading Dr. Raman's availability", icon: 'file' },
  { label: 'Planning the booking', icon: 'edit', active: true },
]

const meta: Meta = {
  title: 'AI/Chain of Thought',
  decorators: [moduleMetadata({ imports: [ChainOfThoughtComponent] })],
  render: () => ({ props: { steps }, template: `<app-chain-of-thought [steps]="steps" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
