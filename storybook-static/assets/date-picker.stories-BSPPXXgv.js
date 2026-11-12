import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, y as viewChild, c as computed, G as ViewChild, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, s as lucideCalendar } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

var DatePickerComponent_1;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function ordinal(n) {
    const r = n % 100;
    if (r >= 11 && r <= 13)
        return `${n}th`;
    return `${n}${{ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th'}`;
}
/**
 * Figma "Date Picker" trigger ("Pick a date" / "November 17th, 2026").
 * The calendar itself is the browser's native date picker (hidden `<input type=date>`), value is `yyyy-MM-dd` or `''`.
 * Usage: `<app-date-picker [(value)]="date" min="2026-11-01" />`.
 */
let DatePickerComponent = class DatePickerComponent {
    static { DatePickerComponent_1 = this; }
    static n = 0;
    value = model('');
    placeholder = input('Pick a date');
    min = input('');
    max = input('');
    disabled = input(false);
    ariaLabel = input();
    id = input(`app-date-picker-${DatePickerComponent_1.n++}`);
    native = viewChild.required('native');
    label = computed(() => {
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.value());
        if (!m)
            return '';
        const [, year = '', month = '1', day = '1'] = m;
        return `${MONTHS[+month - 1]} ${ordinal(+day)}, ${year}`;
    });
    openPicker() {
        const el = this.native().nativeElement;
        if (typeof el.showPicker === 'function')
            el.showPicker();
        else
            el.focus();
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false, transform: undefined },] }],
        native: [{ type: ViewChild, args: ['native', { isSignal: true },] }]
    };
};
DatePickerComponent = DatePickerComponent_1 = __decorate([
    Component({
        selector: 'app-date-picker',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCalendar })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'relative block w-full' },
        template: `
    <button
      type="button"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel()"
      class="border-input bg-background flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      [class.text-muted-foreground]="!label()"
      (click)="openPicker()"
    >
      <ng-icon name="lucideCalendar" class="size-4 shrink-0" />
      <span class="truncate">{{ label() || placeholder() }}</span>
    </button>
    <input
      #native
      type="date"
      tabindex="-1"
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-0 opacity-0"
      [value]="value()"
      [min]="min()"
      [max]="max()"
      (change)="value.set(native.value)"
    />
  `,
    })
], DatePickerComponent);

const meta = {
  title: 'Forms/Date Picker',
  decorators: [moduleMetadata({
    imports: [DatePickerComponent]
  })],
  argTypes: {
    value: {
      control: 'text',
      description: 'ISO date (yyyy-mm-dd)'
    },
    placeholder: {
      control: 'text'
    },
    min: {
      control: 'text'
    },
    max: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    value: '',
    placeholder: 'Pick a date',
    min: '',
    max: '',
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-64"><app-date-picker ariaLabel="Appointment date" [(value)]="value" [placeholder]="placeholder" [min]="min" [max]="max" [disabled]="disabled" /></div>`
  })
};
const Default = {};
const WithValue = {
  args: {
    value: '2026-12-01'
  }
};
const WithRange = {
  args: {
    min: '2026-12-01',
    max: '2026-12-31',
    value: '2026-12-15'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Default", "WithValue", "WithRange", "Disabled"];
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
      originalSource: "{\n  args: {\n    value: '2026-12-01'\n  }\n}",
      ...WithValue.parameters?.docs?.source
    }
  }
};
WithRange.parameters = {
  ...WithRange.parameters,
  docs: {
    ...WithRange.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    min: '2026-12-01',\n    max: '2026-12-31',\n    value: '2026-12-15'\n  }\n}",
      ...WithRange.parameters?.docs?.source
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

export { Default, Disabled, WithRange, WithValue, __namedExportsOrder, meta as default };
