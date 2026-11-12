import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-3 rounded-xl border p-4' },
  template: `
    @if (heading()) {
      <header class="flex items-start justify-between gap-2">
        <div>
          <h2 class="font-medium">{{ heading() }}</h2>
          @if (description()) {
            <p class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </div>
        <ng-content select="[cardAction]" />
      </header>
    }
    <ng-content />
  `,
})
export class CardComponent {
  readonly heading = input<string>()
  readonly description = input<string>()
}
