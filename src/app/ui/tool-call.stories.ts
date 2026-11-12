import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ToolCallComponent } from './tool-call.component'

const meta: Meta<ToolCallComponent> = {
  title: 'AI/Tool Call',
  decorators: [moduleMetadata({ imports: [ToolCallComponent] })],
  argTypes: { state: { control: 'select', options: ['pending', 'running', 'completed', 'error'] } },
  args: {
    name: 'find_slots',
    state: 'completed',
    parameters: '{ "doctor": "Dr. Anand Kumar", "date": "2026-11-20" }',
    result: '3 slots available: 09:30, 11:00, 14:15',
  },
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><app-tool-call [name]="name" [state]="state" [parameters]="parameters" [result]="result" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ToolCallComponent>

export const Completed: Story = {}
export const Running: Story = { args: { state: 'running', result: undefined } }
export const Pending: Story = { args: { state: 'pending', result: undefined } }
export const Failed: Story = { args: { state: 'error', result: 'Calendar service timed out after 30s' } }
