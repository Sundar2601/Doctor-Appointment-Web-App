import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ControlDirective } from './control.directive'
import { LabelDirective } from './label.directive'

interface Args { text: string }

const meta: Meta<Args> = {
  title: 'Forms/Label',
  decorators: [moduleMetadata({ imports: [LabelDirective, ControlDirective] })],
  argTypes: { text: { control: 'text' } },
  args: { text: 'Email address' },
  render: (args) => ({ props: args, template: `<label appLabel>{{ text }}</label>` }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithInput: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="grid w-64 gap-1.5"><label appLabel for="em">{{ text }}</label><input id="em" appControl placeholder="you@example.com" /></div>`,
  }),
}
