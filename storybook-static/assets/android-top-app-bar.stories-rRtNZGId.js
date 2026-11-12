import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, o as output, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DF7QvMAc.js';
import { A as ANDROID_ICONS } from './android-icons-D68AZP6J.js';
import './preload-helper-D5QYaGzd.js';

/** Material 3 top app bar (64dp). `actions` are icon names; extra content goes in the `[actions]` slot. */
let AndroidTopAppBarComponent = class AndroidTopAppBarComponent {
    variant = input('small');
    title = input.required();
    navIcon = input('lucideMenu');
    navLabel = input('Navigation menu');
    actions = input([]);
    navClick = output();
    actionClick = output();
    static propDecorators = {
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        navIcon: [{ type: Input, args: [{ isSignal: true, alias: "navIcon", required: false, transform: undefined },] }],
        navLabel: [{ type: Input, args: [{ isSignal: true, alias: "navLabel", required: false, transform: undefined },] }],
        actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false, transform: undefined },] }],
        navClick: [{ type: Output, args: ["navClick",] }],
        actionClick: [{ type: Output, args: ["actionClick",] }]
    };
};
AndroidTopAppBarComponent = __decorate([
    Component({
        selector: 'app-android-top-app-bar',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background text-foreground relative flex h-16 w-full items-center gap-1 px-1' },
        template: `
    @if (navIcon()) {
      <button
        type="button"
        class="hover:bg-secondary flex size-12 shrink-0 items-center justify-center rounded-full"
        [attr.aria-label]="navLabel()"
        (click)="navClick.emit()"
      >
        <ng-icon [name]="navIcon()!" size="24" />
      </button>
    }
    <h1
      class="min-w-0 flex-1 truncate text-[22px] leading-7"
      [class.px-3]="variant() === 'small' && !navIcon()"
      [class.text-center]="variant() === 'center-aligned'"
    >
      {{ title() }}
    </h1>
    <div class="flex shrink-0 items-center">
      @for (action of actions(); track action) {
        <button
          type="button"
          class="text-muted-foreground hover:bg-secondary flex size-12 items-center justify-center rounded-full"
          [attr.aria-label]="action"
          (click)="actionClick.emit(action)"
        >
          <ng-icon [name]="action" size="24" />
        </button>
      }
      <ng-content select="[actions]" />
    </div>
  `,
    })
], AndroidTopAppBarComponent);

const meta = {
  title: 'Mobile/Android/Top App Bar',
  component: AndroidTopAppBarComponent,
  decorators: [moduleMetadata({
    imports: [AndroidTopAppBarComponent]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'center-aligned']
    }
  },
  args: {
    variant: 'small',
    title: 'Inbox',
    navIcon: 'lucideMenu',
    actions: ['lucideSearch', 'lucideEllipsisVertical']
  },
  render: args => ({
    props: args,
    template: `<div class="w-[412px]"><app-android-top-app-bar [variant]="variant" [title]="title" [navIcon]="navIcon" [actions]="actions" /></div>`
  })
};
const Small = {};
const CenterAligned = {
  args: {
    variant: 'center-aligned'
  }
};
const BackNavigation = {
  args: {
    navIcon: 'lucideArrowLeft',
    title: 'Settings',
    actions: []
  }
};
const __namedExportsOrder = ["Small", "CenterAligned", "BackNavigation"];
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Small.parameters?.docs?.source
    }
  }
};
CenterAligned.parameters = {
  ...CenterAligned.parameters,
  docs: {
    ...CenterAligned.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'center-aligned'\n  }\n}",
      ...CenterAligned.parameters?.docs?.source
    }
  }
};
BackNavigation.parameters = {
  ...BackNavigation.parameters,
  docs: {
    ...BackNavigation.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    navIcon: 'lucideArrowLeft',\n    title: 'Settings',\n    actions: []\n  }\n}",
      ...BackNavigation.parameters?.docs?.source
    }
  }
};

export { BackNavigation, CenterAligned, Small, __namedExportsOrder, meta as default };
