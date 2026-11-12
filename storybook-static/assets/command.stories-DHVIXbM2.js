import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { i as input, o as output, s as signal, c as computed, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, g as lucideSearch } from './ng-icons-lucide-DvOyu-Mi.js';
import { e as eventValue } from './dom-events-CvB9dAwI.js';
import { D as DialogComponent } from './dialog.component-DyUSG4oB.js';
import './preload-helper-D5QYaGzd.js';
import './overlay.base-BJ4lg-z0.js';
import './_overlay-module-chunk-ZyiIU7hM.js';
import './_a11y-module-chunk-MHb0DQIo.js';
import './_focus-monitor-chunk-1TA7qkiM.js';

let uid = 0;
/** Command palette (combobox + listbox, filter, arrow/Enter keys). Usage: `<app-command [items]="items" (selected)="run($event)" />`. Place inside `app-dialog` for a modal palette. */
let CommandComponent = class CommandComponent {
    eventValue = eventValue;
    items = input.required();
    placeholder = input('Type a command or search...');
    emptyText = input('No results found.');
    selected = output();
    listId = `app-command-${++uid}`;
    query = signal('');
    active = signal(0);
    filtered = computed(() => {
        const q = this.query().trim().toLowerCase();
        return this.items().filter((i) => !q || i.label.toLowerCase().includes(q));
    });
    groups = computed(() => {
        const map = new Map();
        for (const i of this.filtered())
            map.set(i.group ?? '', [...(map.get(i.group ?? '') ?? []), i]);
        return [...map].map(([name, items]) => ({ name, items }));
    });
    flat = computed(() => this.groups().flatMap((g) => g.items));
    optId(i) {
        return `${this.listId}-${i.value}`;
    }
    isActive(i) {
        return this.flat()[this.active()] === i;
    }
    activeId = computed(() => {
        const i = this.flat()[this.active()];
        return i ? this.optId(i) : null;
    });
    activate(i) {
        if (!i.disabled)
            this.active.set(this.flat().indexOf(i));
    }
    pick(i) {
        if (!i.disabled)
            this.selected.emit(i);
    }
    onInput(v) {
        this.query.set(v);
        this.active.set(0);
    }
    onKey(e) {
        const n = this.flat().length;
        if (!n)
            return;
        if (e.key === 'ArrowDown')
            this.active.set((this.active() + 1) % n);
        else if (e.key === 'ArrowUp')
            this.active.set((this.active() - 1 + n) % n);
        else if (e.key === 'Home')
            this.active.set(0);
        else if (e.key === 'End')
            this.active.set(n - 1);
        else if (e.key === 'Enter') {
            const i = this.flat()[this.active()];
            if (i)
                this.pick(i);
        }
        else
            return;
        e.preventDefault();
        queueMicrotask(() => document.getElementById(this.activeId() ?? '')?.scrollIntoView({ block: 'nearest' }));
    }
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false, transform: undefined },] }],
        selected: [{ type: Output, args: ["selected",] }]
    };
};
CommandComponent = __decorate([
    Component({
        selector: 'app-command',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideSearch })],
        host: { class: 'bg-popover text-popover-foreground flex w-full flex-col overflow-hidden rounded-lg border shadow-md' },
        template: `
    <div class="flex h-11 items-center gap-2 border-b px-3">
      <ng-icon name="lucideSearch" size="16" class="text-muted-foreground shrink-0" />
      <input
        type="text"
        role="combobox"
        aria-autocomplete="list"
        [attr.aria-expanded]="true"
        [attr.aria-controls]="listId"
        [attr.aria-activedescendant]="activeId()"
        [placeholder]="placeholder()"
        [value]="query()"
        (input)="onInput(eventValue($event))"
        (keydown)="onKey($event)"
        class="placeholder:text-muted-foreground h-11 w-full bg-transparent text-sm outline-none"
      />
    </div>
    <div [id]="listId" role="listbox" class="max-h-72 overflow-auto p-1">
      @for (g of groups(); track g.name) {
        <div role="group" [attr.aria-label]="g.name || null">
          @if (g.name) {
            <div class="text-muted-foreground px-2 py-1.5 text-xs font-medium">{{ g.name }}</div>
          }
          @for (it of g.items; track it.value) {
            <div
              role="option"
              [id]="optId(it)"
              [attr.aria-selected]="isActive(it)"
              [attr.aria-disabled]="it.disabled || null"
              tabindex="-1"
              (click)="pick(it)"
              (keydown.enter)="pick(it)"
              (mousemove)="activate(it)"
              class="flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm aria-disabled:opacity-50"
              [class.bg-accent]="isActive(it)"
              [class.text-accent-foreground]="isActive(it)"
            >
              <span class="flex-1">{{ it.label }}</span>
              @if (it.shortcut) {
                <span class="text-muted-foreground ml-auto text-xs tracking-widest">{{ it.shortcut }}</span>
              }
            </div>
          }
        </div>
      } @empty {
        <div class="text-muted-foreground py-6 text-center text-sm">{{ emptyText() }}</div>
      }
    </div>
  `,
    })
], CommandComponent);

const items = [{
  value: 'book',
  label: 'Book appointment',
  group: 'Appointments',
  shortcut: 'Ctrl+B'
}, {
  value: 'upcoming',
  label: 'View upcoming',
  group: 'Appointments'
}, {
  value: 'cancel',
  label: 'Cancel appointment',
  group: 'Appointments',
  disabled: true
}, {
  value: 'doctors',
  label: 'Find a doctor',
  group: 'Directory',
  shortcut: 'Ctrl+D'
}, {
  value: 'profile',
  label: 'Profile',
  group: 'Settings'
}, {
  value: 'settings',
  label: 'Settings',
  group: 'Settings',
  shortcut: 'Ctrl+,'
}];
const meta = {
  title: 'Overlays/Command',
  component: CommandComponent,
  decorators: [moduleMetadata({
    imports: [CommandComponent, DialogComponent, ButtonDirective]
  })],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    placeholder: {
      control: 'text'
    },
    emptyText: {
      control: 'text'
    }
  },
  args: {
    items,
    placeholder: 'Type a command or search...',
    emptyText: 'No results found.'
  },
  render: args => ({
    props: {
      ...args,
      last: '',
      pick(i) {
        this['last'] = i.label;
      }
    },
    template: `
      <div class="max-w-md">
        <app-command [items]="items" [placeholder]="placeholder" [emptyText]="emptyText" (selected)="pick($event)" />
        <p class="mt-4 text-sm">Selected: {{ last || 'none' }}</p>
      </div>
    `
  })
};
const Default = {};
const InDialog = {
  render: args => ({
    props: {
      ...args,
      open: false
    },
    template: `
      <button appButton variant="outline" (click)="open = true">Open command palette</button>
      <app-dialog heading="Command palette" [(open)]="open">
        <app-command [items]="items" [placeholder]="placeholder" [emptyText]="emptyText" (selected)="open = false" />
      </app-dialog>
    `
  })
};
const __namedExportsOrder = ["Default", "InDialog"];
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
InDialog.parameters = {
  ...InDialog.parameters,
  docs: {
    ...InDialog.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: {\n      ...args,\n      open: false\n    },\n    template: `\n      <button appButton variant=\"outline\" (click)=\"open = true\">Open command palette</button>\n      <app-dialog heading=\"Command palette\" [(open)]=\"open\">\n        <app-command [items]=\"items\" [placeholder]=\"placeholder\" [emptyText]=\"emptyText\" (selected)=\"open = false\" />\n      </app-dialog>\n    `\n  })\n}",
      ...InDialog.parameters?.docs?.source
    }
  }
};

export { Default, InDialog, __namedExportsOrder, meta as default };
