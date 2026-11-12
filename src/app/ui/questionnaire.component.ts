import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'

export interface QuestionnaireQuestion {
  question: string
  options: string[]
}

/** Figma "Questionnaire": clarifying questions with options and Skip / Next navigation. Emits `completed` with answers (null = skipped). */
@Component({
  selector: 'app-questionnaire',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-card block w-full max-w-md rounded-xl border p-5 shadow-sm',
    role: 'group',
    '[attr.aria-label]': 'current().question',
  },
  template: `
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold">{{ current().question }}</h3>
      <span class="text-muted-foreground text-xs" aria-live="polite">{{ step() + 1 }} of {{ questions().length }}</span>
    </div>
    <div class="mt-4 grid gap-3" role="radiogroup" [attr.aria-label]="current().question">
      @for (option of current().options; track option) {
        <button
          type="button"
          role="radio"
          class="focus-visible:ring-ring/50 rounded-md border px-3 py-2.5 text-left text-sm focus-visible:ring-[3px] focus-visible:outline-none"
          [class]="answers()[step()] === option ? 'border-primary ring-primary/30 ring-2' : 'hover:bg-accent'"
          [attr.aria-checked]="answers()[step()] === option"
          (click)="choose(option)"
        >
          {{ option }}
        </button>
      }
    </div>
    <div class="mt-4 flex items-center justify-between">
      <button type="button" class="hover:bg-accent h-9 rounded-md px-3 text-sm font-medium" (click)="advance(true)">Skip</button>
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4 text-sm font-medium disabled:opacity-50"
        [disabled]="!answers()[step()]"
        (click)="advance(false)"
      >
        {{ last() ? 'Finish' : 'Next' }}
      </button>
    </div>
  `,
})
export class QuestionnaireComponent {
  readonly questions = input.required<QuestionnaireQuestion[]>()
  readonly completed = output<(string | null)[]>()
  protected readonly step = signal(0)
  protected readonly answers = signal<(string | null)[]>([])
  protected readonly current = computed(() => this.questions()[this.step()] ?? { question: '', options: [] })
  protected readonly last = computed(() => this.step() === this.questions().length - 1)

  protected choose(option: string) {
    this.answers.update((a) => {
      const next = [...a]
      next[this.step()] = option
      return next
    })
  }

  protected advance(skip: boolean) {
    if (skip) this.answers.update((a) => a.map((v, i) => (i === this.step() ? null : v)))
    if (this.last()) {
      this.completed.emit(this.questions().map((_, i) => (skip && i === this.step() ? null : (this.answers()[i] ?? null))))
    } else {
      this.step.update((s) => s + 1)
    }
  }
}
