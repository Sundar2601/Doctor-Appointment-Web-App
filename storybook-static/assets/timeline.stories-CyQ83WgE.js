import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Vertical event timeline. */
let TimelineComponent = class TimelineComponent {
    items = input.required();
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }]
    };
};
TimelineComponent = __decorate([
    Component({
        selector: 'app-timeline',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block', role: 'list' },
        template: `
    @for (it of items(); track $index; let last = $last) {
      <div class="flex gap-4" role="listitem">
        <div class="flex w-3 shrink-0 flex-col items-center">
          <span class="bg-primary size-3 shrink-0 rounded-full"></span>
          @if (!last) {
            <span class="bg-border w-px flex-1"></span>
          }
        </div>
        <div class="flex min-w-0 flex-1 flex-col gap-0.5" [class.pb-4]="!last">
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-medium">{{ it.title }}</p>
            @if (it.time) {
              <p class="text-muted-foreground text-xs">{{ it.time }}</p>
            }
          </div>
          @if (it.description) {
            <p class="text-muted-foreground text-sm">{{ it.description }}</p>
          }
        </div>
      </div>
    }
  `,
    })
], TimelineComponent);

const items = [{
  title: 'Appointment booked',
  description: 'Dr. Anand Kumar, Cardiology at JIPMER',
  time: '12 Nov, 10:02 AM'
}, {
  title: 'Confirmation sent',
  description: 'SMS sent to the registered mobile number',
  time: '12 Nov, 10:03 AM'
}, {
  title: 'Reminder',
  description: 'Please arrive 15 minutes early with your ID',
  time: '19 Nov, 06:00 PM'
}, {
  title: 'Consultation',
  time: '20 Nov, 09:30 AM'
}];
const meta = {
  title: 'Data/Timeline',
  decorators: [moduleMetadata({
    imports: [TimelineComponent]
  })],
  args: {
    items
  },
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-timeline [items]="items" /></div>`
  })
};
const Default = {};
const Minimal = {
  args: {
    items: [{
      title: 'Checked in'
    }, {
      title: 'Seen by doctor'
    }, {
      title: 'Discharged'
    }]
  }
};
const __namedExportsOrder = ["Default", "Minimal"];
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
Minimal.parameters = {
  ...Minimal.parameters,
  docs: {
    ...Minimal.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    items: [{\n      title: 'Checked in'\n    }, {\n      title: 'Seen by doctor'\n    }, {\n      title: 'Discharged'\n    }]\n  }\n}",
      ...Minimal.parameters?.docs?.source
    }
  }
};

export { Default, Minimal, __namedExportsOrder, meta as default };
