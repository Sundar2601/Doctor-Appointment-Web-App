import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, C as lucideChevronRight } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Page title block. Optional `breadcrumbs` above the title and projected `[pageHeaderActions]` on the right. */
let PageHeaderComponent = class PageHeaderComponent {
    title = input.required();
    subtitle = input();
    breadcrumbs = input([]);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false, transform: undefined },] }],
        breadcrumbs: [{ type: Input, args: [{ isSignal: true, alias: "breadcrumbs", required: false, transform: undefined },] }]
    };
};
PageHeaderComponent = __decorate([
    Component({
        selector: 'app-page-header',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideChevronRight })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'mb-6 flex flex-col gap-2' },
        template: `
    @if (breadcrumbs().length) {
      <nav aria-label="Breadcrumb">
        <ol class="text-muted-foreground flex items-center gap-1.5 text-sm">
          @for (b of breadcrumbs(); track $index; let last = $last) {
            <li class="flex items-center gap-1.5" [class.text-foreground]="last" [attr.aria-current]="last ? 'page' : null">
              {{ b }}
              @if (!last) {
                <ng-icon name="lucideChevronRight" size="14" aria-hidden="true" />
              }
            </li>
          }
        </ol>
      </nav>
    }
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-muted-foreground text-sm">{{ subtitle() }}</p>
        }
      </div>
      <div class="flex shrink-0 items-center gap-2 empty:hidden"><ng-content select="[pageHeaderActions]" /></div>
    </div>
  `,
    })
], PageHeaderComponent);

const meta = {
  title: 'Display/Page Header',
  decorators: [moduleMetadata({
    imports: [PageHeaderComponent]
  })],
  argTypes: {
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    }
  },
  args: {
    title: 'Appointments',
    subtitle: 'Manage your upcoming and past visits.',
    breadcrumbs: []
  },
  render: args => ({
    props: args,
    template: `<app-page-header [title]="title" [subtitle]="subtitle" [breadcrumbs]="breadcrumbs" />`
  })
};
const Default = {};
const WithBreadcrumbs = {
  args: {
    breadcrumbs: ['Settings', 'Team']
  }
};
const WithActions = {
  args: {
    breadcrumbs: ['Settings', 'Team']
  },
  render: args => ({
    props: args,
    template: `<app-page-header class="w-[640px]" [title]="title" [subtitle]="subtitle" [breadcrumbs]="breadcrumbs">
      <button pageHeaderActions type="button" class="bg-primary text-primary-foreground h-9 rounded-md px-4 text-sm font-medium">Invite member</button>
    </app-page-header>`
  })
};
const TitleOnly = {
  args: {
    subtitle: undefined
  }
};
const __namedExportsOrder = ["Default", "WithBreadcrumbs", "WithActions", "TitleOnly"];
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
WithBreadcrumbs.parameters = {
  ...WithBreadcrumbs.parameters,
  docs: {
    ...WithBreadcrumbs.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    breadcrumbs: ['Settings', 'Team']\n  }\n}",
      ...WithBreadcrumbs.parameters?.docs?.source
    }
  }
};
WithActions.parameters = {
  ...WithActions.parameters,
  docs: {
    ...WithActions.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    breadcrumbs: ['Settings', 'Team']\n  },\n  render: args => ({\n    props: args,\n    template: `<app-page-header class=\"w-[640px]\" [title]=\"title\" [subtitle]=\"subtitle\" [breadcrumbs]=\"breadcrumbs\">\n      <button pageHeaderActions type=\"button\" class=\"bg-primary text-primary-foreground h-9 rounded-md px-4 text-sm font-medium\">Invite member</button>\n    </app-page-header>`\n  })\n}",
      ...WithActions.parameters?.docs?.source
    }
  }
};
TitleOnly.parameters = {
  ...TitleOnly.parameters,
  docs: {
    ...TitleOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    subtitle: undefined\n  }\n}",
      ...TitleOnly.parameters?.docs?.source
    }
  }
};

export { Default, TitleOnly, WithActions, WithBreadcrumbs, __namedExportsOrder, meta as default };
