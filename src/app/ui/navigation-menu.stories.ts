import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { NavigationMenuComponent } from './navigation-menu.component'

const meta: Meta<NavigationMenuComponent> = {
  title: 'Navigation/Navigation Menu',
  component: NavigationMenuComponent,
  decorators: [moduleMetadata({ imports: [NavigationMenuComponent] })],
  parameters: { layout: 'padded' },
  args: {
    items: [
      { label: 'Home', href: '/' },
      {
        label: 'Services',
        children: [
          { label: 'Book appointment', href: '/book', description: 'Schedule a visit with a doctor.' },
          { label: 'Telehealth', href: '/telehealth', description: 'Consult from home by video.' },
          { label: 'Lab results', href: '/labs', description: 'View your latest reports.' },
        ],
      },
      {
        label: 'Doctors',
        children: [
          { label: 'Find a doctor', href: '/doctors' },
          { label: 'Specialties', href: '/specialties' },
        ],
      },
      { label: 'Contact', href: '/contact' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="min-height: 18rem"><app-navigation-menu [items]="items" /></div>`,
  }),
}
export default meta
type Story = StoryObj<NavigationMenuComponent>

export const Default: Story = {}
export const LinksOnly: Story = {
  args: { items: [{ label: 'Home', href: '/' }, { label: 'Doctors', href: '/doctors' }, { label: 'Contact', href: '/contact' }] },
}
