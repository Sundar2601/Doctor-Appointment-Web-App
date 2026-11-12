import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { RadialChartComponent } from './radial-chart.component'

const meta: Meta<RadialChartComponent> = {
  title: 'Charts/Radial Chart',
  decorators: [moduleMetadata({ imports: [RadialChartComponent] })],
  argTypes: { legend: { control: 'boolean' }, max: { control: 'number' } },
  args: {
    data: [
      { label: 'Chrome', value: 86 },
      { label: 'Safari', value: 74 },
      { label: 'Firefox', value: 52 },
      { label: 'Edge', value: 34 },
    ],
    max: 100,
    legend: false,
    title: 'Radial Chart',
    description: 'January – June 2026',
    footerTitle: 'Trending up by 5.2% this month ↑',
    footerNote: 'Showing total visitors for the last 6 months',
  },
  render: (args) => ({
    props: args,
    template: `<div class="max-w-[430px]"><app-radial-chart [data]="data" [max]="max" [legend]="legend" [title]="title"
      [description]="description" [footerTitle]="footerTitle" [footerNote]="footerNote" /></div>`,
  }),
}
export default meta
type Story = StoryObj<RadialChartComponent>

export const Default: Story = {}
export const WithLegend: Story = { args: { legend: true } }
