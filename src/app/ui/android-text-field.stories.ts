import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidTextFieldComponent } from './android-text-field.component'

const meta: Meta<AndroidTextFieldComponent> = {
  title: 'Mobile/Android/Text Field',
  component: AndroidTextFieldComponent,
  decorators: [moduleMetadata({ imports: [AndroidTextFieldComponent] })],
  argTypes: { variant: { control: 'select', options: ['filled', 'outlined'] } },
  args: { variant: 'outlined', label: 'Email', value: '', placeholder: '', supporting: '', error: '', disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-[280px] p-4">
        <app-android-text-field
          [variant]="variant" [label]="label" [(value)]="value" [placeholder]="placeholder"
          [supporting]="supporting" [error]="error" [disabled]="disabled"
        />
      </div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidTextFieldComponent>

export const Outlined: Story = {}
export const OutlinedWithValue: Story = { args: { value: 'name@example.com', supporting: 'We never share your email' } }
export const OutlinedPlaceholder: Story = { args: { label: 'Label', placeholder: 'Email' } }
export const Filled: Story = { args: { variant: 'filled', value: 'name@example.com' } }
export const Error: Story = { args: { value: 'name@', error: 'Enter a valid email address' } }
