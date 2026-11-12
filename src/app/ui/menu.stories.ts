import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ContextMenuComponent, DropdownMenuComponent, MenubarComponent, type MenuEntry } from './menu.component'

const entries: MenuEntry[] = [
  { heading: true, label: 'My account' },
  { label: 'Profile', value: 'profile', shortcut: 'Ctrl+P' },
  { label: 'Settings', value: 'settings', shortcut: 'Ctrl+S' },
  { label: 'Notifications', value: 'notifications', checked: true },
  { label: 'Billing', value: 'billing', disabled: true },
  { separator: true },
  { label: 'Log out', value: 'logout', destructive: true },
]

const meta: Meta = {
  title: 'Overlays/Menus',
  decorators: [moduleMetadata({ imports: [DropdownMenuComponent, ContextMenuComponent, MenubarComponent] })],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Dropdown: Story = {
  args: { label: 'Open menu', variant: 'outline', entries },
  argTypes: { variant: { control: 'select', options: ['primary', 'outline', 'ghost', 'link'] } },
  render: (args) => ({
    props: {
      ...args,
      last: '',
      pick(e: MenuEntry) {
        this['last'] = e.label ?? ''
      },
    },
    template: `
      <app-dropdown-menu [label]="label" [variant]="variant" [entries]="entries" (selected)="pick($event)" />
      <p class="mt-4 text-sm">Last selected: {{ last || 'none' }}</p>
    `,
  }),
}

export const ContextMenu: Story = {
  args: { entries },
  render: (args) => ({
    props: args,
    template: `
      <app-context-menu [entries]="entries">
        <div class="text-muted-foreground flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">Right click here</div>
      </app-context-menu>
    `,
  }),
}

export const Menubar: Story = {
  args: {
    menus: [
      {
        label: 'File',
        entries: [
          { label: 'New appointment', value: 'new', shortcut: 'Ctrl+N' },
          { label: 'Export', value: 'export' },
          { separator: true },
          { label: 'Quit', value: 'quit', destructive: true },
        ],
      },
      {
        label: 'View',
        entries: [
          { label: 'Show sidebar', value: 'sidebar', checked: true },
          { label: 'Compact mode', value: 'compact' },
        ],
      },
      {
        label: 'Help',
        entries: [
          { label: 'Documentation', value: 'docs' },
          { label: 'About', value: 'about' },
        ],
      },
    ],
  },
  render: (args) => ({ props: args, template: `<app-menubar [menus]="menus" />` }),
}
