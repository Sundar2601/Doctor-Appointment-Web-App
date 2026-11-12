import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, a1 as lucideTerminal, S as lucideLoaderCircle, Q as lucideCircle } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Trace": ordered list of agent steps with a status icon each. */
let TraceComponent = class TraceComponent {
    steps = input.required();
    static propDecorators = {
        steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: true, transform: undefined },] }]
    };
};
TraceComponent = __decorate([
    Component({
        selector: 'app-trace',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCircle, lucideLoaderCircle, lucideTerminal })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <ol class="grid gap-3 text-sm" aria-label="Agent steps">
      @for (step of steps(); track step.label) {
        <li class="flex items-center gap-3" [attr.aria-current]="step.status === 'running' ? 'step' : null">
          <ng-icon
            [name]="step.status === 'done' ? 'lucideTerminal' : step.status === 'running' ? 'lucideLoaderCircle' : 'lucideCircle'"
            size="16"
            [class.animate-spin]="step.status === 'running'"
            aria-hidden="true"
          />
          <span [class.text-muted-foreground]="step.status === 'pending'">{{ step.label }}</span>
          <span class="sr-only">{{ step.status }}</span>
        </li>
      }
    </ol>
  `,
    })
], TraceComponent);

const steps = [{
  label: 'Searching cardiologists in Puducherry',
  status: 'done'
}, {
  label: 'Checking Thursday availability',
  status: 'done'
}, {
  label: 'Holding the 10:30 AM slot',
  status: 'running'
}, {
  label: 'Sending confirmation SMS',
  status: 'pending'
}];
const meta = {
  title: 'AI/Trace',
  decorators: [moduleMetadata({
    imports: [TraceComponent]
  })],
  render: () => ({
    props: {
      steps
    },
    template: `<app-trace [steps]="steps" />`
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
