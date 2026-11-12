import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { DialogComponent } from './dialog.component'

const meta: Meta<DialogComponent> = {
  title: 'Overlays/Dialog',
  component: DialogComponent,
  decorators: [moduleMetadata({ imports: [DialogComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: { heading: { control: 'text' }, description: { control: 'text' } },
  args: { heading: 'Edit profile', description: 'Make changes to your profile here. Click save when you are done.' },
  render: (args) => ({
    props: { ...args, open: args.open ?? false },
    template: `
      <button appButton (click)="open = true">Open dialog</button>
      <app-dialog [heading]="heading" [description]="description" [(open)]="open">
        <p class="text-sm">Dialog body content goes here.</p>
        <div dialogFooter>
          <button appButton variant="outline" (click)="open = false">Cancel</button>
          <button appButton (click)="open = false">Save changes</button>
        </div>
      </app-dialog>
    `,
  }),
}
export default meta
type Story = StoryObj<DialogComponent>

export const Default: Story = {}
export const WithoutDescription: Story = { args: { heading: 'Quick note', description: undefined } }
export const Open: Story = { args: { open: true } }
