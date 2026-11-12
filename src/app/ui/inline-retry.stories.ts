import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { InlineRetryComponent } from './inline-retry.component'

const meta: Meta<InlineRetryComponent> = {
  title: 'Patterns/Inline Retry',
  decorators: [moduleMetadata({ imports: [InlineRetryComponent] })],
  argTypes: { state: { control: 'select', options: ['loading', 'error'] } },
  args: { state: 'loading', message: 'Saving...' },
  render: (args) => ({
    props: args,
    template: `<app-inline-retry [state]="state" [message]="message" [retryLabel]="retryLabel" (retry)="retry($event)" />`,
  }),
}
export default meta
type Story = StoryObj<InlineRetryComponent>

export const Loading: Story = {}
export const Failed: Story = { args: { state: 'error', message: 'Failed to save' } }
