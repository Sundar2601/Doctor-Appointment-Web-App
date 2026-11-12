import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, o as output, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DvOyu-Mi.js';
import { A as ANDROID_ICONS } from './android-icons-xicRbOlm.js';
import './preload-helper-D5QYaGzd.js';

/** Bottom navigation bar (80dp). Place `app-android-nav-bar-item` children inside. */
let AndroidNavBarComponent = class AndroidNavBarComponent {
    label = input('Primary');
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
AndroidNavBarComponent = __decorate([
    Component({
        selector: 'app-android-nav-bar',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-background flex h-20 w-full items-center justify-around gap-2 px-2',
            role: 'navigation',
            '[attr.aria-label]': 'label()',
        },
        template: `<ng-content />`,
    })
], AndroidNavBarComponent);
/** One destination: icon in a 64x32 pill (filled when active) with a label underneath. */
let AndroidNavBarItemComponent = class AndroidNavBarItemComponent {
    icon = input.required();
    label = input.required();
    active = input(false);
    pressed = output();
    static propDecorators = {
        icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: true, transform: undefined },] }],
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false, transform: undefined },] }],
        pressed: [{ type: Output, args: ["pressed",] }]
    };
};
AndroidNavBarItemComponent = __decorate([
    Component({
        selector: 'app-android-nav-bar-item',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-1 justify-center' },
        template: `
    <button
      type="button"
      class="group flex flex-col items-center gap-1"
      [attr.aria-current]="active() ? 'page' : null"
      (click)="pressed.emit()"
    >
      <span
        class="group-hover:bg-secondary flex h-8 w-16 items-center justify-center rounded-full"
        [class.bg-secondary]="active()"
        [class.text-foreground]="active()"
        [class.text-muted-foreground]="!active()"
      >
        <ng-icon [name]="icon()" size="24" />
      </span>
      <span class="text-xs font-medium" [class.text-foreground]="active()" [class.text-muted-foreground]="!active()">{{ label() }}</span>
    </button>
  `,
    })
], AndroidNavBarItemComponent);

const meta = {
  title: 'Mobile/Android/Navigation Bar',
  component: AndroidNavBarItemComponent,
  decorators: [moduleMetadata({
    imports: [AndroidNavBarComponent, AndroidNavBarItemComponent]
  })],
  args: {
    icon: 'lucideHouse',
    label: 'Home',
    active: true
  }
};
const item = `<div class="w-24"><app-android-nav-bar-item [icon]="icon" [label]="label" [active]="active" /></div>`;
const ItemActive = {
  render: args => ({
    props: args,
    template: item
  })
};
const ItemInactive = {
  args: {
    active: false
  },
  render: args => ({
    props: args,
    template: item
  })
};
const Default = {
  render: () => ({
    props: {
      tab: 'Home'
    },
    template: `
      <div class="w-[412px]">
        <app-android-nav-bar>
          <app-android-nav-bar-item icon="lucideHouse" label="Home" [active]="tab === 'Home'" (pressed)="tab = 'Home'" />
          <app-android-nav-bar-item icon="lucideSearch" label="Search" [active]="tab === 'Search'" (pressed)="tab = 'Search'" />
          <app-android-nav-bar-item icon="lucideBell" label="Alerts" [active]="tab === 'Alerts'" (pressed)="tab = 'Alerts'" />
          <app-android-nav-bar-item icon="lucideUser" label="Profile" [active]="tab === 'Profile'" (pressed)="tab = 'Profile'" />
        </app-android-nav-bar>
      </div>`
  })
};
const __namedExportsOrder = ["ItemActive", "ItemInactive", "Default"];
ItemActive.parameters = {
  ...ItemActive.parameters,
  docs: {
    ...ItemActive.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: item\n  })\n}",
      ...ItemActive.parameters?.docs?.source
    }
  }
};
ItemInactive.parameters = {
  ...ItemInactive.parameters,
  docs: {
    ...ItemInactive.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    active: false\n  },\n  render: args => ({\n    props: args,\n    template: item\n  })\n}",
      ...ItemInactive.parameters?.docs?.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      tab: 'Home'\n    },\n    template: `\n      <div class=\"w-[412px]\">\n        <app-android-nav-bar>\n          <app-android-nav-bar-item icon=\"lucideHouse\" label=\"Home\" [active]=\"tab === 'Home'\" (pressed)=\"tab = 'Home'\" />\n          <app-android-nav-bar-item icon=\"lucideSearch\" label=\"Search\" [active]=\"tab === 'Search'\" (pressed)=\"tab = 'Search'\" />\n          <app-android-nav-bar-item icon=\"lucideBell\" label=\"Alerts\" [active]=\"tab === 'Alerts'\" (pressed)=\"tab = 'Alerts'\" />\n          <app-android-nav-bar-item icon=\"lucideUser\" label=\"Profile\" [active]=\"tab === 'Profile'\" (pressed)=\"tab = 'Profile'\" />\n        </app-android-nav-bar>\n      </div>`\n  })\n}",
      ...Default.parameters?.docs?.source
    }
  }
};

export { Default, ItemActive, ItemInactive, __namedExportsOrder, meta as default };
