import { Directive } from '@angular/core'

/** Figma "Table". Usage: `<table appTable><thead><tr><th>..</th></tr></thead><tbody>...</tbody></table>`. Style `th`/`td` come from the host. */
@Directive({
  selector: 'table[appTable]',
  host: {
    class:
      'w-full caption-bottom border-collapse text-sm [&_th]:h-10 [&_th]:px-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-muted-foreground [&_td]:h-12 [&_td]:px-2 [&_tbody_tr]:border-t [&_thead_tr]:border-b [&_tbody_tr:hover]:bg-muted/50 [&_tr[aria-selected=true]]:bg-muted [&_.num]:text-right',
  },
})
export class TableDirective {}
