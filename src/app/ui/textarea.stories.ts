import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TextareaDirective } from './textarea.directive'

interface Args { placeholder: string; disabled: boolean; invalid: boolean; value: string }

const meta: Meta<Args> = {
  title: 'Forms/Textarea',
  decorators: [moduleMetadata({ imports: [TextareaDirective] })],
  argTypes: { placeholder: { control: 'text' }, disabled: { control: 'boolean' }, invalid: { control: 'boolean' }, value: { control: 'text' } },
  args: { placeholder: 'Type your message here.', disabled: false, invalid: false, value: '' },
  render: (args) => ({
    props: args,
    template: `<div class="w-80"><textarea appTextarea aria-label="Message" [placeholder]="placeholder" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null" [value]="value"></textarea></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Filled: Story = { args: { value: 'I would like to reschedule my appointment.' } }
export const Invalid: Story = { args: { invalid: true, value: 'Too short' } }
export const Disabled: Story = { args: { disabled: true } }
