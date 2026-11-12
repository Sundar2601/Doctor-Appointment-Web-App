import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { DatePickerComponent } from './date-picker.component'

interface Args { value: string; placeholder: string; min: string; max: string; disabled: boolean }

const meta: Meta<Args> = {
  title: 'Forms/Date Picker',
  decorators: [moduleMetadata({ imports: [DatePickerComponent] })],
  argTypes: {
    value: { control: 'text', description: 'ISO date (yyyy-mm-dd)' }, placeholder: { control: 'text' },
    min: { control: 'text' }, max: { control: 'text' }, disabled: { control: 'boolean' },
  },
  args: { value: '', placeholder: 'Pick a date', min: '', max: '', disabled: false },
  render: (args) => ({
    props: args,
    template: `<div class="w-64"><app-date-picker ariaLabel="Appointment date" [(value)]="value" [placeholder]="placeholder" [min]="min" [max]="max" [disabled]="disabled" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithValue: Story = { args: { value: '2026-12-01' } }
export const WithRange: Story = { args: { min: '2026-12-01', max: '2026-12-31', value: '2026-12-15' } }
export const Disabled: Story = { args: { disabled: true } }
