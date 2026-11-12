import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

/** Figma "Suggestions": row of pill buttons. Emits `picked` with the chosen text. */
@Component({
  selector: 'app-suggestions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap gap-2', role: 'group', 'aria-label': 'Suggestions' },
  template: `
    @for (item of items(); track item) {
      <button
        type="button"
        class="bg-background hover:bg-accent focus-visible:ring-ring/50 rounded-full border px-4 py-1.5 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:outline-none"
        (click)="picked.emit(item)"
      >
        {{ item }}
      </button>
    }
  `,
})
export class SuggestionsComponent {
  readonly items = input.required<string[]>()
  readonly picked = output<string>()
}
