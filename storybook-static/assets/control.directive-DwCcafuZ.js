import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';

/** Shared look for native `input`, `select` and `textarea` so every form control matches. */
let ControlDirective = class ControlDirective {
};
ControlDirective = __decorate([
    Directive({
        selector: 'input[appControl], select[appControl], textarea[appControl]',
        host: {
            class: 'border-input bg-background placeholder:text-muted-foreground h-9 w-full rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 aria-[invalid=true]:focus-visible:ring-destructive/40',
        },
    })
], ControlDirective);

export { ControlDirective as C };
