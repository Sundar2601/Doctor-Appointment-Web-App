import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosSearchBarComponent, IosTextFieldDirective } from './ios-search-bar.component'

const meta: Meta<IosSearchBarComponent> = {
  title: 'Mobile/iOS/Search Bar',
  decorators: [moduleMetadata({ imports: [IosSearchBarComponent, IosTextFieldDirective] })],
  args: { value: '', placeholder: 'Search' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-search-bar [(value)]="value" [placeholder]="placeholder" /></div>`,
  }),
}
export default meta
type Story = StoryObj<IosSearchBarComponent>

export const Default: Story = {}
export const WithValue: Story = { args: { value: 'Dr. Smith' } }
export const TextField: Story = {
  render: () => ({ props: {}, template: `<div class="w-[343px]"><input appIosTextField placeholder="Email" aria-label="Email" /></div>` }),
}
