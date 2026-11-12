import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { HistogramChartComponent } from './histogram-chart.component'

const meta: Meta<HistogramChartComponent> = {
  title: 'Charts/Histogram',
  decorators: [moduleMetadata({ imports: [HistogramChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Histogram',
    description: 'Distribution of wait times (minutes) across bins.',
    bins: 12,
    values: [
      ...[4, 6, 8, 9, 10, 11, 12, 12, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 18, 19, 19, 20, 20, 21, 21, 22, 23, 24],
      ...[25, 26, 26, 27, 28, 29, 30, 32, 34, 36, 40, 44],
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-histogram-chart [title]="title" [description]="description" [values]="values" [bins]="bins" /></div>`,
  }),
}
export default meta
type Story = StoryObj<HistogramChartComponent>

export const Default: Story = {}
