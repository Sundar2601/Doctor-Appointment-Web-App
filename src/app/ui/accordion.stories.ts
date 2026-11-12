import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { AccordionComponent, AccordionItemComponent } from './accordion.component'

const meta: Meta<AccordionItemComponent> = {
  title: 'Display/Accordion',
  decorators: [moduleMetadata({ imports: [AccordionComponent, AccordionItemComponent] })],
  argTypes: { heading: { control: 'text' }, group: { control: 'text' }, open: { control: 'boolean' } },
  args: { heading: 'Is it accessible?', group: 'faq', open: false },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-96">
        <app-accordion>
          <app-accordion-item [heading]="heading" [group]="group" [open]="open">Yes. It adheres to the WAI-ARIA design pattern.</app-accordion-item>
          <app-accordion-item heading="Is it styled?" [group]="group">Yes. It comes with default styles that match the other components.</app-accordion-item>
          <app-accordion-item heading="Is it animated?" [group]="group">Yes. The chevron rotates when opened.</app-accordion-item>
        </app-accordion>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<AccordionItemComponent>

export const Default: Story = {}
export const FirstOpen: Story = { args: { open: true } }
export const Independent: Story = { args: { group: undefined } }
