import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

const TONE = {
    default: { box: 'border', title: 'text-card-foreground', text: 'text-muted-foreground', icon: 'text-card-foreground' },
    danger: { box: 'border', title: 'text-destructive', text: 'text-destructive', icon: 'text-destructive' },
    success: { box: 'border border-success', title: 'text-success', text: 'text-muted-foreground', icon: 'text-success' },
    warning: { box: 'border border-warning', title: 'text-warning', text: 'text-muted-foreground', icon: 'text-warning' },
    info: { box: 'border border-info', title: 'text-info', text: 'text-muted-foreground', icon: 'text-info' },
};
/** Figma "Alert". Optional `heading` renders the bold title line; projected content is the description. */
let AlertComponent = class AlertComponent {
    tone = input('danger');
    heading = input();
    t = computed(() => TONE[this.tone()]);
    classes = computed(() => `bg-card flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${this.t().box}`);
    static propDecorators = {
        tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false, transform: undefined },] }],
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false, transform: undefined },] }]
    };
};
AlertComponent = __decorate([
    Component({
        selector: 'app-alert',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'classes()', '[attr.role]': "tone() === 'danger' ? 'alert' : 'status'" },
        template: `
    <svg
      class="mt-0.5 size-4 shrink-0"
      [class]="t().icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (tone()) {
        @case ('success') {
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('warning') {
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4M12 17h.01" />
        }
        @case ('danger') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        }
        @default {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        }
      }
    </svg>
    <div class="flex min-w-0 flex-1 flex-col gap-0.5 text-sm" [class]="t().text">
      @if (heading()) {
        <p class="font-medium" [class]="t().title">{{ heading() }}</p>
      }
      <div><ng-content /></div>
    </div>
  `,
    })
], AlertComponent);

const meta = {
  title: 'Feedback/Alert',
  decorators: [moduleMetadata({
    imports: [AlertComponent]
  })],
  argTypes: {
    tone: {
      control: 'select',
      options: ['default', 'danger', 'success', 'warning', 'info']
    }
  },
  args: {
    tone: 'danger'
  },
  render: args => ({
    props: args,
    template: `<app-alert [tone]="tone">Something went wrong. Please try again.</app-alert>`
  })
};
const Danger = {};
const Success = {
  args: {
    tone: 'success'
  },
  render: args => ({
    props: args,
    template: `<app-alert [tone]="tone">Your appointment has been booked.</app-alert>`
  })
};
const Default = {
  args: {
    tone: 'default'
  },
  render: args => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`
  })
};
const Warning = {
  args: {
    tone: 'warning'
  },
  render: args => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`
  })
};
const Info = {
  args: {
    tone: 'info'
  },
  render: args => ({
    props: args,
    template: `<app-alert [tone]="tone" heading="Heads up!">You can add components to your app using the CLI.</app-alert>`
  })
};
const AllVariants = {
  render: () => ({
    template: `<div class="grid w-[800px] grid-cols-2 gap-6">
      <app-alert tone="default" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="danger" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="success" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="warning" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
      <app-alert tone="info" heading="Heads up!">You can add components to your app using the CLI.</app-alert>
    </div>`
  })
};
const __namedExportsOrder = ["Danger", "Success", "Default", "Warning", "Info", "AllVariants"];
Danger.parameters = {
  ...Danger.parameters,
  docs: {
    ...Danger.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Danger.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'success'\n  },\n  render: args => ({\n    props: args,\n    template: `<app-alert [tone]=\"tone\">Your appointment has been booked.</app-alert>`\n  })\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'default'\n  },\n  render: args => ({\n    props: args,\n    template: `<app-alert [tone]=\"tone\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>`\n  })\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...Warning.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'warning'\n  },\n  render: args => ({\n    props: args,\n    template: `<app-alert [tone]=\"tone\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>`\n  })\n}",
      ...Warning.parameters?.docs?.source
    }
  }
};
Info.parameters = {
  ...Info.parameters,
  docs: {
    ...Info.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'info'\n  },\n  render: args => ({\n    props: args,\n    template: `<app-alert [tone]=\"tone\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>`\n  })\n}",
      ...Info.parameters?.docs?.source
    }
  }
};
AllVariants.parameters = {
  ...AllVariants.parameters,
  docs: {
    ...AllVariants.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"grid w-[800px] grid-cols-2 gap-6\">\n      <app-alert tone=\"default\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>\n      <app-alert tone=\"danger\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>\n      <app-alert tone=\"success\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>\n      <app-alert tone=\"warning\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>\n      <app-alert tone=\"info\" heading=\"Heads up!\">You can add components to your app using the CLI.</app-alert>\n    </div>`\n  })\n}",
      ...AllVariants.parameters?.docs?.source
    }
  }
};

export { AllVariants, Danger, Default, Info, Success, Warning, __namedExportsOrder, meta as default };
