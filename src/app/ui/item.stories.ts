import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { ItemComponent } from './item.component'

const meta: Meta<ItemComponent> = {
  title: 'Display/Item',
  decorators: [moduleMetadata({ imports: [ItemComponent, ButtonDirective] })],
  argTypes: { heading: { control: 'text' }, description: { control: 'text' }, showMedia: { control: 'boolean' } },
  args: { heading: 'Basic Item', description: 'A simple item with title and description.', showMedia: true },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-[480px]">
        <app-item [heading]="heading" [description]="description" [showMedia]="showMedia">
          <button itemActions appButton variant="outline" size="sm">Action</button>
        </app-item>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<ItemComponent>

export const Default: Story = {}
export const WithoutMedia: Story = { args: { showMedia: false } }
export const NoActions: Story = {
  render: (args) => ({ props: args, template: `<div class="w-[480px]"><app-item [heading]="heading" [description]="description" /></div>` }),
}
