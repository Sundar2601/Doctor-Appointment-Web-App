import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/**
 * Figma "Collapsible": a header row with a toggle button and a panel (native `details`).
 * Usage: `<app-collapsible heading="@peduarte starred 3 repositories"><div class="rounded-md border px-4 py-2 text-sm">...</div></app-collapsible>`.
 * Content is hidden until opened.
 */
@Component({
  selector: 'app-collapsible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
  template: `
    <details class="group" [open]="open()" (toggle)="onToggle($event)">
      <summary class="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
        <span class="text-sm font-semibold">{{ heading() }}</span>
        <span class="group-hover:bg-accent group-hover:text-accent-foreground inline-flex size-9 items-center justify-center rounded-md">
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </summary>
      <div class="mt-2 flex flex-col gap-2"><ng-content /></div>
    </details>
  `,
})
export class CollapsibleComponent {
  readonly heading = input.required<string>()
  readonly open = model(false)

  protected onToggle(event: Event) {
    this.open.set((event.target as HTMLDetailsElement).open)
  }
}
