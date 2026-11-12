import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { I as IosStatusBarComponent, a as IosHomeIndicatorComponent } from './ios-status-bar.component-BZY3Fhws.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';
import './ng-icons-lucide-DvOyu-Mi.js';

const meta = {
  title: 'Mobile/iOS/Status Bar',
  decorators: [moduleMetadata({
    imports: [IosStatusBarComponent, IosHomeIndicatorComponent]
  })],
  args: {
    time: '9:41'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[393px]"><app-ios-status-bar [time]="time" /></div>`
  })
};
const Default = {};
const HomeIndicator = {
  render: () => ({
    props: {},
    template: `<div class="w-[393px]"><app-ios-home-indicator /></div>`
  })
};
const WithHomeIndicator = {
  render: args => ({
    props: args,
    template: `<div class="border-border flex h-[200px] w-[393px] flex-col justify-between border">
      <app-ios-status-bar [time]="time" /><app-ios-home-indicator /></div>`
  })
};
const __namedExportsOrder = ["Default", "HomeIndicator", "WithHomeIndicator"];
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
HomeIndicator.parameters = {
  ...HomeIndicator.parameters,
  docs: {
    ...HomeIndicator.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {},\n    template: `<div class=\"w-[393px]\"><app-ios-home-indicator /></div>`\n  })\n}",
      ...HomeIndicator.parameters?.docs?.source
    }
  }
};
WithHomeIndicator.parameters = {
  ...WithHomeIndicator.parameters,
  docs: {
    ...WithHomeIndicator.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"border-border flex h-[200px] w-[393px] flex-col justify-between border\">\n      <app-ios-status-bar [time]=\"time\" /><app-ios-home-indicator /></div>`\n  })\n}",
      ...WithHomeIndicator.parameters?.docs?.source
    }
  }
};

export { Default, HomeIndicator, WithHomeIndicator, __namedExportsOrder, meta as default };
