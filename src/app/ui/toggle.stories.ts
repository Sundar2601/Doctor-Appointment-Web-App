import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ToggleDirective, type ToggleSize, type ToggleVariant } from './toggle.directive'

interface Args {
  pressed: boolean
  variant: ToggleVariant
  size: ToggleSize
  disabled: boolean
}

const meta: Meta<Args> = {
  title: 'Actions/Toggle',
  decorators: [moduleMetadata({ imports: [ToggleDirective] })],
  argTypes: {
    pressed: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: { pressed: false, variant: 'default', size: 'md', disabled: false },
  render: (args) => ({
    props: args,
    template: `<button appToggle [(pressed)]="pressed" [variant]="variant" [size]="size" [disabled]="disabled">Bold</button>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Pressed: Story = { args: { pressed: true } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Small: Story = { args: { size: 'sm' } }
export const Disabled: Story = { args: { disabled: true } }
