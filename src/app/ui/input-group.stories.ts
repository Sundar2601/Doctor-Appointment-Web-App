import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { InputGroupComponent } from './input-group.component'
import { KbdDirective } from './kbd.directive'

const meta: Meta = {
  title: 'Forms/Input Group',
  decorators: [moduleMetadata({ imports: [InputGroupComponent, KbdDirective] })],
  render: () => ({
    template: `<div class="w-80"><app-input-group><span prefix>https://</span><input aria-label="URL" placeholder="example.com" /></app-input-group></div>`,
  }),
}
export default meta
type Story = StoryObj

export const Prefix: Story = {}
export const Suffix: Story = {
  render: () => ({
    template: `<div class="w-80"><app-input-group><input aria-label="Amount" placeholder="0.00" /><span suffix>USD</span></app-input-group></div>`,
  }),
}
export const WithKbd: Story = {
  render: () => ({
    template: `<div class="w-80"><app-input-group><input aria-label="Search" placeholder="Search..." /><kbd suffix appKbd>⌘K</kbd></app-input-group></div>`,
  }),
}
export const Disabled: Story = {
  render: () => ({
    template: `<div class="w-80"><app-input-group><span prefix>https://</span><input aria-label="URL" placeholder="example.com" disabled /></app-input-group></div>`,
  }),
}
