import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { FileUploadComponent } from './file-upload.component'

interface Args {
  label: string
  hint: string
  accept: string
  multiple: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/File Upload',
  decorators: [moduleMetadata({ imports: [FileUploadComponent] })],
  argTypes: { label: { control: 'text' }, hint: { control: 'text' }, accept: { control: 'text' }, multiple: { control: 'boolean' } },
  args: { label: 'Drag and drop files here', hint: '', accept: '', multiple: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><app-file-upload [label]="label" [hint]="hint" [accept]="accept" [multiple]="multiple" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'PNG or JPG up to 5MB', accept: 'image/png,image/jpeg' } }
export const Multiple: Story = { args: { multiple: true, label: 'Drop your documents here' } }
