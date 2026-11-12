import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AndroidListItemComponent } from './android-list-item.component'

const meta: Meta<AndroidListItemComponent> = {
  title: 'Mobile/Android/List Item',
  component: AndroidListItemComponent,
  decorators: [moduleMetadata({ imports: [AndroidListItemComponent] })],
  args: { headline: 'List item headline', supporting: 'Supporting text goes here', leading: 'A', trailing: '10:24' },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-[412px]" role="list">
        <app-android-list-item
          [headline]="headline" [supporting]="supporting" [leading]="leading" [leadingIcon]="leadingIcon" [trailing]="trailing"
        />
      </div>`,
  }),
}
export default meta
type Story = StoryObj<AndroidListItemComponent>

export const TwoLine: Story = {}
export const OneLine: Story = { args: { supporting: undefined, trailing: undefined } }
export const WithIcon: Story = { args: { leading: undefined, leadingIcon: 'lucideMail', trailing: undefined } }
