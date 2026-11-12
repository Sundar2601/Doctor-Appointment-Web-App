import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AvatarGroupComponent } from './avatar-group.component'

const meta: Meta<AvatarGroupComponent> = {
  title: 'Display/Avatar Group',
  decorators: [moduleMetadata({ imports: [AvatarGroupComponent] })],
  argTypes: { names: { control: 'object' }, max: { control: 'number' }, size: { control: 'select', options: ['sm', 'md', 'lg'] } },
  args: {
    names: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Linus Torvalds', 'Margaret Hamilton', 'Dennis Ritchie'],
    max: 4,
    size: 'md',
  },
  render: (args) => ({ props: args, template: `<app-avatar-group [names]="names" [max]="max" [size]="size" />` }),
}
export default meta
type Story = StoryObj<AvatarGroupComponent>

export const Default: Story = {}
export const NoOverflow: Story = { args: { names: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing'] } }
export const Large: Story = { args: { size: 'lg', max: 3 } }
