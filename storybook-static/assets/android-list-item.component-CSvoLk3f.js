import { i as input, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DF7QvMAc.js';
import { A as ANDROID_ICONS } from './android-icons-D68AZP6J.js';

/** Material 3 list item. Leading can be initials, an icon name, or projected `[leading]` content; trailing is text or `[trailing]`. */
let AndroidListItemComponent = class AndroidListItemComponent {
    headline = input.required();
    supporting = input();
    leading = input();
    leadingIcon = input();
    trailing = input();
    destructive = input(false);
    static propDecorators = {
        headline: [{ type: Input, args: [{ isSignal: true, alias: "headline", required: true, transform: undefined },] }],
        supporting: [{ type: Input, args: [{ isSignal: true, alias: "supporting", required: false, transform: undefined },] }],
        leading: [{ type: Input, args: [{ isSignal: true, alias: "leading", required: false, transform: undefined },] }],
        leadingIcon: [{ type: Input, args: [{ isSignal: true, alias: "leadingIcon", required: false, transform: undefined },] }],
        trailing: [{ type: Input, args: [{ isSignal: true, alias: "trailing", required: false, transform: undefined },] }],
        destructive: [{ type: Input, args: [{ isSignal: true, alias: "destructive", required: false, transform: undefined },] }]
    };
};
AndroidListItemComponent = __decorate([
    Component({
        selector: 'app-android-list-item',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'flex w-full items-center gap-4 px-4',
            '[class.min-h-14]': '!supporting()',
            '[class.min-h-[72px]]': '!!supporting()',
            role: 'listitem',
        },
        template: `
    @if (leadingIcon()) {
      <ng-icon [name]="leadingIcon()!" size="24" [class.text-destructive]="destructive()" />
    } @else if (leading()) {
      <span class="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full text-base">{{ leading() }}</span>
    }
    <ng-content select="[leading]" />
    <div class="min-w-0 flex-1" [class.text-destructive]="destructive()">
      <p class="truncate text-base">{{ headline() }}</p>
      @if (supporting()) {
        <p class="text-muted-foreground truncate text-sm">{{ supporting() }}</p>
      }
    </div>
    @if (trailing()) {
      <span class="text-muted-foreground shrink-0 text-xs font-medium">{{ trailing() }}</span>
    }
    <ng-content select="[trailing]" />
  `,
    })
], AndroidListItemComponent);

export { AndroidListItemComponent as A };
