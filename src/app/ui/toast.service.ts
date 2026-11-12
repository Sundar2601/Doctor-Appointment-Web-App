import { Injectable, signal } from '@angular/core'

export interface Toast {
  id: number
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}
export interface ToastOptions {
  description?: string
  actionLabel?: string
  onAction?: () => void
  /** ms before auto-dismiss; 0 keeps it until dismissed. Default 4000. */
  duration?: number
}

/** Figma "Sonner". `inject(ToastService).show('Event has been created', { description: '...' })`; render `<app-toaster />` once in the root. */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0
  private readonly _toasts = signal<Toast[]>([])
  readonly toasts = this._toasts.asReadonly()

  show(title: string, options: ToastOptions = {}): number {
    const id = this.nextId++
    const { duration = 4000, ...rest } = options
    this._toasts.update((t) => [...t, { id, title, ...rest }])
    if (duration > 0) setTimeout(() => this.dismiss(id), duration)
    return id
  }

  dismiss(id: number) {
    this._toasts.update((t) => t.filter((x) => x.id !== id))
  }
}
