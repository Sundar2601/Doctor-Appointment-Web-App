import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, s as signal, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, q as lucideCopy, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Monospaced code surface with copy button. */
let CodeBlockComponent = class CodeBlockComponent {
    code = input.required();
    copied = signal(false);
    async copy() {
        await navigator.clipboard?.writeText(this.code());
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 1500);
    }
    static propDecorators = {
        code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: true, transform: undefined },] }]
    };
};
CodeBlockComponent = __decorate([
    Component({
        selector: 'app-code-block',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCheck, lucideCopy })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-muted text-foreground relative block rounded-lg' },
        template: `
    <pre class="overflow-x-auto p-4 pr-12 font-mono text-[13px] leading-6"><code>{{ code() }}</code></pre>
    <button
      type="button"
      class="hover:bg-accent focus-visible:ring-ring/50 absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
      aria-label="Copy code"
      (click)="copy()"
    >
      <ng-icon [name]="copied() ? 'lucideCheck' : 'lucideCopy'" size="14" />
    </button>
  `,
    })
], CodeBlockComponent);

const meta = {
  title: 'Data/Code Block',
  decorators: [moduleMetadata({
    imports: [CodeBlockComponent]
  })],
  argTypes: {
    code: {
      control: 'text'
    }
  },
  args: {
    code: 'npm install @ng-icons/core @ng-icons/lucide'
  },
  render: args => ({
    props: args,
    template: `<app-code-block [code]="code" />`
  })
};
const Default = {};
const AppointmentPayload = {
  args: {
    code: `{
  "appointmentId": "APT-1001",
  "patient": "Priya Raman",
  "doctor": "Dr. Anand Kumar",
  "hospital": "JIPMER",
  "date": "2026-11-20",
  "time": "09:30"
}`
  }
};
const __namedExportsOrder = ["Default", "AppointmentPayload"];
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
AppointmentPayload.parameters = {
  ...AppointmentPayload.parameters,
  docs: {
    ...AppointmentPayload.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    code: `{\n  \"appointmentId\": \"APT-1001\",\n  \"patient\": \"Priya Raman\",\n  \"doctor\": \"Dr. Anand Kumar\",\n  \"hospital\": \"JIPMER\",\n  \"date\": \"2026-11-20\",\n  \"time\": \"09:30\"\n}`\n  }\n}",
      ...AppointmentPayload.parameters?.docs?.source
    }
  }
};

export { AppointmentPayload, Default, __namedExportsOrder, meta as default };
