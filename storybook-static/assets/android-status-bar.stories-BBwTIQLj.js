import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DF7QvMAc.js';
import { A as ANDROID_ICONS } from './android-icons-D68AZP6J.js';
import './preload-helper-D5QYaGzd.js';

/** Android 24dp status bar plus 24dp gesture navigation area, edge-to-edge. */
let AndroidStatusBarComponent = class AndroidStatusBarComponent {
    time = input('9:30');
    gestureBar = input(true);
    static propDecorators = {
        time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false, transform: undefined },] }],
        gestureBar: [{ type: Input, args: [{ isSignal: true, alias: "gestureBar", required: false, transform: undefined },] }]
    };
};
AndroidStatusBarComponent = __decorate([
    Component({
        selector: 'app-android-status-bar',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background text-foreground block w-full' },
        template: `
    <div class="flex h-6 items-center justify-between px-4">
      <span class="text-xs font-semibold">{{ time() }}</span>
      <span class="flex items-center gap-1" aria-hidden="true">
        <ng-icon name="lucideWifi" size="14" />
        <ng-icon name="lucideBatteryFull" size="16" />
      </span>
    </div>
    @if (gestureBar()) {
      <div class="flex h-6 items-center justify-center" aria-hidden="true">
        <span class="bg-foreground h-1 w-[108px] rounded-full"></span>
      </div>
    }
  `,
    })
], AndroidStatusBarComponent);

const meta = {
  title: 'Mobile/Android/Status Bar',
  component: AndroidStatusBarComponent,
  decorators: [moduleMetadata({
    imports: [AndroidStatusBarComponent]
  })],
  args: {
    time: '9:30',
    gestureBar: true
  },
  render: args => ({
    props: args,
    template: `<div class="w-[412px]"><app-android-status-bar [time]="time" [gestureBar]="gestureBar" /></div>`
  })
};
const Default = {};
const WithoutGestureBar = {
  args: {
    gestureBar: false
  }
};
const __namedExportsOrder = ["Default", "WithoutGestureBar"];
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
WithoutGestureBar.parameters = {
  ...WithoutGestureBar.parameters,
  docs: {
    ...WithoutGestureBar.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    gestureBar: false\n  }\n}",
      ...WithoutGestureBar.parameters?.docs?.source
    }
  }
};

export { Default, WithoutGestureBar, __namedExportsOrder, meta as default };
