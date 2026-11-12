import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm' },
  template: `
    @if (heading()) {
      <header class="flex items-start justify-between gap-2">
        <div class="flex flex-col gap-1.5">
          <h2 class="font-medium">{{ heading() }}</h2>
          @if (description()) {
            <p class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </div>
        <ng-content select="[cardAction]" />
      </header>
    }
    <ng-content />
    <footer class="flex items-center gap-2 empty:hidden"><ng-content select="[cardFooter]" /></footer>
  `,
})
export class CardComponent {
  readonly heading = input<string>()
  readonly description = input<string>()
}
