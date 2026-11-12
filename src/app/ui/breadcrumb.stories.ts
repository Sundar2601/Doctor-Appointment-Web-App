import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { BreadcrumbComponent } from './breadcrumb.component'

const meta: Meta<BreadcrumbComponent> = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [moduleMetadata({ imports: [BreadcrumbComponent] })],
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'Doctors', href: '/doctors' }, { label: 'Dr. Smith' }],
  },
  render: (args) => ({ props: args, template: `<app-breadcrumb [items]="items" />` }),
}
export default meta
type Story = StoryObj<BreadcrumbComponent>

export const Default: Story = {}
export const TwoLevels: Story = {
  args: { items: [{ label: 'Dashboard', href: '/' }, { label: 'Appointments' }] },
}
