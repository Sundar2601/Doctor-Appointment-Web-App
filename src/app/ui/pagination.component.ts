import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronLeft, lucideChevronRight, lucideEllipsis } from '@ng-icons/lucide'
import { ButtonDirective } from './button.directive'

/** Usage: `<app-pagination [pageCount]="12" [(page)]="page" />`. */
@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonDirective, NgIcon],
  viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideEllipsis })],
  host: { class: 'block', role: 'navigation', 'aria-label': 'Pagination' },
  template: `
    <ul class="flex items-center justify-center gap-1">
      <li>
        <button type="button" appButton variant="ghost" aria-label="Go to previous page" [disabled]="page() <= 1" (click)="go(page() - 1)">
          <ng-icon name="lucideChevronLeft" size="16" /><span class="hidden sm:inline">Previous</span>
        </button>
      </li>
      @for (p of pages(); track $index) {
        <li>
          @if (p === 0) {
            <span class="flex size-9 items-center justify-center" aria-hidden="true"><ng-icon name="lucideEllipsis" size="16" /></span>
          } @else {
            <button
              type="button"
              appButton
              size="icon"
              [variant]="p === page() ? 'outline' : 'ghost'"
              [attr.aria-current]="p === page() ? 'page' : null"
              [attr.aria-label]="'Page ' + p"
              (click)="go(p)"
            >
              {{ p }}
            </button>
          }
        </li>
      }
      <li>
        <button
          type="button"
          appButton
          variant="ghost"
          aria-label="Go to next page"
          [disabled]="page() >= pageCount()"
          (click)="go(page() + 1)"
        >
          <span class="hidden sm:inline">Next</span><ng-icon name="lucideChevronRight" size="16" />
        </button>
      </li>
    </ul>
  `,
})
export class PaginationComponent {
  readonly page = model(1)
  readonly pageCount = input.required<number>()
  /** Pages shown on each side of the current page. */
  readonly siblings = input(1)

  /** Page numbers; `0` marks an ellipsis. */
  protected readonly pages = computed<number[]>(() => {
    const total = this.pageCount(),
      cur = this.page(),
      s = this.siblings()
    const set = new Set<number>([1, total])
    for (let i = cur - s; i <= cur + s; i++) if (i >= 1 && i <= total) set.add(i)
    const sorted = [...set].sort((a, b) => a - b)
    const out: number[] = []
    sorted.forEach((n, i) => {
      const prev = sorted[i - 1]
      if (prev !== undefined && n - prev > 1) out.push(n - prev === 2 ? n - 1 : 0)
      out.push(n)
    })
    return out
  })

  protected go(p: number): void {
    this.page.set(Math.min(Math.max(1, p), this.pageCount()))
  }
}
