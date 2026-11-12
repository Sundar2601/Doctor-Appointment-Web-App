import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CodeBlockComponent } from './code-block.component'

const meta: Meta<CodeBlockComponent> = {
  title: 'Data/Code Block',
  decorators: [moduleMetadata({ imports: [CodeBlockComponent] })],
  argTypes: { code: { control: 'text' } },
  args: { code: 'npm install @ng-icons/core @ng-icons/lucide' },
  render: (args) => ({ props: args, template: `<app-code-block [code]="code" />` }),
}
export default meta
type Story = StoryObj<CodeBlockComponent>

export const Default: Story = {}
export const AppointmentPayload: Story = {
  args: {
    code: `{
  "appointmentId": "APT-1001",
  "patient": "Priya Raman",
  "doctor": "Dr. Anand Kumar",
  "hospital": "JIPMER",
  "date": "2026-11-20",
  "time": "09:30"
}`,
  },
}
