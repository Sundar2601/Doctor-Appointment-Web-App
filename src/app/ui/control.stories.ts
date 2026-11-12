import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ControlDirective } from './control.directive'

interface Args {
  placeholder: string
  value: string
  type: string
  disabled: boolean
  invalid: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/Input',
  decorators: [moduleMetadata({ imports: [ControlDirective] })],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  args: { placeholder: 'Email', value: '', type: 'text', disabled: false, invalid: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-72"><input appControl aria-label="Input" [type]="type" [placeholder]="placeholder" [value]="value" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Filled: Story = { args: { value: 'jane@example.com' } }
export const Invalid: Story = { args: { invalid: true, value: 'not-an-email' } }
export const Disabled: Story = { args: { disabled: true } }
export const Password: Story = { args: { type: 'password', value: 'secret', placeholder: 'Password' } }
