import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, s as signal, y as viewChild, c as computed, l as afterNextRender, G as ViewChild, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, g as lucideSearch, F as lucideChevronsUpDown, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import { j as CdkConnectedOverlay, k as CdkOverlayOrigin } from './_overlay-module-chunk-ZyiIU7hM.js';
import { C as CdkTrapFocus } from './_a11y-module-chunk-MHb0DQIo.js';
import './preload-helper-D5QYaGzd.js';
import './_focus-monitor-chunk-1TA7qkiM.js';

var ComboboxComponent_1;
/**
 * Figma "Combobox": trigger button + popover with search field and filtered list (CDK overlay).
 * Usage: `<app-combobox [options]="opts" [(value)]="v" placeholder="Select framework..." searchPlaceholder="Search framework..." />`.
 */
let ComboboxComponent = class ComboboxComponent {
    static { ComboboxComponent_1 = this; }
    static n = 0;
    options = input([]);
    value = model(null);
    placeholder = input('Select...');
    searchPlaceholder = input('Search...');
    emptyText = input('No results found.');
    disabled = input(false);
    ariaLabel = input();
    id = input(`app-combobox-${ComboboxComponent_1.n++}`);
    defaultOpen = input(false);
    open = signal(false);
    query = signal('');
    active = signal(0);
    width = signal(0);
    trigger = viewChild.required('trigger');
    selected = computed(() => this.options().find((o) => o.value === this.value()));
    filtered = computed(() => {
        const q = this.query().trim().toLowerCase();
        return q ? this.options().filter((o) => o.label.toLowerCase().includes(q)) : this.options();
    });
    constructor() {
        afterNextRender(() => {
            if (this.defaultOpen() && !this.disabled())
                this.show();
        });
    }
    show() {
        this.width.set(this.trigger().nativeElement.offsetWidth);
        this.query.set('');
        this.active.set(Math.max(0, this.options().findIndex((o) => o.value === this.value())));
        this.open.set(true);
    }
    close() {
        this.open.set(false);
    }
    onQuery(e) {
        this.query.set(e.target.value);
        this.active.set(0);
    }
    pick(o) {
        if (o.disabled)
            return;
        this.value.set(o.value);
        this.close();
        this.trigger().nativeElement.focus();
    }
    onKey(e) {
        const n = this.filtered().length;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.active.set(n ? (this.active() + 1) % n : 0);
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.active.set(n ? (this.active() - 1 + n) % n : 0);
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            const o = this.filtered()[this.active()];
            if (o)
                this.pick(o);
        }
        else if (e.key === 'Escape') {
            this.close();
            this.trigger().nativeElement.focus();
        }
    }
    static ctorParameters = () => [];
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false, transform: undefined },] }],
        emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false, transform: undefined },] }],
        defaultOpen: [{ type: Input, args: [{ isSignal: true, alias: "defaultOpen", required: false, transform: undefined },] }],
        trigger: [{ type: ViewChild, args: ['trigger', { isSignal: true },] }]
    };
};
ComboboxComponent = ComboboxComponent_1 = __decorate([
    Component({
        selector: 'app-combobox',
        imports: [CdkConnectedOverlay, CdkOverlayOrigin, CdkTrapFocus, NgIcon],
        viewProviders: [provideIcons({ lucideCheck, lucideChevronsUpDown, lucideSearch })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block w-full' },
        template: `
    <button
      #trigger
      type="button"
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      role="combobox"
      aria-haspopup="listbox"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="open() ? id() + '-list' : null"
      [attr.aria-label]="ariaLabel()"
      class="border-input bg-background flex h-9 w-full items-center justify-between gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      (click)="open() ? close() : show()"
    >
      <span class="truncate">{{ selected()?.label ?? placeholder() }}</span>
      <ng-icon name="lucideChevronsUpDown" class="text-foreground size-4 shrink-0" />
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayMinWidth]="width()"
      (overlayOutsideClick)="close()"
      (detach)="open.set(false)"
    >
      <div cdkTrapFocus cdkTrapFocusAutoCapture class="bg-popover text-popover-foreground mt-1 overflow-hidden rounded-md border shadow-md">
        <div class="flex h-10 items-center gap-2 px-3">
          <ng-icon name="lucideSearch" class="text-muted-foreground size-4 shrink-0" />
          <input
            type="text"
            class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-sm outline-none"
            [placeholder]="searchPlaceholder()"
            [attr.aria-controls]="id() + '-list'"
            [attr.aria-activedescendant]="active() >= 0 ? id() + '-opt-' + active() : null"
            [value]="query()"
            (input)="onQuery($event)"
            (keydown)="onKey($event)"
          />
        </div>
        <div class="bg-border h-px"></div>
        <div role="listbox" [id]="id() + '-list'" class="max-h-60 overflow-auto p-1">
          @for (o of filtered(); track o.value; let i = $index) {
            <div
              role="option"
              [id]="id() + '-opt-' + i"
              [attr.aria-selected]="o.value === value()"
              [attr.aria-disabled]="o.disabled || null"
              class="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm aria-disabled:pointer-events-none aria-disabled:opacity-50"
              [class.bg-accent]="i === active()"
              [class.text-accent-foreground]="i === active()"
              tabindex="-1"
              (mouseenter)="active.set(i)"
              (click)="pick(o)"
              (keydown.enter)="pick(o)"
            >
              {{ o.label }}
              @if (o.value === value()) {
                <ng-icon name="lucideCheck" class="size-4" />
              }
            </div>
          } @empty {
            <p class="text-muted-foreground px-2 py-1.5 text-sm">{{ emptyText() }}</p>
          }
        </div>
      </div>
    </ng-template>
  `,
    })
], ComboboxComponent);

const options = [{
  value: 'angular',
  label: 'Angular'
}, {
  value: 'react',
  label: 'React'
}, {
  value: 'svelte',
  label: 'Svelte'
}, {
  value: 'vue',
  label: 'Vue'
}, {
  value: 'solid',
  label: 'Solid',
  disabled: true
}];
const meta = {
  title: 'Forms/Combobox',
  decorators: [moduleMetadata({
    imports: [ComboboxComponent]
  })],
  argTypes: {
    value: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    searchPlaceholder: {
      control: 'text'
    },
    emptyText: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    options,
    value: null,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No results found.',
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-64 pb-64"><app-combobox ariaLabel="Framework" [options]="options" [(value)]="value" [placeholder]="placeholder" [searchPlaceholder]="searchPlaceholder" [emptyText]="emptyText" [disabled]="disabled" /></div>`
  })
};
const Default = {};
const WithValue = {
  args: {
    value: 'angular'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
/** Open popover with search field and the selected item checked (Figma "Combobox List"). */
const OpenList = {
  args: {
    options: [{
      value: 'next',
      label: 'Next.js'
    }, {
      value: 'svelte',
      label: 'SvelteKit'
    }, {
      value: 'nuxt',
      label: 'Nuxt.js'
    }, {
      value: 'remix',
      label: 'Remix'
    }],
    value: 'next'
  },
  render: args => ({
    props: args,
    template: `<div class="h-72 w-56"><app-combobox ariaLabel="Framework" [options]="options" [(value)]="value" [placeholder]="placeholder" [searchPlaceholder]="searchPlaceholder" [defaultOpen]="true" /></div>`
  })
};
const __namedExportsOrder = ["Default", "WithValue", "Disabled", "OpenList"];
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
WithValue.parameters = {
  ...WithValue.parameters,
  docs: {
    ...WithValue.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 'angular'\n  }\n}",
      ...WithValue.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
OpenList.parameters = {
  ...OpenList.parameters,
  docs: {
    ...OpenList.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    options: [{\n      value: 'next',\n      label: 'Next.js'\n    }, {\n      value: 'svelte',\n      label: 'SvelteKit'\n    }, {\n      value: 'nuxt',\n      label: 'Nuxt.js'\n    }, {\n      value: 'remix',\n      label: 'Remix'\n    }],\n    value: 'next'\n  },\n  render: args => ({\n    props: args,\n    template: `<div class=\"h-72 w-56\"><app-combobox ariaLabel=\"Framework\" [options]=\"options\" [(value)]=\"value\" [placeholder]=\"placeholder\" [searchPlaceholder]=\"searchPlaceholder\" [defaultOpen]=\"true\" /></div>`\n  })\n}",
      ...OpenList.parameters?.docs?.source
    },
    description: {
      story: "Open popover with search field and the selected item checked (Figma \"Combobox List\").",
      ...OpenList.parameters?.docs?.description
    }
  }
};

export { Default, Disabled, OpenList, WithValue, __namedExportsOrder, meta as default };
