import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { BadgeComponent } from './badge.component'

const meta: Meta<BadgeComponent> = {
  title: 'Display/Badge',
  decorators: [moduleMetadata({ imports: [BadgeComponent] })],
  argTypes: { tone: { control: 'select', options: ['neutral', 'info', 'success', 'danger'] } },
  args: { tone: 'neutral' },
  render: (args) => ({ props: args, template: `<app-badge [tone]="tone">Badge</app-badge>` }),
}
export default meta
type Story = StoryObj<BadgeComponent>

export const Neutral: Story = {}
export const Info: Story = { args: { tone: 'info' } }
export const Success: Story = { args: { tone: 'success' } }
export const Danger: Story = { args: { tone: 'danger' } }
export const AllTones: Story = {
  render: () => ({
    template: `<div class="flex gap-2">
      <app-badge tone="neutral">Neutral</app-badge><app-badge tone="info">Info</app-badge>
      <app-badge tone="success">Success</app-badge><app-badge tone="danger">Danger</app-badge>
    </div>`,
  }),
}
