import { Directive } from '@angular/core'

/** Figma "Kbd". Usage: `<kbd appKbd>Ctrl</kbd>`. Wrap several in a `flex gap-1` element for a Kbd Group. */
@Directive({
  selector: 'kbd[appKbd]',
  host: {
    class:
      'bg-muted text-muted-foreground inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 font-sans text-xs leading-4 font-medium whitespace-nowrap select-none',
  },
})
export class KbdDirective {}
