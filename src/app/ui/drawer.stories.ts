import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { DrawerComponent } from './drawer.component'

const meta: Meta<DrawerComponent> = {
  title: 'Overlays/Drawer',
  component: DrawerComponent,
  decorators: [moduleMetadata({ imports: [DrawerComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: { heading: { control: 'text' }, description: { control: 'text' } },
  args: { heading: 'Reschedule appointment', description: 'Pick a new time that works for you.' },
  render: (args) => ({
    props: { ...args, open: args.open ?? false },
    template: `
      <button appButton variant="outline" (click)="open = true">Open drawer</button>
      <app-drawer [heading]="heading" [description]="description" [(open)]="open">
        <p class="text-sm">Drawer content goes here.</p>
        <div drawerFooter>
          <button appButton (click)="open = false">Confirm</button>
          <button appButton variant="outline" (click)="open = false">Cancel</button>
        </div>
      </app-drawer>
    `,
  }),
}
export default meta
type Story = StoryObj<DrawerComponent>

export const Default: Story = {}
export const WithoutDescription: Story = { args: { description: undefined } }
export const Open: Story = { args: { open: true } }
