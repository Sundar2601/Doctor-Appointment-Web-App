import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosActionSheetComponent } from './ios-action-sheet.component'

const meta: Meta<IosActionSheetComponent> = {
  title: 'Mobile/iOS/Action Sheet',
  decorators: [moduleMetadata({ imports: [IosActionSheetComponent] })],
  args: {
    title: 'Choose an option',
    actions: [{ label: 'Share' }, { label: 'Duplicate' }, { label: 'Delete', destructive: true }],
    cancelLabel: 'Cancel',
  },
  render: (args) => ({
    props: args,
    template: `<app-ios-action-sheet [title]="title" [actions]="actions" [cancelLabel]="cancelLabel" />`,
  }),
}
export default meta
type Story = StoryObj<IosActionSheetComponent>

export const Default: Story = {}
export const WithoutTitle: Story = { args: { title: '' } }
