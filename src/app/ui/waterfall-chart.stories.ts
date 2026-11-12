import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { WaterfallChartComponent } from './waterfall-chart.component'

const meta: Meta<WaterfallChartComponent> = {
  title: 'Charts/Waterfall',
  decorators: [moduleMetadata({ imports: [WaterfallChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Waterfall',
    description: 'How monthly revenue moves from start to end.',
    data: [
      { label: 'Start', value: 120, total: true },
      { label: 'Visits', value: 35 },
      { label: 'Refunds', value: -18 },
      { label: 'Plans', value: 24 },
      { label: 'Costs', value: -12 },
      { label: 'End', value: 149, total: true },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-waterfall-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<WaterfallChartComponent>

export const Default: Story = {}
