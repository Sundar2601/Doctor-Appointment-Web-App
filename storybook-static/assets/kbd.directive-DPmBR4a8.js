import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';

/** Figma "Kbd". Usage: `<kbd appKbd>Ctrl</kbd>`. Wrap several in a `flex gap-1` element for a Kbd Group. */
let KbdDirective = class KbdDirective {
};
KbdDirective = __decorate([
    Directive({
        selector: 'kbd[appKbd]',
        host: {
            class: 'bg-muted text-muted-foreground inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 font-sans text-xs leading-4 font-medium whitespace-nowrap select-none',
        },
    })
], KbdDirective);

export { KbdDirective as K };
