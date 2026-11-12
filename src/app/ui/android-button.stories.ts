import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidButtonDirective } from './android-button.directive'

const meta: Meta<AndroidButtonDirective> = {
  title: 'Mobile/Android/Button',
  decorators: [moduleMetadata({ imports: [AndroidButtonDirective] })],
  argTypes: { variant: { control: 'select', options: ['filled', 'tonal', 'outlined', 'text', 'elevated'] } },
  args: { variant: 'filled' },
  render: (args) => ({ props: args, template: `<div class="p-4"><button appAndroidButton [variant]="variant">Label</button></div>` }),
}
export default meta
type Story = StoryObj<AndroidButtonDirective>

export const Filled: Story = {}
export const Tonal: Story = { args: { variant: 'tonal' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Text: Story = { args: { variant: 'text' } }
export const Elevated: Story = { args: { variant: 'elevated' } }
