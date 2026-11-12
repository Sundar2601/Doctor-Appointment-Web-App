import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { PageHeaderComponent } from './page-header.component'

const meta: Meta<PageHeaderComponent> = {
  title: 'Display/Page Header',
  decorators: [moduleMetadata({ imports: [PageHeaderComponent] })],
  argTypes: { title: { control: 'text' }, subtitle: { control: 'text' } },
  args: { title: 'Appointments', subtitle: 'Manage your upcoming and past visits.', breadcrumbs: [] },
  render: (args) => ({
    props: args,
    template: `<app-page-header [title]="title" [subtitle]="subtitle" [breadcrumbs]="breadcrumbs" />`,
  }),
}
export default meta
type Story = StoryObj<PageHeaderComponent>

export const Default: Story = {}
export const WithBreadcrumbs: Story = { args: { breadcrumbs: ['Settings', 'Team'] } }
export const WithActions: Story = {
  args: { breadcrumbs: ['Settings', 'Team'] },
  render: (args) => ({
    props: args,
    template: `<app-page-header class="w-[640px]" [title]="title" [subtitle]="subtitle" [breadcrumbs]="breadcrumbs">
      <button pageHeaderActions type="button" class="bg-primary text-primary-foreground h-9 rounded-md px-4 text-sm font-medium">Invite member</button>
    </app-page-header>`,
  }),
}
export const TitleOnly: Story = { args: { subtitle: undefined } }
