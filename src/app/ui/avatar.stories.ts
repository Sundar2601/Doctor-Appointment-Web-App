import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AvatarComponent } from './avatar.component'

const meta: Meta<AvatarComponent> = {
  title: 'Display/Avatar',
  decorators: [moduleMetadata({ imports: [AvatarComponent] })],
  argTypes: { name: { control: 'text' }, size: { control: 'select', options: ['sm', 'md', 'lg'] } },
  args: { name: 'Dr. Jane Smith', size: 'md' },
  render: (args) => ({ props: args, template: `<app-avatar [name]="name" [size]="size" />` }),
}
export default meta
type Story = StoryObj<AvatarComponent>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
