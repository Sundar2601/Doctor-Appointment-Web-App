import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidChipComponent } from './android-chip.component'

const meta: Meta<AndroidChipComponent> = {
  title: 'Mobile/Android/Chips',
  component: AndroidChipComponent,
  decorators: [moduleMetadata({ imports: [AndroidChipComponent] })],
  argTypes: { kind: { control: 'select', options: ['assist', 'filter', 'input'] } },
  args: { kind: 'assist', label: 'Assist', selected: false },
  render: (args) => ({
    props: args,
    template: `<div class="p-4"><app-android-chip [kind]="kind" [label]="label" [icon]="icon" [(selected)]="selected" /></div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidChipComponent>

export const Assist: Story = {}
export const Filter: Story = { args: { kind: 'filter', label: 'Filter' } }
export const FilterSelected: Story = { args: { kind: 'filter', label: 'Filter', selected: true } }
export const Input: Story = { args: { kind: 'input', label: 'Input' } }
export const AssistWithIcon: Story = { args: { icon: 'lucideCalendar', label: 'Add to calendar' } }
export const Overview: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2 p-4">
        <app-android-chip label="Assist" />
        <app-android-chip kind="filter" label="Filter" [selected]="true" />
        <app-android-chip kind="input" label="Input" />
      </div>`,
  }),
}
