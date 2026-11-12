import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ContextMeterComponent } from './context-meter.component'

const meta: Meta<ContextMeterComponent> = {
  title: 'AI/Context',
  decorators: [moduleMetadata({ imports: [ContextMeterComponent] })],
  args: { used: 124000, max: 200000, label: 'Context window' },
  render: (args) => ({ props: args, template: `<div class="w-80"><app-context-meter [used]="used" [max]="max" [label]="label" /></div>` }),
}
export default meta
type Story = StoryObj<ContextMeterComponent>

export const Default: Story = {}
export const AlmostFull: Story = { args: { used: 189000 } }
export const Empty: Story = { args: { used: 2000 } }
