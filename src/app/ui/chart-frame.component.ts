import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Card shell shared by the chart components: optional header text, projected plot, optional footer text. */
@Component({
  selector: 'app-chart-frame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm' },
  template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5" [class.text-center]="align() === 'center'">
        @if (title()) {
          <h3 class="leading-none font-medium">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-sm">{{ description() }}</p>
        }
      </div>
    }
    <ng-content />
    @if (footerTitle() || footerNote()) {
      <div class="flex flex-col gap-1" [class.text-center]="align() === 'center'">
        @if (footerTitle()) {
          <p class="text-sm leading-none font-medium">{{ footerTitle() }}</p>
        }
        @if (footerNote()) {
          <p class="text-muted-foreground text-sm">{{ footerNote() }}</p>
        }
      </div>
    }
  `,
})
export class ChartFrameComponent {
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly align = input<'left' | 'center'>('left')
}
