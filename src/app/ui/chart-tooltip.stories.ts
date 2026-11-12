import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ChartTooltipComponent } from './chart-tooltip.component'

const meta: Meta<ChartTooltipComponent> = {
  title: 'Charts/Chart Tooltip',
  decorators: [moduleMetadata({ imports: [ChartTooltipComponent] })],
  args: {
    title: 'Page Views',
    items: [
      { label: 'Desktop', value: 186, color: 'var(--chart-1)' },
      { label: 'Mobile', value: 80, color: 'var(--chart-2)' },
    ],
  },
  render: (args) => ({ props: args, template: `<app-chart-tooltip [title]="title" [items]="items" />` }),
}
export default meta
type Story = StoryObj<ChartTooltipComponent>

export const Default: Story = {}
