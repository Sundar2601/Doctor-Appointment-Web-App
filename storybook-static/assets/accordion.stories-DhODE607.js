import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Accordion" wrapper. Items sharing the same `group` on `app-accordion-item` open one at a time (native `details[name]`). */
let AccordionComponent = class AccordionComponent {
};
AccordionComponent = __decorate([
    Component({
        selector: 'app-accordion',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex w-full flex-col' },
        template: '<ng-content />',
    })
], AccordionComponent);
/**
 * One accordion row built on native `details`/`summary`.
 * Usage: `<app-accordion><app-accordion-item heading="Is it accessible?" group="faq">Yes.</app-accordion-item></app-accordion>`.
 */
let AccordionItemComponent = class AccordionItemComponent {
    heading = input.required();
    group = input();
    open = model(false);
    onToggle(event) {
        this.open.set(event.target.open);
    }
    static propDecorators = {
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true, transform: undefined },] }],
        group: [{ type: Input, args: [{ isSignal: true, alias: "group", required: false, transform: undefined },] }],
        open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false },] }, { type: Output, args: ["openChange",] }]
    };
};
AccordionItemComponent = __decorate([
    Component({
        selector: 'app-accordion-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block border-b' },
        template: `
    <details class="group" [attr.name]="group()" [open]="open()" (toggle)="onToggle($event)">
      <summary
        class="focus-visible:outline-ring flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
      >
        {{ heading() }}
        <svg
          class="size-4 shrink-0 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div class="pb-4 text-sm"><ng-content /></div>
    </details>
  `,
    })
], AccordionItemComponent);

const meta = {
  title: 'Display/Accordion',
  decorators: [moduleMetadata({
    imports: [AccordionComponent, AccordionItemComponent]
  })],
  argTypes: {
    heading: {
      control: 'text'
    },
    group: {
      control: 'text'
    },
    open: {
      control: 'boolean'
    }
  },
  args: {
    heading: 'Is it accessible?',
    group: 'faq',
    open: false
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-96">
        <app-accordion>
          <app-accordion-item [heading]="heading" [group]="group" [open]="open">Yes. It adheres to the WAI-ARIA design pattern.</app-accordion-item>
          <app-accordion-item heading="Is it styled?" [group]="group">Yes. It comes with default styles that match the other components.</app-accordion-item>
          <app-accordion-item heading="Is it animated?" [group]="group">Yes. The chevron rotates when opened.</app-accordion-item>
        </app-accordion>
      </div>`
  })
};
const Default = {};
const FirstOpen = {
  args: {
    open: true
  }
};
const Independent = {
  args: {
    group: undefined
  }
};
const __namedExportsOrder = ["Default", "FirstOpen", "Independent"];
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
FirstOpen.parameters = {
  ...FirstOpen.parameters,
  docs: {
    ...FirstOpen.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    open: true\n  }\n}",
      ...FirstOpen.parameters?.docs?.source
    }
  }
};
Independent.parameters = {
  ...Independent.parameters,
  docs: {
    ...Independent.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    group: undefined\n  }\n}",
      ...Independent.parameters?.docs?.source
    }
  }
};

export { Default, FirstOpen, Independent, __namedExportsOrder, meta as default };
