import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { C as CheckboxDirective } from './checkbox.directive-Cu2iCAqr.js';
import { L as LabelDirective } from './label.directive-32oYAj89.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Forms/Checkbox',
  decorators: [moduleMetadata({
    imports: [CheckboxDirective, LabelDirective]
  })],
  argTypes: {
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    }
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Accept terms and conditions'
  },
  render: args => ({
    props: args,
    template: `<div class="flex items-center gap-2"><input id="cb" type="checkbox" appCheckbox [checked]="checked" [disabled]="disabled" /><label appLabel for="cb">{{ label }}</label></div>`
  })
};
const Default = {};
const Checked = {
  args: {
    checked: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const DisabledChecked = {
  args: {
    disabled: true,
    checked: true
  }
};
const AllStates = {
  render: () => ({
    template: `<div class="flex items-center gap-6 p-2">
      <input type="checkbox" appCheckbox aria-label="unchecked" />
      <input type="checkbox" appCheckbox aria-label="unchecked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox disabled aria-label="unchecked disabled" />
      <input type="checkbox" appCheckbox checked aria-label="checked" />
      <input type="checkbox" appCheckbox checked aria-label="checked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox checked disabled aria-label="checked disabled" />
      <input type="checkbox" appCheckbox [indeterminate]="true" aria-label="indeterminate" />
      <input type="checkbox" appCheckbox [indeterminate]="true" aria-label="indeterminate focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appCheckbox [indeterminate]="true" disabled aria-label="indeterminate disabled" />
    </div>`
  })
};
const __namedExportsOrder = ["Default", "Checked", "Disabled", "DisabledChecked", "AllStates"];
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
Checked.parameters = {
  ...Checked.parameters,
  docs: {
    ...Checked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    checked: true\n  }\n}",
      ...Checked.parameters?.docs?.source
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
DisabledChecked.parameters = {
  ...DisabledChecked.parameters,
  docs: {
    ...DisabledChecked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    checked: true\n  }\n}",
      ...DisabledChecked.parameters?.docs?.source
    }
  }
};
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-6 p-2\">\n      <input type=\"checkbox\" appCheckbox aria-label=\"unchecked\" />\n      <input type=\"checkbox\" appCheckbox aria-label=\"unchecked focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"checkbox\" appCheckbox disabled aria-label=\"unchecked disabled\" />\n      <input type=\"checkbox\" appCheckbox checked aria-label=\"checked\" />\n      <input type=\"checkbox\" appCheckbox checked aria-label=\"checked focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"checkbox\" appCheckbox checked disabled aria-label=\"checked disabled\" />\n      <input type=\"checkbox\" appCheckbox [indeterminate]=\"true\" aria-label=\"indeterminate\" />\n      <input type=\"checkbox\" appCheckbox [indeterminate]=\"true\" aria-label=\"indeterminate focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"checkbox\" appCheckbox [indeterminate]=\"true\" disabled aria-label=\"indeterminate disabled\" />\n    </div>`\n  })\n}",
      ...AllStates.parameters?.docs?.source
    }
  }
};

export { AllStates, Checked, Default, Disabled, DisabledChecked, __namedExportsOrder, meta as default };
