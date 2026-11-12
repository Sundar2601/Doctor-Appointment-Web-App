import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Actions/Button',
  decorators: [moduleMetadata({
    imports: [ButtonDirective]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon']
    }
  },
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => ({
    props: args,
    template: `<button appButton [variant]="variant" [size]="size">Button</button>`
  })
};
const Primary = {};
const Destructive = {
  args: {
    variant: 'destructive'
  }
};
const Secondary = {
  args: {
    variant: 'secondary'
  }
};
const Outline = {
  args: {
    variant: 'outline'
  }
};
const Ghost = {
  args: {
    variant: 'ghost'
  }
};
const Link = {
  args: {
    variant: 'link'
  }
};
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
const __namedExportsOrder = ["Primary", "Destructive", "Secondary", "Outline", "Ghost", "Link", "Small", "Large"];
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Destructive.parameters = {
  ...Destructive.parameters,
  docs: {
    ...Destructive.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'destructive'\n  }\n}",
      ...Destructive.parameters?.docs?.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...Secondary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'secondary'\n  }\n}",
      ...Secondary.parameters?.docs?.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...Outline.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'outline'\n  }\n}",
      ...Outline.parameters?.docs?.source
    }
  }
};
Ghost.parameters = {
  ...Ghost.parameters,
  docs: {
    ...Ghost.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'ghost'\n  }\n}",
      ...Ghost.parameters?.docs?.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...Link.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'link'\n  }\n}",
      ...Link.parameters?.docs?.source
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

export { Destructive, Ghost, Large, Link, Outline, Primary, Secondary, Small, __namedExportsOrder, meta as default };
