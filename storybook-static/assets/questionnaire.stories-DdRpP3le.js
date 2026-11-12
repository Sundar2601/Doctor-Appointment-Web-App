import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, s as signal, c as computed, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Questionnaire": clarifying questions with options and Skip / Next navigation. Emits `completed` with answers (null = skipped). */
let QuestionnaireComponent = class QuestionnaireComponent {
    questions = input.required();
    completed = output();
    step = signal(0);
    answers = signal([]);
    current = computed(() => this.questions()[this.step()] ?? { question: '', options: [] });
    last = computed(() => this.step() === this.questions().length - 1);
    choose(option) {
        this.answers.update((a) => {
            const next = [...a];
            next[this.step()] = option;
            return next;
        });
    }
    advance(skip) {
        if (skip)
            this.answers.update((a) => a.map((v, i) => (i === this.step() ? null : v)));
        if (this.last()) {
            this.completed.emit(this.questions().map((_, i) => (skip && i === this.step() ? null : (this.answers()[i] ?? null))));
        }
        else {
            this.step.update((s) => s + 1);
        }
    }
    static propDecorators = {
        questions: [{ type: Input, args: [{ isSignal: true, alias: "questions", required: true, transform: undefined },] }],
        completed: [{ type: Output, args: ["completed",] }]
    };
};
QuestionnaireComponent = __decorate([
    Component({
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
], QuestionnaireComponent);

const questions = [{
  question: 'Which hospital do you prefer?',
  options: ['JIPMER', 'Aravind Eye Hospital', 'Mahatma Gandhi Medical College']
}, {
  question: 'Preferred day?',
  options: ['Thursday', 'Friday', 'Saturday']
}, {
  question: 'Visit type?',
  options: ['In person', 'Video consult']
}];
const meta = {
  title: 'AI/Questionnaire',
  decorators: [moduleMetadata({
    imports: [QuestionnaireComponent]
  })],
  render: args => ({
    props: {
      ...args,
      questions
    },
    template: `<app-questionnaire [questions]="questions" />`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};

export { Default, __namedExportsOrder, meta as default };
