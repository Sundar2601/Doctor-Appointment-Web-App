import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-DKqHXYyu.js';
import { C as CARD_CLASS, c as sankeyLayout } from './chart-extended-utils-r8CN4YS6.js';
import './preload-helper-D5QYaGzd.js';

/** Flow of quantity between stages. Nodes are derived from the links in order of first appearance. */
let SankeyChartComponent = class SankeyChartComponent {
    cardClass = CARD_CLASS;
    title = input();
    description = input();
    links = input.required();
    layout = computed(() => {
        const ids = [];
        for (const l of this.links())
            for (const id of [l.source, l.target])
                if (!ids.includes(id))
                    ids.push(id);
        return sankeyLayout(ids, this.links(), 300, 130, 8, 4);
    });
    ariaLabel = computed(() => `${this.title() ?? 'Sankey'}: ${this.links()
        .map((l) => `${l.source} to ${l.target} ${l.value}`)
        .join(', ')}`);
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        links: [{ type: Input, args: [{ isSignal: true, alias: "links", required: true, transform: undefined },] }]
    };
};
SankeyChartComponent = __decorate([
    Component({
        selector: 'app-sankey-chart',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'cardClass' },
        template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5">
        @if (title()) {
          <h3 class="text-sm font-semibold">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-xs">{{ description() }}</p>
        }
      </div>
    }
    <svg viewBox="0 0 300 130" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (l of layout().links; track $index) {
        <path [attr.d]="l.path" [attr.fill]="l.color" fill-opacity="0.35" />
      }
      @for (n of layout().nodes; track n.id) {
        <rect [attr.x]="n.x" [attr.y]="n.y" width="8" [attr.height]="n.h" [attr.fill]="n.color">
          <title>{{ n.id }}</title>
        </rect>
      }
    </svg>
  `,
    })
], SankeyChartComponent);

const meta = {
  title: 'Charts/Sankey',
  decorators: [moduleMetadata({
    imports: [SankeyChartComponent]
  })],
  parameters: {
    layout: 'centered'
  },
  args: {
    title: 'Sankey',
    description: 'Flow of patients between stages.',
    links: [{
      source: 'Enquiries',
      target: 'Booked',
      value: 60
    }, {
      source: 'Enquiries',
      target: 'Dropped',
      value: 25
    }, {
      source: 'Booked',
      target: 'Attended',
      value: 48
    }, {
      source: 'Booked',
      target: 'No-show',
      value: 12
    }]
  },
  render: args => ({
    props: args,
    template: `<div style="width: 320px"><app-sankey-chart [title]="title" [description]="description" [links]="links" /></div>`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
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

export { Default, __namedExportsOrder, meta as default };
