import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown, lucideChevronRight, lucideFile, lucideFolder } from '@ng-icons/lucide'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
}

/** Expandable tree. `[(selected)]` holds the selected node id. */
@Component({
  selector: 'app-tree-view',
  imports: [NgIcon, NgTemplateOutlet],
  viewProviders: [provideIcons({ lucideChevronDown, lucideChevronRight, lucideFile, lucideFolder })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block text-sm' },
  template: `
    <ng-template #branch let-nodes let-level="level">
      <ul [attr.role]="level === 0 ? 'tree' : 'group'" class="grid gap-0.5">
        @for (n of nodes; track n.id) {
          <li role="treeitem" [attr.aria-expanded]="n.children ? isOpen(n.id) : null" [attr.aria-selected]="selected() === n.id">
            <button
              type="button"
              class="hover:bg-accent focus-visible:ring-ring/50 flex h-7 w-full items-center gap-1.5 rounded-md pr-2 text-left focus-visible:ring-[3px] focus-visible:outline-none"
              [class.bg-accent]="selected() === n.id"
              [style.padding-left.px]="8 + level * 16"
              (click)="activate(n)"
            >
              @if (n.children) {
                <ng-icon [name]="isOpen(n.id) ? 'lucideChevronDown' : 'lucideChevronRight'" size="16" />
              } @else {
                <span class="size-4 shrink-0"></span>
              }
              <ng-icon [name]="n.children ? 'lucideFolder' : 'lucideFile'" size="16" />
              <span class="truncate">{{ n.label }}</span>
            </button>
            @if (n.children && isOpen(n.id)) {
              <ng-container [ngTemplateOutlet]="branch" [ngTemplateOutletContext]="{ $implicit: n.children, level: level + 1 }" />
            }
          </li>
        }
      </ul>
    </ng-template>
    <ng-container [ngTemplateOutlet]="branch" [ngTemplateOutletContext]="{ $implicit: nodes(), level: 0 }" />
  `,
})
export class TreeViewComponent {
  readonly nodes = input.required<TreeNode[]>()
  readonly selected = model<string | null>(null)
  private readonly open = signal<ReadonlySet<string>>(new Set())
  protected isOpen(id: string) {
    return this.open().has(id)
  }
  protected activate(n: TreeNode) {
    this.selected.set(n.id)
    if (!n.children) return
    const next = new Set(this.open())
    if (!next.delete(n.id)) next.add(n.id)
    this.open.set(next)
  }
}
