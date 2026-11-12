import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { m as model, i as input, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Material 3 switch (52x32dp); the thumb grows when on. */
let AndroidSwitchComponent = class AndroidSwitchComponent {
    checked = model(false);
    disabled = input(false);
    ariaLabel = input();
    static propDecorators = {
        checked: [{ type: Input, args: [{ isSignal: true, alias: "checked", required: false },] }, { type: Output, args: ["checkedChange",] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false, transform: undefined },] }]
    };
};
AndroidSwitchComponent = __decorate([
    Component({
        selector: 'app-android-switch',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'inline-block' },
        template: `
    <button
      type="button"
      role="switch"
      class="relative block h-8 w-[52px] rounded-full border transition-colors disabled:opacity-40"
      [class.bg-primary]="checked()"
      [class.border-primary]="checked()"
      [class.bg-secondary]="!checked()"
      [class.border-border]="!checked()"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="ariaLabel()"
      [disabled]="disabled()"
      (click)="checked.set(!checked())"
    >
      <span
        class="absolute top-1/2 -translate-y-1/2 rounded-full transition-all"
        [class.size-6]="checked()"
        [class.left-6]="checked()"
        [class.bg-white]="checked()"
        [class.size-4]="!checked()"
        [class.left-1.5]="!checked()"
        [class.bg-muted-foreground]="!checked()"
      ></span>
    </button>
  `,
    })
], AndroidSwitchComponent);

const meta = {
  title: 'Mobile/Android/Switch',
  component: AndroidSwitchComponent,
  decorators: [moduleMetadata({
    imports: [AndroidSwitchComponent]
  })],
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Notifications'
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-switch [(checked)]="checked" [disabled]="disabled" [ariaLabel]="ariaLabel" /></div>`
  })
};
const Unchecked = {};
const Checked = {
  args: {
    checked: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Unchecked", "Checked", "Disabled"];
Unchecked.parameters = {
  ...Unchecked.parameters,
  docs: {
    ...Unchecked.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Unchecked.parameters?.docs?.source
    }
  }
};
Checked.parameters = {
  ...Checked.parameters,
  docs: {
    ...Checked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    checked: true\n  }\n}",
      ...Checked.parameters?.docs?.source
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

export { Checked, Disabled, Unchecked, __namedExportsOrder, meta as default };
