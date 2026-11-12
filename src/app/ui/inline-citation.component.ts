import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Sentence with a trailing citation chip, e.g. "pnpm.io +2". */
@Component({
  selector: 'app-inline-citation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex flex-wrap items-center gap-1.5 text-sm' },
  template: `
    <span>{{ text() }}</span>
    <a
      class="bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-ring/50 rounded-md px-2 py-0.5 text-xs font-medium focus-visible:ring-[3px] focus-visible:outline-none"
      [href]="url()"
      [attr.aria-label]="'Source: ' + source() + (more() ? ' and ' + more() + ' more' : '')"
    >
      {{ source() }}
      @if (more()) {
        +{{ more() }}
      }
    </a>
  `,
})
export class InlineCitationComponent {
  readonly text = input.required<string>()
  readonly source = input.required<string>()
  /** Number of additional sources behind the first one. */
  readonly more = input(0)
  readonly url = input('#')
}
