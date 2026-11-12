import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, s as signal, y as viewChild, c as computed, G as ViewChild, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Input OTP": N 36px slots, optional separator, backed by one real (transparent) input
 * so typing, paste, and autofill (`autocomplete="one-time-code"`) work natively.
 * Usage: `<app-input-otp [length]="6" [(value)]="code" />`.
 */
let InputOtpComponent = class InputOtpComponent {
    length = input(6);
    value = model('');
    separatorAfter = input(3);
    numeric = input(true);
    disabled = input(false);
    ariaLabel = input('One-time password');
    focused = signal(false);
    field = viewChild.required('field');
    slots = computed(() => Array.from({ length: this.length() }, (_, i) => i));
    active = computed(() => Math.min(this.value().length, this.length() - 1));
    onInput(e) {
        const el = e.target;
        const v = (this.numeric() ? el.value.replace(/\D/g, '') : el.value).slice(0, this.length());
        el.value = v;
        this.value.set(v);
    }
    static propDecorators = {
        length: [{ type: Input, args: [{ isSignal: true, alias: "length", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        separatorAfter: [{ type: Input, args: [{ isSignal: true, alias: "separatorAfter", required: false, transform: undefined },] }],
        numeric: [{ type: Input, args: [{ isSignal: true, alias: "numeric", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        field: [{ type: ViewChild, args: ['field', { isSignal: true },] }]
    };
};
InputOtpComponent = __decorate([
    Component({
        selector: 'app-input-otp',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'relative inline-flex items-center gap-2', '(click)': 'field().nativeElement.focus()' },
        template: `
    @for (s of slots(); track s) {
      <div
        class="border-input bg-background data-[active=true]:border-ring flex size-9 items-center justify-center rounded-md border text-sm shadow-xs data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50"
        [attr.data-active]="focused() && s === active()"
      >
        {{ value()[s] ?? '' }}
      </div>
      @if (separatorAfter() === s + 1 && s + 1 < length()) {
        <span class="text-muted-foreground text-sm" aria-hidden="true">–</span>
      }
    }
    <input
      #field
      class="absolute inset-0 size-full cursor-text opacity-0"
      autocomplete="one-time-code"
      [attr.inputmode]="numeric() ? 'numeric' : 'text'"
      [attr.maxlength]="length()"
      [attr.aria-label]="ariaLabel()"
      [disabled]="disabled()"
      [value]="value()"
      (input)="onInput($event)"
      (focus)="focused.set(true)"
      (blur)="focused.set(false)"
    />
  `,
    })
], InputOtpComponent);

const meta = {
  title: 'Forms/Input OTP',
  decorators: [moduleMetadata({
    imports: [InputOtpComponent]
  })],
  argTypes: {
    length: {
      control: 'number'
    },
    value: {
      control: 'text'
    },
    separatorAfter: {
      control: 'number'
    },
    numeric: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    length: 6,
    value: '',
    separatorAfter: 3,
    numeric: true,
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<app-input-otp [length]="length" [(value)]="value" [separatorAfter]="separatorAfter" [numeric]="numeric" [disabled]="disabled" />`
  })
};
const Default = {};
const Filled = {
  args: {
    value: '123456'
  }
};
const FourDigits = {
  args: {
    length: 4,
    separatorAfter: null,
    value: '12'
  }
};
const Disabled = {
  args: {
    disabled: true,
    value: '123'
  }
};
const __namedExportsOrder = ["Default", "Filled", "FourDigits", "Disabled"];
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
Filled.parameters = {
  ...Filled.parameters,
  docs: {
    ...Filled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: '123456'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
FourDigits.parameters = {
  ...FourDigits.parameters,
  docs: {
    ...FourDigits.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    length: 4,\n    separatorAfter: null,\n    value: '12'\n  }\n}",
      ...FourDigits.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    value: '123'\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};

export { Default, Disabled, Filled, FourDigits, __namedExportsOrder, meta as default };
