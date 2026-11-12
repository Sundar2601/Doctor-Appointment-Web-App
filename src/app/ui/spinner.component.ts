import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Figma "Spinner" (lucide loader-circle). Usage: `<app-spinner label="Processing payment..." />`. */
@Component({
  selector: 'app-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'text-muted-foreground inline-flex items-center gap-3 text-sm', role: 'status' },
  template: `
    <svg
      [class]="'text-foreground animate-spin shrink-0 ' + sizeClass()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    @if (label()) {
      <span>{{ label() }}</span>
    } @else {
      <span class="sr-only">Loading</span>
    }
  `,
})
export class SpinnerComponent {
  readonly label = input<string>()
  readonly size = input<'sm' | 'md' | 'lg'>('sm')
  protected readonly sizeClass = computed(() => ({ sm: 'size-4', md: 'size-6', lg: 'size-8' })[this.size()])
}
