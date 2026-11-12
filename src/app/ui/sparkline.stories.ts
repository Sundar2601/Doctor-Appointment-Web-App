import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SparklineComponent } from './sparkline.component'

const meta: Meta<SparklineComponent> = {
  title: 'Charts/Sparkline',
  decorators: [moduleMetadata({ imports: [SparklineComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Sparkline',
    description: 'Inline trend inside a stat or table cell.',
    value: '$24.5k',
    delta: '+8.2% vs last week',
    values: [12, 20, 16, 30, 24, 34, 28, 42, 36, 50, 46, 58, 54, 66],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-sparkline [title]="title" [description]="description" [value]="value" [delta]="delta" [values]="values" /></div>`,
  }),
}
export default meta
type Story = StoryObj<SparklineComponent>

export const Default: Story = {}
