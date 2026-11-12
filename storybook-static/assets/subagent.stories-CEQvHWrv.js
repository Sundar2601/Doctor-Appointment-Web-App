import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, T as lucideSparkles } from './ng-icons-lucide-DF7QvMAc.js';
import { B as BadgeComponent } from './badge.component-Bch4iGLZ.js';
import './preload-helper-D5QYaGzd.js';

const STATUS = {
    running: { label: 'Running', tone: 'info' },
    done: { label: 'Done', tone: 'success' },
    error: { label: 'Failed', tone: 'danger' },
};
/** A subagent run: name, status and its result summary. */
let SubagentComponent = class SubagentComponent {
    name = input.required();
    state = input('done');
    result = input();
    badge = computed(() => STATUS[this.state()]);
    static propDecorators = {
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true, transform: undefined },] }],
        state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false, transform: undefined },] }],
        result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: false, transform: undefined },] }]
    };
};
SubagentComponent = __decorate([
    Component({
        selector: 'app-subagent',
        imports: [NgIcon, BadgeComponent],
        viewProviders: [provideIcons({ lucideSparkles })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Subagent " + name()' },
        template: `
    <div class="flex items-center justify-between gap-3">
      <span class="flex items-center gap-2 text-sm font-semibold"
        ><ng-icon name="lucideSparkles" size="16" aria-hidden="true" />{{ name() }}</span
      >
      <app-badge [tone]="badge().tone">{{ badge().label }}</app-badge>
    </div>
    @if (result()) {
      <p class="mt-3 text-sm">{{ result() }}</p>
    }
  `,
    })
], SubagentComponent);

const meta = {
  title: 'AI/Subagent',
  decorators: [moduleMetadata({
    imports: [SubagentComponent]
  })],
  argTypes: {
    state: {
      control: 'select',
      options: ['running', 'done', 'error']
    }
  },
  args: {
    name: 'Slot finder',
    state: 'done',
    result: 'Checked 4 doctors and found 9 open slots this week.'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[460px]"><app-subagent [name]="name" [state]="state" [result]="result" /></div>`
  })
};
const Done = {};
const Running = {
  args: {
    state: 'running',
    result: 'Checking doctor calendars…'
  }
};
const Failed = {
  args: {
    state: 'error',
    result: 'Calendar API returned 503.'
  }
};
const __namedExportsOrder = ["Done", "Running", "Failed"];
Done.parameters = {
  ...Done.parameters,
  docs: {
    ...Done.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Done.parameters?.docs?.source
    }
  }
};
Running.parameters = {
  ...Running.parameters,
  docs: {
    ...Running.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'running',\n    result: 'Checking doctor calendars\u2026'\n  }\n}",
      ...Running.parameters?.docs?.source
    }
  }
};
Failed.parameters = {
  ...Failed.parameters,
  docs: {
    ...Failed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'error',\n    result: 'Calendar API returned 503.'\n  }\n}",
      ...Failed.parameters?.docs?.source
    }
  }
};

export { Done, Failed, Running, __namedExportsOrder, meta as default };
