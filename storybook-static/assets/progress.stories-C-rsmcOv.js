import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { P as ProgressComponent } from './progress.component-RT1kllIp.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Feedback/Progress',
  decorators: [moduleMetadata({
    imports: [ProgressComponent]
  })],
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  },
  args: {
    value: 60
  },
  render: args => ({
    props: args,
    template: `<div class="w-80"><app-progress [value]="value" /></div>`
  })
};
const Default = {};
const Empty = {
  args: {
    value: 0
  }
};
const Complete = {
  args: {
    value: 100
  }
};
const __namedExportsOrder = ["Default", "Empty", "Complete"];
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
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...Empty.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 0\n  }\n}",
      ...Empty.parameters?.docs?.source
    }
  }
};
Complete.parameters = {
  ...Complete.parameters,
  docs: {
    ...Complete.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 100\n  }\n}",
      ...Complete.parameters?.docs?.source
    }
  }
};

export { Complete, Default, Empty, __namedExportsOrder, meta as default };
