import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { C as CalendarComponent } from './calendar.component-CEeFnIJD.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';
import './ng-icons-lucide-DF7QvMAc.js';

const meta = {
  title: 'Forms/Calendar',
  decorators: [moduleMetadata({
    imports: [CalendarComponent]
  })],
  argTypes: {
    value: {
      control: 'date'
    }
  },
  args: {
    value: null
  },
  render: args => ({
    props: args,
    template: `
      <div class="flex flex-col gap-3">
        <app-calendar [(value)]="value" />
        <p class="text-sm">Appointment date: {{ value ? value.toDateString() : 'none selected' }}</p>
      </div>`
  })
};
const Default = {};
const WithSelectedDate = {
  args: {
    value: new Date(new Date().getFullYear(), new Date().getMonth(), 15)
  }
};
const __namedExportsOrder = ["Default", "WithSelectedDate"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
WithSelectedDate.parameters = {
  ...WithSelectedDate.parameters,
  docs: {
    ...WithSelectedDate.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: new Date(new Date().getFullYear(), new Date().getMonth(), 15)\n  }\n}",
      ...WithSelectedDate.parameters?.docs?.source
    }
  }
};

export { Default, WithSelectedDate, __namedExportsOrder, meta as default };
