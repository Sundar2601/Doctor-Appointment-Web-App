import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, o as output, b as inject, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { O as OverlayPanelBase } from './overlay.base-BJ4lg-z0.js';
import { O as Overlay } from './_overlay-module-chunk-ZyiIU7hM.js';
import './preload-helper-D5QYaGzd.js';
import './_a11y-module-chunk-MHb0DQIo.js';
import './_focus-monitor-chunk-1TA7qkiM.js';

/** Alert dialog (role=alertdialog, no backdrop dismiss). Usage: `<app-alert-dialog heading="Delete?" description="..." [(open)]="show" (confirm)="del()" />`. */
let AlertDialogComponent = class AlertDialogComponent extends OverlayPanelBase {
    confirmLabel = input('Continue');
    cancelLabel = input('Cancel');
    confirm = output();
    cancelled = output();
    role = 'alertdialog';
    overlay = inject(Overlay);
    config() {
        return {
            width: '32rem',
            maxWidth: 'calc(100vw - 2rem)',
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        };
    }
    static propDecorators = {
        confirmLabel: [{ type: Input, args: [{ isSignal: true, alias: "confirmLabel", required: false, transform: undefined },] }],
        cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false, transform: undefined },] }],
        confirm: [{ type: Output, args: ["confirm",] }],
        cancelled: [{ type: Output, args: ["cancelled",] }]
    };
};
AlertDialogComponent = __decorate([
    Component({
        selector: 'app-alert-dialog',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [ButtonDirective],
        host: { class: 'contents' },
        template: `
    <ng-template #tpl>
      <div class="bg-background text-foreground grid w-full gap-4 rounded-lg border p-6 shadow-lg">
        <header class="flex flex-col gap-2 text-left">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
        </header>
        <footer class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button type="button" appButton variant="outline" (click)="cancelled.emit(); close()">{{ cancelLabel() }}</button>
          <button type="button" appButton (click)="confirm.emit(); close()">{{ confirmLabel() }}</button>
        </footer>
      </div>
    </ng-template>
  `,
    })
], AlertDialogComponent);

const meta = {
  title: 'Overlays/Alert Dialog',
  component: AlertDialogComponent,
  decorators: [moduleMetadata({
    imports: [AlertDialogComponent, ButtonDirective]
  })],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    confirmLabel: {
      control: 'text'
    },
    cancelLabel: {
      control: 'text'
    }
  },
  args: {
    heading: 'Cancel this appointment?',
    description: 'This action cannot be undone. The slot will be released to other patients.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel'
  },
  render: args => ({
    props: {
      ...args,
      open: args.open ?? false,
      result: ''
    },
    template: `
      <button appButton variant="outline" (click)="open = true">Open alert dialog</button>
      <app-alert-dialog [heading]="heading" [description]="description" [confirmLabel]="confirmLabel" [cancelLabel]="cancelLabel"
        [(open)]="open" (confirm)="result = 'Confirmed'" (cancelled)="result = 'Cancelled'" />
      <p class="mt-4 text-sm">Result: {{ result || 'none' }}</p>
    `
  })
};
const Default = {};
const Destructive = {
  args: {
    heading: 'Delete account?',
    description: 'All your data will be permanently removed.',
    confirmLabel: 'Delete',
    cancelLabel: 'Keep account'
  }
};
const Open = {
  args: {
    open: true
  }
};
const __namedExportsOrder = ["Default", "Destructive", "Open"];
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
Destructive.parameters = {
  ...Destructive.parameters,
  docs: {
    ...Destructive.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    heading: 'Delete account?',\n    description: 'All your data will be permanently removed.',\n    confirmLabel: 'Delete',\n    cancelLabel: 'Keep account'\n  }\n}",
      ...Destructive.parameters?.docs?.source
    }
  }
};
Open.parameters = {
  ...Open.parameters,
  docs: {
    ...Open.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    open: true\n  }\n}",
      ...Open.parameters?.docs?.source
    }
  }
};

export { Default, Destructive, Open, __namedExportsOrder, meta as default };
