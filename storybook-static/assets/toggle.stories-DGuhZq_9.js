import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, D as Directive, m as model, i as input, c as computed, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const BASE = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-accent aria-pressed:text-accent-foreground';
const VARIANT = {
    default: '',
    outline: 'border border-input bg-background shadow-xs focus-visible:border-ring',
};
const SIZE = { sm: 'h-8 min-w-8 px-1.5', md: 'h-9 min-w-9 px-2', lg: 'h-10 min-w-10 px-2.5' };
/** Figma "Toggle" (two-state button). Usage: `<button appToggle [(pressed)]="bold">Bold</button>`. */
let ToggleDirective = class ToggleDirective {
    pressed = model(false);
    variant = input('default');
    size = input('md');
    classes = computed(() => `${BASE} ${VARIANT[this.variant()]} ${SIZE[this.size()]}`);
    static propDecorators = {
        pressed: [{ type: Input, args: [{ isSignal: true, alias: "pressed", required: false },] }, { type: Output, args: ["pressedChange",] }],
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
ToggleDirective = __decorate([
    Directive({
        selector: 'button[appToggle]',
        host: {
            type: 'button',
            '[class]': 'classes()',
            '[attr.aria-pressed]': 'pressed()',
            '(click)': 'pressed.set(!pressed())',
        },
    })
], ToggleDirective);

const meta = {
  title: 'Actions/Toggle',
  decorators: [moduleMetadata({
    imports: [ToggleDirective]
  })],
  argTypes: {
    pressed: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['default', 'outline']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    pressed: false,
    variant: 'default',
    size: 'md',
    disabled: false
  },
  render: args => ({
    props: args,
    template: `<button appToggle [(pressed)]="pressed" [variant]="variant" [size]="size" [disabled]="disabled">Bold</button>`
  })
};
const Default = {};
const Pressed = {
  args: {
    pressed: true
  }
};
const Outline = {
  args: {
    variant: 'outline'
  }
};
const Small = {
  args: {
    size: 'sm'
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Default", "Pressed", "Outline", "Small", "Disabled"];
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
Pressed.parameters = {
  ...Pressed.parameters,
  docs: {
    ...Pressed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    pressed: true\n  }\n}",
      ...Pressed.parameters?.docs?.source
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

export { Default, Disabled, Outline, Pressed, Small, __namedExportsOrder, meta as default };
