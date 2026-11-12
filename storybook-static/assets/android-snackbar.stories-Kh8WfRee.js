import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, o as output, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Material 3 snackbar on the inverse surface with a single action. */
let AndroidSnackbarComponent = class AndroidSnackbarComponent {
    message = input.required();
    action = input();
    actionClick = output();
    static propDecorators = {
        message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true, transform: undefined },] }],
        action: [{ type: Input, args: [{ isSignal: true, alias: "action", required: false, transform: undefined },] }],
        actionClick: [{ type: Output, args: ["actionClick",] }]
    };
};
AndroidSnackbarComponent = __decorate([
    Component({
        selector: 'app-android-snackbar',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-foreground text-background flex min-h-12 w-full max-w-[344px] items-center gap-2 rounded-sm pl-4 shadow-md',
            role: 'status',
            'aria-live': 'polite',
        },
        template: `
    <span class="flex-1 py-3 text-sm">{{ message() }}</span>
    @if (action()) {
      <button type="button" class="h-10 px-3 text-sm font-semibold" (click)="actionClick.emit()">{{ action() }}</button>
    }
  `,
    })
], AndroidSnackbarComponent);

const meta = {
  title: 'Mobile/Android/Snackbar',
  component: AndroidSnackbarComponent,
  decorators: [moduleMetadata({
    imports: [AndroidSnackbarComponent]
  })],
  args: {
    message: 'Message archived',
    action: 'Undo'
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-snackbar [message]="message" [action]="action" /></div>`
  })
};
const Default = {};
const WithoutAction = {
  args: {
    action: undefined
  }
};
const __namedExportsOrder = ["Default", "WithoutAction"];
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
WithoutAction.parameters = {
  ...WithoutAction.parameters,
  docs: {
    ...WithoutAction.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    action: undefined\n  }\n}",
      ...WithoutAction.parameters?.docs?.source
    }
  }
};

export { Default, WithoutAction, __namedExportsOrder, meta as default };
