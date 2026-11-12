import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidSwitchComponent } from './android-switch.component'

const meta: Meta<AndroidSwitchComponent> = {
  title: 'Mobile/Android/Switch',
  component: AndroidSwitchComponent,
  decorators: [moduleMetadata({ imports: [AndroidSwitchComponent] })],
  args: { checked: false, disabled: false, ariaLabel: 'Notifications' },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-switch [(checked)]="checked" [disabled]="disabled" [ariaLabel]="ariaLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidSwitchComponent>

export const Unchecked: Story = {}
export const Checked: Story = { args: { checked: true } }
export const Disabled: Story = { args: { disabled: true } }
