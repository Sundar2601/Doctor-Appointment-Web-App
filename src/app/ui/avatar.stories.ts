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
export const Fallback: Story = {
  args: { name: '' },
}
export const AllSizes: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4">
      <app-avatar name="" size="sm" /><app-avatar name="Chad Norris" size="sm" />
      <app-avatar name="" size="md" /><app-avatar name="Chad Norris" size="md" />
      <app-avatar name="" size="lg" /><app-avatar name="Chad Norris" size="lg" />
    </div>`,
  }),
}
