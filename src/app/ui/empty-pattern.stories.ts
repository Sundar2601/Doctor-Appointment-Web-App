import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { EmptyPatternComponent } from './empty-pattern.component'

const meta: Meta<EmptyPatternComponent> = {
  title: 'Patterns/Empty',
  decorators: [moduleMetadata({ imports: [EmptyPatternComponent] })],
  argTypes: { kind: { control: 'select', options: ['first-use', 'no-results', 'cleared'] } },
  args: { kind: 'first-use' },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-sm"><app-empty-pattern [kind]="kind" [title]="title" [description]="description" [actionLabel]="actionLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<EmptyPatternComponent>

export const NoProjectsYet: Story = {}
export const NoResults: Story = { args: { kind: 'no-results' } }
export const AllCaughtUp: Story = { args: { kind: 'cleared' } }
