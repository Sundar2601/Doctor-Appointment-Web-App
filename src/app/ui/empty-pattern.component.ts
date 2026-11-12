import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core'
import { ButtonDirective } from './button.directive'
import { EmptyStateComponent } from './empty-state.component'

export type EmptyPatternKind = 'first-use' | 'no-results' | 'cleared'

const DEFAULTS: Record<EmptyPatternKind, { title: string; description: string; actionLabel?: string; icon: string[] }> = {
  'first-use': {
    title: 'No projects yet',
    description: 'Projects group your files and teammates. Create your first one to get started.',
    actionLabel: 'Create project',
    icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8'],
  },
  'no-results': {
    title: 'No results',
    description: 'Try a different search or clear your filters.',
    actionLabel: 'Clear filters',
    icon: ['M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16', 'm21 21-4.3-4.3'],
  },
  cleared: {
    title: 'You are all caught up',
    description: 'There is nothing new right now. Check back later.',
    icon: ['M21.801 10A10 10 0 1 1 17 3.335', 'm9 11 3 3L22 4'],
  },
}

/** Figma "Empty" patterns, composed from `app-empty-state`. Usage: `<app-empty-pattern kind="no-results" (action)="clear()" />`. */
@Component({
  selector: 'app-empty-pattern',
  imports: [EmptyStateComponent, ButtonDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card flex flex-col items-center gap-2 rounded-xl border px-6 py-8' },
  template: `
    <span class="bg-muted text-foreground flex size-14 shrink-0 items-center justify-center rounded-xl" aria-hidden="true">
      <svg
        class="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        @for (d of iconPaths(); track d) {
          <path [attr.d]="d" />
        }
      </svg>
    </span>
    <app-empty-state [title]="resolvedTitle()" [description]="resolvedDescription()" class="!py-2 max-w-xs px-2">
      @if (resolvedAction(); as label) {
        <button appButton class="mt-4" (click)="action.emit()">{{ label }}</button>
      }
    </app-empty-state>
  `,
})
export class EmptyPatternComponent {
  readonly kind = input<EmptyPatternKind>('first-use')
  readonly title = input<string>()
  readonly description = input<string>()
  /** Overrides the default action label; the kind 'cleared' has no action by default. */
  readonly actionLabel = input<string>()
  readonly action = output<void>()

  protected readonly resolvedTitle = computed(() => this.title() ?? DEFAULTS[this.kind()].title)
  protected readonly resolvedDescription = computed(() => this.description() ?? DEFAULTS[this.kind()].description)
  protected readonly resolvedAction = computed(() => this.actionLabel() ?? DEFAULTS[this.kind()].actionLabel)
  protected readonly iconPaths = computed(() => DEFAULTS[this.kind()].icon)
}
