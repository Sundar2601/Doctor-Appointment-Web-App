import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, t as lucideBell } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** One row in a notification list. Add `appNotificationAction` content for trailing actions. */
let NotificationItemComponent = class NotificationItemComponent {
    title = input.required();
    description = input();
    time = input();
    initials = input();
    unread = input(false);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false, transform: undefined },] }],
        initials: [{ type: Input, args: [{ isSignal: true, alias: "initials", required: false, transform: undefined },] }],
        unread: [{ type: Input, args: [{ isSignal: true, alias: "unread", required: false, transform: undefined },] }]
    };
};
NotificationItemComponent = __decorate([
    Component({
        selector: 'app-notification-item',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideBell })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex items-start gap-3 rounded-md p-3', '[class.bg-accent]': 'unread()' },
        template: `
    <span class="bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-xs">
      @if (initials()) {
        {{ initials() }}
      } @else {
        <ng-icon name="lucideBell" size="16" />
      }
    </span>
    <div class="grid min-w-0 flex-1 gap-0.5">
      <p class="text-sm font-medium">{{ title() }}</p>
      @if (description()) {
        <p class="text-muted-foreground text-sm">{{ description() }}</p>
      }
      @if (time()) {
        <p class="text-muted-foreground text-xs">{{ time() }}</p>
      }
    </div>
    @if (unread()) {
      <span class="bg-info size-2 shrink-0 rounded-full" aria-label="Unread"></span>
    }
  `,
    })
], NotificationItemComponent);

const meta = {
  title: 'Display/Notification Item',
  decorators: [moduleMetadata({
    imports: [NotificationItemComponent]
  })],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    time: {
      control: 'text'
    },
    initials: {
      control: 'text'
    },
    unread: {
      control: 'boolean'
    }
  },
  args: {
    title: 'Appointment confirmed',
    description: 'Dr. Smith confirmed your visit on Tuesday.',
    time: '2 hours ago',
    unread: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-notification-item [title]="title" [description]="description" [time]="time" [initials]="initials" [unread]="unread" /></div>`
  })
};
const Read = {};
const Unread = {
  args: {
    unread: true
  }
};
const WithInitials = {
  args: {
    initials: 'JS',
    unread: true
  }
};
const __namedExportsOrder = ["Read", "Unread", "WithInitials"];
Read.parameters = {
  ...Read.parameters,
  docs: {
    ...Read.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Read.parameters?.docs?.source
    }
  }
};
Unread.parameters = {
  ...Unread.parameters,
  docs: {
    ...Unread.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    unread: true\n  }\n}",
      ...Unread.parameters?.docs?.source
    }
  }
};
WithInitials.parameters = {
  ...WithInitials.parameters,
  docs: {
    ...WithInitials.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    initials: 'JS',\n    unread: true\n  }\n}",
      ...WithInitials.parameters?.docs?.source
    }
  }
};

export { Read, Unread, WithInitials, __namedExportsOrder, meta as default };
