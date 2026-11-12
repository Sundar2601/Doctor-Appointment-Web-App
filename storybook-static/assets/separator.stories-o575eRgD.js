import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, D as Directive, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Separator". Usage: `<div appSeparator></div>` or `<div appSeparator orientation="vertical" class="h-12"></div>`. */
let SeparatorDirective = class SeparatorDirective {
    orientation = input('horizontal');
    classes = computed(() => `bg-border block shrink-0 ${this.orientation() === 'vertical' ? 'h-full w-px' : 'h-px w-full'}`);
    static propDecorators = {
        orientation: [{ type: Input, args: [{ isSignal: true, alias: "orientation", required: false, transform: undefined },] }]
    };
};
SeparatorDirective = __decorate([
    Directive({
        selector: '[appSeparator]',
        host: {
            '[class]': 'classes()',
            role: 'separator',
            '[attr.aria-orientation]': 'orientation()',
        },
    })
], SeparatorDirective);

const meta = {
  title: 'Display/Separator',
  decorators: [moduleMetadata({
    imports: [SeparatorDirective]
  })],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  },
  args: {
    orientation: 'horizontal'
  },
  render: args => ({
    props: args,
    template: `<div class="w-80"><div appSeparator [orientation]="orientation"></div></div>`
  })
};
const Horizontal = {};
const Vertical = {
  args: {
    orientation: 'vertical'
  },
  render: args => ({
    props: args,
    template: `<div class="flex h-6 items-center gap-4 text-sm"><span>Blog</span><div appSeparator [orientation]="orientation"></div><span>Docs</span><div appSeparator [orientation]="orientation"></div><span>Source</span></div>`
  })
};
const __namedExportsOrder = ["Horizontal", "Vertical"];
Horizontal.parameters = {
  ...Horizontal.parameters,
  docs: {
    ...Horizontal.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Horizontal.parameters?.docs?.source
    }
  }
};
Vertical.parameters = {
  ...Vertical.parameters,
  docs: {
    ...Vertical.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    orientation: 'vertical'\n  },\n  render: args => ({\n    props: args,\n    template: `<div class=\"flex h-6 items-center gap-4 text-sm\"><span>Blog</span><div appSeparator [orientation]=\"orientation\"></div><span>Docs</span><div appSeparator [orientation]=\"orientation\"></div><span>Source</span></div>`\n  })\n}",
      ...Vertical.parameters?.docs?.source
    }
  }
};

export { Horizontal, Vertical, __namedExportsOrder, meta as default };
