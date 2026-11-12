import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, r as lucideCheck, x as lucideActivity } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Left brand panel for split-screen sign in / sign up: logo, illustration, headline and benefit list (Figma "Auth Brand Panel"). */
let AuthBrandPanelComponent = class AuthBrandPanelComponent {
    brand = input('Doctor Appointment');
    headline = input('Book hospital appointments across Puducherry.');
    perks = input([
        'Browse hospitals and specialists',
        'Pick a doctor, a date and an available time',
        'Search, filter and cancel your bookings',
    ]);
    static propDecorators = {
        brand: [{ type: Input, args: [{ isSignal: true, alias: "brand", required: false, transform: undefined },] }],
        headline: [{ type: Input, args: [{ isSignal: true, alias: "headline", required: false, transform: undefined },] }],
        perks: [{ type: Input, args: [{ isSignal: true, alias: "perks", required: false, transform: undefined },] }]
    };
};
AuthBrandPanelComponent = __decorate([
    Component({
        selector: 'app-auth-brand-panel',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideActivity, lucideCheck })],
        host: {
            class: 'bg-primary text-primary-foreground relative flex min-h-full flex-col justify-between gap-10 overflow-hidden p-10 lg:p-16',
        },
        template: `
    <div aria-hidden="true" class="bg-primary-foreground/10 pointer-events-none absolute -top-48 left-1/3 size-[620px] rounded-full"></div>
    <div
      aria-hidden="true"
      class="bg-primary-foreground/10 pointer-events-none absolute -bottom-24 -left-36 size-[460px] rounded-full"
    ></div>
    <div aria-hidden="true" class="bg-primary-foreground/15 pointer-events-none absolute top-1/2 -right-12 size-56 rounded-full"></div>

    <div class="relative flex items-center gap-3">
      <span class="bg-primary-foreground text-primary flex size-10 items-center justify-center rounded-lg"
        ><ng-icon name="lucideActivity" size="16"
      /></span>
      <span class="text-lg font-semibold">{{ brand() }}</span>
    </div>

    <svg
      class="relative mx-auto h-auto w-full max-w-104"
      viewBox="0 0 416 230"
      fill="none"
      role="img"
      aria-label="Doctor with two patients"
    >
      <circle cx="82" cy="60" r="26" fill="currentColor" fill-opacity=".45" />
      <path d="M0 230c0-48 36-86 82-86s82 38 82 86Z" fill="currentColor" fill-opacity=".35" />
      <circle cx="334" cy="60" r="26" fill="currentColor" fill-opacity=".45" />
      <path d="M252 230c0-48 36-86 82-86s82 38 82 86Z" fill="currentColor" fill-opacity=".35" />
      <circle cx="208" cy="48" r="42" fill="currentColor" />
      <path d="M112 230c0-70 43-118 96-118s96 48 96 118Z" fill="currentColor" fill-opacity=".92" />
      <path d="M176 128v36a32 32 0 0 0 64 0v-36" stroke="var(--primary)" stroke-width="6" stroke-linecap="round" />
      <rect x="248" y="150" width="34" height="34" rx="6" fill="var(--primary)" />
      <path d="M265 158v18M256 167h18" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
    </svg>

    <div class="relative grid gap-5">
      <h2 class="max-w-xl text-4xl leading-10 font-bold">{{ headline() }}</h2>
      <ul class="grid gap-3 text-sm">
        @for (perk of perks(); track perk) {
          <li class="flex items-center gap-3">
            <span class="bg-primary-foreground/20 flex size-6 shrink-0 items-center justify-center rounded-full"
              ><ng-icon name="lucideCheck" size="16"
            /></span>
            {{ perk }}
          </li>
        }
      </ul>
    </div>
  `,
    })
], AuthBrandPanelComponent);

const meta = {
  title: 'Auth/Brand Panel',
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [moduleMetadata({
    imports: [AuthBrandPanelComponent]
  })],
  argTypes: {
    brand: {
      control: 'text'
    },
    headline: {
      control: 'text'
    },
    perks: {
      control: 'object'
    }
  },
  render: args => ({
    props: args,
    template: `<div style="height: 720px; width: 480px"><app-auth-brand-panel [brand]="brand" [headline]="headline" [perks]="perks" /></div>`
  })
};
const Default = {
  args: {
    brand: 'Doctor Appointment',
    headline: 'Book hospital appointments across Puducherry.',
    perks: ['Browse hospitals and specialists', 'Pick a doctor, a date and an available time', 'Search, filter and cancel your bookings']
  }
};
const SignUp = {
  args: {
    brand: 'Doctor Appointment',
    headline: 'Create your account and see a doctor sooner.',
    perks: ['Free to join', 'Manage family appointments in one place']
  }
};
const __namedExportsOrder = ["Default", "SignUp"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    brand: 'Doctor Appointment',\n    headline: 'Book hospital appointments across Puducherry.',\n    perks: ['Browse hospitals and specialists', 'Pick a doctor, a date and an available time', 'Search, filter and cancel your bookings']\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
SignUp.parameters = {
  ...SignUp.parameters,
  docs: {
    ...SignUp.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    brand: 'Doctor Appointment',\n    headline: 'Create your account and see a doctor sooner.',\n    perks: ['Free to join', 'Manage family appointments in one place']\n  }\n}",
      ...SignUp.parameters?.docs?.source
    }
  }
};

export { Default, SignUp, __namedExportsOrder, meta as default };
