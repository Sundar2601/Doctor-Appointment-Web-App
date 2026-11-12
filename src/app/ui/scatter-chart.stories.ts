import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ScatterChartComponent } from './scatter-chart.component'

const meta: Meta<ScatterChartComponent> = {
  title: 'Charts/Scatter',
  decorators: [moduleMetadata({ imports: [ScatterChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Scatter',
    description: 'Wait time against satisfaction; colour groups by clinic.',
    data: [
      { x: 5, y: 20, group: 0 },
      { x: 12, y: 38, group: 1 },
      { x: 15, y: 30, group: 2 },
      { x: 20, y: 55, group: 0 },
      { x: 24, y: 35, group: 1 },
      { x: 28, y: 48, group: 2 },
      { x: 33, y: 66, group: 0 },
      { x: 38, y: 50, group: 1 },
      { x: 42, y: 70, group: 2 },
      { x: 47, y: 62, group: 1 },
      { x: 52, y: 80, group: 0 },
      { x: 58, y: 78, group: 2 },
      { x: 64, y: 90, group: 1 },
      { x: 70, y: 84, group: 0 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-scatter-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ScatterChartComponent>

export const Default: Story = {}
