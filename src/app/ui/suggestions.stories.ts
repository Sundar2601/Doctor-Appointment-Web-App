import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SuggestionsComponent } from './suggestions.component'

const items = ['Book a cardiologist', 'Reschedule my visit', 'Explain my ECG report']

const meta: Meta = {
  title: 'AI/Suggestions',
  decorators: [moduleMetadata({ imports: [SuggestionsComponent] })],
  render: () => ({ props: { items }, template: `<app-suggestions [items]="items" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
