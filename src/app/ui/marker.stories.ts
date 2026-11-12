import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { MarkerComponent } from './marker.component'

const meta: Meta = {
  title: 'AI/Marker',
  decorators: [moduleMetadata({ imports: [MarkerComponent] })],
  render: (args) => ({ props: args, template: `<app-marker label="Today" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}

export const Status: Story = { render: () => ({ template: `<app-marker label="Appointment confirmed" />` }) }
