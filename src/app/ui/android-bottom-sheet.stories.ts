import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidBottomSheetComponent } from './android-bottom-sheet.component'
import { AndroidListItemComponent } from './android-list-item.component'

const meta: Meta<AndroidBottomSheetComponent> = {
  title: 'Mobile/Android/Bottom Sheet',
  component: AndroidBottomSheetComponent,
  decorators: [moduleMetadata({ imports: [AndroidBottomSheetComponent, AndroidListItemComponent] })],
  render: () => ({
    template: `
      <div class="w-[412px] p-4">
        <app-android-bottom-sheet>
          <div role="list">
            <app-android-list-item headline="Share" leadingIcon="lucideShare" />
            <app-android-list-item headline="Copy link" leadingIcon="lucideCopy" />
            <app-android-list-item headline="Delete" leadingIcon="lucideTrash2" [destructive]="true" />
          </div>
        </app-android-bottom-sheet>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidBottomSheetComponent>

export const Default: Story = {}
