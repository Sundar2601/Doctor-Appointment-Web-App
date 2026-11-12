import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosNavBarComponent } from './ios-nav-bar.component'

const meta: Meta<IosNavBarComponent> = {
  title: 'Mobile/iOS/Nav Bar',
  decorators: [moduleMetadata({ imports: [IosNavBarComponent] })],
  argTypes: { variant: { control: 'inline-radio', options: ['inline', 'large'] } },
  args: { title: 'Title', variant: 'inline', backLabel: 'Back' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[393px]">
      <app-ios-nav-bar [title]="title" [variant]="variant" [backLabel]="backLabel"><span slot="trailing">Edit</span></app-ios-nav-bar></div>`,
  }),
}
export default meta
type Story = StoryObj<IosNavBarComponent>

export const Inline: Story = {}
export const Large: Story = { args: { variant: 'large' } }
export const NoBackButton: Story = { args: { backLabel: '' } }
