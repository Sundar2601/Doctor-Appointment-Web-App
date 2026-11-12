import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { SourcesComponent } from './sources.component'

const meta: Meta<SourcesComponent> = {
  title: 'AI/Sources',
  decorators: [moduleMetadata({ imports: [SourcesComponent] })],
  args: {
    sources: [
      { title: 'JIPMER OPD timings', host: 'jipmer.edu.in', url: 'https://jipmer.edu.in' },
      { title: 'Cardiology department', host: 'jipmer.edu.in', url: 'https://jipmer.edu.in' },
      { title: 'Visiting hours policy', host: 'health.gov.in', url: 'https://health.gov.in' },
    ],
  },
  render: (args) => ({ props: args, template: `<app-sources [sources]="sources" />` }),
}
export default meta
type Story = StoryObj<SourcesComponent>

export const Default: Story = {}
export const Single: Story = { args: { sources: [{ title: 'JIPMER OPD timings', host: 'jipmer.edu.in' }] } }
