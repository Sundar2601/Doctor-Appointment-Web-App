import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ScrollAreaComponent } from './scroll-area.component'

const meta: Meta<ScrollAreaComponent> = {
  title: 'Layout/Scroll Area',
  decorators: [moduleMetadata({ imports: [ScrollAreaComponent] })],
}
export default meta
type Story = StoryObj<ScrollAreaComponent>

const doctors = [
  'Dr. Anand Kumar', 'Dr. Meera Nair', 'Dr. Suresh Babu', 'Dr. Kavitha Rajan', 'Dr. Vikram Iyer',
  'Dr. Divya Lakshmanan', 'Dr. Ramesh Chandran', 'Dr. Sangeetha Pillai', 'Dr. Arjun Menon', 'Dr. Nandini Rao',
]

export const DoctorList: Story = {
  render: () => ({
    props: { doctors },
    template: `
      <app-scroll-area class="h-56 w-64">
        <h4 class="mb-3 text-sm font-medium">Available doctors</h4>
        @for (d of doctors; track d) {
          <div class="py-2 text-sm">{{ d }}</div>
          <hr />
        }
      </app-scroll-area>`,
  }),
}

export const WideContent: Story = {
  render: () => ({
    template: `
      <app-scroll-area class="h-24 w-72">
        <p class="w-[600px] text-sm">Pondicherry Institute of Medical Sciences, Kalapet, Puducherry - outpatient registration opens at 08:00 AM daily.</p>
      </app-scroll-area>`,
  }),
}
