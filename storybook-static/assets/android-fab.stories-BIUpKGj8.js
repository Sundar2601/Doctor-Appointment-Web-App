import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, o as output, c as computed, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DvOyu-Mi.js';
import { A as ANDROID_ICONS } from './android-icons-xicRbOlm.js';
import './preload-helper-D5QYaGzd.js';

/** Floating action button: 56dp standard, 40dp small, or extended when a `label` is set. */
let AndroidFabComponent = class AndroidFabComponent {
    icon = input('lucidePlus');
    label = input();
    size = input('standard');
    ariaLabel = input('Add');
    pressed = output();
    classes = computed(() => {
        const base = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center shadow-md';
        if (this.label())
            return `${base} h-14 gap-2 rounded-2xl px-4`;
        return this.size() === 'small' ? `${base} size-10 rounded-xl` : `${base} size-14 rounded-2xl`;
    });
    static propDecorators = {
        icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }],
        pressed: [{ type: Output, args: ["pressed",] }]
    };
};
AndroidFabComponent = __decorate([
    Component({
        selector: 'app-android-fab',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'inline-block' },
        template: `
    <button type="button" [class]="classes()" [attr.aria-label]="label() ? null : ariaLabel()" (click)="pressed.emit()">
      <ng-icon [name]="icon()" [size]="size() === 'small' ? '20' : '24'" />
      @if (label()) {
        <span class="text-sm font-medium">{{ label() }}</span>
      }
    </button>
  `,
    })
], AndroidFabComponent);

const meta = {
  title: 'Mobile/Android/FAB',
  component: AndroidFabComponent,
  decorators: [moduleMetadata({
    imports: [AndroidFabComponent]
  })],
  argTypes: {
    size: {
      control: 'select',
      options: ['standard', 'small']
    }
  },
  args: {
    icon: 'lucidePlus',
    size: 'standard',
    ariaLabel: 'Add'
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-fab [icon]="icon" [label]="label" [size]="size" [ariaLabel]="ariaLabel" /></div>`
  })
};
const Default = {};
const Extended = {
  args: {
    icon: 'lucidePencil',
    label: 'Compose'
  }
};
const Small = {
  args: {
    size: 'small'
  }
};
const __namedExportsOrder = ["Default", "Extended", "Small"];
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
Extended.parameters = {
  ...Extended.parameters,
  docs: {
    ...Extended.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    icon: 'lucidePencil',\n    label: 'Compose'\n  }\n}",
      ...Extended.parameters?.docs?.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'small'\n  }\n}",
      ...Small.parameters?.docs?.source
    }
  }
};

export { Default, Extended, Small, __namedExportsOrder, meta as default };
