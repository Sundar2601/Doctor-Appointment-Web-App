import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { C as ChatThreadComponent, M as MessageComponent } from './message.component-B_QbaYZC.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';
import './avatar.component-ttD-G_1Z.js';

const meta = {
  title: 'AI/Message',
  decorators: [moduleMetadata({
    imports: [ChatThreadComponent, MessageComponent]
  })],
  render: args => ({
    props: args,
    template: `<div class="w-[36rem] max-w-full"><app-chat-thread>
      <app-message role="user">I need a cardiology appointment in Puducherry this week.</app-message>
      <app-message role="assistant" name="Care Navigator">
        I found three cardiologists in Puducherry with openings on Thursday. Dr. Meena Raman at JIPMER has the earliest slot at 10:30 AM.
        <div appMessageActions>
          <button type="button" class="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md" aria-label="Copy">⧉</button>
          <button type="button" class="hover:bg-accent inline-flex size-8 items-center justify-center rounded-md" aria-label="Regenerate">↻</button>
        </div>
      </app-message>
    </app-chat-thread></div>`
  })
};
const Default = {};
const UserOnly = {
  render: () => ({
    template: `<app-message role="user">Book me a slot with Dr. Raman.</app-message>`
  })
};
const __namedExportsOrder = ["Default", "UserOnly"];
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
UserOnly.parameters = {
  ...UserOnly.parameters,
  docs: {
    ...UserOnly.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<app-message role=\"user\">Book me a slot with Dr. Raman.</app-message>`\n  })\n}",
      ...UserOnly.parameters?.docs?.source
    }
  }
};

export { Default, UserOnly, __namedExportsOrder, meta as default };
