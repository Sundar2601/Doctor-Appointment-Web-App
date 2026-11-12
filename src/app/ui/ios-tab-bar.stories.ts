import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosTabBarComponent, IosTabBarItemComponent } from './ios-tab-bar.component'

const meta: Meta<IosTabBarComponent> = {
  title: 'Mobile/iOS/Tab Bar',
  decorators: [moduleMetadata({ imports: [IosTabBarComponent, IosTabBarItemComponent] })],
  args: { homeIndicator: true },
  render: (args) => ({
    props: {
      ...args,
      tabs: [
        ['Home', 'lucideHouse'],
        ['Search', 'lucideSearch'],
        ['Alerts', 'lucideBell'],
        ['Profile', 'lucideUser'],
        ['Settings', 'lucideSlidersHorizontal'],
      ],
      active: 'Home',
    },
    template: `<div class="w-[393px]">
      <app-ios-tab-bar [homeIndicator]="homeIndicator">
        @for (t of tabs; track t[0]) {
          <app-ios-tab-bar-item [label]="t[0]" [icon]="t[1]" [selected]="active === t[0]" (tabSelect)="active = t[0]" />
        }
      </app-ios-tab-bar></div>`,
  }),
}
export default meta
type Story = StoryObj<IosTabBarComponent>

export const Default: Story = {}
export const TabBarItem: Story = {
  render: () => ({
    props: {},
    template: `<div class="flex w-[160px] gap-2">
      <app-ios-tab-bar-item label="Home" icon="lucideHouse" [selected]="true" />
      <app-ios-tab-bar-item label="Search" icon="lucideSearch" /></div>`,
  }),
}
