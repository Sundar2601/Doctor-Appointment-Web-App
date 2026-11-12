import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, c as computed, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { E as EmptyStateComponent } from './empty-state.component-BCtJX8P6.js';
import './preload-helper-D5QYaGzd.js';

const DEFAULTS = {
    'first-use': {
        title: 'No projects yet',
        description: 'Projects group your files and teammates. Create your first one to get started.',
        actionLabel: 'Create project',
        icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8'],
    },
    'no-results': {
        title: 'No results',
        description: 'Try a different search or clear your filters.',
        actionLabel: 'Clear filters',
        icon: ['M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16', 'm21 21-4.3-4.3'],
    },
    cleared: {
        title: 'You are all caught up',
        description: 'There is nothing new right now. Check back later.',
        icon: ['M21.801 10A10 10 0 1 1 17 3.335', 'm9 11 3 3L22 4'],
    },
};
/** Figma "Empty" patterns, composed from `app-empty-state`. Usage: `<app-empty-pattern kind="no-results" (action)="clear()" />`. */
let EmptyPatternComponent = class EmptyPatternComponent {
    kind = input('first-use');
    title = input();
    description = input();
    actionLabel = input();
    action = output();
    resolvedTitle = computed(() => this.title() ?? DEFAULTS[this.kind()].title);
    resolvedDescription = computed(() => this.description() ?? DEFAULTS[this.kind()].description);
    resolvedAction = computed(() => this.actionLabel() ?? DEFAULTS[this.kind()].actionLabel);
    iconPaths = computed(() => DEFAULTS[this.kind()].icon);
    static propDecorators = {
        kind: [{ type: Input, args: [{ isSignal: true, alias: "kind", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        actionLabel: [{ type: Input, args: [{ isSignal: true, alias: "actionLabel", required: false, transform: undefined },] }],
        action: [{ type: Output, args: ["action",] }]
    };
};
EmptyPatternComponent = __decorate([
    Component({
        selector: 'app-empty-pattern',
        imports: [EmptyStateComponent, ButtonDirective],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card flex flex-col items-center gap-2 rounded-xl border px-6 py-8' },
        template: `
    <span class="bg-muted text-foreground flex size-14 shrink-0 items-center justify-center rounded-xl" aria-hidden="true">
      <svg
        class="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        @for (d of iconPaths(); track d) {
          <path [attr.d]="d" />
        }
      </svg>
    </span>
    <app-empty-state [title]="resolvedTitle()" [description]="resolvedDescription()" class="!py-2 max-w-xs px-2">
      @if (resolvedAction(); as label) {
        <button appButton class="mt-4" (click)="action.emit()">{{ label }}</button>
      }
    </app-empty-state>
  `,
    })
], EmptyPatternComponent);

const meta = {
  title: 'Patterns/Empty',
  decorators: [moduleMetadata({
    imports: [EmptyPatternComponent]
  })],
  argTypes: {
    kind: {
      control: 'select',
      options: ['first-use', 'no-results', 'cleared']
    }
  },
  args: {
    kind: 'first-use'
  },
  render: args => ({
    props: args,
    template: `<div class="max-w-sm"><app-empty-pattern [kind]="kind" [title]="title" [description]="description" [actionLabel]="actionLabel" /></div>`
  })
};
const NoProjectsYet = {};
const NoResults = {
  args: {
    kind: 'no-results'
  }
};
const AllCaughtUp = {
  args: {
    kind: 'cleared'
  }
};
const __namedExportsOrder = ["NoProjectsYet", "NoResults", "AllCaughtUp"];
NoProjectsYet.parameters = {
  ...NoProjectsYet.parameters,
  docs: {
    ...NoProjectsYet.parameters?.docs,
    source: {
      originalSource: "{}",
      ...NoProjectsYet.parameters?.docs?.source
    }
  }
};
NoResults.parameters = {
  ...NoResults.parameters,
  docs: {
    ...NoResults.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'no-results'\n  }\n}",
      ...NoResults.parameters?.docs?.source
    }
  }
};
AllCaughtUp.parameters = {
  ...AllCaughtUp.parameters,
  docs: {
    ...AllCaughtUp.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'cleared'\n  }\n}",
      ...AllCaughtUp.parameters?.docs?.source
    }
  }
};

export { AllCaughtUp, NoProjectsYet, NoResults, __namedExportsOrder, meta as default };
