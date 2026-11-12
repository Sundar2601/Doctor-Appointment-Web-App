import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { GaugeChartComponent } from './gauge-chart.component'

const meta: Meta<GaugeChartComponent> = {
  title: 'Charts/Gauge',
  decorators: [moduleMetadata({ imports: [GaugeChartComponent] })],
  parameters: { layout: 'centered' },
  args: { title: 'Gauge', description: 'Single value against a target range.', value: 72, label: 'of quarterly target' },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-gauge-chart [title]="title" [description]="description" [value]="value" [label]="label" /></div>`,
  }),
}
export default meta
type Story = StoryObj<GaugeChartComponent>

export const Default: Story = {}
