import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { S as SpinnerComponent } from './spinner.component-2afk9TS5.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Inline loading and retry". Usage: `<app-inline-retry [state]="state" message="Saving..." (retry)="save()" />`. */
let InlineRetryComponent = class InlineRetryComponent {
    state = input('loading');
    message = input('Saving...');
    retryLabel = input('Retry');
    retry = output();
    static propDecorators = {
        state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false, transform: undefined },] }],
        message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false, transform: undefined },] }],
        retryLabel: [{ type: Input, args: [{ isSignal: true, alias: "retryLabel", required: false, transform: undefined },] }],
        retry: [{ type: Output, args: ["retry",] }]
    };
};
InlineRetryComponent = __decorate([
    Component({
        selector: 'app-inline-retry',
        imports: [ButtonDirective, SpinnerComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-col items-start gap-3' },
        template: `
    @if (state() === 'loading') {
      <button appButton disabled aria-busy="true">
        <app-spinner class="text-primary-foreground" />
        <span>{{ message() }}</span>
      </button>
    } @else {
      <div class="flex flex-col items-start gap-3" role="alert">
        <p class="text-destructive text-sm font-semibold">{{ message() }}</p>
        <button appButton variant="outline" (click)="retry.emit()">{{ retryLabel() }}</button>
      </div>
    }
  `,
    })
], InlineRetryComponent);

const meta = {
  title: 'Patterns/Inline Retry',
  decorators: [moduleMetadata({
    imports: [InlineRetryComponent]
  })],
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'error']
    }
  },
  args: {
    state: 'loading',
    message: 'Saving...'
  },
  render: args => ({
    props: args,
    template: `<app-inline-retry [state]="state" [message]="message" [retryLabel]="retryLabel" (retry)="retry($event)" />`
  })
};
const Loading = {};
const Failed = {
  args: {
    state: 'error',
    message: 'Failed to save'
  }
};
const __namedExportsOrder = ["Loading", "Failed"];
Loading.parameters = {
  ...Loading.parameters,
  docs: {
    ...Loading.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Loading.parameters?.docs?.source
    }
  }
};
Failed.parameters = {
  ...Failed.parameters,
  docs: {
    ...Failed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'error',\n    message: 'Failed to save'\n  }\n}",
      ...Failed.parameters?.docs?.source
    }
  }
};

export { Failed, Loading, __namedExportsOrder, meta as default };
