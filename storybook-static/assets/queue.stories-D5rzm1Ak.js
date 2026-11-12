import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, S as lucideLoaderCircle, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Queue of agent steps: running and pending items versus completed ones. */
let QueueComponent = class QueueComponent {
    items = input([]);
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false, transform: undefined },] }]
    };
};
QueueComponent = __decorate([
    Component({
        selector: 'app-queue',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCheck, lucideLoaderCircle })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <ul class="flex flex-col items-start gap-2" aria-label="Queue">
      @for (i of items(); track i.label) {
        <li class="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm" [class.text-muted-foreground]="i.status === 'done'">
          @if (i.status === 'done') {
            <ng-icon name="lucideCheck" size="16" aria-hidden="true" />
          } @else {
            <ng-icon name="lucideLoaderCircle" size="16" [class.animate-spin]="i.status === 'running'" aria-hidden="true" />
          }
          {{ i.label }}
          <span class="sr-only">{{ i.status === 'done' ? '(done)' : i.status === 'running' ? '(running)' : '(queued)' }}</span>
        </li>
      }
    </ul>
  `,
    })
], QueueComponent);

const meta = {
  title: 'AI/Queue',
  decorators: [moduleMetadata({
    imports: [QueueComponent]
  })],
  args: {
    items: [{
      label: 'Check doctor availability',
      status: 'running'
    }, {
      label: 'Reserve the slot',
      status: 'pending'
    }, {
      label: 'Send reminder',
      status: 'done'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-queue [items]="items" />`
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
