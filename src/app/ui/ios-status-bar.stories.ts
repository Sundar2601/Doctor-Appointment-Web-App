import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosHomeIndicatorComponent, IosStatusBarComponent } from './ios-status-bar.component'

const meta: Meta<IosStatusBarComponent> = {
  title: 'Mobile/iOS/Status Bar',
  decorators: [moduleMetadata({ imports: [IosStatusBarComponent, IosHomeIndicatorComponent] })],
  args: { time: '9:41' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[393px]"><app-ios-status-bar [time]="time" /></div>`,
  }),
}
export default meta
type Story = StoryObj<IosStatusBarComponent>

export const Default: Story = {}
export const HomeIndicator: Story = {
  render: () => ({ props: {}, template: `<div class="w-[393px]"><app-ios-home-indicator /></div>` }),
}
export const WithHomeIndicator: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="border-border flex h-[200px] w-[393px] flex-col justify-between border">
      <app-ios-status-bar [time]="time" /><app-ios-home-indicator /></div>`,
  }),
}
