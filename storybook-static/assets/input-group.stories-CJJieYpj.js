import { m as moduleMetadata, e as applicationConfig } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { p as provideIcons, N as NgIcon, g as lucideSearch } from './ng-icons-lucide-DF7QvMAc.js';
import { K as KbdDirective } from './kbd.directive-DPmBR4a8.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Input Group": a bordered row with optional addons around a bare input.
 * Slots: `[prefix]` (text/icon), the `<input>` itself, `[suffix]` (text, `<kbd appKbd>`, button).
 * Usage: `<app-input-group><span prefix>https://</span><input aria-label="URL" /></app-input-group>`.
 */
let InputGroupComponent = class InputGroupComponent {
};
InputGroupComponent = __decorate([
    Component({
        selector: 'app-input-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'border-input bg-background text-muted-foreground flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-[3px] has-[input:focus-visible]:ring-ring/50 has-[input:disabled]:opacity-50 [&_input]:text-foreground [&_input]:placeholder:text-muted-foreground [&_input]:min-w-0 [&_input]:flex-1 [&_input]:bg-transparent [&_input]:outline-none',
        },
        template: `
    <ng-content select="[prefix]" />
    <ng-content />
    <ng-content select="[suffix]" />
  `,
    })
], InputGroupComponent);

const meta = {
  title: 'Forms/Input Group',
  decorators: [moduleMetadata({
    imports: [InputGroupComponent, KbdDirective, NgIcon]
  }), applicationConfig({
    providers: [provideIcons({
      lucideSearch
    })]
  })],
  render: () => ({
    template: `<div class="w-70"><app-input-group><span prefix>https://</span><input aria-label="URL" placeholder="example.com" /></app-input-group></div>`
  })
};
const Prefix = {};
const Suffix = {
  render: () => ({
    template: `<div class="w-70"><app-input-group><input aria-label="Amount" placeholder="0.00" /><span suffix>USD</span></app-input-group></div>`
  })
};
const WithKbd = {
  render: () => ({
    template: `<div class="w-70"><app-input-group><input aria-label="Search" placeholder="Search..." /><kbd suffix appKbd>⌘K</kbd></app-input-group></div>`
  })
};
const Disabled = {
  render: () => ({
    template: `<div class="w-70"><app-input-group><span prefix>https://</span><input aria-label="URL" placeholder="example.com" disabled /></app-input-group></div>`
  })
};
const SearchWithIcon = {
  render: () => ({
    template: `<div class="w-70"><app-input-group><ng-icon prefix name="lucideSearch" class="size-4" /><input aria-label="Search" placeholder="Search..." /><kbd suffix appKbd>⌘K</kbd></app-input-group></div>`
  })
};
const __namedExportsOrder = ["Prefix", "Suffix", "WithKbd", "Disabled", "SearchWithIcon"];
Prefix.parameters = {
  ...Prefix.parameters,
  docs: {
    ...Prefix.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Prefix.parameters?.docs?.source
    }
  }
};
Suffix.parameters = {
  ...Suffix.parameters,
  docs: {
    ...Suffix.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"w-70\"><app-input-group><input aria-label=\"Amount\" placeholder=\"0.00\" /><span suffix>USD</span></app-input-group></div>`\n  })\n}",
      ...Suffix.parameters?.docs?.source
    }
  }
};
WithKbd.parameters = {
  ...WithKbd.parameters,
  docs: {
    ...WithKbd.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"w-70\"><app-input-group><input aria-label=\"Search\" placeholder=\"Search...\" /><kbd suffix appKbd>\u2318K</kbd></app-input-group></div>`\n  })\n}",
      ...WithKbd.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"w-70\"><app-input-group><span prefix>https://</span><input aria-label=\"URL\" placeholder=\"example.com\" disabled /></app-input-group></div>`\n  })\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
SearchWithIcon.parameters = {
  ...SearchWithIcon.parameters,
  docs: {
    ...SearchWithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"w-70\"><app-input-group><ng-icon prefix name=\"lucideSearch\" class=\"size-4\" /><input aria-label=\"Search\" placeholder=\"Search...\" /><kbd suffix appKbd>\u2318K</kbd></app-input-group></div>`\n  })\n}",
      ...SearchWithIcon.parameters?.docs?.source
    }
  }
};

export { Disabled, Prefix, SearchWithIcon, Suffix, WithKbd, __namedExportsOrder, meta as default };
