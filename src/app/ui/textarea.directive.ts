import { Directive } from '@angular/core'

/** Figma "Textarea". Same look as `appControl` but multi-line and auto-growing (`field-sizing: content`). */
@Directive({
  selector: 'textarea[appTextarea]',
  host: {
    class:
      'border-input bg-background placeholder:text-muted-foreground focus-visible:outline-ring field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive',
  },
})
export class TextareaDirective {}
