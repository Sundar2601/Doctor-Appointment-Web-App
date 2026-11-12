import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/**
 * Figma "Item": media + title/description + actions.
 * Usage: `<app-item heading="Basic Item" description="..."><button itemActions appButton variant="outline" size="sm">Action</button></app-item>`.
 * Slots: `[itemMedia]` (defaults to a file icon), `[itemActions]`.
 */
@Component({
  selector: 'app-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex items-center gap-4 rounded-md border p-4' },
  template: `
    @if (showMedia()) {
      <div class="bg-muted flex size-10 shrink-0 items-center justify-center rounded-sm">
        <ng-content select="[itemMedia]">
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </ng-content>
      </div>
    }
    <div class="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
      <p class="text-foreground font-medium">{{ heading() }}</p>
      @if (description()) {
        <p class="text-muted-foreground">{{ description() }}</p>
      }
      <ng-content />
    </div>
    <ng-content select="[itemActions]" />
  `,
})
export class ItemComponent {
  readonly heading = input.required<string>()
  readonly description = input<string>()
  readonly showMedia = input(true)
}
