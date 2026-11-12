import { ChangeDetectionStrategy, Component } from '@angular/core'

/**
 * Figma "Input Group": a bordered row with optional addons around a bare input.
 * Slots: `[prefix]` (text/icon), the `<input>` itself, `[suffix]` (text, `<kbd appKbd>`, button).
 * Usage: `<app-input-group><span prefix>https://</span><input aria-label="URL" /></app-input-group>`.
 */
@Component({
  selector: 'app-input-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-input bg-background text-muted-foreground flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-[3px] has-[input:focus-visible]:ring-ring/50 has-[input:disabled]:opacity-50 [&_input]:text-foreground [&_input]:placeholder:text-muted-foreground [&_input]:min-w-0 [&_input]:flex-1 [&_input]:bg-transparent [&_input]:outline-none',
  },
  template: `
    <ng-content select="[prefix]" />
    <ng-content />
    <ng-content select="[suffix]" />
  `,
})
export class InputGroupComponent {}
