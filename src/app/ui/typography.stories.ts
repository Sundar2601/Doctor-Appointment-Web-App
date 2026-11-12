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
      imports: [H1Directive, H2Directive, H3Directive, LeadDirective, ParagraphDirective, BlockquoteDirective, InlineCodeDirective, MutedDirective],
    }),
  ],
}
export default meta
type Story = StoryObj

export const Headings: Story = {
  render: () => ({
    template: `<div class="flex flex-col gap-3">
      <h1 appH1>Heading 1</h1><h2 appH2>Heading 2</h2><h3 appH3>Heading 3</h3>
    </div>`,
  }),
}
export const Text: Story = {
  render: () => ({
    template: `<div class="flex max-w-xl flex-col gap-3">
      <p appLead>A modal dialog that interrupts the user with important content.</p>
      <p appP>The king, seeing how much happier his subjects were, realized the error of his ways.</p>
      <blockquote appBlockquote>"After all," he said, "everyone enjoys a good joke."</blockquote>
      <p appP>Use <code appInlineCode>npm install</code> to get started.</p>
      <small appMuted>Enter your email address.</small>
    </div>`,
  }),
}
