import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SkeletonCardComponent } from './skeleton-card.component'

const meta: Meta<SkeletonCardComponent> = {
  title: 'Patterns/Skeleton Card',
  decorators: [moduleMetadata({ imports: [SkeletonCardComponent] })],
  render: () => ({ template: `<app-skeleton-card class="max-w-sm" />` }),
}
export default meta
type Story = StoryObj<SkeletonCardComponent>

export const Default: Story = {}
export const Grid: Story = {
  render: () => ({
    template: `<div class="grid max-w-3xl grid-cols-3 gap-4"><app-skeleton-card /><app-skeleton-card /><app-skeleton-card /></div>`,
  }),
}
