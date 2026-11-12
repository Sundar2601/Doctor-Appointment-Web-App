import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { MessageComponent } from './message.component'
import { MessageScrollerComponent } from './message-scroller.component'

const messages = Array.from({ length: 12 }, (_, i) =>
  i % 2 ? 'Dr. Raman is available on Thursday at 10:30 AM at JIPMER, Puducherry.' : 'Can you check another cardiologist near me?',
)

const meta: Meta = {
  title: 'AI/Message Scroller',
  decorators: [moduleMetadata({ imports: [MessageScrollerComponent, MessageComponent] })],
  render: () => ({
    props: { messages },
    template: `<app-message-scroller class="h-72 w-[36rem] max-w-full">@for (m of messages; track $index) {<app-message [role]="$index % 2 ? \x27assistant\x27 : \x27user\x27" class="mb-4">{{ m }}</app-message>}</app-message-scroller>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
