import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, y as lucideChevronLeft } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** iOS navigation bar. Project a text action into `[slot=trailing]`; `large` shows the title below the bar. */
let IosNavBarComponent = class IosNavBarComponent {
    title = input.required();
    variant = input('inline');
    backLabel = input('Back');
    back = output();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        backLabel: [{ type: Input, args: [{ isSignal: true, alias: "backLabel", required: false, transform: undefined },] }],
        back: [{ type: Output, args: ["back",] }]
    };
};
IosNavBarComponent = __decorate([
    Component({
        selector: 'app-ios-nav-bar',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideChevronLeft })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background text-foreground block w-full' },
        template: `
    <div class="relative flex h-11 items-center justify-between px-2 text-[17px]">
      @if (backLabel()) {
        <button type="button" class="text-primary flex h-11 items-center gap-0.5 px-1" (click)="back.emit()">
          <ng-icon name="lucideChevronLeft" size="22" strokeWidth="2.5" />{{ backLabel() }}
        </button>
      } @else {
        <span></span>
      }
      @if (variant() === 'inline') {
        <h1 class="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold">{{ title() }}</h1>
      }
      <span class="text-primary flex items-center px-2"><ng-content select="[slot=trailing]" /></span>
    </div>
    @if (variant() === 'large') {
      <h1 class="px-4 pt-1 pb-2 text-[34px] leading-[41px] font-bold tracking-tight">{{ title() }}</h1>
    }
  `,
    })
], IosNavBarComponent);

const meta = {
  title: 'Mobile/iOS/Nav Bar',
  decorators: [moduleMetadata({
    imports: [IosNavBarComponent]
  })],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['inline', 'large']
    }
  },
  args: {
    title: 'Title',
    variant: 'inline',
    backLabel: 'Back'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[393px]">
      <app-ios-nav-bar [title]="title" [variant]="variant" [backLabel]="backLabel"><span slot="trailing">Edit</span></app-ios-nav-bar></div>`
  })
};
const Inline = {};
const Large = {
  args: {
    variant: 'large'
  }
};
const NoBackButton = {
  args: {
    backLabel: ''
  }
};
const __namedExportsOrder = ["Inline", "Large", "NoBackButton"];
Inline.parameters = {
  ...Inline.parameters,
  docs: {
    ...Inline.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Inline.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'large'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};
NoBackButton.parameters = {
  ...NoBackButton.parameters,
  docs: {
    ...NoBackButton.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    backLabel: ''\n  }\n}",
      ...NoBackButton.parameters?.docs?.source
    }
  }
};

export { Inline, Large, NoBackButton, __namedExportsOrder, meta as default };
