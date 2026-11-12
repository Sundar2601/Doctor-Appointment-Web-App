import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { ButtonGroupComponent } from './button-group.component'

const meta: Meta = {
  title: 'Actions/Button Group',
  decorators: [moduleMetadata({ imports: [ButtonGroupComponent, ButtonDirective] })],
  render: () => ({
    template: `<app-button-group><button appButton variant="ghost">Archive</button><button appButton variant="ghost">Report</button><button appButton variant="ghost">Snooze</button></app-button-group>`,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Outline: Story = {
  render: () => ({
    template: `<app-button-group><button appButton variant="outline">Previous</button><button appButton variant="outline">Next</button></app-button-group>`,
  }),
}
