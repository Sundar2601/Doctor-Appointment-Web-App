import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { ComboboxComponent, type ComboboxOption } from './combobox.component'

interface Args {
  options: ComboboxOption[]
  value: string | null
  placeholder: string
  searchPlaceholder: string
  emptyText: string
  disabled: boolean
}

const options: ComboboxOption[] = [
  { value: 'angular', label: 'Angular' },
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'solid', label: 'Solid', disabled: true },
]

const meta: Meta<Args> = {
  title: 'Forms/Combobox',
  decorators: [moduleMetadata({ imports: [ComboboxComponent] })],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    emptyText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    options,
    value: null,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No results found.',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<div class="w-64 pb-64"><app-combobox ariaLabel="Framework" [options]="options" [(value)]="value" [placeholder]="placeholder" [searchPlaceholder]="searchPlaceholder" [emptyText]="emptyText" [disabled]="disabled" /></div>`,
  }),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithValue: Story = { args: { value: 'angular' } }
export const Disabled: Story = { args: { disabled: true } }
