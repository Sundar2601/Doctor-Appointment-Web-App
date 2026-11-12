import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { SheetComponent } from './sheet.component'

const meta: Meta<SheetComponent> = {
  title: 'Overlays/Sheet',
  component: SheetComponent,
  decorators: [moduleMetadata({ imports: [SheetComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: { side: { control: 'select', options: ['right', 'left'] }, heading: { control: 'text' }, description: { control: 'text' } },
  args: { side: 'right', heading: 'Filters', description: 'Narrow down the list of doctors.' },
  render: (args) => ({
    props: { ...args, open: false },
    template: `
      <button appButton variant="outline" (click)="open = true">Open sheet</button>
      <app-sheet [heading]="heading" [description]="description" [side]="side" [(open)]="open">
        <p class="text-sm">Sheet content goes here.</p>
        <div sheetFooter>
          <button appButton (click)="open = false">Apply filters</button>
        </div>
      </app-sheet>
    `,
  }),
}
export default meta
type Story = StoryObj<SheetComponent>

export const Right: Story = {}
export const Left: Story = { args: { side: 'left', heading: 'Navigation', description: undefined } }
