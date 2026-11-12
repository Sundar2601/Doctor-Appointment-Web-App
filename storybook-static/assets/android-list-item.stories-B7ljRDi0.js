import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { A as AndroidListItemComponent } from './android-list-item.component-CSvoLk3f.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';
import './ng-icons-lucide-DF7QvMAc.js';
import './android-icons-D68AZP6J.js';

const meta = {
  title: 'Mobile/Android/List Item',
  component: AndroidListItemComponent,
  decorators: [moduleMetadata({
    imports: [AndroidListItemComponent]
  })],
  args: {
    headline: 'List item headline',
    supporting: 'Supporting text goes here',
    leading: 'A',
    trailing: '10:24'
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-[412px]" role="list">
        <app-android-list-item
          [headline]="headline" [supporting]="supporting" [leading]="leading" [leadingIcon]="leadingIcon" [trailing]="trailing"
        />
      </div>`
  })
};
const TwoLine = {};
const OneLine = {
  args: {
    supporting: undefined,
    trailing: undefined
  }
};
const WithIcon = {
  args: {
    leading: undefined,
    leadingIcon: 'lucideMail',
    trailing: undefined
  }
};
const __namedExportsOrder = ["TwoLine", "OneLine", "WithIcon"];
TwoLine.parameters = {
  ...TwoLine.parameters,
  docs: {
    ...TwoLine.parameters?.docs,
    source: {
      originalSource: "{}",
      ...TwoLine.parameters?.docs?.source
    }
  }
};
OneLine.parameters = {
  ...OneLine.parameters,
  docs: {
    ...OneLine.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    supporting: undefined,\n    trailing: undefined\n  }\n}",
      ...OneLine.parameters?.docs?.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...WithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    leading: undefined,\n    leadingIcon: 'lucideMail',\n    trailing: undefined\n  }\n}",
      ...WithIcon.parameters?.docs?.source
    }
  }
};

export { OneLine, TwoLine, WithIcon, __namedExportsOrder, meta as default };
