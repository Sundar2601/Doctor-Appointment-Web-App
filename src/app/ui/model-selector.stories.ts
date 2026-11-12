import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ModelSelectorComponent } from './model-selector.component'

const meta: Meta<ModelSelectorComponent> = {
  title: 'AI/Model Selector',
  decorators: [moduleMetadata({ imports: [ModelSelectorComponent] })],
  args: {
    value: 'sonnet',
    options: [
      { value: 'sonnet', label: 'Claude Sonnet', description: 'Fast, balanced' },
      { value: 'opus', label: 'Claude Opus', description: 'Most capable' },
      { value: 'haiku', label: 'Claude Haiku', description: 'Fastest' },
    ],
  },
  render: (args) => ({ props: args, template: `<app-model-selector [options]="options" [(value)]="value" />` }),
}
export default meta
type Story = StoryObj<ModelSelectorComponent>

export const Default: Story = {}
export const NoSelection: Story = { args: { value: null } }
