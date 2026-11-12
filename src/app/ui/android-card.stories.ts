import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidCardComponent } from './android-card.component'

const meta: Meta<AndroidCardComponent> = {
  title: 'Mobile/Android/Card',
  component: AndroidCardComponent,
  decorators: [moduleMetadata({ imports: [AndroidCardComponent] })],
  argTypes: { variant: { control: 'select', options: ['filled', 'elevated', 'outlined'] } },
  args: { variant: 'filled' },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-80 p-4">
        <app-android-card [variant]="variant">
          <p class="text-base font-medium">Card title</p>
          <p class="text-muted-foreground mt-2 text-sm">Supporting text that describes the card content.</p>
        </app-android-card>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidCardComponent>

export const Filled: Story = {}
export const Elevated: Story = { args: { variant: 'elevated' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
