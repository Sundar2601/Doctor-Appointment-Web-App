import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { PieChartComponent } from './pie-chart.component'

const meta: Meta<PieChartComponent> = {
  title: 'Charts/Pie Chart',
  decorators: [moduleMetadata({ imports: [PieChartComponent] })],
  argTypes: { innerRadius: { control: { type: 'range', min: 0, max: 90, step: 1 } }, legend: { control: 'boolean' } },
  args: {
    data: [
      { label: 'Chrome', value: 275 },
      { label: 'Safari', value: 200 },
      { label: 'Firefox', value: 187 },
      { label: 'Edge', value: 173 },
      { label: 'Other', value: 90 },
    ],
    innerRadius: 0,
    legend: false,
    title: 'Pie Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months',
  },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-pie-chart [data]="data" [innerRadius]="innerRadius" [centerLabel]="centerLabel"
      [centerSubLabel]="centerSubLabel" [legend]="legend" [title]="title" [description]="description"
      [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`,
  }),
}
export default meta
type Story = StoryObj<PieChartComponent>

export const Default: Story = {}
export const Donut: Story = { args: { innerRadius: 58, title: 'Pie Chart – Donut' } }
export const DonutWithCentreText: Story = {
  args: { innerRadius: 58, centerLabel: '1,125', centerSubLabel: 'Visitors', title: 'Pie Chart – Donut with text' },
}
export const WithLegend: Story = { args: { legend: true } }
