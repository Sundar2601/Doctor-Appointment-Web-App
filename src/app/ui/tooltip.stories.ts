import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { TooltipDirective } from './tooltip.directive'

const meta: Meta<TooltipDirective> = {
  title: 'Overlays/Tooltip',
  decorators: [moduleMetadata({ imports: [TooltipDirective, ButtonDirective] })],
  argTypes: {
    appTooltip: { control: 'text' },
    tooltipPosition: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: { appTooltip: 'Add to library', tooltipPosition: 'top' },
  render: (args) => ({
    props: args,
    template: `<div class="p-16"><button appButton variant="outline" [appTooltip]="appTooltip" [tooltipPosition]="tooltipPosition">Hover me</button></div>`,
  }),
}
export default meta
type Story = StoryObj<TooltipDirective>

export const Top: Story = {}
export const Bottom: Story = { args: { tooltipPosition: 'bottom' } }
export const Left: Story = { args: { tooltipPosition: 'left' } }
export const Right: Story = { args: { tooltipPosition: 'right' } }
