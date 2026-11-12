import { Directive } from '@angular/core'

/** Figma "Label". Usage: `<label appLabel for="x">Name</label>`. */
@Directive({
  selector: 'label[appLabel]',
  host: { class: 'text-foreground flex items-center gap-2 text-sm leading-5 font-medium select-none' },
})
export class LabelDirective {}
