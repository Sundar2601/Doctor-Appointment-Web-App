import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, I as Input, O as Output } from './angular-platform-Dxt0cssM.js';

/** iOS toggle switch (51x31). On state uses the success token. */
let IosSwitchComponent = class IosSwitchComponent {
    checked = model(false);
    disabled = input(false);
    label = input('');
    static propDecorators = {
        checked: [{ type: Input, args: [{ isSignal: true, alias: "checked", required: false },] }, { type: Output, args: ["checkedChange",] }],
        disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
IosSwitchComponent = __decorate([
    Component({
        selector: 'app-ios-switch',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: '[--ios-track:#e9e9ea] inline-flex' },
        template: `
    <button
      type="button"
      role="switch"
      class="focus-visible:ring-ring/50 relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
      [class.bg-success]="checked()"
      [class.bg-(--ios-track)]="!checked()"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="label() || null"
      [disabled]="disabled()"
      (click)="checked.set(!checked())"
    >
      <span
        class="absolute top-0.5 left-0.5 size-[27px] rounded-full bg-white shadow-[0_3px_8px_rgb(0_0_0/0.15),0_1px_1px_rgb(0_0_0/0.16)] transition-transform"
        [class.translate-x-5]="checked()"
      ></span>
    </button>
  `,
    })
], IosSwitchComponent);

export { IosSwitchComponent as I };
