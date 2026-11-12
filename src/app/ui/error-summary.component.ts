import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core'

export interface ErrorSummaryItem {
  /** DOM id of the invalid field. */
  id: string
  message: string
}

/** Figma "Error summary". Usage: `<app-error-summary heading="Fix 2 errors to continue" [errors]="errors" />`. Call `focus()` after a failed submit. */
@Component({
  selector: 'app-error-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'border-destructive bg-card block rounded-xl border p-4 text-sm outline-none', role: 'alert', tabindex: '-1' },
  template: `
    <h2 class="text-destructive mb-2 font-semibold">{{ heading() }}</h2>
    <ul class="list-disc space-y-1 pl-5">
      @for (error of errors(); track error.id) {
        <li>
          <a
            [href]="'#' + error.id"
            class="text-foreground focus-visible:ring-ring/50 rounded-sm underline-offset-4 hover:underline focus-visible:ring-[3px] focus-visible:outline-none"
            (click)="focusField($event, error.id)"
            >{{ error.message }}</a
          >
        </li>
      }
    </ul>
  `,
})
export class ErrorSummaryComponent {
  readonly heading = input.required<string>()
  readonly errors = input<ErrorSummaryItem[]>([])
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)

  /** Moves focus to the summary (call after a failed submit). */
  focus(): void {
    this.host.nativeElement.focus()
  }

  protected focusField(event: Event, id: string): void {
    const field = document.getElementById(id)
    if (!field) return
    event.preventDefault()
    field.focus()
  }
}
