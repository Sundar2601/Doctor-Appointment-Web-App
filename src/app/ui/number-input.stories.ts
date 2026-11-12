import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { NumberInputComponent } from './number-input.component'

interface Args { value: number; min: number; max: number; stepBy: number; disabled: boolean; label: string }

const meta: Meta<Args> = {
  title: 'Forms/Number Input',
  decorators: [moduleMetadata({ imports: [NumberInputComponent] })],
  argTypes: {
    value: { control: 'number' }, min: { control: 'number' }, max: { control: 'number' }, stepBy: { control: 'number' },
    disabled: { control: 'boolean' }, label: { control: 'text' },
  },
  args: { value: 1, min: 0, max: 10, stepBy: 1, disabled: false, label: 'Quantity' },
  render: (args) => ({
    props: args,
    template: `<app-number-input [(value)]="value" [min]="min" [max]="max" [stepBy]="stepBy" [disabled]="disabled" [label]="label" />`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const AtMinimum: Story = { args: { value: 0 } }
export const BigStep: Story = { args: { stepBy: 5, max: 100, value: 20 } }
export const Disabled: Story = { args: { disabled: true } }
