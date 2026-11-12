import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { NativeSelectComponent } from './native-select.component'

interface Args {
  disabled: boolean
  invalid: boolean
}

const meta: Meta<Args> = {
  title: 'Forms/Native Select',
  decorators: [moduleMetadata({ imports: [NativeSelectComponent] })],
  argTypes: { disabled: { control: 'boolean' }, invalid: { control: 'boolean' } },
  args: { disabled: false, invalid: false },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-64"><app-native-select>
        <select aria-label="Specialty" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null">
          <option value="">Select a specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="neurology">Neurology</option>
        </select>
      </app-native-select></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Invalid: Story = { args: { invalid: true } }
export const Disabled: Story = { args: { disabled: true } }
