import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, r as lucideCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Horizontal step indicator. `current` is the zero-based active step. */
let StepperComponent = class StepperComponent {
    steps = input.required();
    current = input(0);
    static propDecorators = {
        steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: true, transform: undefined },] }],
        current: [{ type: Input, args: [{ isSignal: true, alias: "current", required: false, transform: undefined },] }]
    };
};
StepperComponent = __decorate([
    Component({
        selector: 'app-stepper',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideCheck })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex w-full items-center gap-3' },
        template: `
    @for (s of steps(); track $index; let i = $index; let last = $last) {
      <div class="flex shrink-0 items-center gap-3" [attr.aria-current]="i === current() ? 'step' : null">
        <span
          class="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium"
          [class]="
            i < current()
              ? 'bg-primary text-primary-foreground border border-primary'
              : i === current()
                ? 'bg-background text-primary border-primary border-2'
                : 'border text-muted-foreground'
          "
        >
          @if (i < current()) {
            <ng-icon name="lucideCheck" size="16" />
          } @else {
            {{ i + 1 }}
          }
        </span>
        <span class="flex flex-col whitespace-nowrap" [class.text-muted-foreground]="i > current()">
          <span class="text-sm font-medium" [class.text-foreground]="i <= current()">{{ s.title }}</span>
          @if (s.description) {
            <span class="text-muted-foreground text-xs">{{ s.description }}</span>
          }
        </span>
      </div>
      @if (!last) {
        <div class="h-px min-w-px flex-1" [class]="i < current() ? 'bg-primary' : 'bg-border'"></div>
      }
    }
  `,
    })
], StepperComponent);

const steps = [{
  title: 'Hospital',
  description: 'Choose a hospital'
}, {
  title: 'Doctor',
  description: 'Pick a specialist'
}, {
  title: 'Date & time',
  description: 'Select a slot'
}, {
  title: 'Confirm',
  description: 'Review and book'
}];
const meta = {
  title: 'Navigation/Stepper',
  decorators: [moduleMetadata({
    imports: [StepperComponent]
  })],
  argTypes: {
    current: {
      control: {
        type: 'number',
        min: 0,
        max: 4
      }
    }
  },
  args: {
    steps,
    current: 1
  },
  render: args => ({
    props: args,
    template: `<app-stepper [steps]="steps" [current]="current" />`
  })
};
const Default = {};
const FirstStep = {
  args: {
    current: 0
  }
};
const Completed = {
  args: {
    current: 4
  }
};
const TitlesOnly = {
  args: {
    steps: [{
      title: 'Details'
    }, {
      title: 'Payment'
    }, {
      title: 'Done'
    }],
    current: 1
  }
};
const __namedExportsOrder = ["Default", "FirstStep", "Completed", "TitlesOnly"];
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
FirstStep.parameters = {
  ...FirstStep.parameters,
  docs: {
    ...FirstStep.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    current: 0\n  }\n}",
      ...FirstStep.parameters?.docs?.source
    }
  }
};
Completed.parameters = {
  ...Completed.parameters,
  docs: {
    ...Completed.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    current: 4\n  }\n}",
      ...Completed.parameters?.docs?.source
    }
  }
};
TitlesOnly.parameters = {
  ...TitlesOnly.parameters,
  docs: {
    ...TitlesOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    steps: [{\n      title: 'Details'\n    }, {\n      title: 'Payment'\n    }, {\n      title: 'Done'\n    }],\n    current: 1\n  }\n}",
      ...TitlesOnly.parameters?.docs?.source
    }
  }
};

export { Completed, Default, FirstStep, TitlesOnly, __namedExportsOrder, meta as default };
