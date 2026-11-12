import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { RadarChartComponent } from './radar-chart.component'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const desktop = [186, 305, 237, 73, 209, 214]
const mobile = [80, 200, 120, 190, 130, 140]

const meta: Meta<RadarChartComponent> = {
  title: 'Charts/Radar Chart',
  decorators: [moduleMetadata({ imports: [RadarChartComponent] })],
  argTypes: { legend: { control: 'boolean' } },
  args: {
    data: months.map((label, i) => ({ label, desktop: desktop[i] ?? 0, mobile: mobile[i] ?? 0 })),
    series: [{ key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' }],
    legend: false,
    title: 'Radar Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months',
  },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-radar-chart [data]="data" [series]="series" [max]="max" [legend]="legend"
      [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`,
  }),
}
export default meta
type Story = StoryObj<RadarChartComponent>

export const Default: Story = {}
export const MultipleSeries: Story = {
  args: {
    legend: true,
    series: [
      { key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' },
      { key: 'mobile', label: 'Mobile', color: 'var(--chart-2)' },
    ],
  },
}
