import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { StatCardComponent } from './stat-card.component'

const meta: Meta<StatCardComponent> = {
  title: 'Display/Stat Card',
  decorators: [moduleMetadata({ imports: [StatCardComponent] })],
  argTypes: { label: { control: 'text' }, value: { control: 'text' }, delta: { control: 'text' }, trend: { control: 'select', options: ['up', 'down'] }, hint: { control: 'text' } },
  args: { label: 'Total appointments', value: 1284, delta: '+12.5%', trend: 'up', hint: 'Compared to last month' },
  render: (args) => ({
    props: args,
    template: `<div class="w-72"><app-stat-card [label]="label" [value]="value" [delta]="delta" [trend]="trend" [hint]="hint" /></div>`,
  }),
}
export default meta
type Story = StoryObj<StatCardComponent>

export const Up: Story = {}
export const Down: Story = { args: { delta: '-4.2%', trend: 'down' } }
export const Minimal: Story = { args: { delta: undefined, hint: undefined } }
