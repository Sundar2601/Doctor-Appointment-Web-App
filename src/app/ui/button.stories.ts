import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'

const meta: Meta<ButtonDirective> = {
  title: 'Actions/Button',
  decorators: [moduleMetadata({ imports: [ButtonDirective] })],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline', 'ghost', 'link'] },
    size: { control: 'select', options: ['sm', 'md', 'icon'] },
  },
  args: { variant: 'primary', size: 'md' },
  render: (args) => ({ props: args, template: `<button appButton [variant]="variant" [size]="size">Button</button>` }),
}
export default meta
type Story = StoryObj<ButtonDirective>

export const Primary: Story = {}
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }
export const Small: Story = { args: { size: 'sm' } }
