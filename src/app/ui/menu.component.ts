import { CdkContextMenuTrigger, CdkMenu, CdkMenuBar, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu'
import { ChangeDetectionStrategy, Component, Directive, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck } from '@ng-icons/lucide'
import { ButtonDirective, type ButtonVariant } from './button.directive'

export interface MenuEntry {
  label?: string
  value?: string
  shortcut?: string
  destructive?: boolean
  disabled?: boolean
  /** Renders a divider. */
  separator?: boolean
  /** Renders a non-interactive group label. */
  heading?: boolean
  /** Shows a check mark. */
  checked?: boolean
}
export interface MenubarMenu {
  label: string
  entries: MenuEntry[]
}

/** Styled menu surface (CDK menu, role=menu, arrow-key navigation). */
@Directive({
  selector: 'div[appMenuPanel]',
  hostDirectives: [CdkMenu],
  host: { class: 'bg-popover text-popover-foreground flex min-w-48 flex-col rounded-md border p-1 shadow-md outline-none' },
})
export class MenuPanelDirective {}

/** Renders `entries` as menu items; must sit inside an `appMenuPanel`. */
@Component({
  selector: 'app-menu-entries',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkMenuItem, NgIcon],
  viewProviders: [provideIcons({ lucideCheck })],
  host: { class: 'contents' },
  template: `
    @for (e of entries(); track $index) {
      @if (e.separator) {
        <div role="separator" class="bg-border -mx-1 my-1 h-px"></div>
      } @else if (e.heading) {
        <div class="px-2 py-1.5 text-sm font-medium">{{ e.label }}</div>
      } @else {
        <button
          type="button"
          cdkMenuItem
          [cdkMenuItemDisabled]="!!e.disabled"
          (cdkMenuItemTriggered)="picked.emit(e)"
          class="hover:bg-accent focus:bg-accent focus:text-accent-foreground flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50"
          [class.text-destructive]="e.destructive"
        >
          <span class="flex-1">{{ e.label }}</span>
          @if (e.checked) {
            <ng-icon name="lucideCheck" size="16" />
          }
          @if (e.shortcut) {
            <span class="text-muted-foreground ml-auto text-xs tracking-widest">{{ e.shortcut }}</span>
          }
        </button>
      }
    }
  `,
})
export class MenuEntriesComponent {
  readonly entries = input.required<MenuEntry[]>()
  readonly picked = output<MenuEntry>()
}

/** Usage: `<app-dropdown-menu label="Open" [entries]="items" (selected)="onPick($event)" />`. */
@Component({
  selector: 'app-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkMenuTrigger, MenuPanelDirective, MenuEntriesComponent, ButtonDirective],
  host: { class: 'inline-block' },
  template: `
    <button type="button" appButton [variant]="variant()" [cdkMenuTriggerFor]="menu">{{ label() }}</button>
    <ng-template #menu>
      <div appMenuPanel><app-menu-entries [entries]="entries()" (picked)="selected.emit($event)" /></div>
    </ng-template>
  `,
})
export class DropdownMenuComponent {
  readonly label = input('Open')
  readonly variant = input<ButtonVariant>('outline')
  readonly entries = input.required<MenuEntry[]>()
  readonly selected = output<MenuEntry>()
}

/** Right-click menu around projected content. Usage: `<app-context-menu [entries]="items"><div>Right click here</div></app-context-menu>`. */
@Component({
  selector: 'app-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkContextMenuTrigger, MenuPanelDirective, MenuEntriesComponent],
  host: { class: 'block' },
  template: `
    <div [cdkContextMenuTriggerFor]="menu"><ng-content /></div>
    <ng-template #menu>
      <div appMenuPanel><app-menu-entries [entries]="entries()" (picked)="selected.emit($event)" /></div>
    </ng-template>
  `,
})
export class ContextMenuComponent {
  readonly entries = input.required<MenuEntry[]>()
  readonly selected = output<MenuEntry>()
}

/** Horizontal menu bar. Usage: `<app-menubar [menus]="[{label:'File', entries:[...]}]" (selected)="..." />`. */
@Component({
  selector: 'app-menubar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkMenuBar, CdkMenuItem, CdkMenuTrigger, MenuPanelDirective, MenuEntriesComponent],
  host: { class: 'inline-block' },
  template: `
    <div cdkMenuBar class="bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs">
      @for (m of menus(); track m.label) {
        <button
          type="button"
          cdkMenuItem
          [cdkMenuTriggerFor]="menu"
          class="hover:bg-accent focus:bg-accent aria-expanded:bg-accent rounded-sm px-2 py-1 text-sm font-medium outline-none"
        >
          {{ m.label }}
        </button>
        <ng-template #menu>
          <div appMenuPanel><app-menu-entries [entries]="m.entries" (picked)="selected.emit($event)" /></div>
        </ng-template>
      }
    </div>
  `,
})
export class MenubarComponent {
  readonly menus = input.required<MenubarMenu[]>()
  readonly selected = output<MenuEntry>()
}
