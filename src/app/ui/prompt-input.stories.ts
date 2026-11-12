import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AttachmentComponent } from './attachment.component'
import { PromptInputComponent } from './prompt-input.component'

const meta: Meta = {
  title: 'AI/Prompt Input',
  decorators: [moduleMetadata({ imports: [PromptInputComponent, AttachmentComponent] })],
  render: () => ({
    props: { models: ['Claude Sonnet', 'Claude Opus'] },
    template: `<div class="w-[40rem] max-w-full"><app-prompt-input placeholder="Describe your symptoms or ask to book..." [models]="models" model="Claude Sonnet" /></div>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}

export const WithAttachment: Story = {
  render: () => ({
    props: { models: ['Claude Sonnet', 'Claude Opus'] },
    template: `<div class="w-[40rem] max-w-full"><app-prompt-input [models]="models" model="Claude Sonnet"><app-attachment appPromptAttachments name="ecg-report.png" size="880 KB" /></app-prompt-input></div>`,
  }),
}
