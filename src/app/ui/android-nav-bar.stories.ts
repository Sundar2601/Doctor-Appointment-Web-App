import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidNavBarComponent, AndroidNavBarItemComponent } from './android-nav-bar.component'

const meta: Meta<AndroidNavBarItemComponent> = {
  title: 'Mobile/Android/Navigation Bar',
  component: AndroidNavBarItemComponent,
  decorators: [moduleMetadata({ imports: [AndroidNavBarComponent, AndroidNavBarItemComponent] })],
  args: { icon: 'lucideHouse', label: 'Home', active: true },
}
export default meta
type Story = StoryObj<AndroidNavBarItemComponent>

const item = `<div class="w-24"><app-android-nav-bar-item [icon]="icon" [label]="label" [active]="active" /></div>`

export const ItemActive: Story = { render: (args) => ({ props: args, template: item }) }
export const ItemInactive: Story = { args: { active: false }, render: (args) => ({ props: args, template: item }) }
export const Default: Story = {
  render: () => ({
    props: { tab: 'Home' },
    template: `
      <div class="w-[412px]">
        <app-android-nav-bar>
          <app-android-nav-bar-item icon="lucideHouse" label="Home" [active]="tab === 'Home'" (pressed)="tab = 'Home'" />
          <app-android-nav-bar-item icon="lucideSearch" label="Search" [active]="tab === 'Search'" (pressed)="tab = 'Search'" />
          <app-android-nav-bar-item icon="lucideBell" label="Alerts" [active]="tab === 'Alerts'" (pressed)="tab = 'Alerts'" />
          <app-android-nav-bar-item icon="lucideUser" label="Profile" [active]="tab === 'Profile'" (pressed)="tab = 'Profile'" />
        </app-android-nav-bar>
      </div>`,
  }),
}
