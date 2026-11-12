import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, E as lucideRotateCw } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** Restore-point marker in a conversation. Emits `restore` when clicked. */
let CheckpointComponent = class CheckpointComponent {
    label = input('Checkpoint · Restore');
    restore = output();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        restore: [{ type: Output, args: ["restore",] }]
    };
};
CheckpointComponent = __decorate([
    Component({
        selector: 'app-checkpoint',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideRotateCw })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'text-muted-foreground flex items-center gap-3 text-sm', role: 'separator', '[attr.aria-label]': 'label()' },
        template: `
    <span class="bg-border h-px flex-1"></span>
    <button
      type="button"
      class="hover:text-foreground focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:ring-[3px] focus-visible:outline-none"
      [attr.aria-label]="'Restore ' + label()"
      (click)="restore.emit()"
    >
      <ng-icon name="lucideRotateCw" size="16" aria-hidden="true" />{{ label() }}
    </button>
    <span class="bg-border h-px flex-1"></span>
  `,
    })
], CheckpointComponent);

const meta = {
  title: 'AI/Checkpoint',
  decorators: [moduleMetadata({
    imports: [CheckpointComponent]
  })],
  args: {
    label: 'Checkpoint · Restore'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-checkpoint [label]="label" (restore)="restore()" /></div>`
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
