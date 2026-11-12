import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AttachmentComponent } from './attachment.component'

const meta: Meta = {
  title: 'AI/Attachment',
  decorators: [moduleMetadata({ imports: [AttachmentComponent] })],
  render: (args) => ({
    props: args,
    template: `<div class="flex gap-3"><app-attachment name="referral-letter.pdf" size="2.4 MB" /><app-attachment name="ecg-report.png" size="880 KB" /></div>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}

export const NotRemovable: Story = {
  render: () => ({ template: `<app-attachment name="ecg-report.png" size="880 KB" [removable]="false" />` }),
}
