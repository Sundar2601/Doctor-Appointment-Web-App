import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { P as ProgressComponent } from './progress.component-RT1kllIp.js';
import './preload-helper-D5QYaGzd.js';

const fmt = (n) => (n >= 1000 ? `${Math.round(n / 1000)}K` : `${n}`);
/** Context-window usage meter. */
let ContextMeterComponent = class ContextMeterComponent {
    used = input.required();
    max = input.required();
    label = input('Context window');
    percent = computed(() => (this.max() ? Math.min(100, Math.round((this.used() / this.max()) * 100)) : 0));
    format = fmt;
    static propDecorators = {
        used: [{ type: Input, args: [{ isSignal: true, alias: "used", required: true, transform: undefined },] }],
        max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: true, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
ContextMeterComponent = __decorate([
    Component({
        selector: 'app-context-meter',
        imports: [ProgressComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4' },
        template: `
    <div class="flex items-center justify-between text-sm">
      <span class="font-medium">{{ label() }}</span>
      <span class="text-muted-foreground">{{ percent() }}%</span>
    </div>
    <app-progress class="mt-2" [value]="percent()" [attr.aria-label]="label() + ' usage'" />
    <p class="text-muted-foreground mt-3 text-xs">{{ format(used()) }} of {{ format(max()) }} tokens used</p>
  `,
    })
], ContextMeterComponent);

const meta = {
  title: 'AI/Context',
  decorators: [moduleMetadata({
    imports: [ContextMeterComponent]
  })],
  args: {
    used: 124000,
    max: 200000,
    label: 'Context window'
  },
  render: args => ({
    props: args,
    template: `<div class="w-80"><app-context-meter [used]="used" [max]="max" [label]="label" /></div>`
  })
};
const Default = {};
const AlmostFull = {
  args: {
    used: 189000
  }
};
const Empty = {
  args: {
    used: 2000
  }
};
const __namedExportsOrder = ["Default", "AlmostFull", "Empty"];
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
AlmostFull.parameters = {
  ...AlmostFull.parameters,
  docs: {
    ...AlmostFull.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    used: 189000\n  }\n}",
      ...AlmostFull.parameters?.docs?.source
    }
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...Empty.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    used: 2000\n  }\n}",
      ...Empty.parameters?.docs?.source
    }
  }
};

export { AlmostFull, Default, Empty, __namedExportsOrder, meta as default };
