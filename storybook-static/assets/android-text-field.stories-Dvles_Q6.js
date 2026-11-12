import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, m as model, s as signal, c as computed, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

let nextId = 0;
/** Material 3 text field (56dp) with floating label, supporting text and error state. */
let AndroidTextFieldComponent = class AndroidTextFieldComponent {
    id = `app-android-text-field-${nextId++}`;
    variant = input('outlined');
    label = input.required();
    value = model('');
    placeholder = input('');
    supporting = input('');
    error = input('');
    type = input('text');
    disabled = input(false);
    focused = signal(false);
    floated = computed(() => this.focused() || !!this.value() || !!this.placeholder());
    hasSupport = computed(() => !!(this.error() || this.supporting()));
    boxClasses = computed(() => {
        const accent = this.error() ? 'border-destructive ring-destructive' : 'border-primary ring-primary';
        const focus = this.focused() ? `${accent} ring-1` : this.error() ? 'border-destructive' : 'border-border';
        return this.variant() === 'outlined'
            ? `relative h-14 rounded-sm border ${focus}`
            : `bg-secondary relative h-14 rounded-t-sm border-b ${focus.replace('ring-1', '')} ${this.focused() ? 'border-b-2' : ''}`;
    });
    labelClasses = computed(() => {
        const color = this.error() ? 'text-destructive' : this.focused() ? 'text-primary' : 'text-muted-foreground';
        const pos = this.floated()
            ? this.variant() === 'outlined'
                ? 'left-3 -top-2 px-1 text-xs'
                : 'left-4 top-2 text-xs'
            : 'left-4 top-1/2 -translate-y-1/2 text-base';
        return `pointer-events-none absolute leading-4 ${pos} ${color}`;
    });
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        supporting: [{ type: Input, args: [{ isSignal: true, alias: "supporting", required: false, transform: undefined },] }],
        error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false, transform: undefined },] }],
        type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false, transform: undefined },] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }]
    };
};
AndroidTextFieldComponent = __decorate([
    Component({
        selector: 'app-android-text-field',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block w-full' },
        template: `
    <div [class]="boxClasses()">
      <label [for]="id" [class]="labelClasses()" [class.bg-background]="variant() === 'outlined' && floated()">
        {{ label() }}
      </label>
      <input
        [id]="id"
        class="text-foreground placeholder:text-muted-foreground h-full w-full bg-transparent px-4 text-base outline-none disabled:opacity-40"
        [class.pt-4]="variant() === 'filled'"
        [type]="type()"
        [placeholder]="floated() ? placeholder() : ''"
        [disabled]="disabled()"
        [value]="value()"
        [attr.aria-invalid]="error() ? true : null"
        [attr.aria-describedby]="hasSupport() ? id + '-support' : null"
        (input)="value.set($any($event.target).value)"
        (focus)="focused.set(true)"
        (blur)="focused.set(false)"
      />
    </div>
    @if (hasSupport()) {
      <p [id]="id + '-support'" class="mt-1 px-4 text-xs" [class.text-destructive]="error()" [class.text-muted-foreground]="!error()">
        {{ error() || supporting() }}
      </p>
    }
  `,
    })
], AndroidTextFieldComponent);

const meta = {
  title: 'Mobile/Android/Text Field',
  component: AndroidTextFieldComponent,
  decorators: [moduleMetadata({
    imports: [AndroidTextFieldComponent]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined']
    }
  },
  args: {
    variant: 'outlined',
    label: 'Email',
    value: '',
    placeholder: '',
    supporting: '',
    error: '',
    disabled: false
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-[280px] p-4">
        <app-android-text-field
          [variant]="variant" [label]="label" [(value)]="value" [placeholder]="placeholder"
          [supporting]="supporting" [error]="error" [disabled]="disabled"
        />
      </div>`
  })
};
const Outlined = {};
const OutlinedWithValue = {
  args: {
    value: 'name@example.com',
    supporting: 'We never share your email'
  }
};
const OutlinedPlaceholder = {
  args: {
    label: 'Label',
    placeholder: 'Email'
  }
};
const Filled = {
  args: {
    variant: 'filled',
    value: 'name@example.com'
  }
};
const Error = {
  args: {
    value: 'name@',
    error: 'Enter a valid email address'
  }
};
const __namedExportsOrder = ["Outlined", "OutlinedWithValue", "OutlinedPlaceholder", "Filled", "Error"];
Outlined.parameters = {
  ...Outlined.parameters,
  docs: {
    ...Outlined.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Outlined.parameters?.docs?.source
    }
  }
};
OutlinedWithValue.parameters = {
  ...OutlinedWithValue.parameters,
  docs: {
    ...OutlinedWithValue.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 'name@example.com',\n    supporting: 'We never share your email'\n  }\n}",
      ...OutlinedWithValue.parameters?.docs?.source
    }
  }
};
OutlinedPlaceholder.parameters = {
  ...OutlinedPlaceholder.parameters,
  docs: {
    ...OutlinedPlaceholder.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Label',\n    placeholder: 'Email'\n  }\n}",
      ...OutlinedPlaceholder.parameters?.docs?.source
    }
  }
};
Filled.parameters = {
  ...Filled.parameters,
  docs: {
    ...Filled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'filled',\n    value: 'name@example.com'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 'name@',\n    error: 'Enter a valid email address'\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};

export { Error, Filled, Outlined, OutlinedPlaceholder, OutlinedWithValue, __namedExportsOrder, meta as default };
