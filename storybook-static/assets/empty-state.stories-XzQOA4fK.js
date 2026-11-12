import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { E as EmptyStateComponent } from './empty-state.component-BXR70HW-.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Feedback/Empty State',
  decorators: [moduleMetadata({
    imports: [EmptyStateComponent, ButtonDirective]
  })],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  args: {
    title: 'No appointments yet',
    description: 'Book your first appointment to get started.'
  },
  render: args => ({
    props: args,
    template: `<app-empty-state [title]="title" [description]="description" />`
  })
};
const Default = {};
const TitleOnly = {
  args: {
    description: undefined
  }
};
const WithAction = {
  render: args => ({
    props: args,
    template: `<app-empty-state [title]="title" [description]="description"><button appButton class="mt-2">Book appointment</button></app-empty-state>`
  })
};
const __namedExportsOrder = ["Default", "TitleOnly", "WithAction"];
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
TitleOnly.parameters = {
  ...TitleOnly.parameters,
  docs: {
    ...TitleOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    description: undefined\n  }\n}",
      ...TitleOnly.parameters?.docs?.source
    }
  }
};
WithAction.parameters = {
  ...WithAction.parameters,
  docs: {
    ...WithAction.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<app-empty-state [title]=\"title\" [description]=\"description\"><button appButton class=\"mt-2\">Book appointment</button></app-empty-state>`\n  })\n}",
      ...WithAction.parameters?.docs?.source
    }
  }
};

export { Default, TitleOnly, WithAction, __namedExportsOrder, meta as default };
