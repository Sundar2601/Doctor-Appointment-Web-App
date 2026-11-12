import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { HeatmapChartComponent } from './heatmap-chart.component'

const meta: Meta<HeatmapChartComponent> = {
  title: 'Charts/Heatmap',
  decorators: [moduleMetadata({ imports: [HeatmapChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Heatmap',
    description: 'Appointments by weekday and hour.',
    rowLabels: ['9am', '10am', '11am', '12pm', '1pm'],
    columnLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [
      [8, 12, 15, 11, 9, 4, 1],
      [14, 18, 20, 16, 13, 6, 2],
      [16, 22, 24, 19, 15, 7, 3],
      [6, 9, 10, 8, 7, 3, 1],
      [12, 15, 17, 14, 11, 5, 2],
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-heatmap-chart [title]="title" [description]="description" [values]="values" [rowLabels]="rowLabels" [columnLabels]="columnLabels" /></div>`,
  }),
}
export default meta
type Story = StoryObj<HeatmapChartComponent>

export const Default: Story = {}
