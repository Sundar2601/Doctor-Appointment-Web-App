import { n as __defineComponent, a3 as SecurityContext, b as inject, h as NgZone, S as Subject, a4 as combineLatest, a5 as concat, Z as skip, a6 as debounceTime, t as take, a7 as map, a8 as Observable, x as startWith, X as takeUntil, ɵ as __defineService, a9 as CSP_NONCE, F as filter, aa as __defineNgModule, ab as __defineInjector, g as ElementRef, E as EventEmitter, a1 as __defineDirective, ac as booleanAttribute, k as DOCUMENT, d as Injector, l as afterNextRender, ad as __NgOnChangesFeature, ae as DomSanitizer, f as InjectionToken } from './angular-platform-DKqHXYyu.js';
import { C as CdkMonitorFocus } from './_focus-monitor-chunk-1TA7qkiM.js';
import { P as Platform, q as coerceArray, m as coerceElement, r as coerceNumberProperty, s as _CdkPrivateStyleLoader, g as _getFocusedElementPierceShadowDom } from './_overlay-module-chunk-ZyiIU7hM.js';

let _VisuallyHiddenLoader = /* @__PURE__ */ (() => {
  class _VisuallyHiddenLoader2 {
    static \u0275fac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisuallyHiddenLoader2)();
    };
    static \u0275cmp = /* @__PURE__ */ __defineComponent({
      type: _VisuallyHiddenLoader2,
      selectors: [["ng-component"]],
      exportAs: ["cdkVisuallyHidden"],
      decls: 0,
      vars: 0,
      template: function _VisuallyHiddenLoader_Template(rf, ctx) {
      },
      styles: [".cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl] .cdk-visually-hidden {\n  left: auto;\n  right: 0;\n}\n"],
      encapsulation: 2
    });
  }
  return _VisuallyHiddenLoader2;
})();
let policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        try {
          policy = ttWindow.trustedTypes.createPolicy("angular#components", {
            createHTML: (s) => s
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function _setInnerHtml(element, html, sanitizer) {
  const cleanHtml = sanitizer.sanitize(SecurityContext.HTML, html);
  element.innerHTML = trustedHTMLFromString(cleanHtml || "");
}

const mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
let mediaQueryStyleNode;
let MediaMatcher = /* @__PURE__ */ (() => {
  class MediaMatcher2 {
    _platform = inject(Platform);
    _nonce = inject(CSP_NONCE, {
      optional: true
    });
    _matchMedia;
    constructor() {
      this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
    }
    matchMedia(query) {
      if (this._platform.WEBKIT || this._platform.BLINK) {
        createEmptyStyleRule(query, this._nonce);
      }
      return this._matchMedia(query);
    }
    static \u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MediaMatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: MediaMatcher2,
      factory: MediaMatcher2.\u0275fac
    });
  }
  return MediaMatcher2;
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query.replace(/[{}]/g, "")} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
let BreakpointObserver = /* @__PURE__ */ (() => {
  class BreakpointObserver2 {
    _mediaMatcher = inject(MediaMatcher);
    _zone = inject(NgZone);
    _queries = /* @__PURE__ */ new Map();
    _destroySubject = new Subject();
    ngOnDestroy() {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
    isMatched(value) {
      const queries = splitQueries(coerceArray(value));
      return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
    }
    observe(value) {
      const queries = splitQueries(coerceArray(value));
      const observables = queries.map((query) => this._registerQuery(query).observable);
      let stateObservable = combineLatest(observables);
      stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
      return stateObservable.pipe(map((breakpointStates) => {
        const response = {
          matches: false,
          breakpoints: {}
        };
        breakpointStates.forEach(({
          matches,
          query
        }) => {
          response.matches = response.matches || matches;
          response.breakpoints[query] = matches;
        });
        return response;
      }));
    }
    _registerQuery(query) {
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }
      const mql = this._mediaMatcher.matchMedia(query);
      const queryObservable = new Observable((observer) => {
        const handler = (e) => this._zone.run(() => observer.next(e));
        mql.addListener(handler);
        return () => {
          mql.removeListener(handler);
        };
      }).pipe(startWith(mql), map(({
        matches
      }) => ({
        query,
        matches
      })), takeUntil(this._destroySubject));
      const output = {
        observable: queryObservable,
        mql
      };
      this._queries.set(query, output);
      return output;
    }
    static \u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreakpointObserver2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: BreakpointObserver2,
      factory: BreakpointObserver2.\u0275fac
    });
  }
  return BreakpointObserver2;
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
let MutationObserverFactory = /* @__PURE__ */ (() => {
  class MutationObserverFactory2 {
    create(callback) {
      return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
    }
    static \u0275fac = function MutationObserverFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MutationObserverFactory2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: MutationObserverFactory2,
      factory: MutationObserverFactory2.\u0275fac
    });
  }
  return MutationObserverFactory2;
})();
let ContentObserver = /* @__PURE__ */ (() => {
  class ContentObserver2 {
    _mutationObserverFactory = inject(MutationObserverFactory);
    _observedElements = /* @__PURE__ */ new Map();
    _ngZone = inject(NgZone);
    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
      const element = coerceElement(elementOrRef);
      return new Observable((observer) => {
        const stream = this._observeElement(element);
        const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
          this._ngZone.run(() => {
            observer.next(records);
          });
        });
        return () => {
          subscription.unsubscribe();
          this._unobserveElement(element);
        };
      });
    }
    _observeElement(element) {
      return this._ngZone.runOutsideAngular(() => {
        if (!this._observedElements.has(element)) {
          const stream = new Subject();
          const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
          if (observer) {
            observer.observe(element, {
              characterData: true,
              childList: true,
              subtree: true
            });
          }
          this._observedElements.set(element, {
            observer,
            stream,
            count: 1
          });
        } else {
          this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
      });
    }
    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;
        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);
        if (observer) {
          observer.disconnect();
        }
        stream.complete();
        this._observedElements.delete(element);
      }
    }
    static \u0275fac = function ContentObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentObserver2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: ContentObserver2,
      factory: ContentObserver2.\u0275fac
    });
  }
  return ContentObserver2;
})();
let CdkObserveContent = /* @__PURE__ */ (() => {
  class CdkObserveContent2 {
    _contentObserver = inject(ContentObserver);
    _elementRef = inject(ElementRef);
    event = new EventEmitter();
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    _disabled = false;
    get debounce() {
      return this._debounce;
    }
    set debounce(value) {
      this._debounce = coerceNumberProperty(value);
      this._subscribe();
    }
    _debounce;
    _currentSubscription = null;
    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }
    ngOnDestroy() {
      this._unsubscribe();
    }
    _subscribe() {
      this._unsubscribe();
      const stream = this._contentObserver.observe(this._elementRef);
      this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    }
    _unsubscribe() {
      this._currentSubscription?.unsubscribe();
    }
    static \u0275fac = function CdkObserveContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkObserveContent2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkObserveContent2,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"]
    });
  }
  return CdkObserveContent2;
})();
let ObserversModule = /* @__PURE__ */ (() => {
  class ObserversModule2 {
    static \u0275fac = function ObserversModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObserversModule2)();
    };
    static \u0275mod = /* @__PURE__ */ __defineNgModule({
      type: ObserversModule2,
      imports: [CdkObserveContent],
      exports: [CdkObserveContent]
    });
    static \u0275inj = /* @__PURE__ */ __defineInjector({
      providers: [MutationObserverFactory]
    });
  }
  return ObserversModule2;
})();

let InteractivityChecker = /* @__PURE__ */ (() => {
  class InteractivityChecker2 {
    _platform = inject(Platform);
    isDisabled(element) {
      return element.hasAttribute("disabled");
    }
    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
    }
    isTabbable(element) {
      if (!this._platform.isBrowser) {
        return false;
      }
      const frameElement = getFrameElement(getWindow(element));
      if (frameElement) {
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        }
        if (!this.isVisible(frameElement)) {
          return false;
        }
      }
      let nodeName = element.nodeName.toLowerCase();
      let tabIndexValue = getTabIndexValue(element);
      if (element.hasAttribute("contenteditable")) {
        return tabIndexValue !== -1;
      }
      if (nodeName === "iframe" || nodeName === "object") {
        return false;
      }
      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }
      if (nodeName === "audio") {
        if (!element.hasAttribute("controls")) {
          return false;
        }
        return tabIndexValue !== -1;
      }
      if (nodeName === "video") {
        if (tabIndexValue === -1) {
          return false;
        }
        if (tabIndexValue !== null) {
          return true;
        }
        return this._platform.FIREFOX || element.hasAttribute("controls");
      }
      return element.tabIndex >= 0;
    }
    isFocusable(element, config) {
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreInert || !element.closest?.("[inert]")) && (config?.ignoreVisibility || this.isVisible(element));
    }
    static \u0275fac = function InteractivityChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InteractivityChecker2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: InteractivityChecker2,
      factory: InteractivityChecker2.\u0275fac
    });
  }
  return InteractivityChecker2;
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
class FocusTrap {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor = null;
  _endAnchor = null;
  _hasAttached = false;
  startAnchorListener = () => {
    const isSuccess = this.focusLastTabbableElement();
    if (!isSuccess && this._checker.isFocusable(this._element)) {
      this._element.focus();
    }
  };
  endAnchorListener = () => {
    const isSuccess = this.focusFirstTabbableElement();
    if (!isSuccess && this._checker.isFocusable(this._element)) {
      this._element.focus();
    }
  };
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  hasAttached() {
    return this._hasAttached;
  }
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  _executeOnStable(fn) {
    afterNextRender(fn, {
      injector: this._injector
    });
  }
}
let FocusTrapFactory = /* @__PURE__ */ (() => {
  class FocusTrapFactory2 {
    _checker = inject(InteractivityChecker);
    _ngZone = inject(NgZone);
    _document = inject(DOCUMENT);
    _injector = inject(Injector);
    constructor() {
      inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    }
    create(element, deferCaptureElements = false) {
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
    }
    static \u0275fac = function FocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapFactory2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: FocusTrapFactory2,
      factory: FocusTrapFactory2.\u0275fac
    });
  }
  return FocusTrapFactory2;
})();
let CdkTrapFocus = /* @__PURE__ */ (() => {
  class CdkTrapFocus2 {
    _elementRef = inject(ElementRef);
    _focusTrapFactory = inject(FocusTrapFactory);
    focusTrap = void 0;
    _previouslyFocusedElement = null;
    get enabled() {
      return this.focusTrap?.enabled || false;
    }
    set enabled(value) {
      if (this.focusTrap) {
        this.focusTrap.enabled = value;
      }
    }
    autoCapture = false;
    constructor() {
      const platform = inject(Platform);
      if (platform.isBrowser) {
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
    }
    ngOnDestroy() {
      this.focusTrap?.destroy();
      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();
        this._previouslyFocusedElement = null;
      }
    }
    ngAfterContentInit() {
      this.focusTrap?.attachAnchors();
      if (this.autoCapture) {
        this._captureFocus();
      }
    }
    ngDoCheck() {
      if (this.focusTrap && !this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }
    ngOnChanges(changes) {
      const autoCaptureChange = changes["autoCapture"];
      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
        this._captureFocus();
      }
    }
    _captureFocus() {
      this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
      this.focusTrap?.focusInitialElementWhenReady();
    }
    static \u0275fac = function CdkTrapFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTrapFocus2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkTrapFocus2,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
        autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
      },
      exportAs: ["cdkTrapFocus"],
      features: [__NgOnChangesFeature]
    });
  }
  return CdkTrapFocus2;
})();
const LIVE_ANNOUNCER_ELEMENT_TOKEN = /* @__PURE__ */ new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: () => null
});
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /* @__PURE__ */ new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
let uniqueIds = 0;
let LiveAnnouncer = /* @__PURE__ */ (() => {
  class LiveAnnouncer2 {
    _ngZone = inject(NgZone);
    _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
      optional: true
    });
    _liveElement;
    _document = inject(DOCUMENT);
    _sanitizer = inject(DomSanitizer);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() {
      const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
        optional: true
      });
      this._liveElement = elementToken || this._createLiveElement();
    }
    announce(message, ...args) {
      const defaultOptions = this._defaultOptions;
      let politeness;
      let duration;
      if (args.length === 1 && typeof args[0] === "number") {
        duration = args[0];
      } else {
        [politeness, duration] = args;
      }
      this.clear();
      clearTimeout(this._previousTimeout);
      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
      }
      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      }
      this._liveElement.setAttribute("aria-live", politeness);
      if (this._liveElement.id) {
        this._exposeAnnouncerToModals(this._liveElement.id);
      }
      return this._ngZone.runOutsideAngular(() => {
        if (!this._currentPromise) {
          this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
        }
        clearTimeout(this._previousTimeout);
        this._previousTimeout = setTimeout(() => {
          if (!message || typeof message === "string") {
            this._liveElement.textContent = message;
          } else {
            _setInnerHtml(this._liveElement, message, this._sanitizer);
          }
          if (typeof duration === "number") {
            this._previousTimeout = setTimeout(() => this.clear(), duration);
          }
          this._currentResolve?.();
          this._currentPromise = this._currentResolve = void 0;
        }, 100);
        return this._currentPromise;
      });
    }
    clear() {
      if (this._liveElement) {
        this._liveElement.textContent = "";
      }
    }
    ngOnDestroy() {
      clearTimeout(this._previousTimeout);
      this._liveElement?.remove();
      this._liveElement = null;
      this._currentResolve?.();
      this._currentPromise = this._currentResolve = void 0;
    }
    _createLiveElement() {
      const elementClass = "cdk-live-announcer-element";
      const previousElements = this._document.getElementsByClassName(elementClass);
      const liveEl = this._document.createElement("div");
      for (let i = 0; i < previousElements.length; i++) {
        previousElements[i].remove();
      }
      liveEl.classList.add(elementClass);
      liveEl.classList.add("cdk-visually-hidden");
      liveEl.setAttribute("aria-atomic", "true");
      liveEl.setAttribute("aria-live", "polite");
      liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
      this._document.body.appendChild(liveEl);
      return liveEl;
    }
    _exposeAnnouncerToModals(id) {
      const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
      for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        const ariaOwns = modal.getAttribute("aria-owns");
        if (!ariaOwns) {
          modal.setAttribute("aria-owns", id);
        } else if (ariaOwns.indexOf(id) === -1) {
          modal.setAttribute("aria-owns", ariaOwns + " " + id);
        }
      }
    }
    static \u0275fac = function LiveAnnouncer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LiveAnnouncer2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: LiveAnnouncer2,
      factory: LiveAnnouncer2.\u0275fac
    });
  }
  return LiveAnnouncer2;
})();
let CdkAriaLive = /* @__PURE__ */ (() => {
  class CdkAriaLive2 {
    _elementRef = inject(ElementRef);
    _liveAnnouncer = inject(LiveAnnouncer);
    _contentObserver = inject(ContentObserver);
    _ngZone = inject(NgZone);
    get politeness() {
      return this._politeness;
    }
    set politeness(value) {
      this._politeness = value === "off" || value === "assertive" ? value : "polite";
      if (this._politeness === "off") {
        if (this._subscription) {
          this._subscription.unsubscribe();
          this._subscription = void 0;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            const elementText = this._elementRef.nativeElement.textContent;
            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }
    _politeness = "polite";
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() {
      inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    }
    ngOnDestroy() {
      this._subscription?.unsubscribe();
    }
    static \u0275fac = function CdkAriaLive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkAriaLive2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkAriaLive2,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: [0, "cdkAriaLive", "politeness"],
        duration: [0, "cdkAriaLiveDuration", "duration"]
      },
      exportAs: ["cdkAriaLive"]
    });
  }
  return CdkAriaLive2;
})();
var HighContrastMode = /* @__PURE__ */ (function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
  return HighContrastMode2;
})(HighContrastMode || {});
const BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
const WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
let HighContrastModeDetector = /* @__PURE__ */ (() => {
  class HighContrastModeDetector2 {
    _platform = inject(Platform);
    _hasCheckedHighContrastMode = false;
    _document = inject(DOCUMENT);
    _breakpointSubscription;
    constructor() {
      this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
        if (this._hasCheckedHighContrastMode) {
          this._hasCheckedHighContrastMode = false;
          this._applyBodyHighContrastModeCssClasses();
        }
      });
    }
    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return HighContrastMode.NONE;
      }
      const testElement = this._document.createElement("div");
      testElement.style.backgroundColor = "rgb(1,2,3)";
      testElement.style.position = "absolute";
      this._document.body.appendChild(testElement);
      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
      testElement.remove();
      switch (computedColor) {
        case "rgb(0,0,0)":
        case "rgb(45,50,54)":
        case "rgb(32,32,32)":
          return HighContrastMode.WHITE_ON_BLACK;
        case "rgb(255,255,255)":
        case "rgb(255,250,239)":
          return HighContrastMode.BLACK_ON_WHITE;
      }
      return HighContrastMode.NONE;
    }
    ngOnDestroy() {
      this._breakpointSubscription.unsubscribe();
    }
    _applyBodyHighContrastModeCssClasses() {
      if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        const bodyClasses = this._document.body.classList;
        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        this._hasCheckedHighContrastMode = true;
        const mode = this.getHighContrastMode();
        if (mode === HighContrastMode.BLACK_ON_WHITE) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
        } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        }
      }
    }
    static \u0275fac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighContrastModeDetector2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: HighContrastModeDetector2,
      factory: HighContrastModeDetector2.\u0275fac
    });
  }
  return HighContrastModeDetector2;
})();
let A11yModule = /* @__PURE__ */ (() => {
  class A11yModule2 {
    constructor() {
      inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static \u0275fac = function A11yModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || A11yModule2)();
    };
    static \u0275mod = /* @__PURE__ */ __defineNgModule({
      type: A11yModule2,
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    });
    static \u0275inj = /* @__PURE__ */ __defineInjector({
      imports: [ObserversModule]
    });
  }
  return A11yModule2;
})();

export { A11yModule as A, CdkTrapFocus as C, FocusTrapFactory as F, InteractivityChecker as I };
