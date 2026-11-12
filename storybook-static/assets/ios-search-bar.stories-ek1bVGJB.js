import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, D as Directive, m as model, i as input, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, K as lucideCircleX, g as lucideSearch } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';

/** iOS rounded filled search field with a clear button. */
let IosSearchBarComponent = class IosSearchBarComponent {
    value = model('');
    placeholder = input('Search');
    static propDecorators = {
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false },] }, { type: Output, args: ["valueChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }]
    };
};
IosSearchBarComponent = __decorate([
    Component({
        selector: 'app-ios-search-bar',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideSearch, lucideCircleX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-muted text-muted-foreground focus-within:ring-ring/50 flex h-9 w-full items-center gap-1.5 rounded-[10px] px-2 focus-within:ring-[3px]',
            role: 'search',
        },
        template: `
    <ng-icon name="lucideSearch" size="16" aria-hidden="true" />
    <input
      type="search"
      class="text-foreground placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-[17px] outline-none [&::-webkit-search-cancel-button]:hidden"
      [placeholder]="placeholder()"
      [value]="value()"
      [attr.aria-label]="placeholder()"
      (input)="value.set($any($event.target).value)"
    />
    @if (value()) {
      <button type="button" aria-label="Clear" class="flex size-5 items-center justify-center" (click)="value.set('')">
        <ng-icon name="lucideCircleX" size="16" />
      </button>
    }
  `,
    })
], IosSearchBarComponent);
/** iOS rounded filled text field: `<input appIosTextField placeholder="Email" />`. */
let IosTextFieldDirective = class IosTextFieldDirective {
};
IosTextFieldDirective = __decorate([
    Directive({
        selector: 'input[appIosTextField]',
        host: {
            class: 'bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/50 h-11 w-full rounded-[10px] px-4 text-[17px] outline-none focus-visible:ring-[3px]',
        },
    })
], IosTextFieldDirective);

const meta = {
  title: 'Mobile/iOS/Search Bar',
  decorators: [moduleMetadata({
    imports: [IosSearchBarComponent, IosTextFieldDirective]
  })],
  args: {
    value: '',
    placeholder: 'Search'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-search-bar [(value)]="value" [placeholder]="placeholder" /></div>`
  })
};
const Default = {};
const WithValue = {
  args: {
    value: 'Dr. Smith'
  }
};
const TextField = {
  render: () => ({
    props: {},
    template: `<div class="w-[343px]"><input appIosTextField placeholder="Email" aria-label="Email" /></div>`
  })
};
const __namedExportsOrder = ["Default", "WithValue", "TextField"];
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
WithValue.parameters = {
  ...WithValue.parameters,
  docs: {
    ...WithValue.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    value: 'Dr. Smith'\n  }\n}",
      ...WithValue.parameters?.docs?.source
    }
  }
};
TextField.parameters = {
  ...TextField.parameters,
  docs: {
    ...TextField.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {},\n    template: `<div class=\"w-[343px]\"><input appIosTextField placeholder=\"Email\" aria-label=\"Email\" /></div>`\n  })\n}",
      ...TextField.parameters?.docs?.source
    }
  }
};

export { Default, TextField, WithValue, __namedExportsOrder, meta as default };
