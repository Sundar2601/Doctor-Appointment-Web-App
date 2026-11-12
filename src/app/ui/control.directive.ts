import { Directive } from '@angular/core'

/** Shared look for native `input`, `select` and `textarea` so every form control matches. */
@Directive({
  selector: 'input[appControl], select[appControl], textarea[appControl]',
  host: {
    class:
      'border-input bg-background placeholder:text-muted-foreground focus-visible:outline-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-1 disabled:opacity-50 aria-[invalid=true]:border-destructive',
  },
})
export class ControlDirective {}
