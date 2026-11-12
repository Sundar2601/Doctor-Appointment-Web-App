import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { PageHeaderComponent } from './page-header.component'

const meta: Meta<PageHeaderComponent> = {
  title: 'Display/Page Header',
  decorators: [moduleMetadata({ imports: [PageHeaderComponent] })],
  argTypes: { title: { control: 'text' }, subtitle: { control: 'text' } },
  args: { title: 'Appointments', subtitle: 'Manage your upcoming and past visits.' },
  render: (args) => ({ props: args, template: `<app-page-header [title]="title" [subtitle]="subtitle" />` }),
}
export default meta
type Story = StoryObj<PageHeaderComponent>

export const Default: Story = {}
export const TitleOnly: Story = { args: { subtitle: undefined } }
