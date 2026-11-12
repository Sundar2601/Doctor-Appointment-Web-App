import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-muted block h-2 w-full overflow-hidden rounded-full',
    role: 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    '[attr.aria-valuenow]': 'value()',
  },
  template: '<span class="bg-primary block h-full rounded-full transition-[width]" [style.width.%]="value()"></span>',
})
export class ProgressComponent {
  readonly value = input(0)
}
