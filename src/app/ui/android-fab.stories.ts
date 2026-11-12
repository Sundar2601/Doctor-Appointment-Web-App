import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidFabComponent } from './android-fab.component'

const meta: Meta<AndroidFabComponent> = {
  title: 'Mobile/Android/FAB',
  component: AndroidFabComponent,
  decorators: [moduleMetadata({ imports: [AndroidFabComponent] })],
  argTypes: { size: { control: 'select', options: ['standard', 'small'] } },
  args: { icon: 'lucidePlus', size: 'standard', ariaLabel: 'Add' },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-fab [icon]="icon" [label]="label" [size]="size" [ariaLabel]="ariaLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidFabComponent>

export const Default: Story = {}
export const Extended: Story = { args: { icon: 'lucidePencil', label: 'Compose' } }
export const Small: Story = { args: { size: 'small' } }
