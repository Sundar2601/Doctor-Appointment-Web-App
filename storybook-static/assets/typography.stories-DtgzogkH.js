import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, D as Directive } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Typography". Attribute directives: `<h1 appH1>`, `<h2 appH2>`, `<h3 appH3>`, `<p appLead>`, `<p appP>`, `<blockquote appBlockquote>`, `<code appInlineCode>`, `<small appMuted>`. */
let H1Directive = class H1Directive {
};
H1Directive = __decorate([
    Directive({ selector: '[appH1]', host: { class: 'text-foreground text-4xl leading-10 font-bold' } })
], H1Directive);
let H2Directive = class H2Directive {
};
H2Directive = __decorate([
    Directive({ selector: '[appH2]', host: { class: 'text-foreground text-3xl leading-9 font-bold' } })
], H2Directive);
let H3Directive = class H3Directive {
};
H3Directive = __decorate([
    Directive({ selector: '[appH3]', host: { class: 'text-foreground text-2xl leading-8 font-semibold' } })
], H3Directive);
let LeadDirective = class LeadDirective {
};
LeadDirective = __decorate([
    Directive({ selector: '[appLead]', host: { class: 'text-muted-foreground text-xl leading-7 font-semibold' } })
], LeadDirective);
let ParagraphDirective = class ParagraphDirective {
};
ParagraphDirective = __decorate([
    Directive({ selector: '[appP]', host: { class: 'text-foreground text-base leading-6' } })
], ParagraphDirective);
let BlockquoteDirective = class BlockquoteDirective {
};
BlockquoteDirective = __decorate([
    Directive({ selector: '[appBlockquote]', host: { class: 'text-foreground border-border border-l-2 pl-4 text-base leading-6' } })
], BlockquoteDirective);
let InlineCodeDirective = class InlineCodeDirective {
};
InlineCodeDirective = __decorate([
    Directive({
        selector: '[appInlineCode]',
        host: { class: 'bg-muted text-foreground rounded-sm px-1.5 py-0.5 font-mono text-[13px] leading-5' },
    })
], InlineCodeDirective);
let MutedDirective = class MutedDirective {
};
MutedDirective = __decorate([
    Directive({ selector: '[appMuted]', host: { class: 'text-muted-foreground text-sm leading-5' } })
], MutedDirective);

const meta = {
  title: 'Display/Typography',
  decorators: [moduleMetadata({
    imports: [H1Directive, H2Directive, H3Directive, LeadDirective, ParagraphDirective, BlockquoteDirective, InlineCodeDirective, MutedDirective]
  })]
};
const Headings = {
  render: () => ({
    template: `<div class="flex flex-col gap-3">
      <h1 appH1>The Joke Tax Chronicles</h1><h2 appH2>The People of the Kingdom</h2><h3 appH3>The Joke Tax</h3>
    </div>`
  })
};
const Text = {
  render: () => ({
    template: `<div class="flex max-w-xl flex-col gap-3">
      <p appLead>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
      <p appP>Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place.</p>
      <blockquote appBlockquote>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
      <p><code appInlineCode>@radix-ui/react-alert-dialog</code></p>
      <small appMuted>Small text &middot; Muted text</small>
    </div>`
  })
};
const __namedExportsOrder = ["Headings", "Text"];
Headings.parameters = {
  ...Headings.parameters,
  docs: {
    ...Headings.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex flex-col gap-3\">\n      <h1 appH1>The Joke Tax Chronicles</h1><h2 appH2>The People of the Kingdom</h2><h3 appH3>The Joke Tax</h3>\n    </div>`\n  })\n}",
      ...Headings.parameters?.docs?.source
    }
  }
};
Text.parameters = {
  ...Text.parameters,
  docs: {
    ...Text.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"flex max-w-xl flex-col gap-3\">\n      <p appLead>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>\n      <p appP>Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place.</p>\n      <blockquote appBlockquote>\"After all,\" he said, \"everyone enjoys a good joke, so it's only fair that they should pay for the privilege.\"</blockquote>\n      <p><code appInlineCode>@radix-ui/react-alert-dialog</code></p>\n      <small appMuted>Small text &middot; Muted text</small>\n    </div>`\n  })\n}",
      ...Text.parameters?.docs?.source
    }
  }
};

export { Headings, Text, __namedExportsOrder, meta as default };
