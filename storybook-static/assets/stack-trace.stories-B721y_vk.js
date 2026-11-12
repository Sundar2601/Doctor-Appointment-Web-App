import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Error message and stack frames of a failed tool call. */
let StackTraceComponent = class StackTraceComponent {
    message = input.required();
    frames = input([]);
    static propDecorators = {
        message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true, transform: undefined },] }],
        frames: [{ type: Input, args: [{ isSignal: true, alias: "frames", required: false, transform: undefined },] }]
    };
};
StackTraceComponent = __decorate([
    Component({
        selector: 'app-stack-trace',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground border-destructive block rounded-lg border p-4', role: 'alert' },
        template: `
    <p class="text-text-destructive text-sm font-semibold">Error: {{ message() }}</p>
    @for (f of frames(); track $index) {
      <p class="text-muted-foreground mt-3 font-mono text-xs">{{ f }}</p>
    }
  `,
    })
], StackTraceComponent);

const meta = {
  title: 'AI/Stack Trace',
  decorators: [moduleMetadata({
    imports: [StackTraceComponent]
  })],
  args: {
    message: "Cannot find module '@/lib/session'",
    frames: ['at resolve (app/login/page.tsx:14:9)', 'at render (node_modules/next/dist/server.js:231:12)']
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-stack-trace [message]="message" [frames]="frames" /></div>`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
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

export { Default, __namedExportsOrder, meta as default };
