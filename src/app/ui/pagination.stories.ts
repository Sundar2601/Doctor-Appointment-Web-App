import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { PaginationComponent } from './pagination.component'

const meta: Meta<PaginationComponent> = {
  title: 'Navigation/Pagination',
  component: PaginationComponent,
  decorators: [moduleMetadata({ imports: [PaginationComponent] })],
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    pageCount: { control: { type: 'number', min: 1 } },
    siblings: { control: { type: 'number', min: 0, max: 3 } },
  },
  args: { page: 1, pageCount: 12, siblings: 1 },
  render: (args) => ({
    props: args,
    template: `<app-pagination [pageCount]="pageCount" [siblings]="siblings" [(page)]="page" />`,
  }),
}
export default meta
type Story = StoryObj<PaginationComponent>

export const Default: Story = {}
export const MiddlePage: Story = { args: { page: 6 } }
export const FewPages: Story = { args: { pageCount: 4 } }
export const WideSiblings: Story = { args: { page: 10, pageCount: 20, siblings: 2 } }
