import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosButtonDirective } from './ios-button.directive'

const meta: Meta<IosButtonDirective> = {
  title: 'Mobile/iOS/Button',
  decorators: [moduleMetadata({ imports: [IosButtonDirective] })],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'tinted', 'plain'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
  args: { variant: 'filled', size: 'large' },
  render: (args) => ({ props: args, template: `<button appIosButton [variant]="variant" [size]="size">Continue</button>` }),
}
export default meta
type Story = StoryObj<IosButtonDirective>

export const FilledLarge: Story = {}
export const FilledMedium: Story = { args: { size: 'medium' } }
export const FilledSmall: Story = { args: { size: 'small' } }
export const TintedLarge: Story = { args: { variant: 'tinted' } }
export const TintedMedium: Story = { args: { variant: 'tinted', size: 'medium' } }
export const TintedSmall: Story = { args: { variant: 'tinted', size: 'small' } }
export const PlainLarge: Story = { args: { variant: 'plain' } }
export const PlainMedium: Story = { args: { variant: 'plain', size: 'medium' } }
export const PlainSmall: Story = { args: { variant: 'plain', size: 'small' } }
