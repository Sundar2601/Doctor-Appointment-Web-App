import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, a0 as lucideExternalLink } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** "Used n sources" list of cited links. */
let SourcesComponent = class SourcesComponent {
    sources = input([]);
    static propDecorators = {
        sources: [{ type: Input, args: [{ isSignal: true, alias: "sources", required: false, transform: undefined },] }]
    };
};
SourcesComponent = __decorate([
    Component({
        selector: 'app-sources',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideExternalLink })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <p class="text-muted-foreground mb-1 text-xs">Used {{ sources().length }} {{ sources().length === 1 ? 'source' : 'sources' }}</p>
    <ul class="flex flex-col items-start gap-2">
      @for (s of sources(); track s.title) {
        <li>
          <a
            class="bg-card hover:bg-accent focus-visible:ring-ring/50 flex items-center gap-3 rounded-lg border px-3 py-2 focus-visible:ring-[3px] focus-visible:outline-none"
            [href]="s.url ?? '#'"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ng-icon name="lucideExternalLink" size="16" aria-hidden="true" />
            <span class="grid text-sm leading-tight">
              <span class="font-medium">{{ s.title }}</span>
              <span class="text-muted-foreground text-xs">{{ s.host }}</span>
            </span>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      }
    </ul>
  `,
    })
], SourcesComponent);

const meta = {
  title: 'AI/Sources',
  decorators: [moduleMetadata({
    imports: [SourcesComponent]
  })],
  args: {
    sources: [{
      title: 'JIPMER OPD timings',
      host: 'jipmer.edu.in',
      url: 'https://jipmer.edu.in'
    }, {
      title: 'Cardiology department',
      host: 'jipmer.edu.in',
      url: 'https://jipmer.edu.in'
    }, {
      title: 'Visiting hours policy',
      host: 'health.gov.in',
      url: 'https://health.gov.in'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-sources [sources]="sources" />`
  })
};
const Default = {};
const Single = {
  args: {
    sources: [{
      title: 'JIPMER OPD timings',
      host: 'jipmer.edu.in'
    }]
  }
};
const __namedExportsOrder = ["Default", "Single"];
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
Single.parameters = {
  ...Single.parameters,
  docs: {
    ...Single.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    sources: [{\n      title: 'JIPMER OPD timings',\n      host: 'jipmer.edu.in'\n    }]\n  }\n}",
      ...Single.parameters?.docs?.source
    }
  }
};

export { Default, Single, __namedExportsOrder, meta as default };
