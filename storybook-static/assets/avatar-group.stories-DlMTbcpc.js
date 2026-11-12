import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { A as AvatarComponent } from './avatar.component-ttD-G_1Z.js';
import './preload-helper-D5QYaGzd.js';

/** Overlapping avatars with a "+N" overflow chip. */
let AvatarGroupComponent = class AvatarGroupComponent {
    names = input.required();
    max = input(4);
    size = input('md');
    shown = computed(() => this.names().slice(0, this.max()));
    extra = computed(() => Math.max(0, this.names().length - this.max()));
    static propDecorators = {
        names: [{ type: Input, args: [{ isSignal: true, alias: "names", required: true, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
AvatarGroupComponent = __decorate([
    Component({
        selector: 'app-avatar-group',
        imports: [AvatarComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex items-center -space-x-2', role: 'group' },
        template: `
    @for (n of shown(); track $index) {
      <app-avatar class="ring-background ring-2" [name]="n" [size]="size()" />
    }
    @if (extra() > 0) {
      <span
        class="bg-muted text-muted-foreground ring-background inline-flex size-8 items-center justify-center rounded-full text-xs font-medium ring-2"
        [attr.aria-label]="extra() + ' more'"
        >+{{ extra() }}</span
      >
    }
  `,
    })
], AvatarGroupComponent);

const meta = {
  title: 'Display/Avatar Group',
  decorators: [moduleMetadata({
    imports: [AvatarGroupComponent]
  })],
  argTypes: {
    names: {
      control: 'object'
    },
    max: {
      control: 'number'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    names: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Linus Torvalds', 'Margaret Hamilton', 'Dennis Ritchie'],
    max: 4,
    size: 'md'
  },
  render: args => ({
    props: args,
    template: `<app-avatar-group [names]="names" [max]="max" [size]="size" />`
  })
};
const Default = {};
const NoOverflow = {
  args: {
    names: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing']
  }
};
const Large = {
  args: {
    size: 'lg',
    max: 3
  }
};
const __namedExportsOrder = ["Default", "NoOverflow", "Large"];
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
NoOverflow.parameters = {
  ...NoOverflow.parameters,
  docs: {
    ...NoOverflow.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    names: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing']\n  }\n}",
      ...NoOverflow.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg',\n    max: 3\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};

export { Default, Large, NoOverflow, __namedExportsOrder, meta as default };
