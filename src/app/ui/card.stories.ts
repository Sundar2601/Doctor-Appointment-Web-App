import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { CardComponent } from './card.component'

const meta: Meta<CardComponent> = {
  title: 'Display/Card',
  decorators: [moduleMetadata({ imports: [CardComponent, ButtonDirective] })],
  argTypes: { heading: { control: 'text' }, description: { control: 'text' } },
  args: { heading: 'Upcoming appointment', description: 'Next visit with your doctor' },
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><app-card [heading]="heading" [description]="description"><p class="text-sm">Tuesday, 10:30 AM with Dr. Jane Smith.</p></app-card></div>`,
  }),
}
export default meta
type Story = StoryObj<CardComponent>

export const Default: Story = {}
export const WithAction: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><app-card [heading]="heading" [description]="description"><button cardAction appButton variant="outline" size="sm">Reschedule</button><p class="text-sm">Tuesday, 10:30 AM with Dr. Jane Smith.</p></app-card></div>`,
  }),
}
export const NoHeader: Story = {
  args: { heading: undefined },
}
