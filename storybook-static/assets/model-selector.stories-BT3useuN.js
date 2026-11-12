import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Listbox for picking a model. `[(value)]` holds the selected model value. Arrow keys move, Enter/Space select. */
let ModelSelectorComponent = class ModelSelectorComponent {
    options = input([]);
    value = model(null);
    ariaLabel = input('Model');
    onKey(e) {
        const items = Array.from(e.currentTarget.parentElement?.querySelectorAll('[role=option]') ?? []);
        const i = items.indexOf(e.currentTarget);
        if (i < 0)
            return;
        const go = (n) => {
            e.preventDefault();
            const t = items[(n + items.length) % items.length];
            t?.focus();
        };
        if (e.key === 'ArrowDown')
            go(i + 1);
        else if (e.key === 'ArrowUp')
            go(i - 1);
        else if (e.key === 'Home')
            go(0);
        else if (e.key === 'End')
            go(items.length - 1);
        else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.value.set(this.options()[i]?.value ?? null);
        }
    }
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
ModelSelectorComponent = __decorate([
    Component({
        selector: 'app-model-selector',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCheck })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-popover text-popover-foreground block w-72 rounded-lg border p-1 shadow-md' },
        template: `
    <div role="listbox" [attr.aria-label]="ariaLabel()">
      @for (o of options(); track o.value) {
        <div
          role="option"
          class="hover:bg-accent focus-visible:bg-accent flex cursor-pointer items-center justify-between rounded-md px-2 py-2 outline-none"
          [class.bg-accent]="o.value === value()"
          [attr.aria-selected]="o.value === value()"
          [tabindex]="o.value === value() || (!value() && $first) ? 0 : -1"
          (click)="value.set(o.value)"
          (keydown)="onKey($event)"
        >
          <span class="grid text-sm leading-tight">
            <span class="font-medium">{{ o.label }}</span>
            @if (o.description) {
              <span class="text-muted-foreground text-xs">{{ o.description }}</span>
            }
          </span>
          @if (o.value === value()) {
            <ng-icon name="lucideCheck" size="16" aria-hidden="true" />
          }
        </div>
      }
    </div>
  `,
    })
], ModelSelectorComponent);

const meta = {
  title: 'AI/Model Selector',
  decorators: [moduleMetadata({
    imports: [ModelSelectorComponent]
  })],
  args: {
    value: 'sonnet',
    options: [{
      value: 'sonnet',
      label: 'Claude Sonnet',
      description: 'Fast, balanced'
    }, {
      value: 'opus',
      label: 'Claude Opus',
      description: 'Most capable'
    }, {
      value: 'haiku',
      label: 'Claude Haiku',
      description: 'Fastest'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-model-selector [options]="options" [(value)]="value" />`
  })
};
const Default = {};
const NoSelection = {
  args: {
    value: null
  }
};
const __namedExportsOrder = ["Default", "NoSelection"];
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
NoSelection.parameters = {
  ...NoSelection.parameters,
  docs: {
    ...NoSelection.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: null\n  }\n}",
      ...NoSelection.parameters?.docs?.source
    }
  }
};

export { Default, NoSelection, __namedExportsOrder, meta as default };
