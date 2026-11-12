import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ChartLegendComponent } from './chart-legend.component'

const meta: Meta<ChartLegendComponent> = {
  title: 'Charts/Chart Legend',
  decorators: [moduleMetadata({ imports: [ChartLegendComponent] })],
  args: {
    items: [
      { label: 'Desktop', color: 'var(--chart-1)' },
      { label: 'Mobile', color: 'var(--chart-2)' },
      { label: 'Tablet', color: 'var(--chart-3)' },
    ],
  },
  render: (args) => ({ props: args, template: `<app-chart-legend [items]="items" />` }),
}
export default meta
type Story = StoryObj<ChartLegendComponent>

export const Default: Story = {}
