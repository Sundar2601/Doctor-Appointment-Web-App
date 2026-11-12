import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CheckboxDirective } from './checkbox.directive'
import { LabelDirective } from './label.directive'

interface Args {
  checked: boolean
  disabled: boolean
  label: string
}

const meta: Meta<Args> = {
  title: 'Forms/Checkbox',
  decorators: [moduleMetadata({ imports: [CheckboxDirective, LabelDirective] })],
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' }, label: { control: 'text' } },
  args: { checked: false, disabled: false, label: 'Accept terms and conditions' },
  render: (args) => ({
    props: args,
    template: `<div class="flex items-center gap-2"><input id="cb" type="checkbox" appCheckbox [checked]="checked" [disabled]="disabled" /><label appLabel for="cb">{{ label }}</label></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Checked: Story = { args: { checked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const DisabledChecked: Story = { args: { disabled: true, checked: true } }
export const AllStates: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-6 p-2">
      <input type="checkbox" appCheckbox aria-label="unchecked" />
      <input type="checkbox" appCheckbox aria-label="unchecked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox disabled aria-label="unchecked disabled" />
      <input type="checkbox" appCheckbox checked aria-label="checked" />
      <input type="checkbox" appCheckbox checked aria-label="checked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox checked disabled aria-label="checked disabled" />
      <input type="checkbox" appCheckbox [indeterminate]="true" aria-label="indeterminate" />
      <input type="checkbox" appCheckbox [indeterminate]="true" aria-label="indeterminate focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox [indeterminate]="true" disabled aria-label="indeterminate disabled" />
    </div>`,
  }),
}
