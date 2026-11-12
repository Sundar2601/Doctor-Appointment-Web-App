import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, sankeyLayout } from './chart-extended-utils'
import type { SankeyLinkInput } from './chart-extended-utils'

export type SankeyLink = SankeyLinkInput

/** Flow of quantity between stages. Nodes are derived from the links in order of first appearance. */
@Component({
  selector: 'app-sankey-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'cardClass' },
  template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5">
        @if (title()) {
          <h3 class="text-sm font-semibold">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-xs">{{ description() }}</p>
        }
      </div>
    }
    <svg viewBox="0 0 300 130" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (l of layout().links; track $index) {
        <path [attr.d]="l.path" [attr.fill]="l.color" fill-opacity="0.35" />
      }
      @for (n of layout().nodes; track n.id) {
        <rect [attr.x]="n.x" [attr.y]="n.y" width="8" [attr.height]="n.h" [attr.fill]="n.color">
          <title>{{ n.id }}</title>
        </rect>
      }
    </svg>
  `,
})
export class SankeyChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly links = input.required<readonly SankeyLink[]>()

  protected readonly layout = computed(() => {
    const ids: string[] = []
    for (const l of this.links()) for (const id of [l.source, l.target]) if (!ids.includes(id)) ids.push(id)
    return sankeyLayout(ids, this.links(), 300, 130, 8, 4)
  })
  protected readonly ariaLabel = computed(
    () =>
      `${this.title() ?? 'Sankey'}: ${this.links()
        .map((l) => `${l.source} to ${l.target} ${l.value}`)
        .join(', ')}`,
  )
}
