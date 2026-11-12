import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronRight } from '@ng-icons/lucide'

/** Page title block. Optional `breadcrumbs` above the title and projected `[pageHeaderActions]` on the right. */
@Component({
  selector: 'app-page-header',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronRight })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mb-6 flex flex-col gap-2' },
  template: `
    @if (breadcrumbs().length) {
      <nav aria-label="Breadcrumb">
        <ol class="text-muted-foreground flex items-center gap-1.5 text-sm">
          @for (b of breadcrumbs(); track $index; let last = $last) {
            <li class="flex items-center gap-1.5" [class.text-foreground]="last" [attr.aria-current]="last ? 'page' : null">
              {{ b }}
              @if (!last) {
                <ng-icon name="lucideChevronRight" size="14" aria-hidden="true" />
              }
            </li>
          }
        </ol>
      </nav>
    }
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-muted-foreground text-sm">{{ subtitle() }}</p>
        }
      </div>
      <div class="flex shrink-0 items-center gap-2 empty:hidden"><ng-content select="[pageHeaderActions]" /></div>
    </div>
  `,
})
export class PageHeaderComponent {
  readonly title = input.required<string>()
  readonly subtitle = input<string>()
  readonly breadcrumbs = input<string[]>([])
}
