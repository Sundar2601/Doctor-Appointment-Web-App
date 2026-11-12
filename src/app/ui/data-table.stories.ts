import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { DataTableColumn, DataTableComponent, DataTableRow } from './data-table.component'

const columns: DataTableColumn[] = [
  { key: 'doctor', label: 'Doctor', sortable: true },
  { key: 'specialty', label: 'Specialty', sortable: true },
  { key: 'hospital', label: 'Hospital' },
  { key: 'fee', label: 'Fee (₹)', sortable: true, align: 'right' },
]

const rows: DataTableRow[] = [
  { doctor: 'Dr. Anand Kumar', specialty: 'Cardiology', hospital: 'JIPMER', fee: 800 },
  { doctor: 'Dr. Meera Nair', specialty: 'Pediatrics', hospital: 'Aravind Eye Hospital', fee: 500 },
  { doctor: 'Dr. Suresh Babu', specialty: 'Orthopedics', hospital: 'Mahatma Gandhi Medical College', fee: 700 },
  { doctor: 'Dr. Kavitha Rajan', specialty: 'Dermatology', hospital: 'Pondicherry Institute of Medical Sciences', fee: 600 },
  { doctor: 'Dr. Vikram Iyer', specialty: 'Neurology', hospital: 'JIPMER', fee: 900 },
  { doctor: 'Dr. Divya Lakshmanan', specialty: 'Gynecology', hospital: 'Aravind Eye Hospital', fee: 650 },
  { doctor: 'Dr. Ramesh Chandran', specialty: 'ENT', hospital: 'Mahatma Gandhi Medical College', fee: 450 },
  { doctor: 'Dr. Sangeetha Pillai', specialty: 'Cardiology', hospital: 'Pondicherry Institute of Medical Sciences', fee: 850 },
]

const meta: Meta<DataTableComponent> = {
  title: 'Data/Data Table',
  decorators: [moduleMetadata({ imports: [DataTableComponent] })],
  argTypes: {
    selectable: { control: 'boolean' },
    pageSize: { control: 'number' },
    filterKey: { control: 'select', options: [undefined, 'doctor', 'specialty', 'hospital'] },
    filterPlaceholder: { control: 'text' },
  },
  args: { columns, rows, selectable: false, pageSize: 5, filterKey: 'doctor', filterPlaceholder: 'Filter doctors...' },
  render: (args) => ({
    props: args,
    template: `<app-data-table [columns]="columns" [rows]="rows" [selectable]="selectable" [pageSize]="pageSize" [filterKey]="filterKey" [filterPlaceholder]="filterPlaceholder" />`,
  }),
}
export default meta
type Story = StoryObj<DataTableComponent>

export const Default: Story = {}
export const Selectable: Story = { args: { selectable: true } }
export const SmallPages: Story = { args: { pageSize: 3, filterKey: undefined } }
export const Empty: Story = { args: { rows: [], filterKey: undefined } }
