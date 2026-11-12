import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { FilterBarComponent, FilterOption } from './filter-bar.component'

const filters: FilterOption[] = [
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'orthopedics', label: 'Orthopedics' },
  { value: 'available', label: 'Available today' },
]

const meta: Meta<FilterBarComponent> = {
  title: 'Forms/Filter Bar',
  decorators: [moduleMetadata({ imports: [FilterBarComponent] })],
  argTypes: { placeholder: { control: 'text' }, search: { control: 'text' } },
  args: { filters, placeholder: 'Search doctors...', search: '', active: [] },
  render: (args) => ({
    props: args,
    template: `
      <div class="flex flex-col gap-3">
        <app-filter-bar [filters]="filters" [placeholder]="placeholder" [(search)]="search" [(active)]="active" />
        <p class="text-muted-foreground text-xs">search: "{{ search }}" | active: {{ active.join(', ') || 'none' }}</p>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<FilterBarComponent>

export const Default: Story = {}
export const WithActiveFilters: Story = { args: { search: 'Kumar', active: ['cardiology', 'available'] } }
export const SearchOnly: Story = { args: { filters: [], placeholder: 'Search hospitals...' } }
