/** Typed readers for DOM events, so templates avoid `$any($event.target)`. */
type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const control = (e: Event) => e.target as FormControl

export const eventValue = (e: Event): string => control(e).value
export const eventChecked = (e: Event): boolean => (e.target as HTMLInputElement).checked
export const eventNumber = (e: Event): number => (e.target as HTMLInputElement).valueAsNumber
export const eventFiles = (e: Event): FileList | null => (e.target as HTMLInputElement).files
