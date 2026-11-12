import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, s as signal, c as computed, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, s as lucideCalendar } from './ng-icons-lucide-DF7QvMAc.js';
import { C as CalendarComponent } from './calendar.component-CEeFnIJD.js';
import { j as CdkConnectedOverlay, k as CdkOverlayOrigin } from './_overlay-module-chunk-BeBLRxp0.js';
import './preload-helper-D5QYaGzd.js';

var DatePickerComponent_1;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function ordinal(n) {
    const r = n % 100;
    if (r >= 11 && r <= 13)
        return `${n}th`;
    return `${n}${{ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] ?? 'th'}`;
}
function parseIso(v) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
    return m ? new Date(+(m[1] ?? 0), +(m[2] ?? 1) - 1, +(m[3] ?? 1)) : null;
}
function toIso(d) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
/**
 * Figma "Date Picker" trigger ("Pick a date" / "November 17th, 2026").
 * Opens the design-system Calendar in an overlay; value is `yyyy-MM-dd` or `''`.
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
    open = signal(false);
    positions = [
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -8 },
    ];
    selected = computed(() => parseIso(this.value()));
    minDate = computed(() => parseIso(this.min()));
    maxDate = computed(() => parseIso(this.max()));
    label = computed(() => {
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.value());
        if (!m)
            return '';
        const [, year = '', month = '1', day = '1'] = m;
        return `${MONTHS[+month - 1]} ${ordinal(+day)}, ${year}`;
    });
    pick(d) {
        if (!d)
            return;
        this.value.set(toIso(d));
        this.open.set(false);
    }
    onOutside(e, origin) {
        if (!origin.contains(e.target))
            this.open.set(false);
    }
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false, transform: undefined },] }]
    };
};
DatePickerComponent = DatePickerComponent_1 = __decorate([
    Component({
        selector: 'app-date-picker',
        imports: [NgIcon, CdkConnectedOverlay, CdkOverlayOrigin, CalendarComponent],
        viewProviders: [provideIcons({ lucideCalendar })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'relative block w-full', '[attr.id]': 'null' },
        template: `
    <button
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      type="button"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel()"
      aria-haspopup="dialog"
      [attr.aria-expanded]="open()"
      class="border-input bg-background flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      [class.text-muted-foreground]="!label()"
      (click)="open.set(!open())"
    >
      <ng-icon name="lucideCalendar" class="size-4 shrink-0" />
      <span class="truncate">{{ label() || placeholder() }}</span>
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onOutside($event, origin.elementRef.nativeElement)"
      (overlayKeydown)="$event.key === 'Escape' && open.set(false)"
      (detach)="open.set(false)"
    >
      <app-calendar class="shadow-md" [value]="selected()" [min]="minDate()" [max]="maxDate()" (valueChange)="pick($event)" />
    </ng-template>
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
