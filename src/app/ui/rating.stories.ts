import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { RatingComponent } from './rating.component'

interface Args {
  value: number
  max: number
  readonly: boolean
  label: string
  count: number | undefined
}

const meta: Meta<Args> = {
  title: 'Forms/Rating',
  decorators: [moduleMetadata({ imports: [RatingComponent] })],
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    readonly: { control: 'boolean' },
    label: { control: 'text' },
    count: { control: 'number' },
  },
  args: { value: 0, max: 5, readonly: false, label: 'Rating', count: undefined },
  render: (args) => ({
    props: args,
    template: `<app-rating [(value)]="value" [max]="max" [readonly]="readonly" [label]="label" [count]="count" />`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Selected: Story = { args: { value: 3 } }
export const ReadonlyWithCount: Story = { args: { value: 4, readonly: true, count: 128 } }
