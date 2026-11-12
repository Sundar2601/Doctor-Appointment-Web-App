import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ControlDirective } from './control.directive'
import { FieldComponent } from './field.component'

interface Args {
  label: string
  hint: string
  error: string
}

const meta: Meta<Args> = {
  title: 'Forms/Field',
  decorators: [moduleMetadata({ imports: [FieldComponent, ControlDirective] })],
  argTypes: { label: { control: 'text' }, hint: { control: 'text' }, error: { control: 'text' } },
  args: { label: 'Email', hint: '', error: '' },
  render: (args) => ({
    props: args,
    template: `<div class="w-72"><app-field [label]="label" for="fld" [hint]="hint" [error]="error"><input id="fld" appControl placeholder="you@example.com" [attr.aria-invalid]="error ? 'true' : null" /></app-field></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'We will never share your email.' } }
export const WithError: Story = { args: { error: 'Please enter a valid email address.' } }
