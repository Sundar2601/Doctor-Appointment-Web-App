import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { T as TableDirective } from './table.directive-BZgAHLvc.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Data/Table',
  decorators: [moduleMetadata({
    imports: [TableDirective]
  })]
};
const appointments = [{
  id: 'APT-1001',
  patient: 'Priya Raman',
  doctor: 'Dr. Anand Kumar',
  time: '09:30 AM',
  fee: '₹500'
}, {
  id: 'APT-1002',
  patient: 'Karthik Subramanian',
  doctor: 'Dr. Meera Nair',
  time: '10:15 AM',
  fee: '₹700'
}, {
  id: 'APT-1003',
  patient: 'Lakshmi Devi',
  doctor: 'Dr. Suresh Babu',
  time: '11:00 AM',
  fee: '₹600'
}];
const Appointments = {
  render: () => ({
    props: {
      appointments
    },
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
      </table>`
  })
};
const WithSelectedRow = {
  render: () => ({
    props: {
      appointments
    },
    template: `
      <table appTable>
        <thead><tr><th>Patient</th><th>Doctor</th><th>Time</th></tr></thead>
        <tbody>
          @for (a of appointments; track a.id; let i = $index) {
            <tr [attr.aria-selected]="i === 1"><td>{{ a.patient }}</td><td>{{ a.doctor }}</td><td>{{ a.time }}</td></tr>
          }
        </tbody>
      </table>`
  })
};
const __namedExportsOrder = ["Appointments", "WithSelectedRow"];
Appointments.parameters = {
  ...Appointments.parameters,
  docs: {
    ...Appointments.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      appointments\n    },\n    template: `\n      <table appTable>\n        <caption class=\"text-muted-foreground mt-4 text-sm\">Today's appointments</caption>\n        <thead>\n          <tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Time</th><th class=\"num\">Fee</th></tr>\n        </thead>\n        <tbody>\n          @for (a of appointments; track a.id) {\n            <tr><td>{{ a.id }}</td><td>{{ a.patient }}</td><td>{{ a.doctor }}</td><td>{{ a.time }}</td><td class=\"num\">{{ a.fee }}</td></tr>\n          }\n        </tbody>\n      </table>`\n  })\n}",
      ...Appointments.parameters?.docs?.source
    }
  }
};
WithSelectedRow.parameters = {
  ...WithSelectedRow.parameters,
  docs: {
    ...WithSelectedRow.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      appointments\n    },\n    template: `\n      <table appTable>\n        <thead><tr><th>Patient</th><th>Doctor</th><th>Time</th></tr></thead>\n        <tbody>\n          @for (a of appointments; track a.id; let i = $index) {\n            <tr [attr.aria-selected]=\"i === 1\"><td>{{ a.patient }}</td><td>{{ a.doctor }}</td><td>{{ a.time }}</td></tr>\n          }\n        </tbody>\n      </table>`\n  })\n}",
      ...WithSelectedRow.parameters?.docs?.source
    }
  }
};

export { Appointments, WithSelectedRow, __namedExportsOrder, meta as default };
