import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Suggestions": row of pill buttons. Emits `picked` with the chosen text. */
let SuggestionsComponent = class SuggestionsComponent {
    items = input.required();
    picked = output();
    static propDecorators = {
        items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true, transform: undefined },] }],
        picked: [{ type: Output, args: ["picked",] }]
    };
};
SuggestionsComponent = __decorate([
    Component({
        selector: 'app-suggestions',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-wrap gap-2', role: 'group', 'aria-label': 'Suggestions' },
        template: `
    @for (item of items(); track item) {
      <button
        type="button"
        class="bg-background hover:bg-accent focus-visible:ring-ring/50 rounded-full border px-4 py-1.5 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:outline-none"
        (click)="picked.emit(item)"
      >
        {{ item }}
      </button>
    }
  `,
    })
], SuggestionsComponent);

const items = ['Book a cardiologist', 'Reschedule my visit', 'Explain my ECG report'];
const meta = {
  title: 'AI/Suggestions',
  decorators: [moduleMetadata({
    imports: [SuggestionsComponent]
  })],
  render: () => ({
    props: {
      items
    },
    template: `<app-suggestions [items]="items" />`
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
