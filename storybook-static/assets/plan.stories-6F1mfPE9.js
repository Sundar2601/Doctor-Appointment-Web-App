import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, C as lucideCircleCheck, Q as lucideCircle } from './ng-icons-lucide-DF7QvMAc.js';
import { B as BadgeComponent } from './badge.component-Bch4iGLZ.js';
import { P as ProgressComponent } from './progress.component-BG6Gy5IP.js';
import './preload-helper-D5QYaGzd.js';

/** Agent plan: title, "n of m" badge, progress bar and a checklist of steps. */
let PlanComponent = class PlanComponent {
    title = input.required();
    steps = input([]);
    doneCount = computed(() => this.steps().filter((s) => s.done).length);
    percent = computed(() => (this.steps().length ? (this.doneCount() / this.steps().length) * 100 : 0));
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false, transform: undefined },] }]
    };
};
PlanComponent = __decorate([
    Component({
        selector: 'app-plan',
        imports: [NgIcon, BadgeComponent, ProgressComponent],
        viewProviders: [provideIcons({ lucideCircle, lucideCircleCheck })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Plan: " + title()' },
        template: `
    <div class="flex items-center justify-between gap-3">
      <h3 class="text-sm font-semibold">{{ title() }}</h3>
      <app-badge tone="outline">{{ doneCount() }} of {{ steps().length }}</app-badge>
    </div>
    <app-progress class="mt-3 h-1.5" [value]="percent()" [attr.aria-label]="'Plan progress'" />
    <ul class="mt-4 grid gap-3">
      @for (s of steps(); track s.label) {
        <li class="flex items-center gap-2 text-sm" [class.text-muted-foreground]="s.done">
          <span class="inline-flex" [class]="s.done ? 'text-success' : 'text-muted-foreground'"
            ><ng-icon [name]="s.done ? 'lucideCircleCheck' : 'lucideCircle'" size="16" aria-hidden="true"
          /></span>
          {{ s.label }}
          <span class="sr-only">{{ s.done ? '(done)' : '(to do)' }}</span>
        </li>
      }
    </ul>
  `,
    })
], PlanComponent);

const meta = {
  title: 'AI/Plan',
  decorators: [moduleMetadata({
    imports: [PlanComponent]
  })],
  args: {
    title: 'Book a follow-up appointment',
    steps: [{
      label: 'Look up the patient record',
      done: true
    }, {
      label: 'Find open slots for Dr. Anand Kumar',
      done: true
    }, {
      label: 'Reserve the chosen slot'
    }, {
      label: 'Send the confirmation SMS'
    }]
  },
  render: args => ({
    props: args,
    template: `<div class="w-[420px]"><app-plan [title]="title" [steps]="steps" /></div>`
  })
};
const Default = {};
const Complete = {
  args: {
    steps: [{
      label: 'Find open slots',
      done: true
    }, {
      label: 'Reserve the slot',
      done: true
    }]
  }
};
const __namedExportsOrder = ["Default", "Complete"];
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
Complete.parameters = {
  ...Complete.parameters,
  docs: {
    ...Complete.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    steps: [{\n      label: 'Find open slots',\n      done: true\n    }, {\n      label: 'Reserve the slot',\n      done: true\n    }]\n  }\n}",
      ...Complete.parameters?.docs?.source
    }
  }
};

export { Complete, Default, __namedExportsOrder, meta as default };
