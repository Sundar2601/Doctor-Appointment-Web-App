import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';

/** Initials for a person's name (drops a leading "Dr."), e.g. "Olivia Brown" -> "OB". */
function initialsOf(name) {
    return name
        .replace(/^Dr\.?\s+/i, '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p.charAt(0).toUpperCase())
        .join('');
}
/** Round initials avatar. Pass a full name; initials are derived. */
let AvatarComponent = class AvatarComponent {
    name = input('');
    size = input('md');
    initials = computed(() => initialsOf(this.name()));
    classes = computed(() => `bg-muted inline-flex shrink-0 items-center justify-center rounded-full font-normal text-muted-foreground ${{ sm: 'size-6 text-[10px]', md: 'size-8 text-xs', lg: 'size-10 text-sm' }[this.size()]}`);
    static propDecorators = {
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
AvatarComponent = __decorate([
    Component({
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
], AvatarComponent);

export { AvatarComponent as A };
