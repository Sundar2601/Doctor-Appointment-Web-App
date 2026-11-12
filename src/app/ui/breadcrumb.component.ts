import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronRight } from '@ng-icons/lucide'

export interface BreadcrumbItem {
  label: string
  href?: string
}

/** Usage: `<app-breadcrumb [items]="[{label:'Home', href:'/'}, {label:'Doctors'}]" />` (last item is the current page). */
@Component({
  selector: 'app-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIcon],
  viewProviders: [provideIcons({ lucideChevronRight })],
  host: { class: 'block', role: 'navigation', 'aria-label': 'Breadcrumb' },
  template: `
    <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
      @for (item of items(); track $index; let last = $last) {
        <li class="inline-flex items-center gap-1.5">
          @if (!last && item.href) {
            <a
              [routerLink]="item.href"
              class="hover:text-foreground focus-visible:outline-ring rounded-sm transition-colors focus-visible:outline-2"
              >{{ item.label }}</a
            >
          } @else {
            <span [attr.aria-current]="last ? 'page' : null" [class.text-foreground]="last" [class.font-normal]="last">{{
              item.label
            }}</span>
          }
        </li>
        @if (!last) {
          <li role="presentation" aria-hidden="true" class="[&>ng-icon]:size-3.5"><ng-icon name="lucideChevronRight" /></li>
        }
      }
    </ol>
  `,
})
export class BreadcrumbComponent {
  readonly items = input.required<BreadcrumbItem[]>()
}
