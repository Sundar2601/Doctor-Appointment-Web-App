import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { S as SkeletonDirective } from './skeleton.directive-BNHlaPrP.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Feedback/Skeleton',
  decorators: [moduleMetadata({
    imports: [SkeletonDirective]
  })],
  argTypes: {
    shape: {
      control: 'select',
      options: ['rect', 'circle']
    }
  },
  args: {
    shape: 'rect'
  },
  render: args => ({
    props: args,
    template: `<div appSkeleton [shape]="shape" class="h-4 w-60"></div>`
  })
};
const Rect = {};
const Circle = {
  args: {
    shape: 'circle'
  },
  render: args => ({
    props: args,
    template: `<div appSkeleton [shape]="shape" class="size-12"></div>`
  })
};
const CardPlaceholder = {
  render: () => ({
    template: `<div class="flex items-center gap-4">
      <div appSkeleton shape="circle" class="size-12"></div>
      <div class="flex flex-col gap-2"><div appSkeleton class="h-4 w-60"></div><div appSkeleton class="h-4 w-40"></div></div>
    </div>`
  })
};
const __namedExportsOrder = ["Rect", "Circle", "CardPlaceholder"];
Rect.parameters = {
  ...Rect.parameters,
  docs: {
    ...Rect.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Rect.parameters?.docs?.source
    }
  }
};
Circle.parameters = {
  ...Circle.parameters,
  docs: {
    ...Circle.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    shape: 'circle'\n  },\n  render: args => ({\n    props: args,\n    template: `<div appSkeleton [shape]=\"shape\" class=\"size-12\"></div>`\n  })\n}",
      ...Circle.parameters?.docs?.source
    }
  }
};
CardPlaceholder.parameters = {
  ...CardPlaceholder.parameters,
  docs: {
    ...CardPlaceholder.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex items-center gap-4\">\n      <div appSkeleton shape=\"circle\" class=\"size-12\"></div>\n      <div class=\"flex flex-col gap-2\"><div appSkeleton class=\"h-4 w-60\"></div><div appSkeleton class=\"h-4 w-40\"></div></div>\n    </div>`\n  })\n}",
      ...CardPlaceholder.parameters?.docs?.source
    }
  }
};

export { CardPlaceholder, Circle, Rect, __namedExportsOrder, meta as default };
