import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CalendarComponent } from './calendar.component'

const meta: Meta<CalendarComponent> = {
  title: 'Forms/Calendar',
  decorators: [moduleMetadata({ imports: [CalendarComponent] })],
  argTypes: { value: { control: 'date' } },
  args: { value: null },
  render: (args) => ({
    props: args,
    template: `
      <div class="flex flex-col gap-3">
        <app-calendar [(value)]="value" />
        <p class="text-sm">Appointment date: {{ value ? value.toDateString() : 'none selected' }}</p>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<CalendarComponent>

export const Default: Story = {}
export const WithSelectedDate: Story = {
  args: { value: new Date(new Date().getFullYear(), new Date().getMonth(), 15) },
}
