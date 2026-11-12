import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TabsComponent } from './tabs.component'

const meta: Meta<TabsComponent> = {
  title: 'Navigation/Tabs',
  component: TabsComponent,
  decorators: [moduleMetadata({ imports: [TabsComponent] })],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
  args: {
    label: 'Appointments',
    value: 'upcoming',
    tabs: [
      { value: 'upcoming', label: 'Upcoming' },
      { value: 'past', label: 'Past' },
      { value: 'cancelled', label: 'Cancelled' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <app-tabs [tabs]="tabs" [label]="label" [(value)]="value" />
      <div role="tabpanel" [attr.aria-labelledby]="'app-tab-' + value" class="mt-4 text-sm">Showing {{ value }} appointments.</div>
    `,
  }),
}
export default meta
type Story = StoryObj<TabsComponent>

export const Default: Story = {}
export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { value: 'upcoming', label: 'Upcoming' },
      { value: 'past', label: 'Past' },
      { value: 'cancelled', label: 'Cancelled', disabled: true },
    ],
  },
}
