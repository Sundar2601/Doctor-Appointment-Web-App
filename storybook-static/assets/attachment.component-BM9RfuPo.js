import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, l as lucideX, w as lucideFile } from './ng-icons-lucide-DvOyu-Mi.js';

/** Figma "Attachment": file chip with size and remove button. */
let AttachmentComponent = class AttachmentComponent {
    name = input.required();
    size = input();
    removable = input(true);
    remove = output();
    static propDecorators = {
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true, transform: undefined },] }],
        size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }],
        removable: [{ type: Input, args: [{ isSignal: true, alias: "removable", required: false, transform: undefined },] }],
        remove: [{ type: Output, args: ["remove",] }]
    };
};
AttachmentComponent = __decorate([
    Component({
        selector: 'app-attachment',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideFile, lucideX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background inline-flex items-center gap-3 rounded-lg border px-3 py-2 shadow-xs' },
        template: `
    <ng-icon name="lucideFile" size="16" class="text-muted-foreground" aria-hidden="true" />
    <span class="grid text-sm leading-tight">
      <span class="font-medium">{{ name() }}</span>
      @if (size()) {
        <span class="text-muted-foreground text-xs">{{ size() }}</span>
      }
    </span>
    @if (removable()) {
      <button
        type="button"
        class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 ml-2 rounded-sm focus-visible:ring-[3px] focus-visible:outline-none"
        [attr.aria-label]="'Remove ' + name()"
        (click)="remove.emit()"
      >
        <ng-icon name="lucideX" size="16" />
      </button>
    }
  `,
    })
], AttachmentComponent);

export { AttachmentComponent as A };
