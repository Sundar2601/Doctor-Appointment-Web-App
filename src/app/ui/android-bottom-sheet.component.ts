import { ChangeDetectionStrategy, Component } from '@angular/core'

/** Modal bottom sheet with a drag handle and 28dp top corners. Project any content. */
@Component({
  selector: 'app-android-bottom-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block w-full rounded-t-[28px] pb-4 shadow-lg', role: 'dialog', 'aria-modal': 'true' },
  template: `
    <div class="flex h-6 items-center justify-center" aria-hidden="true">
      <span class="bg-muted-foreground h-1 w-8 rounded-full"></span>
    </div>
    <ng-content />
  `,
})
export class AndroidBottomSheetComponent {}
