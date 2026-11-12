import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { C as ControlDirective } from './control.directive-DwCcafuZ.js';
import { L as LabelDirective } from './label.directive-CQBTZD4B.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Forms/Label',
  decorators: [moduleMetadata({
    imports: [LabelDirective, ControlDirective]
  })],
  argTypes: {
    text: {
      control: 'text'
    }
  },
  args: {
    text: 'Email address'
  },
  render: args => ({
    props: args,
    template: `<label appLabel>{{ text }}</label>`
  })
};
const Default = {};
const WithInput = {
  render: args => ({
    props: args,
    template: `<div class="grid w-64 gap-1.5"><label appLabel for="em">{{ text }}</label><input id="em" appControl placeholder="you@example.com" /></div>`
  })
};
const __namedExportsOrder = ["Default", "WithInput"];
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
WithInput.parameters = {
  ...WithInput.parameters,
  docs: {
    ...WithInput.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"grid w-64 gap-1.5\"><label appLabel for=\"em\">{{ text }}</label><input id=\"em\" appControl placeholder=\"you@example.com\" /></div>`\n  })\n}",
      ...WithInput.parameters?.docs?.source
    }
  }
};

export { Default, WithInput, __namedExportsOrder, meta as default };
