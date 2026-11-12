import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircleCheck, lucideCircleX } from '@ng-icons/lucide'
import { BadgeComponent } from './badge.component'

export interface TestFile {
  name: string
  passed: number
  failed?: number
}

/** Pass/fail summary of a test run, with a row per test file. */
@Component({
  selector: 'app-test-results',
  imports: [NgIcon, BadgeComponent],
  viewProviders: [provideIcons({ lucideCircleCheck, lucideCircleX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': 'title()' },
  template: `
    <div class="flex items-center gap-2">
      <h3 class="text-sm font-semibold">{{ title() }}</h3>
      <app-badge>{{ passed() }} passed</app-badge>
      @if (failed()) {
        <app-badge tone="danger">{{ failed() }} failed</app-badge>
      }
    </div>
    <ul class="mt-4 grid gap-3">
      @for (f of files(); track f.name) {
        <li class="flex items-center gap-2 text-sm" [class.text-text-destructive]="f.failed">
          <span class="inline-flex" [class]="f.failed ? 'text-destructive' : 'text-success'"
            ><ng-icon [name]="f.failed ? 'lucideCircleX' : 'lucideCircleCheck'" size="16" aria-hidden="true"
          /></span>
          {{ f.name }}
          <span class="text-xs" [class.text-muted-foreground]="!f.failed">
            @if (f.passed) {
              {{ f.passed }} passed
            }
            @if (f.failed) {
              {{ f.failed }} failed
            }
          </span>
        </li>
      }
    </ul>
  `,
})
export class TestResultsComponent {
  readonly title = input('Test run')
  readonly files = input<TestFile[]>([])
  protected readonly passed = computed(() => this.files().reduce((n, f) => n + f.passed, 0))
  protected readonly failed = computed(() => this.files().reduce((n, f) => n + (f.failed ?? 0), 0))
}
