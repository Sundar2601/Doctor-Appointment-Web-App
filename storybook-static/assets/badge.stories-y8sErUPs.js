import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as BadgeComponent } from './badge.component-CTT-ub4o.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';

const meta = {
  title: 'Display/Badge',
  decorators: [moduleMetadata({
    imports: [BadgeComponent]
  })],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'primary', 'outline', 'info', 'success', 'warning', 'danger', 'default', 'secondary', 'destructive']
    }
  },
  args: {
    tone: 'neutral'
  },
  render: args => ({
    props: args,
    template: `<app-badge [tone]="tone">Badge</app-badge>`
  })
};
const Neutral = {};
const Primary = {
  args: {
    tone: 'primary'
  }
};
const Outline = {
  args: {
    tone: 'outline'
  }
};
const Info = {
  args: {
    tone: 'info'
  }
};
const Success = {
  args: {
    tone: 'success'
  }
};
const Warning = {
  args: {
    tone: 'warning'
  }
};
const Danger = {
  args: {
    tone: 'danger'
  }
};
const AllTones = {
  render: () => ({
    template: `<div class="flex gap-2">
      <app-badge tone="neutral">Neutral</app-badge><app-badge tone="primary">Primary</app-badge><app-badge tone="outline">Outline</app-badge><app-badge tone="info">Info</app-badge>
      <app-badge tone="success">Success</app-badge><app-badge tone="warning">Warning</app-badge><app-badge tone="danger">Danger</app-badge>
    </div>`
  })
};
const FigmaVariants = {
  render: () => ({
    template: `<div class="flex gap-3">
      <app-badge tone="default">Badge</app-badge><app-badge tone="secondary">Badge</app-badge><app-badge tone="destructive">Badge</app-badge>
      <app-badge tone="outline">Badge</app-badge><app-badge tone="success">Badge</app-badge><app-badge tone="warning">Badge</app-badge>
    </div>`
  })
};
const __namedExportsOrder = ["Neutral", "Primary", "Outline", "Info", "Success", "Warning", "Danger", "AllTones", "FigmaVariants"];
Neutral.parameters = {
  ...Neutral.parameters,
  docs: {
    ...Neutral.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Neutral.parameters?.docs?.source
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'primary'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...Outline.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'outline'\n  }\n}",
      ...Outline.parameters?.docs?.source
    }
  }
};
Info.parameters = {
  ...Info.parameters,
  docs: {
    ...Info.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'info'\n  }\n}",
      ...Info.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'success'\n  }\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...Warning.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'warning'\n  }\n}",
      ...Warning.parameters?.docs?.source
    }
  }
};
Danger.parameters = {
  ...Danger.parameters,
  docs: {
    ...Danger.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tone: 'danger'\n  }\n}",
      ...Danger.parameters?.docs?.source
    }
  }
};
AllTones.parameters = {
  ...AllTones.parameters,
  docs: {
    ...AllTones.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex gap-2\">\n      <app-badge tone=\"neutral\">Neutral</app-badge><app-badge tone=\"primary\">Primary</app-badge><app-badge tone=\"outline\">Outline</app-badge><app-badge tone=\"info\">Info</app-badge>\n      <app-badge tone=\"success\">Success</app-badge><app-badge tone=\"warning\">Warning</app-badge><app-badge tone=\"danger\">Danger</app-badge>\n    </div>`\n  })\n}",
      ...AllTones.parameters?.docs?.source
    }
  }
};
FigmaVariants.parameters = {
  ...FigmaVariants.parameters,
  docs: {
    ...FigmaVariants.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex gap-3\">\n      <app-badge tone=\"default\">Badge</app-badge><app-badge tone=\"secondary\">Badge</app-badge><app-badge tone=\"destructive\">Badge</app-badge>\n      <app-badge tone=\"outline\">Badge</app-badge><app-badge tone=\"success\">Badge</app-badge><app-badge tone=\"warning\">Badge</app-badge>\n    </div>`\n  })\n}",
      ...FigmaVariants.parameters?.docs?.source
    }
  }
};

export { AllTones, Danger, FigmaVariants, Info, Neutral, Outline, Primary, Success, Warning, __namedExportsOrder, meta as default };
