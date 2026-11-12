import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { KbdDirective } from './kbd.directive'

interface Args { keys: string }

const meta: Meta<Args> = {
  title: 'Display/Kbd',
  decorators: [moduleMetadata({ imports: [KbdDirective] })],
  argTypes: { keys: { control: 'text' } },
  args: { keys: '⌘K' },
  render: (args) => ({ props: args, template: `<kbd appKbd>{{ keys }}</kbd>` }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Combination: Story = {
  render: () => ({ template: `<div class="flex items-center gap-1"><kbd appKbd>Ctrl</kbd><span>+</span><kbd appKbd>Shift</kbd><span>+</span><kbd appKbd>P</kbd></div>` }),
}
