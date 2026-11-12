import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { I as IosSwitchComponent } from './ios-switch.component-tqbWK1mk.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Mobile/iOS/Switch',
  decorators: [moduleMetadata({
    imports: [IosSwitchComponent]
  })],
  args: {
    checked: false,
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<app-ios-switch [(checked)]="checked" [disabled]="disabled" label="Toggle" />`
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
const __namedExportsOrder = ["Default", "Checked", "Disabled"];
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

export { Checked, Default, Disabled, __namedExportsOrder, meta as default };
