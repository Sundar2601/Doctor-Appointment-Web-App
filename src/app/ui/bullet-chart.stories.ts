import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { BulletChartComponent } from './bullet-chart.component'

const meta: Meta<BulletChartComponent> = {
  title: 'Charts/Bullet',
  decorators: [moduleMetadata({ imports: [BulletChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Bullet',
    description: 'Actual versus target against qualitative ranges.',
    data: [
      { label: 'Satisfaction', value: 78, target: 85, ranges: [50, 75, 100] },
      { label: 'Occupancy', value: 45, target: 65, ranges: [50, 75, 100] },
      { label: 'On-time rate', value: 60, target: 70, ranges: [50, 75, 100] },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-bullet-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<BulletChartComponent>

export const Default: Story = {}
