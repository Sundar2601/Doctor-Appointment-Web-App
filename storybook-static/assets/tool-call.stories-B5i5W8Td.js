import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, a1 as lucideTerminal } from './ng-icons-lucide-DF7QvMAc.js';
import { B as BadgeComponent } from './badge.component-Bch4iGLZ.js';
import './preload-helper-D5QYaGzd.js';

const STATUS = {
    pending: { label: 'Pending', tone: 'neutral' },
    running: { label: 'Running', tone: 'info' },
    completed: { label: 'Completed', tone: 'success' },
    error: { label: 'Error', tone: 'danger' },
};
/** Agent tool call: tool name, status, input parameters and result. */
let ToolCallComponent = class ToolCallComponent {
    name = input.required();
    state = input('completed');
    parameters = input();
    result = input();
    status = computed(() => STATUS[this.state()]);
    static propDecorators = {
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true, transform: undefined },] }],
        state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false, transform: undefined },] }],
        parameters: [{ type: Input, args: [{ isSignal: true, alias: "parameters", required: false, transform: undefined },] }],
        result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: false, transform: undefined },] }]
    };
};
ToolCallComponent = __decorate([
    Component({
        selector: 'app-tool-call',
        imports: [NgIcon, BadgeComponent],
        viewProviders: [provideIcons({ lucideTerminal })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Tool call " + name()' },
        template: `
    <div class="flex items-center justify-between gap-3">
      <span class="flex items-center gap-2 font-mono text-sm"
        ><ng-icon name="lucideTerminal" size="16" aria-hidden="true" />{{ name() }}</span
      >
      <app-badge [tone]="status().tone">{{ status().label }}</app-badge>
    </div>
    @if (parameters()) {
      <p class="text-muted-foreground mt-4 mb-2 text-xs font-medium">Parameters</p>
      <pre class="bg-muted overflow-x-auto rounded-md p-3 font-mono text-xs">{{ parameters() }}</pre>
    }
    @if (result()) {
      <p class="text-muted-foreground mt-3 mb-2 text-xs font-medium">{{ state() === 'error' ? 'Error' : 'Result' }}</p>
      <pre class="bg-muted overflow-x-auto rounded-md p-3 font-mono text-xs" [class.text-text-destructive]="state() === 'error'">{{
        result()
      }}</pre>
    }
  `,
    })
], ToolCallComponent);

const meta = {
  title: 'AI/Tool Call',
  decorators: [moduleMetadata({
    imports: [ToolCallComponent]
  })],
  argTypes: {
    state: {
      control: 'select',
      options: ['pending', 'running', 'completed', 'error']
    }
  },
  args: {
    name: 'find_slots',
    state: 'completed',
    parameters: '{ "doctor": "Dr. Anand Kumar", "date": "2026-11-20" }',
    result: '3 slots available: 09:30, 11:00, 14:15'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-tool-call [name]="name" [state]="state" [parameters]="parameters" [result]="result" /></div>`
  })
};
const Completed = {};
const Running = {
  args: {
    state: 'running',
    result: undefined
  }
};
const Pending = {
  args: {
    state: 'pending',
    result: undefined
  }
};
const Failed = {
  args: {
    state: 'error',
    result: 'Calendar service timed out after 30s'
  }
};
const __namedExportsOrder = ["Completed", "Running", "Pending", "Failed"];
Completed.parameters = {
  ...Completed.parameters,
  docs: {
    ...Completed.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Completed.parameters?.docs?.source
    }
  }
};
Running.parameters = {
  ...Running.parameters,
  docs: {
    ...Running.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'running',\n    result: undefined\n  }\n}",
      ...Running.parameters?.docs?.source
    }
  }
};
Pending.parameters = {
  ...Pending.parameters,
  docs: {
    ...Pending.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'pending',\n    result: undefined\n  }\n}",
      ...Pending.parameters?.docs?.source
    }
  }
};
Failed.parameters = {
  ...Failed.parameters,
  docs: {
    ...Failed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'error',\n    result: 'Calendar service timed out after 30s'\n  }\n}",
      ...Failed.parameters?.docs?.source
    }
  }
};

export { Completed, Failed, Pending, Running, __namedExportsOrder, meta as default };
