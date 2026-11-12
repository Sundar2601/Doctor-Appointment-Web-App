import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core'
import { ButtonDirective } from './button.directive'

export type ErrorStateKind = 'not-found' | 'server-error' | 'forbidden' | 'offline'

const DEFAULTS: Record<ErrorStateKind, { title: string; description: string; icon?: string[] }> = {
  'not-found': { title: 'Page not found', description: 'The page may have moved or the link is wrong.' },
  'server-error': {
    title: 'Something went wrong',
    description: 'We could not complete your request. Please try again.',
    icon: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'],
  },
  forbidden: {
    title: 'No access',
    description: 'You do not have permission to view this page.',
    icon: ['M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
  },
  offline: {
    title: 'You are offline',
    description: 'Check your connection and try again.',
    icon: [
      'M12 20h.01',
      'M8.5 16.429a5 5 0 0 1 7 0',
      'M5 12.859a10 10 0 0 1 5.17-2.69',
      'M19 12.859a10 10 0 0 0-2.007-1.523',
      'M2 8.82a15 15 0 0 1 4.177-2.643',
      'M22 8.82a15 15 0 0 0-11.288-3.764',
      'm2 2 20 20',
    ],
  },
}

/** Figma "Error" patterns. Usage: `<app-error-state kind="not-found" actionLabel="Go to home" (action)="home()" />`. Extra buttons can be projected. */
@Component({
  selector: 'app-error-state',
  imports: [ButtonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col items-center gap-2 rounded-xl border px-6 py-8 text-center' },
  template: `
    @if (iconPaths(); as paths) {
      <span class="bg-muted text-foreground mb-2 flex size-14 shrink-0 items-center justify-center rounded-xl" aria-hidden="true">
        <svg
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          @for (d of paths; track d) {
            <path [attr.d]="d" />
          }
        </svg>
      </span>
    } @else {
      <p class="text-muted-foreground text-4xl font-bold" aria-hidden="true">404</p>
    }
    <h2 class="text-foreground mt-2 text-base font-semibold">{{ resolvedTitle() }}</h2>
    <p class="text-muted-foreground max-w-xs text-sm">{{ resolvedDescription() }}</p>
    @if (actionLabel() || hasProjected) {
      <div class="mt-4 flex flex-wrap justify-center gap-2">
        @if (actionLabel(); as label) {
          <button appButton (click)="action.emit()">{{ label }}</button>
        }
        <ng-content />
      </div>
    }
  `,
})
export class ErrorStateComponent {
  readonly kind = input<ErrorStateKind>('not-found')
  readonly title = input<string>()
  readonly description = input<string>()
  readonly actionLabel = input<string>()
  readonly action = output<void>()
  protected readonly hasProjected = true

  protected readonly resolvedTitle = computed(() => this.title() ?? DEFAULTS[this.kind()].title)
  protected readonly resolvedDescription = computed(() => this.description() ?? DEFAULTS[this.kind()].description)
  protected readonly iconPaths = computed(() => DEFAULTS[this.kind()].icon)
}
