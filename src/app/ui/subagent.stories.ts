import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SubagentComponent } from './subagent.component'

const meta: Meta<SubagentComponent> = {
  title: 'AI/Subagent',
  decorators: [moduleMetadata({ imports: [SubagentComponent] })],
  argTypes: { state: { control: 'select', options: ['running', 'done', 'error'] } },
  args: { name: 'Slot finder', state: 'done', result: 'Checked 4 doctors and found 9 open slots this week.' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[460px]"><app-subagent [name]="name" [state]="state" [result]="result" /></div>`,
  }),
}
export default meta
type Story = StoryObj<SubagentComponent>

export const Done: Story = {}
export const Running: Story = { args: { state: 'running', result: 'Checking doctor calendars…' } }
export const Failed: Story = { args: { state: 'error', result: 'Calendar API returned 503.' } }
