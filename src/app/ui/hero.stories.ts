import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ButtonDirective } from './button.directive'
import { HeroComponent } from './hero.component'

interface Args {
  title: string
  subtitle: string
  illustration: string
}

const meta: Meta<Args> = {
  title: 'Display/Hero',
  parameters: { layout: 'padded' },
  decorators: [moduleMetadata({ imports: [HeroComponent, ButtonDirective] })],
  args: {
    title: 'Welcome back, Demo',
    subtitle: 'Your appointments across hospitals in Puducherry.',
    illustration: 'illustrations/hero-dashboard.svg',
  },
  render: (args) => ({
    props: args,
    template: `<app-hero [title]="title" [subtitle]="subtitle" [illustration]="illustration"></app-hero>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithActions: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-hero [title]="title" [subtitle]="subtitle" [illustration]="illustration">
        <a heroActions appButton variant="outline" href="#">Book new</a>
      </app-hero>`,
  }),
}
export const WithoutIllustration: Story = { args: { illustration: '' } }
