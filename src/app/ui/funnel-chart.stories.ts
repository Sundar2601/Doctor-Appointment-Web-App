import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { FunnelChartComponent } from './funnel-chart.component'

const meta: Meta<FunnelChartComponent> = {
  title: 'Charts/Funnel',
  decorators: [moduleMetadata({ imports: [FunnelChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Funnel',
    description: 'Drop-off across the booking steps.',
    data: [
      { label: 'Visitors', value: 10000 },
      { label: 'Searches', value: 7200 },
      { label: 'Profile views', value: 4600 },
      { label: 'Bookings', value: 2100 },
      { label: 'Completed', value: 1500 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-funnel-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<FunnelChartComponent>

export const Default: Story = {}
