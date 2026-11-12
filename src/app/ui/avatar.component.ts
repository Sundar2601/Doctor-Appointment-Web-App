import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Round initials avatar. Pass a full name; initials are derived. */
@Component({
  selector: 'app-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[attr.aria-label]': 'name()', role: 'img' },
  template: '{{ initials() }}',
})
export class AvatarComponent {
  readonly name = input.required<string>()
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  protected readonly initials = computed(() =>
    this.name()
      .replace(/^Dr\.?\s+/i, '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p.charAt(0).toUpperCase())
      .join(''),
  )
  protected readonly classes = computed(
    () =>
      `bg-muted inline-flex shrink-0 items-center justify-center rounded-full font-semibold ${{ sm: 'size-6 text-[10px]', md: 'size-8 text-xs', lg: 'size-10 text-sm' }[this.size()]}`,
  )
}
