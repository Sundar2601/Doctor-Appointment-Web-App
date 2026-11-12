import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidStatusBarComponent } from './android-status-bar.component'

const meta: Meta<AndroidStatusBarComponent> = {
  title: 'Mobile/Android/Status Bar',
  component: AndroidStatusBarComponent,
  decorators: [moduleMetadata({ imports: [AndroidStatusBarComponent] })],
  args: { time: '9:30', gestureBar: true },
  render: (args) => ({
    props: args,
    template: `<div class="w-[412px]"><app-android-status-bar [time]="time" [gestureBar]="gestureBar" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidStatusBarComponent>

export const Default: Story = {}
export const WithoutGestureBar: Story = { args: { gestureBar: false } }
