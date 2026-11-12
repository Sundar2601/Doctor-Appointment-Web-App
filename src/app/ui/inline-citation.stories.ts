import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { InlineCitationComponent } from './inline-citation.component'

const meta: Meta<InlineCitationComponent> = {
  title: 'AI/Inline Citation',
  decorators: [moduleMetadata({ imports: [InlineCitationComponent] })],
  args: { text: 'Dr. Anand Kumar sees patients from 9 AM to 1 PM.', source: 'jipmer.edu.in', more: 2 },
  render: (args) => ({ props: args, template: `<app-inline-citation [text]="text" [source]="source" [more]="more" />` }),
}
export default meta
type Story = StoryObj<InlineCitationComponent>

export const Default: Story = {}
export const SingleSource: Story = { args: { more: 0 } }
