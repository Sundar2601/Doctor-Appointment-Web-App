import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { m as model, i as input, c as computed, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, P as lucideEllipsis, C as lucideChevronRight, D as lucideChevronLeft } from './ng-icons-lucide-DvOyu-Mi.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import './preload-helper-D5QYaGzd.js';

/** Usage: `<app-pagination [pageCount]="12" [(page)]="page" />`. */
let PaginationComponent = class PaginationComponent {
    page = model(1);
    pageCount = input.required();
    siblings = input(1);
    /** Page numbers; `0` marks an ellipsis. */
    pages = computed(() => {
        const total = this.pageCount(), cur = this.page(), s = this.siblings();
        const set = new Set([1, total]);
        for (let i = cur - s; i <= cur + s; i++)
            if (i >= 1 && i <= total)
                set.add(i);
        const sorted = [...set].sort((a, b) => a - b);
        const out = [];
        sorted.forEach((n, i) => {
            const prev = sorted[i - 1];
            if (prev !== undefined && n - prev > 1)
                out.push(n - prev === 2 ? n - 1 : 0);
            out.push(n);
        });
        return out;
    });
    go(p) {
        this.page.set(Math.min(Math.max(1, p), this.pageCount()));
    }
    static propDecorators = {
        page: [{ type: Input, args: [{ isSignal: true, alias: "page", required: false },] }, { type: Output, args: ["pageChange",] }],
        pageCount: [{ type: Input, args: [{ isSignal: true, alias: "pageCount", required: true, transform: undefined },] }],
        siblings: [{ type: Input, args: [{ isSignal: true, alias: "siblings", required: false, transform: undefined },] }]
    };
};
PaginationComponent = __decorate([
    Component({
        selector: 'app-pagination',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [ButtonDirective, NgIcon],
        viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideEllipsis })],
        host: { class: 'block', role: 'navigation', 'aria-label': 'Pagination' },
        template: `
    <ul class="flex items-center justify-center gap-1">
      <li>
        <button type="button" appButton variant="ghost" aria-label="Go to previous page" [disabled]="page() <= 1" (click)="go(page() - 1)">
          <ng-icon name="lucideChevronLeft" size="16" /><span class="hidden sm:inline">Previous</span>
        </button>
      </li>
      @for (p of pages(); track $index) {
        <li>
          @if (p === 0) {
            <span class="flex size-9 items-center justify-center" aria-hidden="true"><ng-icon name="lucideEllipsis" size="16" /></span>
          } @else {
            <button
              type="button"
              appButton
              size="icon"
              [variant]="p === page() ? 'outline' : 'ghost'"
              [attr.aria-current]="p === page() ? 'page' : null"
              [attr.aria-label]="'Page ' + p"
              (click)="go(p)"
            >
              {{ p }}
            </button>
          }
        </li>
      }
      <li>
        <button
          type="button"
          appButton
          variant="ghost"
          aria-label="Go to next page"
          [disabled]="page() >= pageCount()"
          (click)="go(page() + 1)"
        >
          <span class="hidden sm:inline">Next</span><ng-icon name="lucideChevronRight" size="16" />
        </button>
      </li>
    </ul>
  `,
    })
], PaginationComponent);

const meta = {
  title: 'Navigation/Pagination',
  component: PaginationComponent,
  decorators: [moduleMetadata({
    imports: [PaginationComponent]
  })],
  argTypes: {
    page: {
      control: {
        type: 'number',
        min: 1
      }
    },
    pageCount: {
      control: {
        type: 'number',
        min: 1
      }
    },
    siblings: {
      control: {
        type: 'number',
        min: 0,
        max: 3
      }
    }
  },
  args: {
    page: 1,
    pageCount: 12,
    siblings: 1
  },
  render: args => ({
    props: args,
    template: `<app-pagination [pageCount]="pageCount" [siblings]="siblings" [(page)]="page" />`
  })
};
const Default = {};
const MiddlePage = {
  args: {
    page: 6
  }
};
const FewPages = {
  args: {
    pageCount: 4
  }
};
const WideSiblings = {
  args: {
    page: 10,
    pageCount: 20,
    siblings: 2
  }
};
const __namedExportsOrder = ["Default", "MiddlePage", "FewPages", "WideSiblings"];
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
MiddlePage.parameters = {
  ...MiddlePage.parameters,
  docs: {
    ...MiddlePage.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    page: 6\n  }\n}",
      ...MiddlePage.parameters?.docs?.source
    }
  }
};
FewPages.parameters = {
  ...FewPages.parameters,
  docs: {
    ...FewPages.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    pageCount: 4\n  }\n}",
      ...FewPages.parameters?.docs?.source
    }
  }
};
WideSiblings.parameters = {
  ...WideSiblings.parameters,
  docs: {
    ...WideSiblings.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    page: 10,\n    pageCount: 20,\n    siblings: 2\n  }\n}",
      ...WideSiblings.parameters?.docs?.source
    }
  }
};

export { Default, FewPages, MiddlePage, WideSiblings, __namedExportsOrder, meta as default };
