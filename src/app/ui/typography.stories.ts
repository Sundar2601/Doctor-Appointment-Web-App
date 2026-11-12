import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import {
  BlockquoteDirective,
  H1Directive,
  H2Directive,
  H3Directive,
  InlineCodeDirective,
  LeadDirective,
  MutedDirective,
  ParagraphDirective,
} from './typography.directive'

const meta: Meta = {
  title: 'Display/Typography',
  decorators: [
    moduleMetadata({
      imports: [
        H1Directive,
        H2Directive,
        H3Directive,
        LeadDirective,
        ParagraphDirective,
        BlockquoteDirective,
        InlineCodeDirective,
        MutedDirective,
      ],
    }),
  ],
}
export default meta
type Story = StoryObj

export const Headings: Story = {
  render: () => ({
    template: `<div class="flex flex-col gap-3">
      <h1 appH1>The Joke Tax Chronicles</h1><h2 appH2>The People of the Kingdom</h2><h3 appH3>The Joke Tax</h3>
    </div>`,
  }),
}
export const Text: Story = {
  render: () => ({
    template: `<div class="flex max-w-xl flex-col gap-3">
      <p appLead>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
      <p appP>Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place.</p>
      <blockquote appBlockquote>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
      <p><code appInlineCode>@radix-ui/react-alert-dialog</code></p>
      <small appMuted>Small text &middot; Muted text</small>
    </div>`,
  }),
}
