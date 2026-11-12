import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SegmentedControlComponent, type SegmentOption } from './segmented-control.component'

interface Args {
  options: SegmentOption[]
  value: string
  label: string
}

const meta: Meta<Args> = {
  title: 'Navigation/Segmented Control',
  decorators: [moduleMetadata({ imports: [SegmentedControlComponent] })],
  argTypes: { value: { control: 'text' }, label: { control: 'text' } },
  args: {
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ],
    value: 'week',
    label: 'View',
  },
  render: (args) => ({ props: args, template: `<app-segmented-control [options]="options" [(value)]="value" [label]="label" />` }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month', disabled: true },
    ],
  },
}
