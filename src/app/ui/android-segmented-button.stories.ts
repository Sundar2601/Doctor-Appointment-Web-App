import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidSegmentedButtonComponent } from './android-segmented-button.component'

const meta: Meta<AndroidSegmentedButtonComponent> = {
  title: 'Mobile/Android/Segmented Button',
  component: AndroidSegmentedButtonComponent,
  decorators: [moduleMetadata({ imports: [AndroidSegmentedButtonComponent] })],
  args: { options: ['Day', 'Week', 'Month'], value: 'Week', ariaLabel: 'Range' },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-segmented-button [options]="options" [(value)]="value" [ariaLabel]="ariaLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidSegmentedButtonComponent>

export const Default: Story = {}
export const TwoOptions: Story = { args: { options: ['List', 'Map'], value: 'List' } }
