import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Textarea". Same look as `appControl` but multi-line and auto-growing (`field-sizing: content`). */
let TextareaDirective = class TextareaDirective {
};
TextareaDirective = __decorate([
    Directive({
        selector: 'textarea[appTextarea]',
        host: {
            class: 'border-input bg-background placeholder:text-muted-foreground field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 aria-[invalid=true]:focus-visible:ring-destructive/40',
        },
    })
], TextareaDirective);

const meta = {
  title: 'Forms/Textarea',
  decorators: [moduleMetadata({
    imports: [TextareaDirective]
  })],
  argTypes: {
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    value: {
      control: 'text'
    }
  },
  args: {
    placeholder: 'Type your message here.',
    disabled: false,
    invalid: false,
    value: ''
  },
  render: args => ({
    props: args,
    template: `<div class="w-80"><textarea appTextarea aria-label="Message" [placeholder]="placeholder" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null" [value]="value"></textarea></div>`
  })
};
const Default = {};
const Filled = {
  args: {
    value: 'I would like to reschedule my appointment.'
  }
};
const Invalid = {
  args: {
    invalid: true,
    value: 'Too short'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Default", "Filled", "Invalid", "Disabled"];
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
      originalSource: "{\n  args: {\n    value: 'I would like to reschedule my appointment.'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...Invalid.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    invalid: true,\n    value: 'Too short'\n  }\n}",
      ...Invalid.parameters?.docs?.source
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

export { Default, Disabled, Filled, Invalid, __namedExportsOrder, meta as default };
