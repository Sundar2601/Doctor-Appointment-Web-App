import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { K as KbdDirective } from './kbd.directive-DPmBR4a8.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Display/Kbd',
  decorators: [moduleMetadata({
    imports: [KbdDirective]
  })],
  argTypes: {
    keys: {
      control: 'text'
    }
  },
  args: {
    keys: '⌘K'
  },
  render: args => ({
    props: args,
    template: `<kbd appKbd>{{ keys }}</kbd>`
  })
};
const Default = {};
const Combination = {
  render: () => ({
    template: `<div class="flex items-center gap-1"><kbd appKbd>Ctrl</kbd><span>+</span><kbd appKbd>Shift</kbd><span>+</span><kbd appKbd>P</kbd></div>`
  })
};
const Group = {
  render: () => ({
    template: `<div class="flex items-center gap-1"><kbd appKbd>Ctrl</kbd><kbd appKbd>B</kbd></div>`
  })
};
const __namedExportsOrder = ["Default", "Combination", "Group"];
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
Combination.parameters = {
  ...Combination.parameters,
  docs: {
    ...Combination.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-1\"><kbd appKbd>Ctrl</kbd><span>+</span><kbd appKbd>Shift</kbd><span>+</span><kbd appKbd>P</kbd></div>`\n  })\n}",
      ...Combination.parameters?.docs?.source
    }
  }
};
Group.parameters = {
  ...Group.parameters,
  docs: {
    ...Group.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-1\"><kbd appKbd>Ctrl</kbd><kbd appKbd>B</kbd></div>`\n  })\n}",
      ...Group.parameters?.docs?.source
    }
  }
};

export { Combination, Default, Group, __namedExportsOrder, meta as default };
