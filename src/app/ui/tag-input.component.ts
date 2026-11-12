import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideX } from '@ng-icons/lucide'

/** Type and press Enter or comma to add a tag; Backspace removes the last. Two-way: `[(tags)]`. */
@Component({
  selector: 'app-tag-input',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-input bg-background focus-within:ring-ring/50 focus-within:border-ring flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border p-1.5 shadow-xs focus-within:ring-[3px]',
  },
  template: `
    @for (t of tags(); track t) {
      <span class="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium">
        {{ t }}
        <button
          type="button"
          class="text-secondary-foreground hover:text-foreground focus-visible:ring-ring/50 rounded-xs focus-visible:ring-[3px] focus-visible:outline-none"
          [attr.aria-label]="'Remove ' + t"
          (click)="remove(t)"
        >
          <ng-icon name="lucideX" size="12" strokeWidth="2.5" />
        </button>
      </span>
    }
    <input
      #i
      class="placeholder:text-muted-foreground min-w-24 flex-1 bg-transparent text-sm outline-none"
      [placeholder]="tags().length ? '' : placeholder()"
      [attr.aria-label]="placeholder()"
      (keydown)="key($event, i)"
      (blur)="add(i.value); i.value = ''"
    />
  `,
})
export class TagInputComponent {
  readonly tags = model<string[]>([])
  readonly placeholder = input('Add tag...')
  protected key(e: KeyboardEvent, el: HTMLInputElement) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      this.add(el.value)
      el.value = ''
    } else if (e.key === 'Backspace' && !el.value && this.tags().length) {
      this.tags.update((t) => t.slice(0, -1))
    }
  }
  protected add(v: string) {
    const t = v.trim()
    if (t && !this.tags().includes(t)) this.tags.update((a) => [...a, t])
  }
  protected remove(t: string) {
    this.tags.update((a) => a.filter((x) => x !== t))
  }
}
