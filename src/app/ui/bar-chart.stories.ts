import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { BarChartComponent } from './bar-chart.component'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const desktop = [186, 305, 237, 73, 209, 214]
const mobile = [80, 200, 120, 190, 130, 140]
const data = months.map((label, i) => ({ label, desktop: desktop[i] ?? 0, mobile: mobile[i] ?? 0 }))

const meta: Meta<BarChartComponent> = {
  title: 'Charts/Bar Chart',
  decorators: [moduleMetadata({ imports: [BarChartComponent] })],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    stacked: { control: 'boolean' },
    legend: { control: 'boolean' },
  },
  args: {
    data,
    series: [{ key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' }],
    orientation: 'vertical',
    stacked: false,
    legend: false,
    title: 'Bar Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months',
  },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-bar-chart [data]="data" [series]="series" [orientation]="orientation" [stacked]="stacked"
      [legend]="legend" [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`,
  }),
}
export default meta
type Story = StoryObj<BarChartComponent>

export const Default: Story = {}
export const Stacked: Story = {
  args: {
    stacked: true,
    title: 'Bar Chart – Stacked',
    series: [
      { key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' },
      { key: 'mobile', label: 'Mobile', color: 'var(--chart-2)' },
    ],
  },
}
export const Horizontal: Story = { args: { orientation: 'horizontal', title: 'Bar Chart – Horizontal' } }
export const WithLegend: Story = {
  args: {
    legend: true,
    title: 'Bar Chart – Multiple',
    series: [
      { key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' },
      { key: 'mobile', label: 'Mobile', color: 'var(--chart-2)' },
    ],
  },
}
