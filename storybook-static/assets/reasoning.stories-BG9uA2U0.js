import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, T as lucideSparkles, M as lucideChevronDown } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Reasoning": collapsible thinking block. `streaming` shows "Thinking…" instead of the duration. */
let ReasoningComponent = class ReasoningComponent {
    duration = input(6);
    streaming = input(false);
    open = model(true);
    static propDecorators = {
        duration: [{ type: Input, args: [{ isSignal: true, alias: "duration", required: false, transform: undefined },] }],
        streaming: [{ type: Input, args: [{ isSignal: true, alias: "streaming", required: false, transform: undefined },] }],
        open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false },] }, { type: Output, args: ["openChange",] }]
    };
};
ReasoningComponent = __decorate([
    Component({
        selector: 'app-reasoning',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideChevronDown, lucideSparkles })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <button
      type="button"
      class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 flex items-center gap-2 rounded-sm text-sm focus-visible:ring-[3px] focus-visible:outline-none"
      [attr.aria-expanded]="open()"
      aria-controls="reasoning-panel"
      (click)="open.set(!open())"
    >
      <ng-icon name="lucideSparkles" size="16" [class.animate-pulse]="streaming()" aria-hidden="true" />
      {{ streaming() ? 'Thinking…' : 'Thought for ' + duration() + ' seconds' }}
      <ng-icon name="lucideChevronDown" size="16" class="transition-transform" [class.rotate-180]="open()" aria-hidden="true" />
    </button>
    @if (open()) {
      <div id="reasoning-panel" class="mt-3 text-sm"><ng-content /></div>
    }
  `,
    })
], ReasoningComponent);

const meta = {
  args: {
    streaming: false
  },
  title: 'AI/Reasoning',
  decorators: [moduleMetadata({
    imports: [ReasoningComponent]
  })],
  render: args => ({
    props: args,
    template: `<app-reasoning [duration]="6" [streaming]="streaming"><p>Dr. Raman has the earliest cardiology opening in Puducherry on Thursday, and the patient prefers mornings, so I am suggesting the 10:30 AM slot.</p></app-reasoning>`
  })
};
const Default = {};
const Streaming = {
  args: {
    streaming: true
  }
};
const __namedExportsOrder = ["Default", "Streaming"];
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
Streaming.parameters = {
  ...Streaming.parameters,
  docs: {
    ...Streaming.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    streaming: true\n  }\n}",
      ...Streaming.parameters?.docs?.source
    }
  }
};

export { Default, Streaming, __namedExportsOrder, meta as default };
