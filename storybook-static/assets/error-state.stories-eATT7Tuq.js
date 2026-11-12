import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, c as computed, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const DEFAULTS = {
    'not-found': { title: 'Page not found', description: 'The page may have moved or the link is wrong.' },
    'server-error': {
        title: 'Something went wrong',
        description: 'We could not complete your request. Please try again.',
        icon: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'],
    },
    forbidden: {
        title: 'No access',
        description: 'You do not have permission to view this page.',
        icon: ['M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
    },
    offline: {
        title: 'You are offline',
        description: 'Check your connection and try again.',
        icon: [
            'M12 20h.01',
            'M8.5 16.429a5 5 0 0 1 7 0',
            'M5 12.859a10 10 0 0 1 5.17-2.69',
            'M19 12.859a10 10 0 0 0-2.007-1.523',
            'M2 8.82a15 15 0 0 1 4.177-2.643',
            'M22 8.82a15 15 0 0 0-11.288-3.764',
            'm2 2 20 20',
        ],
    },
};
/** Figma "Error" patterns. Usage: `<app-error-state kind="not-found" actionLabel="Go to home" (action)="home()" />`. Extra buttons can be projected. */
let ErrorStateComponent = class ErrorStateComponent {
    kind = input('not-found');
    title = input();
    description = input();
    actionLabel = input();
    action = output();
    hasProjected = true;
    resolvedTitle = computed(() => this.title() ?? DEFAULTS[this.kind()].title);
    resolvedDescription = computed(() => this.description() ?? DEFAULTS[this.kind()].description);
    iconPaths = computed(() => DEFAULTS[this.kind()].icon);
    static propDecorators = {
        kind: [{ type: Input, args: [{ isSignal: true, alias: "kind", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        actionLabel: [{ type: Input, args: [{ isSignal: true, alias: "actionLabel", required: false, transform: undefined },] }],
        action: [{ type: Output, args: ["action",] }]
    };
};
ErrorStateComponent = __decorate([
    Component({
        selector: 'app-error-state',
        imports: [ButtonDirective],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground flex flex-col items-center gap-2 rounded-xl border px-6 py-8 text-center' },
        template: `
    @if (iconPaths(); as paths) {
      <span class="bg-muted text-foreground mb-2 flex size-14 shrink-0 items-center justify-center rounded-xl" aria-hidden="true">
        <svg
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          @for (d of paths; track d) {
            <path [attr.d]="d" />
          }
        </svg>
      </span>
    } @else {
      <p class="text-muted-foreground text-4xl font-bold" aria-hidden="true">404</p>
    }
    <h2 class="text-foreground mt-2 text-base font-semibold">{{ resolvedTitle() }}</h2>
    <p class="text-muted-foreground max-w-xs text-sm">{{ resolvedDescription() }}</p>
    @if (actionLabel() || hasProjected) {
      <div class="mt-4 flex flex-wrap justify-center gap-2">
        @if (actionLabel(); as label) {
          <button appButton (click)="action.emit()">{{ label }}</button>
        }
        <ng-content />
      </div>
    }
  `,
    })
], ErrorStateComponent);

const meta = {
  title: 'Patterns/Error State',
  decorators: [moduleMetadata({
    imports: [ErrorStateComponent, ButtonDirective]
  })],
  argTypes: {
    kind: {
      control: 'select',
      options: ['not-found', 'server-error', 'forbidden', 'offline']
    }
  },
  args: {
    kind: 'not-found',
    actionLabel: 'Go to home'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-md"><app-error-state [kind]="kind" [title]="title" [description]="description" [actionLabel]="actionLabel" /></div>`
  })
};
const NotFound = {
  render: args => ({
    props: args,
    template: `<div class="max-w-md"><app-error-state [kind]="kind" [actionLabel]="actionLabel"><button appButton variant="outline">Search</button></app-error-state></div>`
  })
};
const SomethingWentWrong = {
  args: {
    kind: 'server-error',
    actionLabel: 'Try again'
  }
};
const NoAccess = {
  args: {
    kind: 'forbidden',
    actionLabel: 'Request access'
  }
};
const Offline = {
  args: {
    kind: 'offline',
    actionLabel: 'Retry'
  }
};
const __namedExportsOrder = ["NotFound", "SomethingWentWrong", "NoAccess", "Offline"];
NotFound.parameters = {
  ...NotFound.parameters,
  docs: {
    ...NotFound.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"max-w-md\"><app-error-state [kind]=\"kind\" [actionLabel]=\"actionLabel\"><button appButton variant=\"outline\">Search</button></app-error-state></div>`\n  })\n}",
      ...NotFound.parameters?.docs?.source
    }
  }
};
SomethingWentWrong.parameters = {
  ...SomethingWentWrong.parameters,
  docs: {
    ...SomethingWentWrong.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'server-error',\n    actionLabel: 'Try again'\n  }\n}",
      ...SomethingWentWrong.parameters?.docs?.source
    }
  }
};
NoAccess.parameters = {
  ...NoAccess.parameters,
  docs: {
    ...NoAccess.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'forbidden',\n    actionLabel: 'Request access'\n  }\n}",
      ...NoAccess.parameters?.docs?.source
    }
  }
};
Offline.parameters = {
  ...Offline.parameters,
  docs: {
    ...Offline.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'offline',\n    actionLabel: 'Retry'\n  }\n}",
      ...Offline.parameters?.docs?.source
    }
  }
};

export { NoAccess, NotFound, Offline, SomethingWentWrong, __namedExportsOrder, meta as default };
