import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TagInputComponent } from './tag-input.component'

interface Args {
  tags: string[]
  placeholder: string
}

const meta: Meta<Args> = {
  title: 'Forms/Tag Input',
  decorators: [moduleMetadata({ imports: [TagInputComponent] })],
  argTypes: { tags: { control: 'object' }, placeholder: { control: 'text' } },
  args: { tags: [], placeholder: 'Add tag...' },
  render: (args) => ({ props: args, template: `<div class="w-80"><app-tag-input [(tags)]="tags" [placeholder]="placeholder" /></div>` }),
}
export default meta
type Story = StoryObj<Args>

export const Empty: Story = {}
export const WithTags: Story = { args: { tags: ['angular', 'tailwind', 'storybook'] } }
