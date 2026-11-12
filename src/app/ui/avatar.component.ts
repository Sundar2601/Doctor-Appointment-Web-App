import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Initials for a person's name (drops a leading "Dr."), e.g. "Olivia Brown" -> "OB". */
export function initialsOf(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join('')
}

/** Round initials avatar. Pass a full name; initials are derived. */
@Component({
  selector: 'app-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[attr.aria-label]': 'name() || null', role: 'img' },
  template: `
    @if (initials()) {
      {{ initials() }}
    } @else {
      <svg
        class="size-1/2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    }
  `,
})
export class AvatarComponent {
  readonly name = input<string>('')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  protected readonly initials = computed(() => initialsOf(this.name()))
  protected readonly classes = computed(
    () =>
      `bg-muted inline-flex shrink-0 items-center justify-center rounded-full font-normal text-muted-foreground ${{ sm: 'size-6 text-[10px]', md: 'size-8 text-xs', lg: 'size-10 text-sm' }[this.size()]}`,
  )
}
