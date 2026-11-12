import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ProgressComponent } from './progress.component'

const meta: Meta<ProgressComponent> = {
  title: 'Feedback/Progress',
  decorators: [moduleMetadata({ imports: [ProgressComponent] })],
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { value: 60 },
  render: (args) => ({ props: args, template: `<div class="w-80"><app-progress [value]="value" /></div>` }),
}
export default meta
type Story = StoryObj<ProgressComponent>

export const Default: Story = {}
export const Empty: Story = { args: { value: 0 } }
export const Complete: Story = { args: { value: 100 } }
