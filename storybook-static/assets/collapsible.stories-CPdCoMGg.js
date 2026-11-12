import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Collapsible": a header row with a toggle button and a panel (native `details`).
 * Usage: `<app-collapsible heading="@peduarte starred 3 repositories"><div class="rounded-md border px-4 py-2 text-sm">...</div></app-collapsible>`.
 * Content is hidden until opened.
 */
let CollapsibleComponent = class CollapsibleComponent {
    heading = input.required();
    open = model(false);
    onToggle(event) {
        this.open.set(event.target.open);
    }
    static propDecorators = {
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true, transform: undefined },] }],
        open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false },] }, { type: Output, args: ["openChange",] }]
    };
};
CollapsibleComponent = __decorate([
    Component({
        selector: 'app-collapsible',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block w-full' },
        template: `
    <details class="group" [open]="open()" (toggle)="onToggle($event)">
      <summary class="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
        <span class="text-sm font-semibold">{{ heading() }}</span>
        <span class="group-hover:bg-accent group-hover:text-accent-foreground inline-flex size-9 items-center justify-center rounded-md">
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </summary>
      <div class="mt-2 flex flex-col gap-2"><ng-content /></div>
    </details>
  `,
    })
], CollapsibleComponent);

const meta = {
  title: 'Display/Collapsible',
  decorators: [moduleMetadata({
    imports: [CollapsibleComponent]
  })],
  argTypes: {
    heading: {
      control: 'text'
    },
    open: {
      control: 'boolean'
    }
  },
  args: {
    heading: '@peduarte starred 3 repositories',
    open: false
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-96">
        <app-collapsible [heading]="heading" [open]="open">
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
        </app-collapsible>
      </div>`
  })
};
const Closed = {};
const Open = {
  args: {
    open: true
  }
};
const __namedExportsOrder = ["Closed", "Open"];
Closed.parameters = {
  ...Closed.parameters,
  docs: {
    ...Closed.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Closed.parameters?.docs?.source
    }
  }
};
Open.parameters = {
  ...Open.parameters,
  docs: {
    ...Open.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    open: true\n  }\n}",
      ...Open.parameters?.docs?.source
    }
  }
};

export { Closed, Open, __namedExportsOrder, meta as default };
