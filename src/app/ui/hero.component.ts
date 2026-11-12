import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/**
 * Page hero banner (Figma "Hero / *"): brand-tinted card with title, subtitle, optional chip and actions, and an illustration.
 * Usage: `<app-hero title="Doctors" subtitle="..." illustration="/illustrations/hero-doctors.svg"><a heroActions appButton>...</a></app-hero>`.
 */
@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-primary text-primary-foreground relative block overflow-hidden rounded-xl' },
  template: `
    <div aria-hidden="true" class="bg-brand-500 pointer-events-none absolute -top-44 -left-24 size-[340px] rounded-full"></div>
    <div aria-hidden="true" class="bg-brand-700 pointer-events-none absolute top-16 right-12 size-64 rounded-full"></div>
    <div aria-hidden="true" class="bg-brand-400 pointer-events-none absolute -top-12 right-1/3 size-28 rounded-full"></div>
    <div class="relative flex min-h-44 items-center gap-6 p-8" [class]="illustration() ? 'md:pr-80' : ''">
      <div class="flex min-w-0 flex-1 flex-col items-start gap-3">
        <ng-content select="[heroChip]" />
        <h1 class="text-3xl leading-9 font-bold">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-sm">{{ subtitle() }}</p>
        }
        <ng-content select="[heroActions]" />
      </div>
      @if (illustration()) {
        <img [src]="illustration()" alt="" class="pointer-events-none absolute right-12 bottom-0 hidden h-36 w-auto max-w-none md:block" />
      }
    </div>
  `,
})
export class HeroComponent {
  readonly title = input.required<string>()
  readonly subtitle = input<string>()
  /** URL of the decorative illustration (served from `public/illustrations`). */
  readonly illustration = input<string>()
}
