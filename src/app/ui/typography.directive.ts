import { Directive } from '@angular/core'

/** Figma "Typography". Attribute directives: `<h1 appH1>`, `<h2 appH2>`, `<h3 appH3>`, `<p appLead>`, `<p appP>`, `<blockquote appBlockquote>`, `<code appInlineCode>`, `<small appMuted>`. */
@Directive({ selector: '[appH1]', host: { class: 'text-foreground text-4xl leading-10 font-bold' } })
export class H1Directive {}

@Directive({ selector: '[appH2]', host: { class: 'text-foreground text-3xl leading-9 font-bold' } })
export class H2Directive {}

@Directive({ selector: '[appH3]', host: { class: 'text-foreground text-2xl leading-8 font-semibold' } })
export class H3Directive {}

@Directive({ selector: '[appLead]', host: { class: 'text-muted-foreground text-xl leading-7 font-semibold' } })
export class LeadDirective {}

@Directive({ selector: '[appP]', host: { class: 'text-foreground text-base leading-6' } })
export class ParagraphDirective {}

@Directive({ selector: '[appBlockquote]', host: { class: 'text-foreground border-border border-l-2 pl-4 text-base leading-6' } })
export class BlockquoteDirective {}

@Directive({
  selector: '[appInlineCode]',
  host: { class: 'bg-muted text-foreground rounded-sm px-1.5 py-0.5 font-mono text-[13px] leading-5' },
})
export class InlineCodeDirective {}

@Directive({ selector: '[appMuted]', host: { class: 'text-muted-foreground text-sm leading-5' } })
export class MutedDirective {}
