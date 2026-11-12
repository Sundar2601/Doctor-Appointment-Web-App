import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { C as ControlDirective } from './control.directive-DwCcafuZ.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Label + control + optional hint/error. Pass the control's `id` as `for`. */
let FieldComponent = class FieldComponent {
    label = input.required();
    for = input();
    hint = input();
    error = input();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        for: [{ type: Input, args: [{ isSignal: true, alias: "for", required: false, transform: undefined },] }],
        hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false, transform: undefined },] }],
        error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false, transform: undefined },] }]
    };
};
FieldComponent = __decorate([
    Component({
        selector: 'app-field',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'grid gap-2' },
        template: `
    <label class="text-foreground text-sm leading-5 font-medium" [attr.for]="for()">{{ label() }}</label>
    <ng-content />
    @if (error()) {
      <p class="text-destructive text-sm" role="alert">{{ error() }}</p>
    } @else if (hint()) {
      <p class="text-muted-foreground text-sm">{{ hint() }}</p>
    }
  `,
    })
], FieldComponent);

const meta = {
  title: 'Forms/Field',
  decorators: [moduleMetadata({
    imports: [FieldComponent, ControlDirective]
  })],
  argTypes: {
    label: {
      control: 'text'
    },
    hint: {
      control: 'text'
    },
    error: {
      control: 'text'
    }
  },
  args: {
    label: 'Email',
    hint: '',
    error: ''
  },
  render: args => ({
    props: args,
    template: `<div class="w-70"><app-field [label]="label" for="fld" [hint]="hint" [error]="error"><input id="fld" appControl placeholder="you@example.com" [attr.aria-invalid]="error ? 'true' : null" /></app-field></div>`
  })
};
const Default = {};
const WithHint = {
  args: {
    hint: 'We will never share your email.'
  }
};
const WithError = {
  args: {
    error: 'Please enter a valid email address.'
  }
};
const WithDescription = {
  args: {
    label: 'Label',
    hint: 'This is your public display name.'
  }
};
const __namedExportsOrder = ["Default", "WithHint", "WithError", "WithDescription"];
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
WithHint.parameters = {
  ...WithHint.parameters,
  docs: {
    ...WithHint.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    hint: 'We will never share your email.'\n  }\n}",
      ...WithHint.parameters?.docs?.source
    }
  }
};
WithError.parameters = {
  ...WithError.parameters,
  docs: {
    ...WithError.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    error: 'Please enter a valid email address.'\n  }\n}",
      ...WithError.parameters?.docs?.source
    }
  }
};
WithDescription.parameters = {
  ...WithDescription.parameters,
  docs: {
    ...WithDescription.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Label',\n    hint: 'This is your public display name.'\n  }\n}",
      ...WithDescription.parameters?.docs?.source
    }
  }
};

export { Default, WithDescription, WithError, WithHint, __namedExportsOrder, meta as default };
