import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { CommandComponent, CommandItem } from './command.component'
import { DialogComponent } from './dialog.component'

const items: CommandItem[] = [
  { value: 'book', label: 'Book appointment', group: 'Appointments', shortcut: 'Ctrl+B' },
  { value: 'upcoming', label: 'View upcoming', group: 'Appointments' },
  { value: 'cancel', label: 'Cancel appointment', group: 'Appointments', disabled: true },
  { value: 'doctors', label: 'Find a doctor', group: 'Directory', shortcut: 'Ctrl+D' },
  { value: 'profile', label: 'Profile', group: 'Settings' },
  { value: 'settings', label: 'Settings', group: 'Settings', shortcut: 'Ctrl+,' },
]

const meta: Meta<CommandComponent> = {
  title: 'Overlays/Command',
  component: CommandComponent,
  decorators: [moduleMetadata({ imports: [CommandComponent, DialogComponent, ButtonDirective] })],
  parameters: { layout: 'padded' },
  argTypes: { placeholder: { control: 'text' }, emptyText: { control: 'text' } },
  args: { items, placeholder: 'Type a command or search...', emptyText: 'No results found.' },
  render: (args) => ({
    props: { ...args, last: '' , pick(i: CommandItem) { this['last'] = i.label } },
    template: `
      <div class="max-w-md">
        <app-command [items]="items" [placeholder]="placeholder" [emptyText]="emptyText" (selected)="pick($event)" />
        <p class="mt-4 text-sm">Selected: {{ last || 'none' }}</p>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj<CommandComponent>

export const Default: Story = {}

export const InDialog: Story = {
  render: (args) => ({
    props: { ...args, open: false },
    template: `
      <button appButton variant="outline" (click)="open = true">Open command palette</button>
      <app-dialog heading="Command palette" [(open)]="open">
        <app-command [items]="items" [placeholder]="placeholder" [emptyText]="emptyText" (selected)="open = false" />
      </app-dialog>
    `,
  }),
}
