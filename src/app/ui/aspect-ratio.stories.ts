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
    template: `<div class="w-96"><app-aspect-ratio [ratio]="ratio"><svg class="text-muted-foreground size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Ratio {{ ratio.toFixed(2) }}" role="img"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg></app-aspect-ratio></div>`,
  }),
}
export default meta
type Story = StoryObj<AspectRatioComponent>

export const Widescreen: Story = {}
export const Square: Story = { args: { ratio: 1 } }
export const Portrait: Story = { args: { ratio: 3 / 4 } }
