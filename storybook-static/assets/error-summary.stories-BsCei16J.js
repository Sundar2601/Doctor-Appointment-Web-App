import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, b as inject, h as ElementRef, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Error summary". Usage: `<app-error-summary heading="Fix 2 errors to continue" [errors]="errors" />`. Call `focus()` after a failed submit. */
let ErrorSummaryComponent = class ErrorSummaryComponent {
    heading = input.required();
    errors = input([]);
    host = inject(ElementRef);
    /** Moves focus to the summary (call after a failed submit). */
    focus() {
        this.host.nativeElement.focus();
    }
    focusField(event, id) {
        const field = document.getElementById(id);
        if (!field)
            return;
        event.preventDefault();
        field.focus();
    }
    static propDecorators = {
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true, transform: undefined },] }],
        errors: [{ type: Input, args: [{ isSignal: true, alias: "errors", required: false, transform: undefined },] }]
    };
};
ErrorSummaryComponent = __decorate([
    Component({
        selector: 'app-error-summary',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'border-destructive bg-card block rounded-xl border p-4 text-sm outline-none', role: 'alert', tabindex: '-1' },
        template: `
    <h2 class="text-destructive mb-2 font-semibold">{{ heading() }}</h2>
    <ul class="list-disc space-y-1 pl-5">
      @for (error of errors(); track error.id) {
        <li>
          <a
            [href]="'#' + error.id"
            class="text-foreground focus-visible:ring-ring/50 rounded-sm underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:outline-none"
            (click)="focusField($event, error.id)"
            >{{ error.message }}</a
          >
        </li>
      }
    </ul>
  `,
    })
], ErrorSummaryComponent);

const meta = {
  title: 'Patterns/Error Summary',
  decorators: [moduleMetadata({
    imports: [ErrorSummaryComponent]
  })],
  args: {
    heading: 'Fix 2 errors to continue',
    errors: [{
      id: 'email',
      message: 'Email: enter a valid address'
    }, {
      id: 'password',
      message: 'Password: use at least 8 characters'
    }]
  },
  render: args => ({
    props: args,
    template: `
      <div class="max-w-sm space-y-4">
        <app-error-summary [heading]="heading" [errors]="errors" />
        <input id="email" class="border-input block w-full rounded-md border px-3 py-2 text-sm" placeholder="Email" />
        <input id="password" type="password" class="border-input block w-full rounded-md border px-3 py-2 text-sm" placeholder="Password" />
      </div>`
  })
};
const Default = {};
const SingleError = {
  args: {
    heading: 'Fix 1 error to continue',
    errors: [{
      id: 'email',
      message: 'Email: enter a valid address'
    }]
  }
};
const __namedExportsOrder = ["Default", "SingleError"];
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
SingleError.parameters = {
  ...SingleError.parameters,
  docs: {
    ...SingleError.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    heading: 'Fix 1 error to continue',\n    errors: [{\n      id: 'email',\n      message: 'Email: enter a valid address'\n    }]\n  }\n}",
      ...SingleError.parameters?.docs?.source
    }
  }
};

export { Default, SingleError, __namedExportsOrder, meta as default };
