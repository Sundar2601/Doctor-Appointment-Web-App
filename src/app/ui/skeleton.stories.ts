import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SkeletonDirective } from './skeleton.directive'

const meta: Meta<SkeletonDirective> = {
  title: 'Feedback/Skeleton',
  decorators: [moduleMetadata({ imports: [SkeletonDirective] })],
  argTypes: { shape: { control: 'select', options: ['rect', 'circle'] } },
  args: { shape: 'rect' },
  render: (args) => ({ props: args, template: `<div appSkeleton [shape]="shape" class="h-4 w-60"></div>` }),
}
export default meta
type Story = StoryObj<SkeletonDirective>

export const Rect: Story = {}
export const Circle: Story = {
  args: { shape: 'circle' },
  render: (args) => ({ props: args, template: `<div appSkeleton [shape]="shape" class="size-12"></div>` }),
}
export const CardPlaceholder: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4">
      <div appSkeleton shape="circle" class="size-12"></div>
      <div class="flex flex-col gap-2"><div appSkeleton class="h-4 w-60"></div><div appSkeleton class="h-4 w-40"></div></div>
    </div>`,
  }),
}
