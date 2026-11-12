import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { StackTraceComponent } from './stack-trace.component'

const meta: Meta<StackTraceComponent> = {
  title: 'AI/Stack Trace',
  decorators: [moduleMetadata({ imports: [StackTraceComponent] })],
  args: {
    message: "Cannot find module '@/lib/session'",
    frames: ['at resolve (app/login/page.tsx:14:9)', 'at render (node_modules/next/dist/server.js:231:12)'],
  },
  render: (args) => ({ props: args, template: `<div class="w-[560px]"><app-stack-trace [message]="message" [frames]="frames" /></div>` }),
}
export default meta
type Story = StoryObj<StackTraceComponent>

export const Default: Story = {}
