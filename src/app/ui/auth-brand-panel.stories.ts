import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AuthBrandPanelComponent } from './auth-brand-panel.component'

const meta: Meta<AuthBrandPanelComponent> = {
  title: 'Auth/Brand Panel',
  parameters: { layout: 'fullscreen' },
  decorators: [moduleMetadata({ imports: [AuthBrandPanelComponent] })],
  argTypes: { brand: { control: 'text' }, headline: { control: 'text' }, perks: { control: 'object' } },
  render: (args) => ({
    props: args,
    template: `<div style="height: 720px; width: 480px"><app-auth-brand-panel [brand]="brand" [headline]="headline" [perks]="perks" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AuthBrandPanelComponent>

export const Default: Story = {
  args: {
    brand: 'Doctor Appointment',
    headline: 'Book hospital appointments across Puducherry.',
    perks: ['Browse hospitals and specialists', 'Pick a doctor, a date and an available time', 'Search, filter and cancel your bookings'],
  },
}
export const SignUp: Story = {
  args: {
    brand: 'Doctor Appointment',
    headline: 'Create your account and see a doctor sooner.',
    perks: ['Free to join', 'Manage family appointments in one place'],
  },
}
