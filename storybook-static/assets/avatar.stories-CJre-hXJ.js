import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { A as AvatarComponent } from './avatar.component-ttD-G_1Z.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Display/Avatar',
  decorators: [moduleMetadata({
    imports: [AvatarComponent]
  })],
  argTypes: {
    name: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    name: 'Dr. Jane Smith',
    size: 'md'
  },
  render: args => ({
    props: args,
    template: `<app-avatar [name]="name" [size]="size" />`
  })
};
const Default = {};
const Small = {
  args: {
    size: 'sm'
  }
};
const Large = {
  args: {
    size: 'lg'
  }
};
const Fallback = {
  args: {
    name: ''
  }
};
const AllSizes = {
  render: () => ({
    template: `<div class="flex items-center gap-4">
      <app-avatar name="" size="sm" /><app-avatar name="Chad Norris" size="sm" />
      <app-avatar name="" size="md" /><app-avatar name="Chad Norris" size="md" />
      <app-avatar name="" size="lg" /><app-avatar name="Chad Norris" size="lg" />
    </div>`
  })
};
const __namedExportsOrder = ["Default", "Small", "Large", "Fallback", "AllSizes"];
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
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm'\n  }\n}",
      ...Small.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};
Fallback.parameters = {
  ...Fallback.parameters,
  docs: {
    ...Fallback.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    name: ''\n  }\n}",
      ...Fallback.parameters?.docs?.source
    }
  }
};
AllSizes.parameters = {
  ...AllSizes.parameters,
  docs: {
    ...AllSizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-4\">\n      <app-avatar name=\"\" size=\"sm\" /><app-avatar name=\"Chad Norris\" size=\"sm\" />\n      <app-avatar name=\"\" size=\"md\" /><app-avatar name=\"Chad Norris\" size=\"md\" />\n      <app-avatar name=\"\" size=\"lg\" /><app-avatar name=\"Chad Norris\" size=\"lg\" />\n    </div>`\n  })\n}",
      ...AllSizes.parameters?.docs?.source
    }
  }
};

export { AllSizes, Default, Fallback, Large, Small, __namedExportsOrder, meta as default };
