import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowUp, lucideChevronDown, lucidePaperclip } from '@ng-icons/lucide'

/** Figma "Prompt Input": textarea, attach button, model selector and send. Enter sends, Shift+Enter inserts a newline. */
@Component({
  selector: 'app-prompt-input',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowUp, lucideChevronDown, lucidePaperclip })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background block w-full rounded-xl border p-4 shadow-sm' },
  template: `
    <div class="mb-3 flex flex-wrap gap-2 empty:hidden"><ng-content select="[appPromptAttachments]" /></div>
    <textarea
      class="placeholder:text-muted-foreground field-sizing-content max-h-48 min-h-6 w-full resize-none bg-transparent text-base outline-none"
      rows="1"
      aria-label="Message"
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      (input)="value.set($any($event.target).value)"
      (keydown.enter)="onEnter($event)"
    ></textarea>
    <div class="mt-3 flex items-center gap-2">
      <button
        type="button"
        class="text-muted-foreground hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-md focus-visible:ring-[3px] focus-visible:outline-none"
        aria-label="Attach file"
        [disabled]="disabled()"
        (click)="attach.emit()"
      >
        <ng-icon name="lucidePaperclip" size="18" aria-hidden="true" />
      </button>
      @if (models().length) {
        <label class="hover:bg-accent relative inline-flex h-8 items-center gap-2 rounded-md px-3 text-sm">
          <span class="sr-only">Model</span>
          <select
            class="absolute inset-0 cursor-pointer appearance-none bg-transparent px-3 opacity-0"
            [disabled]="disabled()"
            (change)="model.set($any($event.target).value)"
          >
            @for (m of models(); track m) {
              <option [value]="m" [selected]="m === model()">{{ m }}</option>
            }
          </select>
          {{ model() }}
          <ng-icon name="lucideChevronDown" size="16" aria-hidden="true" />
        </label>
      }
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring/50 ml-auto inline-flex size-9 items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Send message"
        [disabled]="disabled() || !canSend()"
        (click)="submit()"
      >
        <ng-icon name="lucideArrowUp" size="18" aria-hidden="true" />
      </button>
    </div>
  `,
})
export class PromptInputComponent {
  readonly value = model('')
  readonly model = model('')
  readonly models = input<string[]>([])
  readonly placeholder = input('Ask anything...')
  readonly disabled = input(false)
  readonly send = output<string>()
  readonly attach = output()
  protected readonly canSend = computed(() => this.value().trim().length > 0)

  protected onEnter(event: Event) {
    if ((event as KeyboardEvent).shiftKey || (event as KeyboardEvent).isComposing) return
    event.preventDefault()
    this.submit()
  }

  protected submit() {
    const text = this.value().trim()
    if (!text || this.disabled()) return
    this.send.emit(text)
    this.value.set('')
  }
}
