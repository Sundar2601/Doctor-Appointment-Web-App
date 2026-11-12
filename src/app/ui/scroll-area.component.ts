import { ChangeDetectionStrategy, Component } from '@angular/core'

/** Scrollable region with a thin themed scrollbar. Set the size from outside, e.g. `class="h-56 w-48"`. */
@Component({
  selector: 'app-scroll-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block overflow-auto rounded-md border p-4 [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin]', tabindex: '0' },
  template: '<ng-content />',
})
export class ScrollAreaComponent {}
