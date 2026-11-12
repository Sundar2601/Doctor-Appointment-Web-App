import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Toast, ToastService } from './toast.service'

/** Container for toasts from `ToastService` (Figma "Sonner"). Place `<app-toaster />` once in the app root. */
@Component({
  selector: 'app-toaster',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col gap-2', role: 'region', 'aria-label': 'Notifications', 'aria-live': 'polite' },
  template: `
    @for (t of toasts.toasts(); track t.id) {
      <div class="bg-popover text-popover-foreground pointer-events-auto flex w-[356px] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-lg" role="status">
        <div class="flex min-w-0 flex-1 flex-col gap-1 text-sm">
          <p class="font-medium">{{ t.title }}</p>
          @if (t.description) { <p class="text-muted-foreground">{{ t.description }}</p> }
        </div>
        @if (t.actionLabel) {
          <button
            type="button"
            class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-ring shrink-0 rounded-md px-3 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
            (click)="act(t)"
          >
            {{ t.actionLabel }}
          </button>
        }
      </div>
    }
  `,
})
export class ToasterComponent {
  protected readonly toasts = inject(ToastService)

  protected act(t: Toast) {
    t.onAction?.()
    this.toasts.dismiss(t.id)
  }
}
