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
          <div sidebarHeader class="flex items-center gap-2 px-2 py-1">
            <span class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-semibold">A</span>
            <span class="flex flex-col"><span class="text-sm leading-5 font-semibold">Acme Inc</span><span class="text-muted-foreground text-xs">Enterprise</span></span>
          </div>
          <div sidebarFooter class="flex items-center gap-2 px-2 py-1">
            <span class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium">SC</span>
            <span class="flex flex-col"><span class="text-sm leading-5 font-medium">shadcn</span><span class="text-muted-foreground text-xs">m@example.com</span></span>
          </div>
        </app-sidebar>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj<SidebarComponent>

export const Expanded: Story = {}
export const Collapsed: Story = { args: { collapsed: true } }
