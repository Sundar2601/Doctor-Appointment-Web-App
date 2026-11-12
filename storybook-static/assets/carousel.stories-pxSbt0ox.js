import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, D as Directive, C as Component, a as ChangeDetectionStrategy, Q as contentChildren, s as signal, U as ContentChildren } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, C as lucideChevronRight, D as lucideChevronLeft } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** A single slide: `<div appCarouselSlide>...</div>`. */
let CarouselSlideDirective = class CarouselSlideDirective {
};
CarouselSlideDirective = __decorate([
    Directive({
        selector: '[appCarouselSlide]',
        host: {
            class: 'bg-card text-card-foreground flex h-50 w-full shrink-0 items-center justify-center rounded-lg border',
            role: 'group',
            'aria-roledescription': 'slide',
        },
    })
], CarouselSlideDirective);
/** Usage: `<app-carousel><div appCarouselSlide>1</div>...</app-carousel>`. */
let CarouselComponent = class CarouselComponent {
    slides = contentChildren();
    index = signal(0);
    go(n) {
        this.index.update((i) => Math.min(Math.max(i + n, 0), this.slides().length - 1));
    }
    static propDecorators = {
        slides: [{ type: ContentChildren, args: [CarouselSlideDirective, { isSignal: true },] }]
    };
};
CarouselComponent = __decorate([
    Component({
        selector: 'app-carousel',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex w-80 flex-col items-center gap-3', role: 'region', 'aria-roledescription': 'carousel' },
        template: `
    <div class="w-full overflow-hidden rounded-lg">
      <div class="flex transition-transform duration-300" [style.transform]="'translateX(-' + index() * 100 + '%)'"><ng-content /></div>
    </div>
    <div class="flex gap-2">
      <button
        type="button"
        class="border-input bg-background hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-full border shadow-xs focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Previous slide"
        [disabled]="index() === 0"
        (click)="go(-1)"
      >
        <ng-icon name="lucideChevronLeft" size="16" />
      </button>
      <button
        type="button"
        class="border-input bg-background hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-full border shadow-xs focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Next slide"
        [disabled]="index() >= slides().length - 1"
        (click)="go(1)"
      >
        <ng-icon name="lucideChevronRight" size="16" />
      </button>
    </div>
  `,
    })
], CarouselComponent);

const meta = {
  title: 'Data/Carousel',
  decorators: [moduleMetadata({
    imports: [CarouselComponent, CarouselSlideDirective]
  })]
};
const Hospitals = {
  render: () => ({
    template: `
      <app-carousel>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">JIPMER</p><p class="text-muted-foreground text-sm">Multi-specialty tertiary care</p></div></div>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">Aravind Eye Hospital</p><p class="text-muted-foreground text-sm">Ophthalmology and eye surgery</p></div></div>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">Mahatma Gandhi Medical College</p><p class="text-muted-foreground text-sm">General medicine and surgery</p></div></div>
      </app-carousel>`
  })
};
const Doctors = {
  render: () => ({
    props: {
      doctors: [{
        name: 'Dr. Anand Kumar',
        specialty: 'Cardiology'
      }, {
        name: 'Dr. Meera Nair',
        specialty: 'Pediatrics'
      }, {
        name: 'Dr. Suresh Babu',
        specialty: 'Orthopedics'
      }, {
        name: 'Dr. Kavitha Rajan',
        specialty: 'Dermatology'
      }]
    },
    template: `
      <app-carousel>
        @for (d of doctors; track d.name) {
          <div appCarouselSlide><div class="text-center"><p class="font-semibold">{{ d.name }}</p><p class="text-muted-foreground text-sm">{{ d.specialty }}</p></div></div>
        }
      </app-carousel>`
  })
};
const __namedExportsOrder = ["Hospitals", "Doctors"];
Hospitals.parameters = {
  ...Hospitals.parameters,
  docs: {
    ...Hospitals.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `\n      <app-carousel>\n        <div appCarouselSlide><div class=\"p-4 text-center\"><p class=\"font-semibold\">JIPMER</p><p class=\"text-muted-foreground text-sm\">Multi-specialty tertiary care</p></div></div>\n        <div appCarouselSlide><div class=\"p-4 text-center\"><p class=\"font-semibold\">Aravind Eye Hospital</p><p class=\"text-muted-foreground text-sm\">Ophthalmology and eye surgery</p></div></div>\n        <div appCarouselSlide><div class=\"p-4 text-center\"><p class=\"font-semibold\">Mahatma Gandhi Medical College</p><p class=\"text-muted-foreground text-sm\">General medicine and surgery</p></div></div>\n      </app-carousel>`\n  })\n}",
      ...Hospitals.parameters?.docs?.source
    }
  }
};
Doctors.parameters = {
  ...Doctors.parameters,
  docs: {
    ...Doctors.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      doctors: [{\n        name: 'Dr. Anand Kumar',\n        specialty: 'Cardiology'\n      }, {\n        name: 'Dr. Meera Nair',\n        specialty: 'Pediatrics'\n      }, {\n        name: 'Dr. Suresh Babu',\n        specialty: 'Orthopedics'\n      }, {\n        name: 'Dr. Kavitha Rajan',\n        specialty: 'Dermatology'\n      }]\n    },\n    template: `\n      <app-carousel>\n        @for (d of doctors; track d.name) {\n          <div appCarouselSlide><div class=\"text-center\"><p class=\"font-semibold\">{{ d.name }}</p><p class=\"text-muted-foreground text-sm\">{{ d.specialty }}</p></div></div>\n        }\n      </app-carousel>`\n  })\n}",
      ...Doctors.parameters?.docs?.source
    }
  }
};

export { Doctors, Hospitals, __namedExportsOrder, meta as default };
