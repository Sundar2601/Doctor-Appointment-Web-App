import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TreemapChartComponent } from './treemap-chart.component'

const meta: Meta<TreemapChartComponent> = {
  title: 'Charts/Treemap',
  decorators: [moduleMetadata({ imports: [TreemapChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Treemap',
    description: 'Appointments by department.',
    data: [
      { label: 'General', value: 42 },
      { label: 'Cardiology', value: 24 },
      { label: 'Paediatrics', value: 16 },
      { label: 'Dermatology', value: 12 },
      { label: 'Orthopaedics', value: 9 },
      { label: 'ENT', value: 6 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-treemap-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<TreemapChartComponent>

export const Default: Story = {}
