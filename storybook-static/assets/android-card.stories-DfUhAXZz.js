import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, c as computed, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

const VARIANTS = {
    filled: 'bg-secondary',
    elevated: 'bg-card shadow-sm',
    outlined: 'bg-card border-border border',
};
/** Material 3 card (12dp radius). Project any content. */
let AndroidCardComponent = class AndroidCardComponent {
    variant = input('filled');
    classes = computed(() => `text-card-foreground block rounded-xl p-4 ${VARIANTS[this.variant()]}`);
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }]
    };
};
AndroidCardComponent = __decorate([
    Component({
        selector: 'app-android-card',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'classes()' },
        template: `<ng-content />`,
    })
], AndroidCardComponent);

const meta = {
  title: 'Mobile/Android/Card',
  component: AndroidCardComponent,
  decorators: [moduleMetadata({
    imports: [AndroidCardComponent]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'elevated', 'outlined']
    }
  },
  args: {
    variant: 'filled'
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-80 p-4">
        <app-android-card [variant]="variant">
          <p class="text-base font-medium">Card title</p>
          <p class="text-muted-foreground mt-2 text-sm">Supporting text that describes the card content.</p>
        </app-android-card>
      </div>`
  })
};
const Filled = {};
const Elevated = {
  args: {
    variant: 'elevated'
  }
};
const Outlined = {
  args: {
    variant: 'outlined'
  }
};
const __namedExportsOrder = ["Filled", "Elevated", "Outlined"];
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

export { Elevated, Filled, Outlined, __namedExportsOrder, meta as default };
