import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SliderDirective } from './slider.directive'

interface Args {
  value: number
  min: number
  max: number
  step: number
  disabled: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/Slider',
  decorators: [moduleMetadata({ imports: [SliderDirective] })],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { value: 50, min: 0, max: 100, step: 1, disabled: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-64"><input type="range" appSlider aria-label="Volume" [min]="min" [max]="max" [step]="step" [value]="value" [disabled]="disabled" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Stepped: Story = { args: { step: 10, value: 30 } }
export const Disabled: Story = { args: { disabled: true } }
export const AllStates: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-8 p-2">
      <input type="range" appSlider aria-label="default" value="50" style="--ui-slider-fill: 50%" />
      <input type="range" appSlider aria-label="disabled" value="50" disabled style="--ui-slider-fill: 50%" />
    </div>`,
  }),
}
