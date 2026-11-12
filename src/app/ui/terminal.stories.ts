import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TerminalComponent } from './terminal.component'

const meta: Meta<TerminalComponent> = {
  title: 'AI/Terminal',
  decorators: [moduleMetadata({ imports: [TerminalComponent] })],
  args: {
    command: 'pnpm build',
    lines: [
      { text: '▲ Angular 22.0.0', tone: 'muted' },
      { text: 'Creating an optimized production build …', tone: 'muted' },
      { text: '✓ Compiled successfully in 9.1s', tone: 'success' },
    ],
  },
  render: (args) => ({ props: args, template: `<div class="w-[560px]"><app-terminal [command]="command" [lines]="lines" /></div>` }),
}
export default meta
type Story = StoryObj<TerminalComponent>

export const Default: Story = {}
export const Failed: Story = {
  args: {
    command: 'pnpm test',
    lines: [
      { text: 'Running 143 tests …', tone: 'muted' },
      { text: '✗ 1 test failed', tone: 'error' },
    ],
  },
}
