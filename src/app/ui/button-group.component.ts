import { ChangeDetectionStrategy, Component } from '@angular/core'

/** Figma "Button Group": joins `button[appButton]` children into one bordered unit. Use `variant="ghost"`/`outline` buttons inside. */
@Component({
  selector: 'app-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group',
    class:
      'border-input inline-flex items-stretch overflow-hidden rounded-md border shadow-xs [&>*]:rounded-none [&>*]:border-0 [&>*:not(:first-child)]:border-l [&>*]:bg-background',
  },
  template: '<ng-content />',
})
export class ButtonGroupComponent {}
