import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, K as lucideCircleX, A as lucideCircleCheck } from './ng-icons-lucide-DvOyu-Mi.js';
import { B as BadgeComponent } from './badge.component-CTT-ub4o.js';
import './preload-helper-D5QYaGzd.js';

/** Pass/fail summary of a test run, with a row per test file. */
let TestResultsComponent = class TestResultsComponent {
    title = input('Test run');
    files = input([]);
    passed = computed(() => this.files().reduce((n, f) => n + f.passed, 0));
    failed = computed(() => this.files().reduce((n, f) => n + (f.failed ?? 0), 0));
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        files: [{ type: Input, args: [{ isSignal: true, alias: "files", required: false, transform: undefined },] }]
    };
};
TestResultsComponent = __decorate([
    Component({
        selector: 'app-test-results',
        imports: [NgIcon, BadgeComponent],
        viewProviders: [provideIcons({ lucideCircleCheck, lucideCircleX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': 'title()' },
        template: `
    <div class="flex items-center gap-2">
      <h3 class="text-sm font-semibold">{{ title() }}</h3>
      <app-badge>{{ passed() }} passed</app-badge>
      @if (failed()) {
        <app-badge tone="danger">{{ failed() }} failed</app-badge>
      }
    </div>
    <ul class="mt-4 grid gap-3">
      @for (f of files(); track f.name) {
        <li class="flex items-center gap-2 text-sm" [class.text-text-destructive]="f.failed">
          <span class="inline-flex" [class]="f.failed ? 'text-destructive' : 'text-success'"
            ><ng-icon [name]="f.failed ? 'lucideCircleX' : 'lucideCircleCheck'" size="16" aria-hidden="true"
          /></span>
          {{ f.name }}
          <span class="text-xs" [class.text-muted-foreground]="!f.failed">
            @if (f.passed) {
              {{ f.passed }} passed
            }
            @if (f.failed) {
              {{ f.failed }} failed
            }
          </span>
        </li>
      }
    </ul>
  `,
    })
], TestResultsComponent);

const meta = {
  title: 'AI/Test Results',
  decorators: [moduleMetadata({
    imports: [TestResultsComponent]
  })],
  args: {
    title: 'Test run',
    files: [{
      name: 'auth/redirect.test.ts',
      passed: 12
    }, {
      name: 'app/login/page.test.tsx',
      passed: 0,
      failed: 1
    }, {
      name: 'lib/session.test.ts',
      passed: 30
    }]
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-test-results [title]="title" [files]="files" /></div>`
  })
};
const WithFailure = {};
const AllPassing = {
  args: {
    files: [{
      name: 'auth/redirect.test.ts',
      passed: 12
    }, {
      name: 'lib/session.test.ts',
      passed: 30
    }]
  }
};
const __namedExportsOrder = ["WithFailure", "AllPassing"];
WithFailure.parameters = {
  ...WithFailure.parameters,
  docs: {
    ...WithFailure.parameters?.docs,
    source: {
      originalSource: "{}",
      ...WithFailure.parameters?.docs?.source
    }
  }
};
AllPassing.parameters = {
  ...AllPassing.parameters,
  docs: {
    ...AllPassing.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    files: [{\n      name: 'auth/redirect.test.ts',\n      passed: 12\n    }, {\n      name: 'lib/session.test.ts',\n      passed: 30\n    }]\n  }\n}",
      ...AllPassing.parameters?.docs?.source
    }
  }
};

export { AllPassing, WithFailure, __namedExportsOrder, meta as default };
