import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';

/** Figma "Label". Usage: `<label appLabel for="x">Name</label>`. */
let LabelDirective = class LabelDirective {
};
LabelDirective = __decorate([
    Directive({
        selector: 'label[appLabel]',
        host: { class: 'text-foreground flex items-center gap-2 text-sm leading-5 font-medium select-none' },
    })
], LabelDirective);

export { LabelDirective as L };
