import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { L as LabelDirective } from './label.directive-32oYAj89.js';
import { _ as __decorate, D as Directive } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Switch" (32×18 track, 14px thumb). Usage: `<input type="checkbox" appSwitch>`.
 * The thumb is in `utilities.css` (`.ui-switch`).
 */
let SwitchDirective = class SwitchDirective {
};
SwitchDirective = __decorate([
    Directive({
        selector: 'input[type=checkbox][appSwitch]',
        host: {
            role: 'switch',
            class: 'ui-switch bg-input checked:bg-primary h-[18px] w-8 shrink-0 border border-transparent cursor-pointer appearance-none rounded-full transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        },
    })
], SwitchDirective);

const meta = {
  title: 'Forms/Switch',
  decorators: [moduleMetadata({
    imports: [SwitchDirective, LabelDirective]
  })],
  argTypes: {
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    checked: false,
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<div class="flex items-center gap-2"><input id="sw" type="checkbox" appSwitch role="switch" [checked]="checked" [disabled]="disabled" /><label appLabel for="sw">Airplane mode</label></div>`
  })
};
const Default = {};
const On = {
  args: {
    checked: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const DisabledOn = {
  args: {
    disabled: true,
    checked: true
  }
};
const AllStates = {
  render: () => ({
    template: `<div class="flex items-center gap-6 p-2">
      <input type="checkbox" appSwitch aria-label="off" />
      <input type="checkbox" appSwitch aria-label="off focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appSwitch disabled aria-label="off disabled" />
      <input type="checkbox" appSwitch checked aria-label="on" />
      <input type="checkbox" appSwitch checked aria-label="on focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="checkbox" appSwitch checked disabled aria-label="on disabled" />
    </div>`
  })
};
const __namedExportsOrder = ["Default", "On", "Disabled", "DisabledOn", "AllStates"];
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
On.parameters = {
  ...On.parameters,
  docs: {
    ...On.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    checked: true\n  }\n}",
      ...On.parameters?.docs?.source
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
DisabledOn.parameters = {
  ...DisabledOn.parameters,
  docs: {
    ...DisabledOn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    checked: true\n  }\n}",
      ...DisabledOn.parameters?.docs?.source
    }
  }
};
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-6 p-2\">\n      <input type=\"checkbox\" appSwitch aria-label=\"off\" />\n      <input type=\"checkbox\" appSwitch aria-label=\"off focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"checkbox\" appSwitch disabled aria-label=\"off disabled\" />\n      <input type=\"checkbox\" appSwitch checked aria-label=\"on\" />\n      <input type=\"checkbox\" appSwitch checked aria-label=\"on focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"checkbox\" appSwitch checked disabled aria-label=\"on disabled\" />\n    </div>`\n  })\n}",
      ...AllStates.parameters?.docs?.source
    }
  }
};

export { AllStates, Default, Disabled, DisabledOn, On, __namedExportsOrder, meta as default };
