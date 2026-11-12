import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { IosListComponent, IosListRowComponent } from './ios-list.component'

const meta: Meta<IosListRowComponent> = {
  title: 'Mobile/iOS/List',
  decorators: [moduleMetadata({ imports: [IosListComponent, IosListRowComponent] })],
  argTypes: { variant: { control: 'select', options: ['default', 'value', 'toggle'] } },
  args: { label: 'Notifications', variant: 'default', value: 'On', icon: 'lucideSlidersHorizontal', checked: true },
  render: (args) => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-list>
      <app-ios-list-row [label]="label" [variant]="variant" [value]="value" [icon]="icon" [(checked)]="checked" />
    </app-ios-list></div>`,
  }),
}
export default meta
type Story = StoryObj<IosListRowComponent>

export const RowDefault: Story = {}
export const RowValue: Story = { args: { label: 'Sounds', variant: 'value' } }
export const RowToggle: Story = { args: { label: 'Airplane Mode', variant: 'toggle' } }
export const Grouped: Story = {
  render: () => ({
    props: { on: true },
    template: `<div class="w-[343px]"><app-ios-list>
      <app-ios-list-row label="Notifications" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Sounds" variant="value" value="On" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Focus" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Airplane Mode" variant="toggle" icon="lucideSlidersHorizontal" [(checked)]="on" />
    </app-ios-list></div>`,
  }),
}
