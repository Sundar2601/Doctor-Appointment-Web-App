import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { L as LabelDirective } from './label.directive-CQBTZD4B.js';
import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Radio Group" item. Usage: `<input type="radio" appRadio name="plan" value="a">`.
 * Group radios by sharing `name`; wrap in a `role="radiogroup"` element for a11y.
 * The inner dot is in `utilities.css` (`.ui-radio`).
 */
let RadioDirective = class RadioDirective {
};
RadioDirective = __decorate([
    Directive({
        selector: 'input[type=radio][appRadio]',
        host: {
            class: 'ui-radio border-input bg-background checked:border-primary size-4 shrink-0 cursor-pointer appearance-none rounded-full border shadow-xs focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        },
    })
], RadioDirective);

const meta = {
  title: 'Forms/Radio',
  decorators: [moduleMetadata({
    imports: [RadioDirective, LabelDirective]
  })],
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    selected: {
      control: 'select',
      options: ['a', 'b', 'c']
    }
  },
  args: {
    disabled: false,
    selected: 'a'
  },
  render: args => ({
    props: args,
    template: `
      <div class="grid gap-2" role="radiogroup" aria-label="Plan">
        <div class="flex items-center gap-2"><input id="r1" name="plan" type="radio" appRadio value="a" [checked]="selected === 'a'" [disabled]="disabled" /><label appLabel for="r1">Default</label></div>
        <div class="flex items-center gap-2"><input id="r2" name="plan" type="radio" appRadio value="b" [checked]="selected === 'b'" [disabled]="disabled" /><label appLabel for="r2">Comfortable</label></div>
        <div class="flex items-center gap-2"><input id="r3" name="plan" type="radio" appRadio value="c" [checked]="selected === 'c'" [disabled]="disabled" /><label appLabel for="r3">Compact</label></div>
      </div>`
  })
};
const Default = {};
const SecondSelected = {
  args: {
    selected: 'b'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const AllStates = {
  render: () => ({
    template: `<div class="flex items-center gap-6 p-2">
      <input type="radio" appRadio name="s1" aria-label="unchecked" />
      <input type="radio" appRadio name="s2" aria-label="unchecked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="radio" appRadio name="s3" disabled aria-label="unchecked disabled" />
      <input type="radio" appRadio name="s4" checked aria-label="checked" />
      <input type="radio" appRadio name="s5" checked aria-label="checked focus" class="border-ring ring-ring/50 ring-[3px]" />
      <input type="radio" appRadio name="s6" checked disabled aria-label="checked disabled" />
    </div>`
  })
};
const __namedExportsOrder = ["Default", "SecondSelected", "Disabled", "AllStates"];
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
SecondSelected.parameters = {
  ...SecondSelected.parameters,
  docs: {
    ...SecondSelected.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    selected: 'b'\n  }\n}",
      ...SecondSelected.parameters?.docs?.source
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
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-6 p-2\">\n      <input type=\"radio\" appRadio name=\"s1\" aria-label=\"unchecked\" />\n      <input type=\"radio\" appRadio name=\"s2\" aria-label=\"unchecked focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"radio\" appRadio name=\"s3\" disabled aria-label=\"unchecked disabled\" />\n      <input type=\"radio\" appRadio name=\"s4\" checked aria-label=\"checked\" />\n      <input type=\"radio\" appRadio name=\"s5\" checked aria-label=\"checked focus\" class=\"border-ring ring-ring/50 ring-[3px]\" />\n      <input type=\"radio\" appRadio name=\"s6\" checked disabled aria-label=\"checked disabled\" />\n    </div>`\n  })\n}",
      ...AllStates.parameters?.docs?.source
    }
  }
};

export { AllStates, Default, Disabled, SecondSelected, __namedExportsOrder, meta as default };
