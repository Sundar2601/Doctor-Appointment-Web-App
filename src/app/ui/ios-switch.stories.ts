import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosSwitchComponent } from './ios-switch.component'

const meta: Meta<IosSwitchComponent> = {
  title: 'Mobile/iOS/Switch',
  decorators: [moduleMetadata({ imports: [IosSwitchComponent] })],
  args: { checked: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `<app-ios-switch [(checked)]="checked" [disabled]="disabled" label="Toggle" />`,
  }),
}
export default meta
type Story = StoryObj<IosSwitchComponent>

export const Default: Story = {}
export const Checked: Story = { args: { checked: true } }
export const Disabled: Story = { args: { disabled: true } }
