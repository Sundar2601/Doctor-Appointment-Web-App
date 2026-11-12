import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TestResultsComponent } from './test-results.component'

const meta: Meta<TestResultsComponent> = {
  title: 'AI/Test Results',
  decorators: [moduleMetadata({ imports: [TestResultsComponent] })],
  args: {
    title: 'Test run',
    files: [
      { name: 'auth/redirect.test.ts', passed: 12 },
      { name: 'app/login/page.test.tsx', passed: 0, failed: 1 },
      { name: 'lib/session.test.ts', passed: 30 },
    ],
  },
  render: (args) => ({ props: args, template: `<div class="w-[560px]"><app-test-results [title]="title" [files]="files" /></div>` }),
}
export default meta
type Story = StoryObj<TestResultsComponent>

export const WithFailure: Story = {}
export const AllPassing: Story = {
  args: {
    files: [
      { name: 'auth/redirect.test.ts', passed: 12 },
      { name: 'lib/session.test.ts', passed: 30 },
    ],
  },
}
