import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CheckpointComponent } from './checkpoint.component'

const meta: Meta<CheckpointComponent> = {
  title: 'AI/Checkpoint',
  decorators: [moduleMetadata({ imports: [CheckpointComponent] })],
  args: { label: 'Checkpoint · Restore' },
  render: (args) => ({ props: args, template: `<div class="w-[560px]"><app-checkpoint [label]="label" (restore)="restore()" /></div>` }),
}
export default meta
type Story = StoryObj<CheckpointComponent>

export const Default: Story = {}
