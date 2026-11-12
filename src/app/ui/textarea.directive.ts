import { Directive } from '@angular/core'

/** Figma "Textarea". Same look as `appControl` but multi-line and auto-growing (`field-sizing: content`). */
@Directive({
  selector: 'textarea[appTextarea]',
  host: {
    class:
      'border-input bg-background placeholder:text-muted-foreground field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 aria-[invalid=true]:focus-visible:ring-destructive/40',
  },
})
export class TextareaDirective {}
