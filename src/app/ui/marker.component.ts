import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Figma "Marker": inline status / separator with a centred label, e.g. `<app-marker label="Today" />`. */
@Component({
  selector: 'app-marker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'text-muted-foreground flex items-center gap-4 text-sm', role: 'separator', '[attr.aria-label]': 'label()' },
  template: `
    <span class="bg-border h-px flex-1"></span>
    <span>{{ label() }}</span>
    <span class="bg-border h-px flex-1"></span>
  `,
})
export class MarkerComponent {
  readonly label = input.required<string>()
}
