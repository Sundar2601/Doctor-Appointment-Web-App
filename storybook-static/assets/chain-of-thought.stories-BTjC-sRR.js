import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, g as lucideSearch, i as lucidePencil, w as lucideFile } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Chain of Thought": reasoning steps with a leading icon; the in-progress step is muted. */
let ChainOfThoughtComponent = class ChainOfThoughtComponent {
    steps = input.required();
    static propDecorators = {
        steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: true, transform: undefined },] }]
    };
};
ChainOfThoughtComponent = __decorate([
    Component({
        selector: 'app-chain-of-thought',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideFile, lucidePencil, lucideSearch })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <ol class="grid gap-3 text-sm" aria-label="Chain of thought">
      @for (step of steps(); track step.label) {
        <li class="flex items-center gap-3" [class.text-muted-foreground]="step.active">
          <ng-icon
            [name]="step.icon === 'search' ? 'lucideSearch' : step.icon === 'file' ? 'lucideFile' : 'lucidePencil'"
            size="16"
            aria-hidden="true"
          />
          {{ step.label }}
        </li>
      }
    </ol>
  `,
    })
], ChainOfThoughtComponent);

const steps = [{
  label: 'Searching cardiologists near Puducherry',
  icon: 'search'
}, {
  label: "Reading Dr. Raman's availability",
  icon: 'file'
}, {
  label: 'Planning the booking',
  icon: 'edit',
  active: true
}];
const meta = {
  title: 'AI/Chain of Thought',
  decorators: [moduleMetadata({
    imports: [ChainOfThoughtComponent]
  })],
  render: () => ({
    props: {
      steps
    },
    template: `<app-chain-of-thought [steps]="steps" />`
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
