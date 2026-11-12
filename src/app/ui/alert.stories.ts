import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AlertComponent } from './alert.component'

const meta: Meta<AlertComponent> = {
  title: 'Feedback/Alert',
  decorators: [moduleMetadata({ imports: [AlertComponent] })],
  argTypes: { tone: { control: 'select', options: ['default', 'danger', 'success', 'warning', 'info'] } },
  args: { tone: 'danger' },
  render: (args) => ({ props: args, template: `<app-alert [tone]="tone">Something went wrong. Please try again.</app-alert>` }),
}
export default meta
type Story = StoryObj<AlertComponent>

export const Danger: Story = {}
export const Success: Story = {
  args: { tone: 'success' },
  render: (args) => ({ props: args, template: `<app-alert [tone]="tone">Your appointment has been booked.</app-alert>` }),
}
export const Default: Story = {
  args: { tone: 'default' },
  render: (args) => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`,
  }),
}
export const Warning: Story = {
  args: { tone: 'warning' },
  render: (args) => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`,
  }),
}
export const Info: Story = {
  args: { tone: 'info' },
  render: (args) => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`,
  }),
}
export const AllVariants: Story = {
  render: () => ({
    template: `<div class="grid w-[800px] grid-cols-2 gap-6">
      <app-alert tone="default" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="danger" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="success" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="warning" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="info" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
    </div>`,
  }),
}
