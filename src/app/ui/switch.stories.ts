import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { LabelDirective } from './label.directive'
import { SwitchDirective } from './switch.directive'

interface Args {
  checked: boolean
  disabled: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/Switch',
  decorators: [moduleMetadata({ imports: [SwitchDirective, LabelDirective] })],
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { checked: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `<div class="flex items-center gap-2"><input id="sw" type="checkbox" appSwitch role="switch" [checked]="checked" [disabled]="disabled" /><label appLabel for="sw">Airplane mode</label></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const On: Story = { args: { checked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const DisabledOn: Story = { args: { disabled: true, checked: true } }
