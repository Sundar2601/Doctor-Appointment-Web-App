import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { LabelDirective } from './label.directive'
import { RadioDirective } from './radio.directive'

interface Args {
  disabled: boolean
  selected: string
}

const meta: Meta<Args> = {
  title: 'Forms/Radio',
  decorators: [moduleMetadata({ imports: [RadioDirective, LabelDirective] })],
  argTypes: { disabled: { control: 'boolean' }, selected: { control: 'select', options: ['a', 'b', 'c'] } },
  args: { disabled: false, selected: 'a' },
  render: (args) => ({
    props: args,
    template: `
      <div class="grid gap-2" role="radiogroup" aria-label="Plan">
        <div class="flex items-center gap-2"><input id="r1" name="plan" type="radio" appRadio value="a" [checked]="selected === 'a'" [disabled]="disabled" /><label appLabel for="r1">Default</label></div>
        <div class="flex items-center gap-2"><input id="r2" name="plan" type="radio" appRadio value="b" [checked]="selected === 'b'" [disabled]="disabled" /><label appLabel for="r2">Comfortable</label></div>
        <div class="flex items-center gap-2"><input id="r3" name="plan" type="radio" appRadio value="c" [checked]="selected === 'c'" [disabled]="disabled" /><label appLabel for="r3">Compact</label></div>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const SecondSelected: Story = { args: { selected: 'b' } }
export const Disabled: Story = { args: { disabled: true } }
