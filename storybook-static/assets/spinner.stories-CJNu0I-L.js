import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { S as SpinnerComponent } from './spinner.component-Dhh_yrWt.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Feedback/Spinner',
  decorators: [moduleMetadata({
    imports: [SpinnerComponent]
  })],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    label: {
      control: 'text'
    }
  },
  args: {
    size: 'sm'
  },
  render: args => ({
    props: args,
    template: `<app-spinner [size]="size" [label]="label" />`
  })
};
const Default = {};
const WithLabel = {
  args: {
    label: 'Processing payment...'
  }
};
const Large = {
  args: {
    size: 'lg',
    label: 'Loading'
  }
};
const __namedExportsOrder = ["Default", "WithLabel", "Large"];
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
WithLabel.parameters = {
  ...WithLabel.parameters,
  docs: {
    ...WithLabel.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Processing payment...'\n  }\n}",
      ...WithLabel.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg',\n    label: 'Loading'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};

export { Default, Large, WithLabel, __namedExportsOrder, meta as default };
