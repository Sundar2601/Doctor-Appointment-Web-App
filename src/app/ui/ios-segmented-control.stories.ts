import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosSegmentedControlComponent } from './ios-segmented-control.component'

const meta: Meta<IosSegmentedControlComponent> = {
  title: 'Mobile/iOS/Segmented Control',
  decorators: [moduleMetadata({ imports: [IosSegmentedControlComponent] })],
  args: { options: ['Day', 'Week', 'Month'], value: 'Week' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-segmented-control [options]="options" [(value)]="value" /></div>`,
  }),
}
export default meta
type Story = StoryObj<IosSegmentedControlComponent>

export const Default: Story = {}
export const TwoOptions: Story = { args: { options: ['List', 'Map'], value: 'List' } }
export const FiveOptions: Story = { args: { options: ['All', 'Today', 'Week', 'Month', 'Year'], value: 'All' } }
