import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { PopoverComponent } from './popover.component'

const meta: Meta<PopoverComponent> = {
  title: 'Overlays/Popover',
  component: PopoverComponent,
  decorators: [moduleMetadata({ imports: [PopoverComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: {
    side: { control: 'select', options: ['bottom', 'top'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
  args: { side: 'bottom', align: 'center' },
  render: (args) => ({
    props: { ...args, open: args.open ?? false },
    template: `
      <div style="padding: 6rem 8rem">
        <app-popover [side]="side" [align]="align" [(open)]="open">
          <button trigger appButton variant="outline" (click)="open = !open">Open popover</button>
          <div class="w-64 text-sm">
            <p class="font-medium">Dimensions</p>
            <p class="text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
        </app-popover>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj<PopoverComponent>

export const Bottom: Story = {}
export const Top: Story = { args: { side: 'top' } }
export const AlignStart: Story = { args: { align: 'start' } }
export const Open: Story = { args: { open: true } }
