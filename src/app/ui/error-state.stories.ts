import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { ErrorStateComponent } from './error-state.component'

const meta: Meta<ErrorStateComponent> = {
  title: 'Patterns/Error State',
  decorators: [moduleMetadata({ imports: [ErrorStateComponent, ButtonDirective] })],
  argTypes: { kind: { control: 'select', options: ['not-found', 'server-error', 'forbidden', 'offline'] } },
  args: { kind: 'not-found', actionLabel: 'Go to home' },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-md"><app-error-state [kind]="kind" [title]="title" [description]="description" [actionLabel]="actionLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ErrorStateComponent>

export const NotFound: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="max-w-md"><app-error-state [kind]="kind" [actionLabel]="actionLabel"><button appButton variant="outline">Search</button></app-error-state></div>`,
  }),
}
export const SomethingWentWrong: Story = { args: { kind: 'server-error', actionLabel: 'Try again' } }
export const NoAccess: Story = { args: { kind: 'forbidden', actionLabel: 'Request access' } }
export const Offline: Story = { args: { kind: 'offline', actionLabel: 'Retry' } }
