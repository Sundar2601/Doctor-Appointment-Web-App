import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck, lucideCopy } from '@ng-icons/lucide'

/** Monospaced code surface with copy button. */
@Component({
  selector: 'app-code-block',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCheck, lucideCopy })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-muted text-foreground relative block rounded-md' },
  template: `
    <pre class="overflow-x-auto p-4 font-mono text-[13px] leading-5"><code>{{ code() }}</code></pre>
    <button type="button" class="hover:bg-accent absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-md" aria-label="Copy code" (click)="copy()">
      <ng-icon [name]="copied() ? 'lucideCheck' : 'lucideCopy'" size="14" />
    </button>
  `,
})
export class CodeBlockComponent {
  readonly code = input.required<string>()
  protected readonly copied = signal(false)
  protected async copy() {
    await navigator.clipboard?.writeText(this.code())
    this.copied.set(true)
    setTimeout(() => this.copied.set(false), 1500)
  }
}
