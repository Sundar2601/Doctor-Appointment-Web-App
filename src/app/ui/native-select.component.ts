import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown } from '@ng-icons/lucide'

/** Figma "Native Select": wraps a real `<select>` and adds a chevron. Usage: `<app-native-select><select id="x">...</select></app-native-select>`. */
@Component({
  selector: 'app-native-select',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronDown })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative block w-full [&>select]:border-input [&>select]:bg-background [&>select]:focus-visible:outline-ring [&>select]:h-9 [&>select]:w-full [&>select]:cursor-pointer [&>select]:appearance-none [&>select]:rounded-md [&>select]:border [&>select]:py-0 [&>select]:pr-9 [&>select]:pl-3 [&>select]:text-sm [&>select]:shadow-xs [&>select]:focus-visible:outline-2 [&>select]:focus-visible:outline-offset-1 [&>select:disabled]:cursor-not-allowed [&>select:disabled]:opacity-50 [&>select[aria-invalid=true]]:border-destructive',
  },
  template: `
    <ng-content select="select" />
    <ng-icon name="lucideChevronDown" class="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
  `,
})
export class NativeSelectComponent {}
