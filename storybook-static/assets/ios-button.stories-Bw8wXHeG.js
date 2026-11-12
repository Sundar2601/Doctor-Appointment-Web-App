import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, D as Directive, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const BASE = 'inline-flex items-center justify-center gap-2 font-semibold transition-opacity select-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none active:opacity-60 disabled:pointer-events-none disabled:opacity-40';
const VARIANT = {
    filled: 'bg-primary text-primary-foreground',
    tinted: 'bg-primary/15 text-primary',
    plain: 'text-primary bg-transparent',
};
const SIZE = {
    large: 'h-[50px] min-w-[44px] rounded-[14px] px-6 text-[17px]',
    medium: 'h-[40px] min-w-[44px] rounded-[12px] px-5 text-[15px]',
    small: 'h-8 min-w-[44px] rounded-full px-3.5 text-[15px] font-medium',
};
/** Usage: `<button appIosButton variant="filled" size="large">Continue</button>`. */
let IosButtonDirective = class IosButtonDirective {
    variant = input('filled');
    size = input('large');
    classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${SIZE[this.size()]}`);
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
IosButtonDirective = __decorate([
    Directive({ selector: 'button[appIosButton]', host: { '[class]': 'classes()' } })
], IosButtonDirective);

const meta = {
  title: 'Mobile/iOS/Button',
  decorators: [moduleMetadata({
    imports: [IosButtonDirective]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tinted', 'plain']
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small']
    }
  },
  args: {
    variant: 'filled',
    size: 'large'
  },
  render: args => ({
    props: args,
    template: `<button appIosButton [variant]="variant" [size]="size">Continue</button>`
  })
};
const FilledLarge = {};
const FilledMedium = {
  args: {
    size: 'medium'
  }
};
const FilledSmall = {
  args: {
    size: 'small'
  }
};
const TintedLarge = {
  args: {
    variant: 'tinted'
  }
};
const TintedMedium = {
  args: {
    variant: 'tinted',
    size: 'medium'
  }
};
const TintedSmall = {
  args: {
    variant: 'tinted',
    size: 'small'
  }
};
const PlainLarge = {
  args: {
    variant: 'plain'
  }
};
const PlainMedium = {
  args: {
    variant: 'plain',
    size: 'medium'
  }
};
const PlainSmall = {
  args: {
    variant: 'plain',
    size: 'small'
  }
};
const __namedExportsOrder = ["FilledLarge", "FilledMedium", "FilledSmall", "TintedLarge", "TintedMedium", "TintedSmall", "PlainLarge", "PlainMedium", "PlainSmall"];
FilledLarge.parameters = {
  ...FilledLarge.parameters,
  docs: {
    ...FilledLarge.parameters?.docs,
    source: {
      originalSource: "{}",
      ...FilledLarge.parameters?.docs?.source
    }
  }
};
FilledMedium.parameters = {
  ...FilledMedium.parameters,
  docs: {
    ...FilledMedium.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'medium'\n  }\n}",
      ...FilledMedium.parameters?.docs?.source
    }
  }
};
FilledSmall.parameters = {
  ...FilledSmall.parameters,
  docs: {
    ...FilledSmall.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'small'\n  }\n}",
      ...FilledSmall.parameters?.docs?.source
    }
  }
};
TintedLarge.parameters = {
  ...TintedLarge.parameters,
  docs: {
    ...TintedLarge.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'tinted'\n  }\n}",
      ...TintedLarge.parameters?.docs?.source
    }
  }
};
TintedMedium.parameters = {
  ...TintedMedium.parameters,
  docs: {
    ...TintedMedium.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'tinted',\n    size: 'medium'\n  }\n}",
      ...TintedMedium.parameters?.docs?.source
    }
  }
};
TintedSmall.parameters = {
  ...TintedSmall.parameters,
  docs: {
    ...TintedSmall.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'tinted',\n    size: 'small'\n  }\n}",
      ...TintedSmall.parameters?.docs?.source
    }
  }
};
PlainLarge.parameters = {
  ...PlainLarge.parameters,
  docs: {
    ...PlainLarge.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'plain'\n  }\n}",
      ...PlainLarge.parameters?.docs?.source
    }
  }
};
PlainMedium.parameters = {
  ...PlainMedium.parameters,
  docs: {
    ...PlainMedium.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'plain',\n    size: 'medium'\n  }\n}",
      ...PlainMedium.parameters?.docs?.source
    }
  }
};
PlainSmall.parameters = {
  ...PlainSmall.parameters,
  docs: {
    ...PlainSmall.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'plain',\n    size: 'small'\n  }\n}",
      ...PlainSmall.parameters?.docs?.source
    }
  }
};

export { FilledLarge, FilledMedium, FilledSmall, PlainLarge, PlainMedium, PlainSmall, TintedLarge, TintedMedium, TintedSmall, __namedExportsOrder, meta as default };
