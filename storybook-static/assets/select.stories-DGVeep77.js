import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, s as signal, y as viewChild, c as computed, l as afterNextRender, G as ViewChild, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, M as lucideChevronDown, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import { j as CdkConnectedOverlay, k as CdkOverlayOrigin } from './_overlay-module-chunk-ZyiIU7hM.js';
import './preload-helper-D5QYaGzd.js';

var SelectComponent_1;
/**
 * Figma "Select": custom listbox on a CDK overlay.
 * Usage: `<app-select [options]="opts" [(value)]="v" placeholder="Pick one" />`.
 * Keys: Arrow Up/Down, Home/End, Enter/Space, Escape.
 */
let SelectComponent = class SelectComponent {
    static { SelectComponent_1 = this; }
    static n = 0;
    options = input([]);
    value = model(null);
    placeholder = input('Select...');
    disabled = input(false);
    invalid = input(false);
    ariaLabel = input();
    id = input(`app-select-${SelectComponent_1.n++}`);
    defaultOpen = input(false);
    open = signal(false);
    active = signal(-1);
    width = signal(0);
    trigger = viewChild.required('trigger');
    selected = computed(() => this.options().find((o) => o.value === this.value()));
    constructor() {
        afterNextRender(() => {
            if (this.defaultOpen() && !this.disabled())
                this.show();
        });
    }
    toggle() {
        if (this.open())
            this.close();
        else
            this.show();
    }
    show() {
        this.width.set(this.trigger().nativeElement.offsetWidth);
        this.active.set(Math.max(0, this.options().findIndex((o) => o.value === this.value())));
        this.open.set(true);
    }
    close() {
        this.open.set(false);
    }
    pick(o) {
        if (o.disabled)
            return;
        this.value.set(o.value);
        this.close();
        this.trigger().nativeElement.focus();
    }
    move(dir, from = this.active()) {
        const opts = this.options();
        for (let i = from + dir; i >= 0 && i < opts.length; i += dir) {
            if (!opts[i]?.disabled)
                return this.active.set(i);
        }
    }
    onKey(e) {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                e.preventDefault();
                if (!this.open())
                    this.show();
                else
                    this.move(e.key === 'ArrowDown' ? 1 : -1);
                break;
            case 'Home':
                if (this.open()) {
                    e.preventDefault();
                    this.move(1, -1);
                }
                break;
            case 'End':
                if (this.open()) {
                    e.preventDefault();
                    this.move(-1, this.options().length);
                }
                break;
            case 'Enter':
            case ' ':
                if (this.open()) {
                    e.preventDefault();
                    const o = this.options()[this.active()];
                    if (o)
                        this.pick(o);
                }
                break;
            case 'Escape':
                this.close();
                break;
            case 'Tab':
                this.close();
                break;
        }
    }
    static ctorParameters = () => [];
    static propDecorators = {
        options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        invalid: [{ type: Input, args: [{ isSignal: true, alias: "invalid", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false, transform: undefined },] }],
        defaultOpen: [{ type: Input, args: [{ isSignal: true, alias: "defaultOpen", required: false, transform: undefined },] }],
        trigger: [{ type: ViewChild, args: ['trigger', { isSignal: true },] }]
    };
};
SelectComponent = SelectComponent_1 = __decorate([
    Component({
        selector: 'app-select',
        imports: [CdkConnectedOverlay, CdkOverlayOrigin, NgIcon],
        viewProviders: [provideIcons({ lucideCheck, lucideChevronDown })],
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
      [attr.aria-invalid]="invalid() || null"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-activedescendant]="open() && active() >= 0 ? id() + '-opt-' + active() : null"
      class="border-input bg-background flex h-9 w-full items-center justify-between gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 aria-[invalid=true]:focus-visible:ring-destructive/40"
      (click)="toggle()"
      (keydown)="onKey($event)"
    >
      <span class="truncate" [class.text-muted-foreground]="!selected()">{{ selected()?.label ?? placeholder() }}</span>
      <ng-icon name="lucideChevronDown" class="text-foreground size-4 shrink-0" />
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayMinWidth]="width()"
      (overlayOutsideClick)="close()"
      (detach)="open.set(false)"
    >
      <div
        role="listbox"
        [id]="id() + '-list'"
        [attr.aria-labelledby]="id()"
        class="bg-popover text-popover-foreground mt-1 max-h-60 min-w-56 overflow-auto rounded-md border p-1 shadow-md"
      >
        @for (o of options(); track o.value; let i = $index) {
          @if (o.group && o.group !== options()[i - 1]?.group) {
            <div role="presentation" class="text-muted-foreground text-xs leading-4">{{ o.group }}</div>
          }
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
        }
      </div>
    </ng-template>
  `,
    })
], SelectComponent);

const options = [{
  value: 'cardiology',
  label: 'Cardiology'
}, {
  value: 'dermatology',
  label: 'Dermatology'
}, {
  value: 'neurology',
  label: 'Neurology'
}, {
  value: 'pediatrics',
  label: 'Pediatrics',
  disabled: true
}];
const meta = {
  title: 'Forms/Select',
  decorators: [moduleMetadata({
    imports: [SelectComponent]
  })],
  argTypes: {
    value: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    }
  },
  args: {
    options,
    value: null,
    placeholder: 'Select a specialty',
    disabled: false,
    invalid: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-64 pb-52"><app-select ariaLabel="Specialty" [options]="options" [(value)]="value" [placeholder]="placeholder" [disabled]="disabled" [invalid]="invalid" /></div>`
  })
};
const Default = {};
const WithValue = {
  args: {
    value: 'neurology'
  }
};
const Invalid = {
  args: {
    invalid: true
  }
};
const Disabled = {
  args: {
    disabled: true,
    value: 'cardiology'
  }
};
const fruits = [{
  value: 'apple',
  label: 'Apple',
  group: 'Fruits'
}, {
  value: 'banana',
  label: 'Banana',
  group: 'Fruits'
}, {
  value: 'blueberry',
  label: 'Blueberry',
  group: 'Fruits'
}, {
  value: 'grapes',
  label: 'Grapes',
  group: 'Fruits'
}];
/** Open list with a group label and the selected item checked (Figma "Select Content"). */
const OpenList = {
  args: {
    options: fruits,
    value: 'grapes',
    placeholder: 'Select a fruit'
  },
  render: args => ({
    props: args,
    template: `<div class="h-64 w-56"><app-select ariaLabel="Fruit" [options]="options" [(value)]="value" [placeholder]="placeholder" [defaultOpen]="true" /></div>`
  })
};
const __namedExportsOrder = ["Default", "WithValue", "Invalid", "Disabled", "OpenList"];
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
      originalSource: "{\n  args: {\n    value: 'neurology'\n  }\n}",
      ...WithValue.parameters?.docs?.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...Invalid.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    invalid: true\n  }\n}",
      ...Invalid.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    value: 'cardiology'\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
OpenList.parameters = {
  ...OpenList.parameters,
  docs: {
    ...OpenList.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    options: fruits,\n    value: 'grapes',\n    placeholder: 'Select a fruit'\n  },\n  render: args => ({\n    props: args,\n    template: `<div class=\"h-64 w-56\"><app-select ariaLabel=\"Fruit\" [options]=\"options\" [(value)]=\"value\" [placeholder]=\"placeholder\" [defaultOpen]=\"true\" /></div>`\n  })\n}",
      ...OpenList.parameters?.docs?.source
    },
    description: {
      story: "Open list with a group label and the selected item checked (Figma \"Select Content\").",
      ...OpenList.parameters?.docs?.description
    }
  }
};

export { Default, Disabled, Invalid, OpenList, WithValue, __namedExportsOrder, meta as default };
