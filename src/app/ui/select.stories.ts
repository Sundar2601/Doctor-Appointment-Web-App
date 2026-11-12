import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SelectComponent, type SelectOption } from './select.component'

interface Args {
  options: SelectOption[]
  value: string | null
  placeholder: string
  disabled: boolean
  invalid: boolean
}

const options: SelectOption[] = [
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'dermatology', label: 'Dermatology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'pediatrics', label: 'Pediatrics', disabled: true },
]

const meta: Meta<Args> = {
  title: 'Forms/Select',
  decorators: [moduleMetadata({ imports: [SelectComponent] })],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  args: { options, value: null, placeholder: 'Select a specialty', disabled: false, invalid: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-64 pb-52"><app-select ariaLabel="Specialty" [options]="options" [(value)]="value" [placeholder]="placeholder" [disabled]="disabled" [invalid]="invalid" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithValue: Story = { args: { value: 'neurology' } }
export const Invalid: Story = { args: { invalid: true } }
export const Disabled: Story = { args: { disabled: true, value: 'cardiology' } }

const fruits: SelectOption[] = [
  { value: 'apple', label: 'Apple', group: 'Fruits' },
  { value: 'banana', label: 'Banana', group: 'Fruits' },
  { value: 'blueberry', label: 'Blueberry', group: 'Fruits' },
  { value: 'grapes', label: 'Grapes', group: 'Fruits' },
]
/** Open list with a group label and the selected item checked (Figma "Select Content"). */
export const OpenList: Story = {
  args: { options: fruits, value: 'grapes', placeholder: 'Select a fruit' },
  render: (args) => ({
    props: args,
    template: `<div class="h-64 w-56"><app-select ariaLabel="Fruit" [options]="options" [(value)]="value" [placeholder]="placeholder" [defaultOpen]="true" /></div>`,
  }),
}
