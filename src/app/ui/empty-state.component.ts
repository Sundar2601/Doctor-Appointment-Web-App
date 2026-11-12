import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/**
 * Figma "Empty": dashed container, icon tile, title, description and optional action.
 * Slots: `[emptyIcon]` (defaults to an inbox icon, hide with `[showIcon]="false"`) and default content (actions).
 */
@Component({
  selector: 'app-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-muted-foreground flex flex-col items-center gap-2 rounded-lg border border-dashed px-6 py-10 text-center text-sm',
  },
  template: `
    @if (showIcon()) {
      <div class="bg-muted text-foreground mb-2 flex size-12 shrink-0 items-center justify-center rounded-lg">
        <ng-content select="[emptyIcon]">
          <svg
            class="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
        </ng-content>
      </div>
    }
    <p class="text-foreground text-lg font-semibold">{{ title() }}</p>
    @if (description()) {
      <p>{{ description() }}</p>
    }
    <ng-content />
  `,
})
export class EmptyStateComponent {
  readonly title = input.required<string>()
  readonly description = input<string>()
  readonly showIcon = input(true)
}
