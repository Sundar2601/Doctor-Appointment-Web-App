import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CandlestickChartComponent } from './candlestick-chart.component'

const meta: Meta<CandlestickChartComponent> = {
  title: 'Charts/Candlestick',
  decorators: [moduleMetadata({ imports: [CandlestickChartComponent] })],
  parameters: { layout: 'centered' },
  args: {
    title: 'Candlestick',
    description: 'Open, high, low and close per period.',
    data: [
      { label: 'W1', open: 40, high: 58, low: 34, close: 52 },
      { label: 'W2', open: 52, high: 66, low: 42, close: 46 },
      { label: 'W3', open: 46, high: 60, low: 40, close: 56 },
      { label: 'W4', open: 56, high: 74, low: 52, close: 70 },
      { label: 'W5', open: 70, high: 72, low: 50, close: 54 },
      { label: 'W6', open: 54, high: 70, low: 48, close: 64 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 320px"><app-candlestick-chart [title]="title" [description]="description" [data]="data" /></div>`,
  }),
}
export default meta
type Story = StoryObj<CandlestickChartComponent>

export const Default: Story = {}
