/** Minimal @angular/cdk overlay CSS, injected once, because the app does not ship the cdk prebuilt stylesheet. Used by tooltip and hover card. */
const CSS = `
.cdk-overlay-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none}
.cdk-overlay-container:empty{display:none}
.cdk-overlay-connected-position-bounding-box,.cdk-global-overlay-wrapper{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px;max-width:100%;max-height:100%}
.cdk-overlay-pane{position:absolute;z-index:1000;display:flex;box-sizing:border-box;pointer-events:auto;max-width:100%;max-height:100%}
`

export function ensureOverlayStyles(doc: Document): void {
  if (doc.getElementById('app-cdk-overlay-styles')) return
  const style = doc.createElement('style')
  style.id = 'app-cdk-overlay-styles'
  style.textContent = CSS
  doc.head.appendChild(style)
}
