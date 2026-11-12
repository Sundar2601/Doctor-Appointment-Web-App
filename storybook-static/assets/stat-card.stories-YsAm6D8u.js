import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, G as lucideArrowUp, H as lucideArrowDown } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** KPI tile: label, big value, optional delta. */
let StatCardComponent = class StatCardComponent {
    label = input.required();
    value = input.required();
    delta = input();
    trend = input('up');
    hint = input();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true, transform: undefined },] }],
        delta: [{ type: Input, args: [{ isSignal: true, alias: "delta", required: false, transform: undefined },] }],
        trend: [{ type: Input, args: [{ isSignal: true, alias: "trend", required: false, transform: undefined },] }],
        hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false, transform: undefined },] }]
    };
};
StatCardComponent = __decorate([
    Component({
        selector: 'app-stat-card',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideArrowDown, lucideArrowUp })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground flex flex-col gap-2 rounded-xl border p-5 shadow-sm' },
        template: `
    <div class="flex items-center justify-between gap-2">
      <p class="text-muted-foreground text-sm">{{ label() }}</p>
      @if (delta()) {
        <span class="text-foreground inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium">
          <ng-icon
            [name]="trend() === 'down' ? 'lucideArrowDown' : 'lucideArrowUp'"
            size="12"
            [class]="trend() === 'down' ? 'text-destructive' : 'text-success'"
          />
          {{ delta() }}
        </span>
      }
    </div>
    <p class="text-4xl font-bold">{{ value() }}</p>
    @if (hint()) {
      <p class="text-muted-foreground text-sm">{{ hint() }}</p>
    }
  `,
    })
], StatCardComponent);

const meta = {
  title: 'Display/Stat Card',
  decorators: [moduleMetadata({
    imports: [StatCardComponent]
  })],
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    delta: {
      control: 'text'
    },
    trend: {
      control: 'select',
      options: ['up', 'down']
    },
    hint: {
      control: 'text'
    }
  },
  args: {
    label: 'Total appointments',
    value: 1284,
    delta: '+12.5%',
    trend: 'up',
    hint: 'Compared to last month'
  },
  render: args => ({
    props: args,
    template: `<div class="w-72"><app-stat-card [label]="label" [value]="value" [delta]="delta" [trend]="trend" [hint]="hint" /></div>`
  })
};
const Up = {};
const Down = {
  args: {
    delta: '-4.2%',
    trend: 'down'
  }
};
const Minimal = {
  args: {
    delta: undefined,
    hint: undefined
  }
};
const __namedExportsOrder = ["Up", "Down", "Minimal"];
Up.parameters = {
  ...Up.parameters,
  docs: {
    ...Up.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Up.parameters?.docs?.source
    }
  }
};
Down.parameters = {
  ...Down.parameters,
  docs: {
    ...Down.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    delta: '-4.2%',\n    trend: 'down'\n  }\n}",
      ...Down.parameters?.docs?.source
    }
  }
};
Minimal.parameters = {
  ...Minimal.parameters,
  docs: {
    ...Minimal.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    delta: undefined,\n    hint: undefined\n  }\n}",
      ...Minimal.parameters?.docs?.source
    }
  }
};

export { Down, Minimal, Up, __namedExportsOrder, meta as default };
