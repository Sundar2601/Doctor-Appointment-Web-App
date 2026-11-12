import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** iOS segmented control for 2-5 mutually exclusive options. */
@Component({
  selector: 'app-ios-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-muted flex h-[30px] w-full rounded-[9px] p-0.5', role: 'radiogroup' },
  template: `
    @for (option of options(); track option) {
      <button
        type="button"
        role="radio"
        class="text-foreground focus-visible:ring-ring/50 flex-1 rounded-[7px] text-[13px] transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
        [class.bg-background]="value() === option"
        [class.font-medium]="value() === option"
        [class.shadow-[0_3px_8px_rgb(0_0_0/0.12),0_3px_1px_rgb(0_0_0/0.04)]]="value() === option"
        [attr.aria-checked]="value() === option"
        (click)="value.set(option)"
      >
        {{ option }}
      </button>
    }
  `,
})
export class IosSegmentedControlComponent {
  readonly options = input.required<string[]>()
  readonly value = model<string>()
}
