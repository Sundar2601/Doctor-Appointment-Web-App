import { Directive } from '@angular/core'

/**
 * Figma "Slider" (4px track, 16px thumb). Usage: `<input type="range" appSlider min="0" max="100">`.
 * Track fill uses the `--ui-slider-fill` custom property; set it from the value, e.g.
 * `[style.--ui-slider-fill.%]="value"`. Track and thumb styles are in `utilities.css` (`.ui-slider`).
 */
@Directive({
  selector: 'input[type=range][appSlider]',
  host: {
    class:
      'ui-slider focus-visible:outline-ring h-4 w-60 cursor-pointer appearance-none bg-transparent focus-visible:outline-[3px] focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
  },
})
export class SliderDirective {}
