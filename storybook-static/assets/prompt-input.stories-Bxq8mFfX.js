import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { A as AttachmentComponent } from './attachment.component-BM9RfuPo.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, o as output, c as computed, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, R as lucidePaperclip, M as lucideChevronDown, G as lucideArrowUp } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Prompt Input": textarea, attach button, model selector and send. Enter sends, Shift+Enter inserts a newline. */
let PromptInputComponent = class PromptInputComponent {
    value = model('');
    model = model('');
    models = input([]);
    placeholder = input('Ask anything...');
    disabled = input(false);
    send = output();
    attach = output();
    canSend = computed(() => this.value().trim().length > 0);
    onEnter(event) {
        if (event.shiftKey || event.isComposing)
            return;
        event.preventDefault();
        this.submit();
    }
    submit() {
        const text = this.value().trim();
        if (!text || this.disabled())
            return;
        this.send.emit(text);
        this.value.set('');
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        model: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false },] }, { type: Output, args: ["modelChange",] }],
        models: [{ type: Input, args: [{ isSignal: true, alias: "models", required: false, transform: undefined },] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        send: [{ type: Output, args: ["send",] }],
        attach: [{ type: Output, args: ["attach",] }]
    };
};
PromptInputComponent = __decorate([
    Component({
        selector: 'app-prompt-input',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideArrowUp, lucideChevronDown, lucidePaperclip })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background block w-full rounded-xl border p-4 shadow-sm' },
        template: `
    <div class="mb-3 flex flex-wrap gap-2 empty:hidden"><ng-content select="[appPromptAttachments]" /></div>
    <textarea
      class="placeholder:text-muted-foreground field-sizing-content max-h-48 min-h-6 w-full resize-none bg-transparent text-base outline-none"
      rows="1"
      aria-label="Message"
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      (input)="value.set($any($event.target).value)"
      (keydown.enter)="onEnter($event)"
    ></textarea>
    <div class="mt-3 flex items-center gap-2">
      <button
        type="button"
        class="text-muted-foreground hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
        aria-label="Attach file"
        [disabled]="disabled()"
        (click)="attach.emit()"
      >
        <ng-icon name="lucidePaperclip" size="18" aria-hidden="true" />
      </button>
      @if (models().length) {
        <label class="hover:bg-accent relative inline-flex h-8 items-center gap-2 rounded-md px-3 text-sm">
          <span class="sr-only">Model</span>
          <select
            class="absolute inset-0 cursor-pointer appearance-none bg-transparent px-3 opacity-0"
            [disabled]="disabled()"
            (change)="model.set($any($event.target).value)"
          >
            @for (m of models(); track m) {
              <option [value]="m" [selected]="m === model()">{{ m }}</option>
            }
          </select>
          {{ model() }}
          <ng-icon name="lucideChevronDown" size="16" aria-hidden="true" />
        </label>
      }
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring/50 ml-auto inline-flex size-9 items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Send message"
        [disabled]="disabled() || !canSend()"
        (click)="submit()"
      >
        <ng-icon name="lucideArrowUp" size="18" aria-hidden="true" />
      </button>
    </div>
  `,
    })
], PromptInputComponent);

const meta = {
  title: 'AI/Prompt Input',
  decorators: [moduleMetadata({
    imports: [PromptInputComponent, AttachmentComponent]
  })],
  render: () => ({
    props: {
      models: ['Claude Sonnet', 'Claude Opus']
    },
    template: `<div class="w-[40rem] max-w-full"><app-prompt-input placeholder="Describe your symptoms or ask to book..." [models]="models" model="Claude Sonnet" /></div>`
  })
};
const Default = {};
const WithAttachment = {
  render: () => ({
    props: {
      models: ['Claude Sonnet', 'Claude Opus']
    },
    template: `<div class="w-[40rem] max-w-full"><app-prompt-input [models]="models" model="Claude Sonnet"><app-attachment appPromptAttachments name="ecg-report.png" size="880 KB" /></app-prompt-input></div>`
  })
};
const __namedExportsOrder = ["Default", "WithAttachment"];
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
WithAttachment.parameters = {
  ...WithAttachment.parameters,
  docs: {
    ...WithAttachment.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      models: ['Claude Sonnet', 'Claude Opus']\n    },\n    template: `<div class=\"w-[40rem] max-w-full\"><app-prompt-input [models]=\"models\" model=\"Claude Sonnet\"><app-attachment appPromptAttachments name=\"ecg-report.png\" size=\"880 KB\" /></app-prompt-input></div>`\n  })\n}",
      ...WithAttachment.parameters?.docs?.source
    }
  }
};

export { Default, WithAttachment, __namedExportsOrder, meta as default };
