import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { HoverCardComponent, HoverCardDirective } from './hover-card.directive'

const meta: Meta<HoverCardDirective> = {
  title: 'Overlays/Hover Card',
  decorators: [moduleMetadata({ imports: [HoverCardDirective, HoverCardComponent] })],
  argTypes: {
    hoverCardPosition: { control: 'select', options: ['top', 'bottom'] },
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
  },
  args: { hoverCardPosition: 'bottom', openDelay: 200, closeDelay: 150 },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-24">
        <a href="#" class="font-medium underline" appHoverCard [hoverCardContent]="card" [hoverCardPosition]="hoverCardPosition" [openDelay]="openDelay" [closeDelay]="closeDelay">@nextjs</a>
        <ng-template #card>
          <app-hover-card>
            <div class="flex gap-4">
              <span class="bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
              </span>
              <div class="flex flex-col gap-1">
                <p class="font-semibold">@nextjs</p>
                <p>The React Framework - created and maintained by @vercel.</p>
                <p class="text-muted-foreground text-xs">Joined December 2021</p>
              </div>
            </div>
          </app-hover-card>
        </ng-template>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<HoverCardDirective>

export const Bottom: Story = {}
export const Top: Story = { args: { hoverCardPosition: 'top' } }
export const CardSurface: Story = {
  render: () => ({
    template: `
      <app-hover-card>
        <div class="flex gap-4">
          <span class="bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
          </span>
          <div class="flex flex-col gap-1">
            <p class="font-semibold">@nextjs</p>
            <p>The React Framework - created and maintained by @vercel.</p>
            <p class="text-muted-foreground text-xs">Joined December 2021</p>
          </div>
        </div>
      </app-hover-card>`,
  }),
}
