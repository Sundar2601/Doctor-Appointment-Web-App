import { Component, inject, input } from '@angular/core'
import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ToasterComponent } from './toaster.component'
import { ToastService } from './toast.service'

@Component({
  selector: 'app-story-toast-demo',
  imports: [ToasterComponent],
  template: `
    <button type="button" class="rounded-md border px-3 py-2 text-sm" (click)="fire()">Show toast</button>
    <app-toaster />
  `,
})
class ToastDemoComponent {
  private readonly toasts = inject(ToastService)
  readonly title = input('Event has been created')
  readonly description = input<string>()
  readonly actionLabel = input<string>()
  readonly duration = input(4000)
  protected fire() {
    this.toasts.show(this.title(), { description: this.description(), actionLabel: this.actionLabel(), duration: this.duration() })
  }
}

const meta: Meta<ToastDemoComponent> = {
  title: 'Feedback/Toast',
  decorators: [moduleMetadata({ imports: [ToastDemoComponent] })],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
    duration: { control: 'number' },
  },
  args: { title: 'Event has been created', duration: 4000 },
  render: (args) => ({
    props: args,
    template: `<app-story-toast-demo [title]="title" [description]="description" [actionLabel]="actionLabel" [duration]="duration" />`,
  }),
}
export default meta
type Story = StoryObj<ToastDemoComponent>

export const Default: Story = {}
export const WithDescription: Story = { args: { description: 'Sunday, December 03, 2023 at 9:00 AM' } }
export const WithAction: Story = { args: { description: 'Sunday, December 03, 2023 at 9:00 AM', actionLabel: 'Undo', duration: 0 } }
