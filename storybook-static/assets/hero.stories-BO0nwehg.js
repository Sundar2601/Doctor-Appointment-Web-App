import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Page hero banner (Figma "Hero / *"): brand-tinted card with title, subtitle, optional chip and actions, and an illustration.
 * Usage: `<app-hero title="Doctors" subtitle="..." illustration="/illustrations/hero-doctors.svg"><a heroActions appButton>...</a></app-hero>`.
 */
let HeroComponent = class HeroComponent {
    title = input.required();
    subtitle = input();
    illustration = input();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false, transform: undefined },] }],
        illustration: [{ type: Input, args: [{ isSignal: true, alias: "illustration", required: false, transform: undefined },] }]
    };
};
HeroComponent = __decorate([
    Component({
        selector: 'app-hero',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-primary text-primary-foreground relative block overflow-hidden rounded-xl' },
        template: `
    <div aria-hidden="true" class="bg-brand-500 pointer-events-none absolute -top-44 -left-24 size-[340px] rounded-full"></div>
    <div aria-hidden="true" class="bg-brand-700 pointer-events-none absolute top-16 right-12 size-64 rounded-full"></div>
    <div aria-hidden="true" class="bg-brand-400 pointer-events-none absolute -top-12 right-1/3 size-28 rounded-full"></div>
    <div class="relative flex items-center gap-6 p-8">
      <div class="flex min-w-0 flex-1 flex-col items-start gap-3">
        <ng-content select="[heroChip]" />
        <h1 class="text-3xl leading-9 font-bold">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-sm">{{ subtitle() }}</p>
        }
        <ng-content select="[heroActions]" />
      </div>
      @if (illustration()) {
        <img [src]="illustration()" alt="" class="hidden h-36 w-auto shrink-0 md:block" />
      }
    </div>
  `,
    })
], HeroComponent);

const meta = {
  title: 'Display/Hero',
  parameters: {
    layout: 'padded'
  },
  decorators: [moduleMetadata({
    imports: [HeroComponent, ButtonDirective]
  })],
  args: {
    title: 'Welcome back, Demo',
    subtitle: 'Your appointments across hospitals in Puducherry.',
    illustration: 'illustrations/hero-dashboard.svg'
  },
  render: args => ({
    props: args,
    template: `<app-hero [title]="title" [subtitle]="subtitle" [illustration]="illustration"></app-hero>`
  })
};
const Default = {};
const WithActions = {
  render: args => ({
    props: args,
    template: `
      <app-hero [title]="title" [subtitle]="subtitle" [illustration]="illustration">
        <a heroActions appButton variant="outline" href="#">Book new</a>
      </app-hero>`
  })
};
const WithoutIllustration = {
  args: {
    illustration: ''
  }
};
const __namedExportsOrder = ["Default", "WithActions", "WithoutIllustration"];
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
WithActions.parameters = {
  ...WithActions.parameters,
  docs: {
    ...WithActions.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `\n      <app-hero [title]=\"title\" [subtitle]=\"subtitle\" [illustration]=\"illustration\">\n        <a heroActions appButton variant=\"outline\" href=\"#\">Book new</a>\n      </app-hero>`\n  })\n}",
      ...WithActions.parameters?.docs?.source
    }
  }
};
WithoutIllustration.parameters = {
  ...WithoutIllustration.parameters,
  docs: {
    ...WithoutIllustration.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    illustration: ''\n  }\n}",
      ...WithoutIllustration.parameters?.docs?.source
    }
  }
};

export { Default, WithActions, WithoutIllustration, __namedExportsOrder, meta as default };
