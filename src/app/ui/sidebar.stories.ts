import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SidebarComponent } from './sidebar.component'

const meta: Meta<SidebarComponent> = {
  title: 'Navigation/Sidebar',
  component: SidebarComponent,
  decorators: [moduleMetadata({ imports: [SidebarComponent] })],
  parameters: { layout: 'fullscreen' },
  argTypes: { collapsed: { control: 'boolean' } },
  args: {
    collapsed: false,
    groups: [
      {
        label: 'Main',
        items: [
          { label: 'Dashboard', href: '/dashboard', icon: 'lucideLayoutDashboard' },
          { label: 'Appointments', href: '/appointments', icon: 'lucideCalendar' },
          { label: 'Book', href: '/book', icon: 'lucideCalendarPlus' },
          { label: 'Doctors', href: '/doctors', icon: 'lucideStethoscope' },
        ],
      },
      {
        label: 'Account',
        items: [
          { label: 'Profile', href: '/profile', icon: 'lucideUser' },
          { label: 'Settings', href: '/settings', icon: 'lucideSettings' },
        ],
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 600px">
        <app-sidebar [groups]="groups" [(collapsed)]="collapsed">
          <div sidebarHeader class="px-2 font-semibold">MediBook</div>
          <div sidebarFooter class="px-2 text-sm">Jane Doe</div>
        </app-sidebar>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj<SidebarComponent>

export const Expanded: Story = {}
export const Collapsed: Story = { args: { collapsed: true } }
