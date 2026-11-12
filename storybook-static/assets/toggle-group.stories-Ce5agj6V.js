import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, D as Directive, m as model, i as input, I as Input, O as Output, b as inject, c as computed } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Toggle Group". Usage:
 * `<app-toggle-group [(value)]="v"><button appToggleGroupItem value="bold">Bold</button>...</app-toggle-group>`.
 * `type="single"` keeps at most one value, `"multiple"` allows many.
 */
let ToggleGroupComponent = class ToggleGroupComponent {
    value = model([]);
    type = input('multiple');
    disabled = input(false);
    isOn(v) {
        return this.value().includes(v);
    }
    toggle(v) {
        const cur = this.value();
        if (cur.includes(v))
            this.value.set(cur.filter((x) => x !== v));
        else
            this.value.set(this.type() === 'single' ? [v] : [...cur, v]);
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }]
    };
};
ToggleGroupComponent = __decorate([
    Component({
        selector: 'app-toggle-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            role: 'group',
            class: 'border-input inline-flex items-start overflow-hidden rounded-md border',
        },
        template: '<ng-content />',
    })
], ToggleGroupComponent);
let ToggleGroupItemDirective = class ToggleGroupItemDirective {
    group = inject(ToggleGroupComponent);
    value = input.required();
    on = computed(() => this.group.isOn(this.value()));
    classes = 'inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:z-10 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-accent aria-pressed:text-accent-foreground';
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true, transform: undefined },] }]
    };
};
ToggleGroupItemDirective = __decorate([
    Directive({
        selector: 'button[appToggleGroupItem]',
        host: {
            type: 'button',
            '[class]': 'classes',
            '[attr.aria-pressed]': 'on()',
            '[disabled]': 'group.disabled() || null',
            '(click)': 'group.toggle(value())',
        },
    })
], ToggleGroupItemDirective);

const meta = {
  title: 'Actions/Toggle Group',
  decorators: [moduleMetadata({
    imports: [ToggleGroupComponent, ToggleGroupItemDirective]
  })],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple']
    },
    disabled: {
      control: 'boolean'
    },
    value: {
      control: 'object'
    }
  },
  args: {
    value: [],
    type: 'multiple',
    disabled: false
  },
  render: args => ({
    props: args,
    template: `
      <app-toggle-group [(value)]="value" [type]="type" [disabled]="disabled">
        <button appToggleGroupItem value="bold" aria-label="Bold">B</button>
        <button appToggleGroupItem value="italic" aria-label="Italic">I</button>
        <button appToggleGroupItem value="underline" aria-label="Underline">U</button>
      </app-toggle-group>`
  })
};
const Multiple = {
  args: {
    value: ['bold', 'italic']
  }
};
const Single = {
  args: {
    type: 'single',
    value: ['italic']
  }
};
const Disabled = {
  args: {
    disabled: true,
    value: ['bold']
  }
};
const __namedExportsOrder = ["Multiple", "Single", "Disabled"];
Multiple.parameters = {
  ...Multiple.parameters,
  docs: {
    ...Multiple.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: ['bold', 'italic']\n  }\n}",
      ...Multiple.parameters?.docs?.source
    }
  }
};
Single.parameters = {
  ...Single.parameters,
  docs: {
    ...Single.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'single',\n    value: ['italic']\n  }\n}",
      ...Single.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    value: ['bold']\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};

export { Disabled, Multiple, Single, __namedExportsOrder, meta as default };
