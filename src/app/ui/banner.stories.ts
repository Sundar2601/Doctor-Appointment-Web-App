import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { BannerComponent } from './banner.component'

const meta: Meta<BannerComponent> = {
  title: 'Feedback/Banner',
  decorators: [moduleMetadata({ imports: [BannerComponent, ButtonDirective] })],
  argTypes: { variant: { control: 'select', options: ['info', 'warning', 'success', 'destructive'] }, dismissible: { control: 'boolean' } },
  args: { variant: 'info', dismissible: true },
  render: (args) => ({
    props: args,
    template: `<app-banner [variant]="variant" [dismissible]="dismissible">Scheduled maintenance this Sunday from 2 to 4 AM.</app-banner>`,
  }),
}
export default meta
type Story = StoryObj<BannerComponent>

export const Info: Story = {}
export const Warning: Story = { args: { variant: 'warning' } }
export const Success: Story = { args: { variant: 'success' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const WithAction: Story = {
  render: (args) => ({
    props: args,
    template: `<app-banner [variant]="variant" [dismissible]="dismissible">A new version is available.<button bannerAction appButton variant="outline" size="sm">Update</button></app-banner>`,
  }),
}
