import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AreaChartComponent } from './area-chart.component'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const desktop = [186, 305, 237, 73, 209, 214]
const mobile = [80, 200, 120, 190, 130, 140]

const meta: Meta<AreaChartComponent> = {
  title: 'Charts/Area Chart',
  decorators: [moduleMetadata({ imports: [AreaChartComponent] })],
  argTypes: { stacked: { control: 'boolean' }, legend: { control: 'boolean' } },
  args: {
    data: months.map((label, i) => ({ label, desktop: desktop[i] ?? 0, mobile: mobile[i] ?? 0 })),
    series: [
      { key: 'desktop', label: 'Desktop', color: 'var(--chart-1)' },
      { key: 'mobile', label: 'Mobile', color: 'var(--chart-2)' },
    ],
    stacked: false,
    legend: false,
    title: 'Area Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months',
  },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-area-chart [data]="data" [series]="series" [stacked]="stacked" [legend]="legend"
      [title]="title" [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AreaChartComponent>

export const Default: Story = {}
export const Stacked: Story = { args: { stacked: true, title: 'Area Chart – Stacked' } }
