import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Sentence with a trailing citation chip, e.g. "pnpm.io +2". */
let InlineCitationComponent = class InlineCitationComponent {
    text = input.required();
    source = input.required();
    more = input(0);
    url = input('#');
    static propDecorators = {
        text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: true, transform: undefined },] }],
        source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: true, transform: undefined },] }],
        more: [{ type: Input, args: [{ isSignal: true, alias: "more", required: false, transform: undefined },] }],
        url: [{ type: Input, args: [{ isSignal: true, alias: "url", required: false, transform: undefined },] }]
    };
};
InlineCitationComponent = __decorate([
    Component({
        selector: 'app-inline-citation',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'inline-flex flex-wrap items-center gap-1.5 text-sm' },
        template: `
    <span>{{ text() }}</span>
    <a
      class="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-ring/50 rounded-md px-2 py-0.5 text-xs font-medium focus-visible:ring-[3px] focus-visible:outline-none"
      [href]="url()"
      [attr.aria-label]="'Source: ' + source() + (more() ? ' and ' + more() + ' more' : '')"
    >
      {{ source() }}
      @if (more()) {
        +{{ more() }}
      }
    </a>
  `,
    })
], InlineCitationComponent);

const meta = {
  title: 'AI/Inline Citation',
  decorators: [moduleMetadata({
    imports: [InlineCitationComponent]
  })],
  args: {
    text: 'Dr. Anand Kumar sees patients from 9 AM to 1 PM.',
    source: 'jipmer.edu.in',
    more: 2
  },
  render: args => ({
    props: args,
    template: `<app-inline-citation [text]="text" [source]="source" [more]="more" />`
  })
};
const Default = {};
const SingleSource = {
  args: {
    more: 0
  }
};
const __namedExportsOrder = ["Default", "SingleSource"];
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
SingleSource.parameters = {
  ...SingleSource.parameters,
  docs: {
    ...SingleSource.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    more: 0\n  }\n}",
      ...SingleSource.parameters?.docs?.source
    }
  }
};

export { Default, SingleSource, __namedExportsOrder, meta as default };
