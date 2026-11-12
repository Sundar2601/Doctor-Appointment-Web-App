import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SeparatorDirective } from './separator.directive'

const meta: Meta<SeparatorDirective> = {
  title: 'Display/Separator',
  decorators: [moduleMetadata({ imports: [SeparatorDirective] })],
  argTypes: { orientation: { control: 'select', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
  render: (args) => ({ props: args, template: `<div class="w-80"><div appSeparator [orientation]="orientation"></div></div>` }),
}
export default meta
type Story = StoryObj<SeparatorDirective>

export const Horizontal: Story = {}
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => ({
    props: args,
    template: `<div class="flex h-6 items-center gap-4 text-sm"><span>Blog</span><div appSeparator [orientation]="orientation"></div><span>Docs</span><div appSeparator [orientation]="orientation"></div><span>Source</span></div>`,
  }),
}
