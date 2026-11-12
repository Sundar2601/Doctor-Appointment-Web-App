import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { Step, StepperComponent } from './stepper.component'

const steps: Step[] = [
  { title: 'Hospital', description: 'Choose a hospital' },
  { title: 'Doctor', description: 'Pick a specialist' },
  { title: 'Date & time', description: 'Select a slot' },
  { title: 'Confirm', description: 'Review and book' },
]

const meta: Meta<StepperComponent> = {
  title: 'Navigation/Stepper',
  decorators: [moduleMetadata({ imports: [StepperComponent] })],
  argTypes: { current: { control: { type: 'number', min: 0, max: 4 } } },
  args: { steps, current: 1 },
  render: (args) => ({ props: args, template: `<app-stepper [steps]="steps" [current]="current" />` }),
}
export default meta
type Story = StoryObj<StepperComponent>

export const Default: Story = {}
export const FirstStep: Story = { args: { current: 0 } }
export const Completed: Story = { args: { current: 4 } }
export const TitlesOnly: Story = {
  args: { steps: [{ title: 'Details' }, { title: 'Payment' }, { title: 'Done' }], current: 1 },
}
