import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ChatThreadComponent, MessageComponent } from './message.component'

const meta: Meta = {
  title: 'AI/Message',
  decorators: [moduleMetadata({ imports: [ChatThreadComponent, MessageComponent] })],
  render: (args) => ({
    props: args,
    template: `<div class="w-[36rem] max-w-full"><app-chat-thread>
      <app-message role="user">I need a cardiology appointment in Puducherry this week.</app-message>
      <app-message role="assistant" name="Care Navigator">
        I found three cardiologists in Puducherry with openings on Thursday. Dr. Meena Raman at JIPMER has the earliest slot at 10:30 AM.
        <div appMessageActions>
          <button type="button" class="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md" aria-label="Copy">⧉</button>
          <button type="button" class="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md" aria-label="Regenerate">↻</button>
        </div>
      </app-message>
    </app-chat-thread></div>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}

export const UserOnly: Story = {
  render: () => ({ template: `<app-message role="user">Book me a slot with Dr. Raman.</app-message>` }),
}
