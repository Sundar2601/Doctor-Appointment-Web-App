import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AspectRatioComponent } from './aspect-ratio.component'

const meta: Meta<AspectRatioComponent> = {
  title: 'Display/Aspect Ratio',
  decorators: [moduleMetadata({ imports: [AspectRatioComponent] })],
  argTypes: { ratio: { control: 'number' } },
  args: { ratio: 16 / 9 },
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><app-aspect-ratio [ratio]="ratio"><span class="text-muted-foreground text-sm">Ratio {{ ratio.toFixed(2) }}</span></app-aspect-ratio></div>`,
  }),
}
export default meta
type Story = StoryObj<AspectRatioComponent>

export const Widescreen: Story = {}
export const Square: Story = { args: { ratio: 1 } }
export const Portrait: Story = { args: { ratio: 3 / 4 } }
