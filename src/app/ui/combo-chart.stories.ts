import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ComboChartComponent } from './combo-chart.component'

const meta: Meta<ComboChartComponent> = {
  title: 'Charts/Combo',
  decorators: [moduleMetadata({ imports: [ComboChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Combo (bar + line)',
    description: 'Visits as bars, show rate as a line on the same x-axis.',
    data: [
      { label: 'Mon', value: 42, rate: 62 },
      { label: 'Tue', value: 58, rate: 71 },
      { label: 'Wed', value: 47, rate: 66 },
      { label: 'Thu', value: 66, rate: 79 },
      { label: 'Fri', value: 54, rate: 72 },
      { label: 'Sat', value: 72, rate: 85 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-combo-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<ComboChartComponent>

export const Default: Story = {}
