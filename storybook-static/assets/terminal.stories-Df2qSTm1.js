import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const TONE = { default: '', muted: 'opacity-60', success: 'text-success', error: 'text-destructive' };
/** Command output on a dark surface. */
let TerminalComponent = class TerminalComponent {
    command = input.required();
    lines = input([]);
    tone = TONE;
    static propDecorators = {
        command: [{ type: Input, args: [{ isSignal: true, alias: "command", required: true, transform: undefined },] }],
        lines: [{ type: Input, args: [{ isSignal: true, alias: "lines", required: false, transform: undefined },] }]
    };
};
TerminalComponent = __decorate([
    Component({
        selector: 'app-terminal',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-foreground text-background block rounded-lg p-4 font-mono text-sm',
            role: 'log',
            '[attr.aria-label]': '"Terminal: " + command()',
        },
        template: `
    <p class="font-medium"><span aria-hidden="true">$ </span>{{ command() }}</p>
    @for (l of lines(); track $index) {
      <p class="mt-2 whitespace-pre-wrap" [class]="tone[l.tone ?? 'muted']">{{ l.text }}</p>
    }
  `,
    })
], TerminalComponent);

const meta = {
  title: 'AI/Terminal',
  decorators: [moduleMetadata({
    imports: [TerminalComponent]
  })],
  args: {
    command: 'pnpm build',
    lines: [{
      text: '▲ Angular 22.0.0',
      tone: 'muted'
    }, {
      text: 'Creating an optimized production build …',
      tone: 'muted'
    }, {
      text: '✓ Compiled successfully in 9.1s',
      tone: 'success'
    }]
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-terminal [command]="command" [lines]="lines" /></div>`
  })
};
const Default = {};
const Failed = {
  args: {
    command: 'pnpm test',
    lines: [{
      text: 'Running 143 tests …',
      tone: 'muted'
    }, {
      text: '✗ 1 test failed',
      tone: 'error'
    }]
  }
};
const __namedExportsOrder = ["Default", "Failed"];
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
Failed.parameters = {
  ...Failed.parameters,
  docs: {
    ...Failed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    command: 'pnpm test',\n    lines: [{\n      text: 'Running 143 tests \u2026',\n      tone: 'muted'\n    }, {\n      text: '\u2717 1 test failed',\n      tone: 'error'\n    }]\n  }\n}",
      ...Failed.parameters?.docs?.source
    }
  }
};

export { Default, Failed, __namedExportsOrder, meta as default };
