import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ErrorSummaryComponent } from './error-summary.component'

const meta: Meta<ErrorSummaryComponent> = {
  title: 'Patterns/Error Summary',
  decorators: [moduleMetadata({ imports: [ErrorSummaryComponent] })],
  args: {
    heading: 'Fix 2 errors to continue',
    errors: [
      { id: 'email', message: 'Email: enter a valid address' },
      { id: 'password', message: 'Password: use at least 8 characters' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="max-w-sm space-y-4">
        <app-error-summary [heading]="heading" [errors]="errors" />
        <input id="email" class="border-input block w-full rounded-md border px-3 py-2 text-sm" placeholder="Email" />
        <input id="password" type="password" class="border-input block w-full rounded-md border px-3 py-2 text-sm" placeholder="Password" />
      </div>`,
  }),
}
export default meta
type Story = StoryObj<ErrorSummaryComponent>

export const Default: Story = {}
export const SingleError: Story = {
  args: { heading: 'Fix 1 error to continue', errors: [{ id: 'email', message: 'Email: enter a valid address' }] },
}
