import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, I as Input } from './angular-platform-Dxt0cssM.js';

/** Figma "Spinner" (lucide loader-circle). Usage: `<app-spinner label="Processing payment..." />`. */
let SpinnerComponent = class SpinnerComponent {
    label = input();
    size = input('sm');
    sizeClass = computed(() => ({ sm: 'size-4', md: 'size-6', lg: 'size-8' })[this.size()]);
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
    };
};
SpinnerComponent = __decorate([
    Component({
        selector: 'app-spinner',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'text-muted-foreground inline-flex items-center gap-3 text-sm', role: 'status' },
        template: `
    <svg
      [class]="'text-foreground animate-spin shrink-0 ' + sizeClass()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    @if (label()) {
      <span>{{ label() }}</span>
    } @else {
      <span class="sr-only">Loading</span>
    }
  `,
    })
], SpinnerComponent);

export { SpinnerComponent as S };
