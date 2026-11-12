import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ToggleGroupComponent, ToggleGroupItemDirective } from './toggle-group.component'

interface Args {
  value: string[]
  type: 'single' | 'multiple'
  disabled: boolean
}

const meta: Meta<Args> = {
  title: 'Actions/Toggle Group',
  decorators: [moduleMetadata({ imports: [ToggleGroupComponent, ToggleGroupItemDirective] })],
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
    disabled: { control: 'boolean' },
    value: { control: 'object' },
  },
  args: { value: [], type: 'multiple', disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <app-toggle-group [(value)]="value" [type]="type" [disabled]="disabled">
        <button appToggleGroupItem value="bold" aria-label="Bold">B</button>
        <button appToggleGroupItem value="italic" aria-label="Italic">I</button>
        <button appToggleGroupItem value="underline" aria-label="Underline">U</button>
      </app-toggle-group>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Multiple: Story = { args: { value: ['bold', 'italic'] } }
export const Single: Story = { args: { type: 'single', value: ['italic'] } }
export const Disabled: Story = { args: { disabled: true, value: ['bold'] } }
