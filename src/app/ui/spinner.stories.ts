import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SpinnerComponent } from './spinner.component'

const meta: Meta<SpinnerComponent> = {
  title: 'Feedback/Spinner',
  decorators: [moduleMetadata({ imports: [SpinnerComponent] })],
  argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg'] }, label: { control: 'text' } },
  args: { size: 'sm' },
  render: (args) => ({ props: args, template: `<app-spinner [size]="size" [label]="label" />` }),
}
export default meta
type Story = StoryObj<SpinnerComponent>

export const Default: Story = {}
export const WithLabel: Story = { args: { label: 'Processing payment...' } }
export const Large: Story = { args: { size: 'lg', label: 'Loading' } }
