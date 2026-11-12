import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SankeyChartComponent } from './sankey-chart.component'

const meta: Meta<SankeyChartComponent> = {
  title: 'Charts/Sankey',
  decorators: [moduleMetadata({ imports: [SankeyChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Sankey',
    description: 'Flow of patients between stages.',
    links: [
      { source: 'Enquiries', target: 'Booked', value: 60 },
      { source: 'Enquiries', target: 'Dropped', value: 25 },
      { source: 'Booked', target: 'Attended', value: 48 },
      { source: 'Booked', target: 'No-show', value: 12 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-sankey-chart [title]="title" [description]="description" [links]="links" /></div>`,
  }),
}
export default meta
type Story = StoryObj<SankeyChartComponent>

export const Default: Story = {}
