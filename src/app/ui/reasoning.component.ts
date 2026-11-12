import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown, lucideSparkles } from '@ng-icons/lucide'

/** Figma "Reasoning": collapsible thinking block. `streaming` shows "Thinking…" instead of the duration. */
@Component({
  selector: 'app-reasoning',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronDown, lucideSparkles })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <button
      type="button"
      class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 flex items-center gap-2 rounded-sm text-sm focus-visible:ring-[3px] focus-visible:outline-none"
      [attr.aria-expanded]="open()"
      aria-controls="reasoning-panel"
      (click)="open.set(!open())"
    >
      <ng-icon name="lucideSparkles" size="16" [class.animate-pulse]="streaming()" aria-hidden="true" />
      {{ streaming() ? 'Thinking…' : 'Thought for ' + duration() + ' seconds' }}
      <ng-icon name="lucideChevronDown" size="16" class="transition-transform" [class.rotate-180]="open()" aria-hidden="true" />
    </button>
    @if (open()) {
      <div id="reasoning-panel" class="mt-3 text-sm"><ng-content /></div>
    }
  `,
})
export class ReasoningComponent {
  readonly duration = input(6)
  readonly streaming = input(false)
  readonly open = model(true)
}
