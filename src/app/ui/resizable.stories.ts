import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ResizableComponent } from './resizable.component'

const meta: Meta<ResizableComponent> = {
  title: 'Layout/Resizable',
  decorators: [moduleMetadata({ imports: [ResizableComponent] })],
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    initialSize: { control: { type: 'range', min: 10, max: 90, step: 5 } },
  },
  args: { direction: 'horizontal', initialSize: 40 },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-[560px]" [class.h-72]="direction === 'vertical'">
        <app-resizable [direction]="direction" [initialSize]="initialSize" [class.h-full]="direction === 'vertical'">
          <div pane1 class="p-4"><p class="font-semibold">Hospitals</p><p class="text-muted-foreground text-sm">JIPMER, Aravind Eye Hospital, Mahatma Gandhi Medical College</p></div>
          <div pane2 class="p-4"><p class="font-semibold">Dr. Anand Kumar</p><p class="text-muted-foreground text-sm">Cardiology, available 09:30 AM - 01:00 PM</p></div>
        </app-resizable>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<ResizableComponent>

export const Horizontal: Story = {}
export const Vertical: Story = { args: { direction: 'vertical', initialSize: 50 } }
