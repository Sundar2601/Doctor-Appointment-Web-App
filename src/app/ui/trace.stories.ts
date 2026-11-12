import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TraceComponent } from './trace.component'

const steps = [
  { label: 'Searching cardiologists in Puducherry', status: 'done' },
  { label: 'Checking Thursday availability', status: 'done' },
  { label: 'Holding the 10:30 AM slot', status: 'running' },
  { label: 'Sending confirmation SMS', status: 'pending' },
]

const meta: Meta = {
  title: 'AI/Trace',
  decorators: [moduleMetadata({ imports: [TraceComponent] })],
  render: () => ({ props: { steps }, template: `<app-trace [steps]="steps" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
