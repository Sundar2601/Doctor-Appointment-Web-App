import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidTopAppBarComponent } from './android-top-app-bar.component'

const meta: Meta<AndroidTopAppBarComponent> = {
  title: 'Mobile/Android/Top App Bar',
  component: AndroidTopAppBarComponent,
  decorators: [moduleMetadata({ imports: [AndroidTopAppBarComponent] })],
  argTypes: { variant: { control: 'select', options: ['small', 'center-aligned'] } },
  args: { variant: 'small', title: 'Inbox', navIcon: 'lucideMenu', actions: ['lucideSearch', 'lucideEllipsisVertical'] },
  render: (args) => ({
    props: args,
    template: `<div class="w-[412px]"><app-android-top-app-bar [variant]="variant" [title]="title" [navIcon]="navIcon" [actions]="actions" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidTopAppBarComponent>

export const Small: Story = {}
export const CenterAligned: Story = { args: { variant: 'center-aligned' } }
export const BackNavigation: Story = { args: { navIcon: 'lucideArrowLeft', title: 'Settings', actions: [] } }
