import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { TableDirective } from './table.directive'

const meta: Meta<TableDirective> = {
  title: 'Data/Table',
  decorators: [moduleMetadata({ imports: [TableDirective] })],
}
export default meta
type Story = StoryObj<TableDirective>

const appointments = [
  { id: 'APT-1001', patient: 'Priya Raman', doctor: 'Dr. Anand Kumar', time: '09:30 AM', fee: '₹500' },
  { id: 'APT-1002', patient: 'Karthik Subramanian', doctor: 'Dr. Meera Nair', time: '10:15 AM', fee: '₹700' },
  { id: 'APT-1003', patient: 'Lakshmi Devi', doctor: 'Dr. Suresh Babu', time: '11:00 AM', fee: '₹600' },
]

export const Appointments: Story = {
  render: () => ({
    props: { appointments },
    template: `
      <table appTable>
        <caption class="text-muted-foreground mt-4 text-sm">Today's appointments</caption>
        <thead>
          <tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Time</th><th class="num">Fee</th></tr>
        </thead>
        <tbody>
          @for (a of appointments; track a.id) {
            <tr><td>{{ a.id }}</td><td>{{ a.patient }}</td><td>{{ a.doctor }}</td><td>{{ a.time }}</td><td class="num">{{ a.fee }}</td></tr>
          }
        </tbody>
      </table>`,
  }),
}

export const WithSelectedRow: Story = {
  render: () => ({
    props: { appointments },
    template: `
      <table appTable>
        <thead><tr><th>Patient</th><th>Doctor</th><th>Time</th></tr></thead>
        <tbody>
          @for (a of appointments; track a.id; let i = $index) {
            <tr [attr.aria-selected]="i === 1"><td>{{ a.patient }}</td><td>{{ a.doctor }}</td><td>{{ a.time }}</td></tr>
          }
        </tbody>
      </table>`,
  }),
}
