import { _ as __decorate, a2 as Injectable, s as signal, C as Component, a as ChangeDetectionStrategy, b as inject, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import { m as moduleMetadata } from './iframe-C24jBurn.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Sonner". `inject(ToastService).show('Event has been created', { description: '...' })`; render `<app-toaster />` once in the root. */
let ToastService = class ToastService {
    nextId = 0;
    _toasts = signal([]);
    toasts = this._toasts.asReadonly();
    show(title, options = {}) {
        const id = this.nextId++;
        const { duration = 4000, ...rest } = options;
        this._toasts.update((t) => [...t, { id, title, ...rest }]);
        if (duration > 0)
            setTimeout(() => this.dismiss(id), duration);
        return id;
    }
    dismiss(id) {
        this._toasts.update((t) => t.filter((x) => x.id !== id));
    }
};
ToastService = __decorate([
    Injectable({ providedIn: 'root' })
], ToastService);

/** Container for toasts from `ToastService` (Figma "Sonner"). Place `<app-toaster />` once in the app root. */
let ToasterComponent = class ToasterComponent {
    toasts = inject(ToastService);
    act(t) {
        t.onAction?.();
        this.toasts.dismiss(t.id);
    }
};
ToasterComponent = __decorate([
    Component({
        selector: 'app-toaster',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col gap-2',
            role: 'region',
            'aria-label': 'Notifications',
            'aria-live': 'polite',
        },
        template: `
    @for (t of toasts.toasts(); track t.id) {
      <div
        class="bg-popover text-popover-foreground pointer-events-auto flex w-[356px] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-lg"
        role="status"
      >
        <div class="flex min-w-0 flex-1 flex-col gap-1 text-sm">
          <p class="font-medium">{{ t.title }}</p>
          @if (t.description) {
            <p class="text-muted-foreground">{{ t.description }}</p>
          }
        </div>
        @if (t.actionLabel) {
          <button
            type="button"
            class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-ring shrink-0 rounded-md px-3 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
            (click)="act(t)"
          >
            {{ t.actionLabel }}
          </button>
        }
      </div>
    }
  `,
    })
], ToasterComponent);

let ToastDemoComponent = class ToastDemoComponent {
  toasts = inject(ToastService);
  title = input('Event has been created');
  description = input();
  actionLabel = input();
  duration = input(4000);
  fire() {
    this.toasts.show(this.title(), {
      description: this.description(),
      actionLabel: this.actionLabel(),
      duration: this.duration()
    });
  }
  static propDecorators = {
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false,
        transform: undefined
      }]
    }],
    description: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "description",
        required: false,
        transform: undefined
      }]
    }],
    actionLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "actionLabel",
        required: false,
        transform: undefined
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false,
        transform: undefined
      }]
    }]
  };
};
ToastDemoComponent = __decorate([Component({
  selector: 'app-story-toast-demo',
  imports: [ToasterComponent],
  template: `
    <button type="button" class="rounded-md border px-3 py-2 text-sm" (click)="fire()">Show toast</button>
    <app-toaster />
  `
})], ToastDemoComponent);
const meta = {
  title: 'Feedback/Toast',
  decorators: [moduleMetadata({
    imports: [ToastDemoComponent]
  })],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    actionLabel: {
      control: 'text'
    },
    duration: {
      control: 'number'
    }
  },
  args: {
    title: 'Event has been created',
    duration: 4000
  },
  render: args => ({
    props: args,
    template: `<app-story-toast-demo [title]="title" [description]="description" [actionLabel]="actionLabel" [duration]="duration" />`
  })
};
const Default = {};
const WithDescription = {
  args: {
    description: 'Sunday, December 03, 2023 at 9:00 AM'
  }
};
const WithAction = {
  args: {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    actionLabel: 'Undo',
    duration: 0
  }
};
const __namedExportsOrder = ["Default", "WithDescription", "WithAction"];
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
WithDescription.parameters = {
  ...WithDescription.parameters,
  docs: {
    ...WithDescription.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    description: 'Sunday, December 03, 2023 at 9:00 AM'\n  }\n}",
      ...WithDescription.parameters?.docs?.source
    }
  }
};
WithAction.parameters = {
  ...WithAction.parameters,
  docs: {
    ...WithAction.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    description: 'Sunday, December 03, 2023 at 9:00 AM',\n    actionLabel: 'Undo',\n    duration: 0\n  }\n}",
      ...WithAction.parameters?.docs?.source
    }
  }
};

export { Default, WithAction, WithDescription, __namedExportsOrder, meta as default };
