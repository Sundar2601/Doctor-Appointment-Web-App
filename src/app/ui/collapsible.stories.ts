import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CollapsibleComponent } from './collapsible.component'

const meta: Meta<CollapsibleComponent> = {
  title: 'Display/Collapsible',
  decorators: [moduleMetadata({ imports: [CollapsibleComponent] })],
  argTypes: { heading: { control: 'text' }, open: { control: 'boolean' } },
  args: { heading: '@peduarte starred 3 repositories', open: false },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-96">
        <app-collapsible [heading]="heading" [open]="open">
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
        </app-collapsible>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<CollapsibleComponent>

export const Closed: Story = {}
export const Open: Story = { args: { open: true } }
