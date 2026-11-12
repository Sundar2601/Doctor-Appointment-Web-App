import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { C as ControlDirective } from './control.directive-B1rJ-pBE.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Forms/Input',
  decorators: [moduleMetadata({
    imports: [ControlDirective]
  })],
  argTypes: {
    placeholder: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number']
    },
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    }
  },
  args: {
    placeholder: 'Email',
    value: '',
    type: 'text',
    disabled: false,
    invalid: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-72"><input appControl aria-label="Input" [type]="type" [placeholder]="placeholder" [value]="value" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null" /></div>`
  })
};
const Default = {};
const Filled = {
  args: {
    value: 'jane@example.com'
  }
};
const Invalid = {
  args: {
    invalid: true,
    value: 'not-an-email'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const Password = {
  args: {
    type: 'password',
    value: 'secret',
    placeholder: 'Password'
  }
};
const __namedExportsOrder = ["Default", "Filled", "Invalid", "Disabled", "Password"];
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
      originalSource: "{\n  args: {\n    value: 'jane@example.com'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...Invalid.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    invalid: true,\n    value: 'not-an-email'\n  }\n}",
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
Password.parameters = {
  ...Password.parameters,
  docs: {
    ...Password.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'password',\n    value: 'secret',\n    placeholder: 'Password'\n  }\n}",
      ...Password.parameters?.docs?.source
    }
  }
};

export { Default, Disabled, Filled, Invalid, Password, __namedExportsOrder, meta as default };
