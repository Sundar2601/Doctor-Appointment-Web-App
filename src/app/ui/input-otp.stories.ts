import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { InputOtpComponent } from './input-otp.component'

interface Args {
  length: number
  value: string
  separatorAfter: number | null
  numeric: boolean
  disabled: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/Input OTP',
  decorators: [moduleMetadata({ imports: [InputOtpComponent] })],
  argTypes: {
    length: { control: 'number' },
    value: { control: 'text' },
    separatorAfter: { control: 'number' },
    numeric: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { length: 6, value: '', separatorAfter: 3, numeric: true, disabled: false },
  render: (args) => ({
    props: args,
    template: `<app-input-otp [length]="length" [(value)]="value" [separatorAfter]="separatorAfter" [numeric]="numeric" [disabled]="disabled" />`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Filled: Story = { args: { value: '123456' } }
export const FourDigits: Story = { args: { length: 4, separatorAfter: null, value: '12' } }
export const Disabled: Story = { args: { disabled: true, value: '123' } }
