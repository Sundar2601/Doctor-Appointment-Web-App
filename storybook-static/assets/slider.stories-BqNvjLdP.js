import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, D as Directive } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Slider" (4px track, 16px thumb). Usage: `<input type="range" appSlider min="0" max="100">`.
 * Track fill uses the `--ui-slider-fill` custom property; set it from the value, e.g.
 * `[style.--ui-slider-fill.%]="value"`. Track and thumb styles are in `utilities.css` (`.ui-slider`).
 */
let SliderDirective = class SliderDirective {
};
SliderDirective = __decorate([
    Directive({
        selector: 'input[type=range][appSlider]',
        host: {
            class: 'ui-slider h-4 w-60 cursor-pointer appearance-none bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        },
    })
], SliderDirective);

const meta = {
  title: 'Forms/Slider',
  decorators: [moduleMetadata({
    imports: [SliderDirective]
  })],
  argTypes: {
    value: {
      control: 'number'
    },
    min: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    step: {
      control: 'number'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-64"><input type="range" appSlider aria-label="Volume" [min]="min" [max]="max" [step]="step" [value]="value" [disabled]="disabled" /></div>`
  })
};
const Default = {};
const Stepped = {
  args: {
    step: 10,
    value: 30
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const AllStates = {
  render: () => ({
    template: `<div class="flex items-center gap-8 p-2">
      <input type="range" appSlider aria-label="default" value="50" style="--ui-slider-fill: 50%" />
      <input type="range" appSlider aria-label="disabled" value="50" disabled style="--ui-slider-fill: 50%" />
    </div>`
  })
};
const __namedExportsOrder = ["Default", "Stepped", "Disabled", "AllStates"];
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
Stepped.parameters = {
  ...Stepped.parameters,
  docs: {
    ...Stepped.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    step: 10,\n    value: 30\n  }\n}",
      ...Stepped.parameters?.docs?.source
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
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-8 p-2\">\n      <input type=\"range\" appSlider aria-label=\"default\" value=\"50\" style=\"--ui-slider-fill: 50%\" />\n      <input type=\"range\" appSlider aria-label=\"disabled\" value=\"50\" disabled style=\"--ui-slider-fill: 50%\" />\n    </div>`\n  })\n}",
      ...AllStates.parameters?.docs?.source
    }
  }
};

export { AllStates, Default, Disabled, Stepped, __namedExportsOrder, meta as default };
