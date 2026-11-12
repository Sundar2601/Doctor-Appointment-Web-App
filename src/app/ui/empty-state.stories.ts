import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { EmptyStateComponent } from './empty-state.component'

const meta: Meta<EmptyStateComponent> = {
  title: 'Feedback/Empty State',
  decorators: [moduleMetadata({ imports: [EmptyStateComponent, ButtonDirective] })],
  argTypes: { title: { control: 'text' }, description: { control: 'text' } },
  args: { title: 'No appointments yet', description: 'Book your first appointment to get started.' },
  render: (args) => ({ props: args, template: `<app-empty-state [title]="title" [description]="description" />` }),
}
export default meta
type Story = StoryObj<EmptyStateComponent>

export const Default: Story = {}
export const TitleOnly: Story = { args: { description: undefined } }
export const WithAction: Story = {
  render: (args) => ({
    props: args,
    template: `<app-empty-state [title]="title" [description]="description"><button appButton class="mt-2">Book appointment</button></app-empty-state>`,
  }),
}
