import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Figma "Aspect Ratio". Usage: `<app-aspect-ratio [ratio]="16 / 9"><img class="size-full object-cover" ...></app-aspect-ratio>`. */
@Component({
  selector: 'app-aspect-ratio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-muted relative flex w-full items-center justify-center overflow-hidden rounded-lg',
    '[style.aspect-ratio]': 'ratio()',
  },
  template: '<ng-content />',
})
export class AspectRatioComponent {
  readonly ratio = input(16 / 9)
}
