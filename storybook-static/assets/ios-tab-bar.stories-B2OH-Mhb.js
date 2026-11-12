import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, L as lucideMessageCircle, n as lucideHeart, s as lucideCalendar, J as lucideSlidersHorizontal, b as lucideUser, t as lucideBell, g as lucideSearch, m as lucideHouse } from './ng-icons-lucide-DF7QvMAc.js';
import { a as IosHomeIndicatorComponent } from './ios-status-bar.component-CyFD_x6e.js';
import './preload-helper-D5QYaGzd.js';

/** One destination in an iOS tab bar. `icon` is a lucide icon name such as `lucideHouse`. */
let IosTabBarItemComponent = class IosTabBarItemComponent {
    label = input.required();
    icon = input.required();
    selected = input(false);
    tabSelect = output();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: true, transform: undefined },] }],
        selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false, transform: undefined },] }],
        tabSelect: [{ type: Output, args: ["tabSelect",] }]
    };
};
IosTabBarItemComponent = __decorate([
    Component({
        selector: 'app-ios-tab-bar-item',
        imports: [NgIcon],
        viewProviders: [
            provideIcons({
                lucideHouse,
                lucideSearch,
                lucideBell,
                lucideUser,
                lucideSlidersHorizontal,
                lucideCalendar,
                lucideHeart,
                lucideMessageCircle,
            }),
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-1' },
        template: `
    <button
      type="button"
      role="tab"
      class="focus-visible:ring-ring/50 flex h-[49px] flex-1 flex-col items-center justify-center gap-0.5 rounded-md text-[10px] leading-3 focus-visible:ring-[3px] focus-visible:outline-none"
      [class.text-primary]="selected()"
      [class.text-foreground]="!selected()"
      [attr.aria-selected]="selected()"
      (click)="tabSelect.emit()"
    >
      <ng-icon [name]="icon()" size="24" />
      {{ label() }}
    </button>
  `,
    })
], IosTabBarItemComponent);
/** Bottom iOS tab bar (49pt + home indicator). */
let IosTabBarComponent = class IosTabBarComponent {
    homeIndicator = input(true);
    static propDecorators = {
        homeIndicator: [{ type: Input, args: [{ isSignal: true, alias: "homeIndicator", required: false, transform: undefined },] }]
    };
};
IosTabBarComponent = __decorate([
    Component({
        selector: 'app-ios-tab-bar',
        imports: [IosHomeIndicatorComponent],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background border-border block w-full border-t' },
        template: `
    <div role="tablist" class="flex px-2"><ng-content /></div>
    @if (homeIndicator()) {
      <app-ios-home-indicator />
    }
  `,
    })
], IosTabBarComponent);

const meta = {
  title: 'Mobile/iOS/Tab Bar',
  decorators: [moduleMetadata({
    imports: [IosTabBarComponent, IosTabBarItemComponent]
  })],
  args: {
    homeIndicator: true
  },
  render: args => ({
    props: {
      ...args,
      tabs: [['Home', 'lucideHouse'], ['Search', 'lucideSearch'], ['Alerts', 'lucideBell'], ['Profile', 'lucideUser'], ['Settings', 'lucideSlidersHorizontal']],
      active: 'Home'
    },
    template: `<div class="w-[393px]">
      <app-ios-tab-bar [homeIndicator]="homeIndicator">
        @for (t of tabs; track t[0]) {
          <app-ios-tab-bar-item [label]="t[0]" [icon]="t[1]" [selected]="active === t[0]" (tabSelect)="active = t[0]" />
        }
      </app-ios-tab-bar></div>`
  })
};
const Default = {};
const TabBarItem = {
  render: () => ({
    props: {},
    template: `<div class="flex w-[160px] gap-2">
      <app-ios-tab-bar-item label="Home" icon="lucideHouse" [selected]="true" />
      <app-ios-tab-bar-item label="Search" icon="lucideSearch" /></div>`
  })
};
const __namedExportsOrder = ["Default", "TabBarItem"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
TabBarItem.parameters = {
  ...TabBarItem.parameters,
  docs: {
    ...TabBarItem.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {},\n    template: `<div class=\"flex w-[160px] gap-2\">\n      <app-ios-tab-bar-item label=\"Home\" icon=\"lucideHouse\" [selected]=\"true\" />\n      <app-ios-tab-bar-item label=\"Search\" icon=\"lucideSearch\" /></div>`\n  })\n}",
      ...TabBarItem.parameters?.docs?.source
    }
  }
};

export { Default, TabBarItem, __namedExportsOrder, meta as default };
