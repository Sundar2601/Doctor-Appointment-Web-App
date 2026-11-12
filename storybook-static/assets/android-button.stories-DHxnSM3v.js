import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, D as Directive, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const VARIANTS = {
    filled: 'bg-primary text-primary-foreground hover:bg-primary/90 px-6',
    tonal: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6',
    outlined: 'border-border text-primary hover:bg-accent border px-6',
    text: 'text-primary hover:bg-accent px-3',
    elevated: 'bg-card text-primary hover:bg-accent px-6 shadow-md',
};
/** Material 3 button (40dp, fully rounded). Use on a native `<button>`. */
let AndroidButtonDirective = class AndroidButtonDirective {
    variant = input('filled');
    type = 'button';
    classes = computed(() => `inline-flex h-10 items-center justify-center gap-2 rounded-full text-sm font-medium disabled:pointer-events-none disabled:opacity-40 ${VARIANTS[this.variant()]}`);
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }]
    };
};
AndroidButtonDirective = __decorate([
    Directive({
        selector: 'button[appAndroidButton]',
        host: {
            '[class]': 'classes()',
            '[attr.type]': 'type',
        },
    })
], AndroidButtonDirective);

const meta = {
  title: 'Mobile/Android/Button',
  decorators: [moduleMetadata({
    imports: [AndroidButtonDirective]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'text', 'elevated']
    }
  },
  args: {
    variant: 'filled'
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><button appAndroidButton [variant]="variant">Label</button></div>`
  })
};
const Filled = {};
const Tonal = {
  args: {
    variant: 'tonal'
  }
};
const Outlined = {
  args: {
    variant: 'outlined'
  }
};
const Text = {
  args: {
    variant: 'text'
  }
};
const Elevated = {
  args: {
    variant: 'elevated'
  }
};
const __namedExportsOrder = ["Filled", "Tonal", "Outlined", "Text", "Elevated"];
Filled.parameters = {
  ...Filled.parameters,
  docs: {
    ...Filled.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Tonal.parameters = {
  ...Tonal.parameters,
  docs: {
    ...Tonal.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'tonal'\n  }\n}",
      ...Tonal.parameters?.docs?.source
    }
  }
};
Outlined.parameters = {
  ...Outlined.parameters,
  docs: {
    ...Outlined.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'outlined'\n  }\n}",
      ...Outlined.parameters?.docs?.source
    }
  }
};
Text.parameters = {
  ...Text.parameters,
  docs: {
    ...Text.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'text'\n  }\n}",
      ...Text.parameters?.docs?.source
    }
  }
};
Elevated.parameters = {
  ...Elevated.parameters,
  docs: {
    ...Elevated.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'elevated'\n  }\n}",
      ...Elevated.parameters?.docs?.source
    }
  }
};

export { Elevated, Filled, Outlined, Text, Tonal, __namedExportsOrder, meta as default };
