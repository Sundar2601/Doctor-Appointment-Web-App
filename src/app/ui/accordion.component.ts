import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** Figma "Accordion" wrapper. Items sharing the same `group` on `app-accordion-item` open one at a time (native `details[name]`). */
@Component({
  selector: 'app-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col' },
  template: '<ng-content />',
})
export class AccordionComponent {}

/**
 * One accordion row built on native `details`/`summary`.
 * Usage: `<app-accordion><app-accordion-item heading="Is it accessible?" group="faq">Yes.</app-accordion-item></app-accordion>`.
 */
@Component({
  selector: 'app-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block border-b' },
  template: `
    <details class="group" [attr.name]="group()" [open]="open()" (toggle)="onToggle($event)">
      <summary
        class="focus-visible:outline-ring flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
      >
        {{ heading() }}
        <svg
          class="size-4 shrink-0 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div class="pb-4 text-sm"><ng-content /></div>
    </details>
  `,
})
export class AccordionItemComponent {
  readonly heading = input.required<string>()
  readonly group = input<string>()
  readonly open = model(false)

  protected onToggle(event: Event) {
    this.open.set((event.target as HTMLDetailsElement).open)
  }
}
