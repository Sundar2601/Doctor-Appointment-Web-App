import { b as inject, P as PLATFORM_ID, aw as isPlatformBrowser, ɵ as __defineService, d as Injector, ax as EnvironmentInjector, ay as ApplicationRef, az as createComponent, g as ElementRef, s as signal, E as EventEmitter, f as InjectionToken, k as DOCUMENT, h as NgZone, a0 as RendererFactory2, S as Subject, W as of, a8 as Observable, aA as auditTime, F as filter, aB as APP_ID, aC as NgModuleRef$1, V as ViewContainerRef, aq as __getInheritedFactory, a1 as __defineDirective, p as __InheritDefinitionFeature, R as Renderer2, aD as Location, aE as ANIMATION_MODULE_TYPE, A as untracked, l as afterNextRender, ag as Subscription, n as __defineComponent, T as TemplateRef, aF as takeWhile, ad as __NgOnChangesFeature, ac as booleanAttribute } from './angular-platform-DKqHXYyu.js';

let hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
let Platform = /* @__PURE__ */ (() => {
  class Platform2 {
    _platformId = inject(PLATFORM_ID);
    isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    static \u0275fac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Platform2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: Platform2,
      factory: Platform2.\u0275fac
    });
  }
  return Platform2;
})();

let shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  if (event.composedPath) {
    try {
      return event.composedPath()[0];
    } catch {}
  }
  return event.target;
}

function _isTestEnvironment() {
  return (typeof __karma__ !== 'undefined' && !!__karma__ || typeof jasmine !== 'undefined' && !!jasmine || typeof jest !== 'undefined' && !!jest || typeof Mocha !== 'undefined' && !!Mocha
  );
}

const appsWithLoaders = /* @__PURE__ */ new WeakMap();
let _CdkPrivateStyleLoader = /* @__PURE__ */ (() => {
  class _CdkPrivateStyleLoader2 {
    _appRef;
    _injector = inject(Injector);
    _environmentInjector = inject(EnvironmentInjector);
    load(loader) {
      const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
      let data = appsWithLoaders.get(appRef);
      if (!data) {
        data = {
          loaders: /* @__PURE__ */ new Set(),
          refs: []
        };
        appsWithLoaders.set(appRef, data);
        appRef.onDestroy(() => {
          appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
          appsWithLoaders.delete(appRef);
        });
      }
      if (!data.loaders.has(loader)) {
        data.loaders.add(loader);
        data.refs.push(createComponent(loader, {
          environmentInjector: this._environmentInjector
        }));
      }
    }
    static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkPrivateStyleLoader2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: _CdkPrivateStyleLoader2,
      factory: _CdkPrivateStyleLoader2.\u0275fac
    });
  }
  return _CdkPrivateStyleLoader2;
})();

function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

const DIR_DOCUMENT = /* @__PURE__ */ new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
let Directionality = /* @__PURE__ */ (() => {
  class Directionality2 {
    get value() {
      return this.valueSignal();
    }
    valueSignal = signal("ltr", ...[]);
    change = new EventEmitter();
    constructor() {
      const _document = inject(DIR_DOCUMENT, {
        optional: true
      });
      if (_document) {
        const bodyDir = _document.body ? _document.body.dir : null;
        const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
        this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Directionality2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: Directionality2,
      factory: Directionality2.\u0275fac
    });
  }
  return Directionality2;
})();

let scrollBehaviorSupported$1;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported$1 == null) {
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported$1 = false;
      return scrollBehaviorSupported$1;
    }
    if (document.documentElement?.style && 'scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported$1 = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported$1 = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported$1 = false;
      }
    }
  }
  return scrollBehaviorSupported$1;
}

const DEFAULT_SCROLL_TIME = 20;
let ScrollDispatcher = /* @__PURE__ */ (() => {
  class ScrollDispatcher2 {
    _ngZone = inject(NgZone);
    _platform = inject(Platform);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cleanupGlobalListener;
    _scrolled = new Subject();
    _scrolledCount = 0;
    scrollContainers = /* @__PURE__ */ new Map();
    register(target) {
      if (!this.scrollContainers.has(target)) {
        this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
      }
    }
    deregister(target) {
      const ref = this.scrollContainers.get(target);
      if (ref) {
        ref.unsubscribe();
        this.scrollContainers.delete(target);
      }
    }
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
      if (!this._platform.isBrowser) {
        return of();
      }
      return new Observable((observer) => {
        if (!this._cleanupGlobalListener) {
          this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
        }
        const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
        this._scrolledCount++;
        return () => {
          subscription.unsubscribe();
          this._scrolledCount--;
          if (!this._scrolledCount) {
            this._cleanupGlobalListener?.();
            this._cleanupGlobalListener = void 0;
          }
        };
      });
    }
    ngOnDestroy() {
      this._cleanupGlobalListener?.();
      this._cleanupGlobalListener = void 0;
      this.scrollContainers.forEach((_, container) => this.deregister(container));
      this._scrolled.complete();
    }
    ancestorScrolled(elementOrElementRef, auditTimeInMs) {
      const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
      return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
    }
    getAncestorScrollContainers(elementOrElementRef) {
      const scrollingContainers = [];
      this.scrollContainers.forEach((_, target) => {
        if (this._targetContainsElement(target, elementOrElementRef)) {
          scrollingContainers.push(target);
        }
      });
      return scrollingContainers;
    }
    _targetContainsElement(scrollable, elementOrElementRef) {
      let element = coerceElement(elementOrElementRef);
      let targetElement = scrollable.getElementRef().nativeElement;
      do {
        if (element == targetElement) {
          return true;
        }
      } while (element = element.parentElement);
      return false;
    }
    static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollDispatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: ScrollDispatcher2,
      factory: ScrollDispatcher2.\u0275fac
    });
  }
  return ScrollDispatcher2;
})();
const DEFAULT_RESIZE_TIME = 20;
let ViewportRuler = /* @__PURE__ */ (() => {
  class ViewportRuler2 {
    _platform = inject(Platform);
    _listeners;
    _viewportSize = null;
    _change = new Subject();
    _document = inject(DOCUMENT);
    constructor() {
      const ngZone = inject(NgZone);
      const renderer = inject(RendererFactory2).createRenderer(null, null);
      ngZone.runOutsideAngular(() => {
        if (this._platform.isBrowser) {
          const changeListener = (event) => this._change.next(event);
          this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
        }
        this.change().subscribe(() => this._viewportSize = null);
      });
    }
    ngOnDestroy() {
      this._listeners?.forEach((cleanup) => cleanup());
      this._change.complete();
    }
    getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      const output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      };
      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }
      return output;
    }
    getViewportRect() {
      const scrollPosition = this.getViewportScrollPosition();
      const {
        width,
        height
      } = this.getViewportSize();
      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height,
        width
      };
    }
    getViewportScrollPosition() {
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      }
      const document = this._document;
      const window2 = this._getWindow();
      const documentElement = document.documentElement;
      const documentRect = documentElement.getBoundingClientRect();
      const top = -documentRect.top || document.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
      const left = -documentRect.left || document.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
      return {
        top,
        left
      };
    }
    change(throttleTime = DEFAULT_RESIZE_TIME) {
      return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
    }
    _getWindow() {
      return this._document.defaultView || window;
    }
    _updateViewportSize() {
      const window2 = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? {
        width: window2.innerWidth,
        height: window2.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
    static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewportRuler2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: ViewportRuler2,
      factory: ViewportRuler2.\u0275fac
    });
  }
  return ViewportRuler2;
})();

const counters = /* @__PURE__ */ new Map();
class _IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    let count = counters.get(prefix);
    if (count === void 0) {
      count = 0;
    } else {
      count++;
    }
    counters.set(prefix, count);
    return `${prefix}${randomize ? _IdGenerator._infix + "-" : ""}${count}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ __defineService({
    token: _IdGenerator,
    factory: _IdGenerator.\u0275fac
  });
}

class Portal {
  _attachedHost = null;
  attach(host) {
    this._attachedHost = host;
    return host.attach(this);
  }
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    }
  }
  get isAttached() {
    return this._attachedHost != null;
  }
  setAttachedHost(host) {
    this._attachedHost = host;
  }
}
class ComponentPortal extends Portal {
  component;
  viewContainerRef;
  injector;
  projectableNodes;
  bindings;
  directives;
  constructor(component, viewContainerRef, injector, projectableNodes, bindings, directives) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.projectableNodes = projectableNodes;
    this.bindings = bindings || null;
    this.directives = directives || null;
  }
}
class TemplatePortal extends Portal {
  templateRef;
  viewContainerRef;
  context;
  injector;
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
}
class DomPortal extends Portal {
  element;
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
}
class BasePortalOutlet {
  _attachedPortal = null;
  _disposeFn = null;
  _isDisposed = false;
  hasAttached() {
    return !!this._attachedPortal;
  }
  attach(portal) {
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
  }
  attachDomPortal = null;
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
}
class DomPortalOutlet extends BasePortalOutlet {
  outletElement;
  _appRef;
  _defaultInjector;
  constructor(outletElement, _appRef, _defaultInjector) {
    super();
    this.outletElement = outletElement;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
  }
  attachComponentPortal(portal) {
    let componentRef;
    if (portal.viewContainerRef) {
      const injector = portal.injector || portal.viewContainerRef.injector;
      const ngModuleRef = injector.get(NgModuleRef$1, null, {
        optional: true
      }) || void 0;
      componentRef = portal.viewContainerRef.createComponent(portal.component, {
        index: portal.viewContainerRef.length,
        injector,
        ngModuleRef,
        projectableNodes: portal.projectableNodes || void 0,
        bindings: portal.bindings || void 0,
        directives: portal.directives || void 0
      });
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      const appRef = this._appRef;
      const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
      const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
      componentRef = createComponent(portal.component, {
        elementInjector,
        environmentInjector,
        projectableNodes: portal.projectableNodes || void 0,
        bindings: portal.bindings || void 0,
        directives: portal.directives || void 0
      });
      appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (appRef.viewCount > 0) {
          appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  attachDomPortal = (portal) => {
    const element = portal.element;
    if (!element.parentNode && false) ;
    const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
    element.parentNode.insertBefore(anchorNode, element);
    this.outletElement.appendChild(element);
    this._attachedPortal = portal;
    super.setDisposeFn(() => {
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });
  };
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
}
let CdkPortalOutlet = /* @__PURE__ */ (() => {
  class CdkPortalOutlet2 extends BasePortalOutlet {
    _moduleRef = inject(NgModuleRef$1, {
      optional: true
    });
    _document = inject(DOCUMENT);
    _viewContainerRef = inject(ViewContainerRef);
    _isInitialized = false;
    _attachedRef = null;
    get portal() {
      return this._attachedPortal;
    }
    set portal(portal) {
      if (this.hasAttached() && !portal && !this._isInitialized) {
        return;
      }
      if (this.hasAttached()) {
        super.detach();
      }
      if (portal) {
        super.attach(portal);
      }
      this._attachedPortal = portal || null;
    }
    attached = new EventEmitter();
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      super.dispose();
      this._attachedRef = this._attachedPortal = null;
    }
    attachComponentPortal(portal) {
      portal.setAttachedHost(this);
      const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
      const ref = viewContainerRef.createComponent(portal.component, {
        index: viewContainerRef.length,
        injector: portal.injector || viewContainerRef.injector,
        projectableNodes: portal.projectableNodes || void 0,
        ngModuleRef: this._moduleRef || void 0,
        bindings: portal.bindings || void 0,
        directives: portal.directives || void 0
      });
      if (viewContainerRef !== this._viewContainerRef) {
        this._insertContent(ref.hostView.rootNodes[0]);
      }
      super.setDisposeFn(() => ref.destroy());
      this._attachedPortal = portal;
      this._attachedRef = ref;
      this.attached.emit(ref);
      return ref;
    }
    attachTemplatePortal(portal) {
      portal.setAttachedHost(this);
      const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
        injector: portal.injector
      });
      super.setDisposeFn(() => this._viewContainerRef.clear());
      this._attachedPortal = portal;
      this._attachedRef = viewRef;
      this.attached.emit(viewRef);
      return viewRef;
    }
    attachDomPortal = (portal) => {
      const element = portal.element;
      if (!element.parentNode && false) ;
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._insertContent(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => anchorNode.parentNode?.replaceChild(element, anchorNode));
    };
    _insertContent(content) {
      const nativeElement = this._viewContainerRef.element.nativeElement;
      if (nativeElement.nodeType === nativeElement.ELEMENT_NODE) {
        nativeElement.appendChild(content);
      } else {
        nativeElement.parentNode?.insertBefore(content, nativeElement);
      }
    }
    static \u0275fac = /* @__PURE__ */ (() => {
      let \u0275CdkPortalOutlet_BaseFactory = void 0;
      return function CdkPortalOutlet_Factory(__ngFactoryType__) {
        return (\u0275CdkPortalOutlet_BaseFactory || (\u0275CdkPortalOutlet_BaseFactory = __getInheritedFactory(CdkPortalOutlet2)))(__ngFactoryType__ || CdkPortalOutlet2);
      };
    })();
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkPortalOutlet2,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [0, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [__InheritDefinitionFeature]
    });
  }
  return CdkPortalOutlet2;
})();

const TAB = 9;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const ZERO = 48;
const NINE = 57;
const A = 65;
const Z = 90;
const META = 91;
const MAC_META = 224;

function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

const scrollBehaviorSupported = /* @__PURE__ */ supportsScrollBehavior();
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
class BlockScrollStrategy {
  _viewportRuler;
  _previousHTMLStyles = {
    top: "",
    left: ""
  };
  _previousScrollPosition;
  _isEnabled = false;
  _document;
  constructor(_viewportRuler, document) {
    this._viewportRuler = _viewportRuler;
    this._document = document;
  }
  attach() {
  }
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || "";
      this._previousHTMLStyles.top = root.style.top || "";
      root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
      root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
      root.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove("cdk-global-scrollblock");
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const rootElement = this._document.documentElement;
    const viewport = this._viewportRuler.getViewportSize();
    return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
  }
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
class CloseScrollStrategy {
  _scrollDispatcher;
  _ngZone;
  _viewportRuler;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  _initialScrollPosition;
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
  }
  attach(overlayRef) {
    if (this._overlayRef && false) ;
    this._overlayRef = overlayRef;
  }
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
  _detach = () => {
    this.disable();
    if (this._overlayRef.hasAttached()) {
      this._ngZone.run(() => this._overlayRef.detach());
    }
  };
}
class NoopScrollStrategy {
  enable() {
  }
  disable() {
  }
  attach() {
  }
}
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
class RepositionScrollStrategy {
  _scrollDispatcher;
  _viewportRuler;
  _ngZone;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
  }
  attach(overlayRef) {
    if (this._overlayRef && false) ;
    this._overlayRef = overlayRef;
  }
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
}
let ScrollStrategyOptions = /* @__PURE__ */ (() => {
  class ScrollStrategyOptions2 {
    _injector = inject(Injector);
    noop = () => new NoopScrollStrategy();
    close = (config) => createCloseScrollStrategy(this._injector, config);
    block = () => createBlockScrollStrategy(this._injector);
    reposition = (config) => createRepositionScrollStrategy(this._injector, config);
    static \u0275fac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollStrategyOptions2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: ScrollStrategyOptions2,
      factory: ScrollStrategyOptions2.\u0275fac
    });
  }
  return ScrollStrategyOptions2;
})();
class OverlayConfig {
  positionStrategy;
  scrollStrategy = new NoopScrollStrategy();
  panelClass = "";
  hasBackdrop = false;
  backdropClass = "cdk-overlay-dark-backdrop";
  disableAnimations;
  width;
  height;
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  direction;
  disposeOnNavigation = false;
  usePopover;
  eventPredicate;
  constructor(config) {
    if (config) {
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== void 0) {
          this[key] = config[key];
        }
      }
    }
  }
}
class ConnectedOverlayPositionChange {
  connectionPair;
  scrollableViewProperties;
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
}
let BaseOverlayDispatcher = /* @__PURE__ */ (() => {
  class BaseOverlayDispatcher2 {
    _attachedOverlays = [];
    _document = inject(DOCUMENT);
    _isAttached = false;
    ngOnDestroy() {
      this.detach();
    }
    add(overlayRef) {
      this.remove(overlayRef);
      this._attachedOverlays.push(overlayRef);
    }
    remove(overlayRef) {
      const index = this._attachedOverlays.indexOf(overlayRef);
      if (index > -1) {
        this._attachedOverlays.splice(index, 1);
      }
      if (this._attachedOverlays.length === 0) {
        this.detach();
      }
    }
    canReceiveEvent(overlayRef, event, stream) {
      if (stream.observers.length < 1) {
        return false;
      }
      if (overlayRef.eventPredicate) {
        return overlayRef.eventPredicate(event);
      }
      return true;
    }
    static \u0275fac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseOverlayDispatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: BaseOverlayDispatcher2,
      factory: BaseOverlayDispatcher2.\u0275fac
    });
  }
  return BaseOverlayDispatcher2;
})();
let OverlayKeyboardDispatcher = /* @__PURE__ */ (() => {
  class OverlayKeyboardDispatcher2 extends BaseOverlayDispatcher {
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cleanupKeydown;
    add(overlayRef) {
      super.add(overlayRef);
      if (!this._isAttached) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
        });
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        this._cleanupKeydown?.();
        this._isAttached = false;
      }
    }
    _keydownListener = (event) => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (this.canReceiveEvent(overlayRef, event, overlayRef._keydownEvents)) {
          this._ngZone.run(() => overlayRef._keydownEvents.next(event));
          break;
        }
      }
    };
    static \u0275fac = function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayKeyboardDispatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: OverlayKeyboardDispatcher2,
      factory: OverlayKeyboardDispatcher2.\u0275fac
    });
  }
  return OverlayKeyboardDispatcher2;
})();
let OverlayOutsideClickDispatcher = /* @__PURE__ */ (() => {
  class OverlayOutsideClickDispatcher2 extends BaseOverlayDispatcher {
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = false;
    _pointerDownEventTarget = null;
    _cleanups;
    add(overlayRef) {
      super.add(overlayRef);
      if (!this._isAttached) {
        const body = this._document.body;
        const eventOptions = {
          capture: true
        };
        const renderer = this._renderer;
        this._cleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions), renderer.listen(body, "click", this._clickListener, eventOptions), renderer.listen(body, "auxclick", this._clickListener, eventOptions), renderer.listen(body, "contextmenu", this._clickListener, eventOptions)]);
        if (this._platform.IOS && !this._cursorStyleIsSet) {
          this._cursorOriginalValue = body.style.cursor;
          body.style.cursor = "pointer";
          this._cursorStyleIsSet = true;
        }
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        this._cleanups?.forEach((cleanup) => cleanup());
        this._cleanups = void 0;
        if (this._platform.IOS && this._cursorStyleIsSet) {
          this._document.body.style.cursor = this._cursorOriginalValue;
          this._cursorStyleIsSet = false;
        }
        this._isAttached = false;
      }
    }
    _pointerDownListener = (event) => {
      this._pointerDownEventTarget = _getEventTarget(event);
    };
    _clickListener = (event) => {
      const target = _getEventTarget(event);
      const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      this._pointerDownEventTarget = null;
      const overlays = this._attachedOverlays.slice();
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        if (!overlayRef.hasAttached() || !this.canReceiveEvent(overlayRef, event, outsidePointerEvents)) {
          continue;
        }
        if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
          break;
        }
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
    static \u0275fac = function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayOutsideClickDispatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: OverlayOutsideClickDispatcher2,
      factory: OverlayOutsideClickDispatcher2.\u0275fac
    });
  }
  return OverlayOutsideClickDispatcher2;
})();
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
let _CdkOverlayStyleLoader = /* @__PURE__ */ (() => {
  class _CdkOverlayStyleLoader2 {
    static \u0275fac = function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkOverlayStyleLoader2)();
    };
    static \u0275cmp = /* @__PURE__ */ __defineComponent({
      type: _CdkOverlayStyleLoader2,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-overlay-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _CdkOverlayStyleLoader_Template(rf, ctx) {
      },
      styles: [".cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n}\n@layer cdk-overlay {\n  .cdk-overlay-container {\n    z-index: 1000;\n  }\n}\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n}\n@layer cdk-overlay {\n  .cdk-global-overlay-wrapper {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n@layer cdk-overlay {\n  .cdk-overlay-pane {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  opacity: 0;\n  touch-action: manipulation;\n}\n@layer cdk-overlay {\n  .cdk-overlay-backdrop {\n    z-index: 1000;\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n}\n@media (prefers-reduced-motion) {\n  .cdk-overlay-backdrop {\n    transition-duration: 1ms;\n  }\n}\n\n.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n@media (forced-colors: active) {\n  .cdk-overlay-backdrop-showing {\n    opacity: 0.6;\n  }\n}\n\n@layer cdk-overlay {\n  .cdk-overlay-dark-backdrop {\n    background: rgba(0, 0, 0, 0.32);\n  }\n}\n\n.cdk-overlay-transparent-backdrop {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n@layer cdk-overlay {\n  .cdk-overlay-connected-position-bounding-box {\n    z-index: 1000;\n  }\n}\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.cdk-overlay-popover {\n  background: none;\n  border: none;\n  padding: 0;\n  outline: 0;\n  overflow: visible;\n  position: fixed;\n  pointer-events: none;\n  white-space: normal;\n  color: inherit;\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  inset: auto;\n  top: 0;\n  left: 0;\n}\n.cdk-overlay-popover::backdrop {\n  display: none;\n}\n.cdk-overlay-popover .cdk-overlay-backdrop {\n  position: fixed;\n  z-index: auto;\n}\n"],
      encapsulation: 2
    });
  }
  return _CdkOverlayStyleLoader2;
})();
let OverlayContainer = /* @__PURE__ */ (() => {
  class OverlayContainer2 {
    _platform = inject(Platform);
    _containerElement;
    _document = inject(DOCUMENT);
    _styleLoader = inject(_CdkPrivateStyleLoader);
    ngOnDestroy() {
      this._containerElement?.remove();
    }
    getContainerElement() {
      this._loadStyles();
      if (!this._containerElement) {
        this._createContainer();
      }
      return this._containerElement;
    }
    _createContainer() {
      const containerClass = "cdk-overlay-container";
      if (this._platform.isBrowser || _isTestEnvironment()) {
        const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
        for (let i = 0; i < oppositePlatformContainers.length; i++) {
          oppositePlatformContainers[i].remove();
        }
      }
      const container = this._document.createElement("div");
      container.classList.add(containerClass);
      if (_isTestEnvironment()) {
        container.setAttribute("platform", "test");
      } else if (!this._platform.isBrowser) {
        container.setAttribute("platform", "server");
      }
      this._document.body.appendChild(container);
      this._containerElement = container;
    }
    _loadStyles() {
      this._styleLoader.load(_CdkOverlayStyleLoader);
    }
    static \u0275fac = function OverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayContainer2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: OverlayContainer2,
      factory: OverlayContainer2.\u0275fac
    });
  }
  return OverlayContainer2;
})();
class BackdropRef {
  _renderer;
  _ngZone;
  element;
  _cleanupClick;
  _cleanupTransitionEnd;
  _fallbackTimeout;
  constructor(document, _renderer, _ngZone, onClick) {
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this.element = document.createElement("div");
    this.element.classList.add("cdk-overlay-backdrop");
    this._cleanupClick = _renderer.listen(this.element, "click", onClick);
  }
  detach() {
    this._ngZone.runOutsideAngular(() => {
      const element = this.element;
      clearTimeout(this._fallbackTimeout);
      this._cleanupTransitionEnd?.();
      this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
      this._fallbackTimeout = setTimeout(this.dispose, 500);
      element.style.pointerEvents = "none";
      element.classList.remove("cdk-overlay-backdrop-showing");
    });
  }
  dispose = () => {
    clearTimeout(this._fallbackTimeout);
    this._cleanupClick?.();
    this._cleanupTransitionEnd?.();
    this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
    this.element.remove();
  };
}
function isElement(value) {
  return value && value.nodeType === 1;
}
const attachedOverlaysInternal = /* @__PURE__ */ signal([], ...[]);
class OverlayRef {
  _portalOutlet;
  _host;
  _pane;
  _config;
  _ngZone;
  _keyboardDispatcher;
  _document;
  _location;
  _outsideClickDispatcher;
  _animationsDisabled;
  _injector;
  _renderer;
  _backdropClick = new Subject();
  _attachments = new Subject();
  _detachments = new Subject();
  _positionStrategy;
  _scrollStrategy;
  _locationChanges;
  _backdropRef = null;
  _detachContentMutationObserver;
  _detachContentAfterRenderRef;
  _disposed = false;
  _previousHostParent;
  _keydownEvents = new Subject();
  _outsidePointerEvents = new Subject();
  _afterNextRenderRef;
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._injector = _injector;
    this._renderer = _renderer;
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
  }
  get overlayElement() {
    return this._pane;
  }
  get backdropElement() {
    return this._backdropRef?.element || null;
  }
  get hostElement() {
    return this._host;
  }
  get eventPredicate() {
    return this._config?.eventPredicate || null;
  }
  attach(portal) {
    if (this._disposed) {
      return null;
    }
    this._attachHost();
    const attachResult = this._portalOutlet.attach(portal);
    this._positionStrategy?.attach(this);
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    untracked(() => {
      attachedOverlaysInternal.update((prev) => prev.includes(this) ? prev : [...prev, this]);
    });
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._afterNextRenderRef?.destroy();
    this._afterNextRenderRef = afterNextRender(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation === true || this._config.disposeOnNavigation === "pop-state") {
      const subscription = this._location.subscribe(() => this.dispose());
      this._locationChanges = () => subscription.unsubscribe();
    } else if (this._config.disposeOnNavigation === "url-change") {
      this._locationChanges = this._location.onUrlChange(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === "function") {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenEmpty();
    this._locationChanges?.();
    this._outsideClickDispatcher.remove(this);
    untracked(() => {
      attachedOverlaysInternal.update((prev) => prev.filter((o) => o !== this));
    });
    return detachmentResult;
  }
  dispose() {
    if (this._disposed) {
      return;
    }
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._backdropRef?.dispose();
    this._locationChanges?.();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = this._backdropRef = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._completeDetachContent();
    this._disposed = true;
    untracked(() => {
      attachedOverlaysInternal.update((prev) => prev.filter((o) => o !== this));
    });
  }
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  backdropClick() {
    return this._backdropClick;
  }
  attachments() {
    return this._attachments;
  }
  detachments() {
    return this._detachments;
  }
  keydownEvents() {
    return this._keydownEvents;
  }
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  getConfig() {
    return this._config;
  }
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  updateSize(sizeConfig) {
    this._config = {
      ...this._config,
      ...sizeConfig
    };
    this._updateElementSize();
  }
  setDirection(dir) {
    this._config = {
      ...this._config,
      direction: dir
    };
    this._updateElementDirection();
  }
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return "ltr";
    }
    return typeof direction === "string" ? direction : direction.value;
  }
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = coerceCssPixelValue(this._config.width);
    style.height = coerceCssPixelValue(this._config.height);
    style.minWidth = coerceCssPixelValue(this._config.minWidth);
    style.minHeight = coerceCssPixelValue(this._config.minHeight);
    style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
    style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
  }
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? "" : "none";
  }
  _attachHost() {
    if (!this._host.parentElement) {
      const customInsertionPoint = this._config.usePopover ? this._positionStrategy?.getPopoverInsertionPoint?.() : null;
      if (isElement(customInsertionPoint)) {
        customInsertionPoint.after(this._host);
      } else if (customInsertionPoint?.type === "parent") {
        customInsertionPoint.element.appendChild(this._host);
      } else {
        this._previousHostParent?.appendChild(this._host);
      }
    }
    if (this._config.usePopover) {
      try {
        this._host["showPopover"]();
      } catch {
      }
    }
  }
  _attachBackdrop() {
    const showingClass = "cdk-overlay-backdrop-showing";
    this._backdropRef?.dispose();
    this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
      this._backdropClick.next(event);
    });
    if (this._animationsDisabled) {
      this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
    }
    if (this._config.usePopover) {
      this._host.prepend(this._backdropRef.element);
    } else {
      this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
    }
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
      });
    } else {
      this._backdropRef.element.classList.add(showingClass);
    }
  }
  _updateStackingOrder() {
    if (!this._config.usePopover && this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  detachBackdrop() {
    if (this._animationsDisabled) {
      this._backdropRef?.dispose();
      this._backdropRef = null;
    } else {
      this._backdropRef?.detach();
    }
  }
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = coerceArray(cssClasses || []).filter((c) => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  _detachContentWhenEmpty() {
    let rethrow = false;
    try {
      this._detachContentAfterRenderRef = afterNextRender(() => {
        rethrow = true;
        this._detachContent();
      }, {
        injector: this._injector
      });
    } catch (e) {
      if (rethrow) {
        throw e;
      }
      this._detachContent();
    }
    if (globalThis.MutationObserver && this._pane) {
      this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
        this._detachContent();
      });
      this._detachContentMutationObserver.observe(this._pane, {
        childList: true
      });
    }
  }
  _detachContent() {
    if (!this._pane || !this._host || this._pane.children.length === 0) {
      if (this._pane && this._config.panelClass) {
        this._toggleClasses(this._pane, this._config.panelClass, false);
      }
      if (this._host && this._host.parentElement) {
        this._previousHostParent = this._host.parentElement;
        this._host.remove();
      }
      this._completeDetachContent();
    }
  }
  _completeDetachContent() {
    this._detachContentAfterRenderRef?.destroy();
    this._detachContentAfterRenderRef = void 0;
    this._detachContentMutationObserver?.disconnect();
  }
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    scrollStrategy?.disable();
    scrollStrategy?.detach?.();
  }
}
const boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
const cssUnitPattern = /([A-Za-z%]+)$/;
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
class FlexibleConnectedPositionStrategy {
  _viewportRuler;
  _document;
  _platform;
  _overlayContainer;
  _overlayRef;
  _isInitialRender = false;
  _lastBoundingBoxSize = {
    width: 0,
    height: 0
  };
  _isPushed = false;
  _canPush = true;
  _growAfterOpen = false;
  _hasFlexibleDimensions = true;
  _positionLocked = false;
  _originRect;
  _overlayRect;
  _viewportRect;
  _containerRect;
  _viewportMargin = 0;
  _scrollables = [];
  _preferredPositions = [];
  _origin;
  _pane;
  _isDisposed = false;
  _boundingBox = null;
  _lastPosition = null;
  _lastScrollVisibility = null;
  _positionChanges = new Subject();
  _resizeSubscription = Subscription.EMPTY;
  _offsetX = 0;
  _offsetY = 0;
  _transformOriginSelector;
  _appliedPanelClasses = [];
  _previousPushAmount = null;
  _popoverLocation = "global";
  positionChanges = this._positionChanges;
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this.setOrigin(connectedTo);
  }
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && false) ;
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._getContainerRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._getContainerRect();
      this._applyPosition(lastPosition, this._getOriginPoint(this._originRect, this._containerRect, lastPosition));
    } else {
      this.apply();
    }
  }
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  withPopoverLocation(location) {
    this._popoverLocation = location;
    return this;
  }
  getPopoverInsertionPoint() {
    if (this._popoverLocation === "global") {
      return null;
    } else if (this._popoverLocation !== "inline") {
      return this._popoverLocation;
    }
    if (this._origin instanceof ElementRef) {
      return this._origin.nativeElement;
    } else if (isElement(this._origin)) {
      return this._origin;
    } else {
      return null;
    }
  }
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == "center") {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == "start" ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == "center") {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == "top" ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == "center") {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === "start") {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == "center") {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._getViewportMarginStart() ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._getViewportMarginTop() ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === "center") {
      xOrigin = "center";
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === "start" ? "right" : "left";
    } else {
      xOrigin = position.overlayX === "start" ? "left" : "right";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === "top") {
      top = origin.y;
      height = viewport.height - top + this._getViewportMarginBottom();
    } else if (position.overlayY === "bottom") {
      bottom = viewport.height - origin.y + this._getViewportMarginTop() + this._getViewportMarginBottom();
      height = viewport.height - bottom + this._getViewportMarginTop();
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._getViewportMarginStart() + this._getViewportMarginEnd();
      width = origin.x - this._getViewportMarginStart();
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x - this._getViewportMarginEnd();
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = "0";
      styles.bottom = styles.right = "auto";
      styles.maxHeight = styles.maxWidth = "";
      styles.width = styles.height = "100%";
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.width = coerceCssPixelValue(boundingBoxRect.width);
      styles.height = coerceCssPixelValue(boundingBoxRect.height);
      styles.top = coerceCssPixelValue(boundingBoxRect.top) || "auto";
      styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom) || "auto";
      styles.left = coerceCssPixelValue(boundingBoxRect.left) || "auto";
      styles.right = coerceCssPixelValue(boundingBoxRect.right) || "auto";
      if (position.overlayX === "center") {
        styles.alignItems = "center";
      } else {
        styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
      }
      if (position.overlayY === "center") {
        styles.justifyContent = "center";
      } else {
        styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
      }
      if (maxHeight) {
        styles.maxHeight = coerceCssPixelValue(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = coerceCssPixelValue(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = "static";
    }
    let transformString = "";
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = coerceCssPixelValue(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = "";
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = coerceCssPixelValue(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = "";
      }
    }
    extendStyles(this._pane.style, styles);
  }
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles = {
      top: "",
      bottom: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === "bottom") {
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = coerceCssPixelValue(overlayPoint.y);
    }
    return styles;
  }
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles = {
      left: "",
      right: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
    } else {
      horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
    }
    if (horizontalStyleProperty === "right") {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = coerceCssPixelValue(overlayPoint.x);
    }
    return styles;
  }
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map((scrollable) => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._getViewportMarginTop(),
      left: scrollPosition.left + this._getViewportMarginStart(),
      right: scrollPosition.left + width - this._getViewportMarginEnd(),
      bottom: scrollPosition.top + height - this._getViewportMarginBottom(),
      width: width - this._getViewportMarginStart() - this._getViewportMarginEnd(),
      height: height - this._getViewportMarginTop() - this._getViewportMarginBottom()
    };
  }
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  _getOffset(position, axis) {
    if (axis === "x") {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  _validatePositions() {
  }
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      coerceArray(cssClasses).forEach((cssClass) => {
        if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach((cssClass) => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  _getViewportMarginStart() {
    if (typeof this._viewportMargin === "number") return this._viewportMargin;
    return this._viewportMargin?.start ?? 0;
  }
  _getViewportMarginEnd() {
    if (typeof this._viewportMargin === "number") return this._viewportMargin;
    return this._viewportMargin?.end ?? 0;
  }
  _getViewportMarginTop() {
    if (typeof this._viewportMargin === "number") return this._viewportMargin;
    return this._viewportMargin?.top ?? 0;
  }
  _getViewportMarginBottom() {
    if (typeof this._viewportMargin === "number") return this._viewportMargin;
    return this._viewportMargin?.bottom ?? 0;
  }
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
  _getContainerRect() {
    const isInlinePopover = this._overlayRef.getConfig().usePopover && this._popoverLocation !== "global";
    const element = this._overlayContainer.getContainerElement();
    if (isInlinePopover) {
      element.style.display = "block";
    }
    const dimensions = element.getBoundingClientRect();
    if (isInlinePopover) {
      element.style.display = "";
    }
    return dimensions;
  }
}
function extendStyles(destination, source) {
  for (let key in source) {
    if (Object.hasOwn(source, key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
const STANDARD_DROPDOWN_BELOW_POSITIONS = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}];
const STANDARD_DROPDOWN_ADJACENT_POSITIONS = [{
  originX: "end",
  originY: "top",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "start",
  originY: "top",
  overlayX: "end",
  overlayY: "top"
}, {
  originX: "start",
  originY: "bottom",
  overlayX: "end",
  overlayY: "bottom"
}];
const wrapperClass = "cdk-global-overlay-wrapper";
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
class GlobalPositionStrategy {
  _overlayRef;
  _cssPosition = "static";
  _topOffset = "";
  _bottomOffset = "";
  _alignItems = "";
  _xPosition = "";
  _xOffset = "";
  _width = "";
  _height = "";
  _isDisposed = false;
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  top(value = "") {
    this._bottomOffset = "";
    this._topOffset = value;
    this._alignItems = "flex-start";
    return this;
  }
  left(value = "") {
    this._xOffset = value;
    this._xPosition = "left";
    return this;
  }
  bottom(value = "") {
    this._topOffset = "";
    this._bottomOffset = value;
    this._alignItems = "flex-end";
    return this;
  }
  right(value = "") {
    this._xOffset = value;
    this._xPosition = "right";
    return this;
  }
  start(value = "") {
    this._xOffset = value;
    this._xPosition = "start";
    return this;
  }
  end(value = "") {
    this._xOffset = value;
    this._xPosition = "end";
    return this;
  }
  width(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  height(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  centerHorizontally(offset = "") {
    this.left(offset);
    this._xPosition = "center";
    return this;
  }
  centerVertically(offset = "") {
    this.top(offset);
    this._alignItems = "center";
    return this;
  }
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
    const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === "rtl";
    let marginLeft = "";
    let marginRight = "";
    let justifyContent = "";
    if (shouldBeFlushHorizontally) {
      justifyContent = "flex-start";
    } else if (xPosition === "center") {
      justifyContent = "center";
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === "left" || xPosition === "end") {
        justifyContent = "flex-end";
        marginLeft = xOffset;
      } else if (xPosition === "right" || xPosition === "start") {
        justifyContent = "flex-start";
        marginRight = xOffset;
      }
    } else if (xPosition === "left" || xPosition === "start") {
      justifyContent = "flex-start";
      marginLeft = xOffset;
    } else if (xPosition === "right" || xPosition === "end") {
      justifyContent = "flex-end";
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
  }
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
}
let OverlayPositionBuilder = /* @__PURE__ */ (() => {
  class OverlayPositionBuilder2 {
    _injector = inject(Injector);
    global() {
      return createGlobalPositionStrategy();
    }
    flexibleConnectedTo(origin) {
      return createFlexibleConnectedPositionStrategy(this._injector, origin);
    }
    static \u0275fac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayPositionBuilder2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: OverlayPositionBuilder2,
      factory: OverlayPositionBuilder2.\u0275fac
    });
  }
  return OverlayPositionBuilder2;
})();
const OVERLAY_DEFAULT_CONFIG = /* @__PURE__ */ new InjectionToken("OVERLAY_DEFAULT_CONFIG");
function createOverlayRef(injector, config) {
  injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(DOCUMENT);
  const idGenerator = injector.get(_IdGenerator);
  const appRef = injector.get(ApplicationRef);
  const directionality = injector.get(Directionality);
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  const overlayConfig = new OverlayConfig(config);
  const defaultUsePopover = injector.get(OVERLAY_DEFAULT_CONFIG, null, {
    optional: true
  })?.usePopover ?? true;
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  if (!doc.body || !("showPopover" in doc.body)) {
    overlayConfig.usePopover = false;
  } else {
    overlayConfig.usePopover = config?.usePopover ?? defaultUsePopover;
  }
  const pane = doc.createElement("div");
  const host = doc.createElement("div");
  pane.id = idGenerator.getId("cdk-overlay-");
  pane.classList.add("cdk-overlay-pane");
  host.appendChild(pane);
  if (overlayConfig.usePopover) {
    host.setAttribute("popover", "manual");
    host.classList.add("cdk-overlay-popover");
  }
  const customInsertionPoint = overlayConfig.usePopover ? overlayConfig.positionStrategy?.getPopoverInsertionPoint?.() : null;
  if (isElement(customInsertionPoint)) {
    customInsertionPoint.after(host);
  } else if (customInsertionPoint?.type === "parent") {
    customInsertionPoint.element.appendChild(host);
  } else {
    overlayContainer.getContainerElement().appendChild(host);
  }
  return new OverlayRef(new DomPortalOutlet(pane, appRef, injector), host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, {
    optional: true
  }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
let Overlay = /* @__PURE__ */ (() => {
  class Overlay2 {
    scrollStrategies = inject(ScrollStrategyOptions);
    _positionBuilder = inject(OverlayPositionBuilder);
    _injector = inject(Injector);
    create(config) {
      return createOverlayRef(this._injector, config);
    }
    position() {
      return this._positionBuilder;
    }
    static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Overlay2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: Overlay2,
      factory: Overlay2.\u0275fac
    });
  }
  return Overlay2;
})();
const defaultPositionList = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}];
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = /* @__PURE__ */ new InjectionToken("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
let CdkOverlayOrigin = /* @__PURE__ */ (() => {
  class CdkOverlayOrigin2 {
    elementRef = inject(ElementRef);
    static \u0275fac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkOverlayOrigin2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkOverlayOrigin2,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
  }
  return CdkOverlayOrigin2;
})();
const CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG = /* @__PURE__ */ new InjectionToken("cdk-connected-overlay-default-config");
let CdkConnectedOverlay = /* @__PURE__ */ (() => {
  class CdkConnectedOverlay2 {
    _dir = inject(Directionality, {
      optional: true
    });
    _injector = inject(Injector);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = Subscription.EMPTY;
    _attachSubscription = Subscription.EMPTY;
    _detachSubscription = Subscription.EMPTY;
    _positionSubscription = Subscription.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
    _ngZone = inject(NgZone);
    origin;
    positions;
    positionStrategy;
    get offsetX() {
      return this._offsetX;
    }
    set offsetX(offsetX) {
      this._offsetX = offsetX;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    get offsetY() {
      return this._offsetY;
    }
    set offsetY(offsetY) {
      this._offsetY = offsetY;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    width;
    height;
    minWidth;
    minHeight;
    backdropClass;
    panelClass;
    viewportMargin = 0;
    scrollStrategy;
    open = false;
    disableClose = false;
    transformOriginSelector;
    hasBackdrop = false;
    lockPosition = false;
    flexibleDimensions = false;
    growAfterOpen = false;
    push = false;
    disposeOnNavigation = false;
    usePopover;
    matchWidth = false;
    set _config(value) {
      if (typeof value !== "string") {
        this._assignConfig(value);
      }
    }
    backdropClick = new EventEmitter();
    positionChange = new EventEmitter();
    attach = new EventEmitter();
    detach = new EventEmitter();
    overlayKeydown = new EventEmitter();
    overlayOutsideClick = new EventEmitter();
    constructor() {
      const templateRef = inject(TemplateRef);
      const viewContainerRef = inject(ViewContainerRef);
      const defaultConfig = inject(CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, {
        optional: true
      });
      const globalConfig = inject(OVERLAY_DEFAULT_CONFIG, {
        optional: true
      });
      this.usePopover = globalConfig?.usePopover === false ? null : "global";
      this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
      this.scrollStrategy = this._scrollStrategyFactory();
      if (defaultConfig) {
        this._assignConfig(defaultConfig);
      }
    }
    get overlayRef() {
      return this._overlayRef;
    }
    get dir() {
      return this._dir ? this._dir.value : "ltr";
    }
    ngOnDestroy() {
      this._attachSubscription.unsubscribe();
      this._detachSubscription.unsubscribe();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this._overlayRef?.dispose();
    }
    ngOnChanges(changes) {
      if (this._position) {
        this._updatePositionStrategy(this._position);
        this._overlayRef?.updateSize({
          width: this._getWidth(),
          minWidth: this.minWidth,
          height: this.height,
          minHeight: this.minHeight
        });
        if (changes["origin"] && this.open) {
          this._position.apply();
        }
      }
      if (changes["open"]) {
        this.open ? this.attachOverlay() : this.detachOverlay();
      }
    }
    _createOverlay() {
      if (!this.positions || !this.positions.length) {
        this.positions = defaultPositionList;
      }
      const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
      this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
      this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
      overlayRef.keydownEvents().subscribe((event) => {
        this.overlayKeydown.next(event);
        if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
          event.preventDefault();
          this.detachOverlay();
        }
      });
      this._overlayRef.outsidePointerEvents().subscribe((event) => {
        const origin = this._getOriginElement();
        const target = _getEventTarget(event);
        if (!origin || origin !== target && !origin.contains(target)) {
          this.overlayOutsideClick.next(event);
        }
      });
    }
    _buildConfig() {
      const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
      const overlayConfig = new OverlayConfig({
        direction: this._dir || "ltr",
        positionStrategy,
        scrollStrategy: this.scrollStrategy,
        hasBackdrop: this.hasBackdrop,
        disposeOnNavigation: this.disposeOnNavigation,
        usePopover: !!this.usePopover
      });
      if (this.height || this.height === 0) {
        overlayConfig.height = this.height;
      }
      if (this.minWidth || this.minWidth === 0) {
        overlayConfig.minWidth = this.minWidth;
      }
      if (this.minHeight || this.minHeight === 0) {
        overlayConfig.minHeight = this.minHeight;
      }
      if (this.backdropClass) {
        overlayConfig.backdropClass = this.backdropClass;
      }
      if (this.panelClass) {
        overlayConfig.panelClass = this.panelClass;
      }
      return overlayConfig;
    }
    _updatePositionStrategy(positionStrategy) {
      const positions = this.positions.map((currentPosition) => ({
        originX: currentPosition.originX,
        originY: currentPosition.originY,
        overlayX: currentPosition.overlayX,
        overlayY: currentPosition.overlayY,
        offsetX: currentPosition.offsetX || this.offsetX,
        offsetY: currentPosition.offsetY || this.offsetY,
        panelClass: currentPosition.panelClass || void 0
      }));
      return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover === null ? "global" : this.usePopover);
    }
    _createPositionStrategy() {
      const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
      this._updatePositionStrategy(strategy);
      return strategy;
    }
    _getOrigin() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef;
      } else {
        return this.origin;
      }
    }
    _getOriginElement() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef.nativeElement;
      }
      if (this.origin instanceof ElementRef) {
        return this.origin.nativeElement;
      }
      if (typeof Element !== "undefined" && this.origin instanceof Element) {
        return this.origin;
      }
      return null;
    }
    _getWidth() {
      if (this.width) {
        return this.width;
      }
      return this.matchWidth ? this._getOriginElement()?.getBoundingClientRect?.().width : void 0;
    }
    attachOverlay() {
      if (!this._overlayRef) {
        this._createOverlay();
      }
      const ref = this._overlayRef;
      ref.getConfig().hasBackdrop = this.hasBackdrop;
      ref.updateSize({
        width: this._getWidth()
      });
      if (!ref.hasAttached()) {
        ref.attach(this._templatePortal);
      }
      if (this.hasBackdrop) {
        this._backdropSubscription = ref.backdropClick().subscribe((event) => this.backdropClick.emit(event));
      } else {
        this._backdropSubscription.unsubscribe();
      }
      this._positionSubscription.unsubscribe();
      if (this.positionChange.observers.length > 0) {
        this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
          this._ngZone.run(() => this.positionChange.emit(position));
          if (this.positionChange.observers.length === 0) {
            this._positionSubscription.unsubscribe();
          }
        });
      }
      this.open = true;
    }
    detachOverlay() {
      this._overlayRef?.detach();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this.open = false;
    }
    _assignConfig(config) {
      this.origin = config.origin ?? this.origin;
      this.positions = config.positions ?? this.positions;
      this.positionStrategy = config.positionStrategy ?? this.positionStrategy;
      this.offsetX = config.offsetX ?? this.offsetX;
      this.offsetY = config.offsetY ?? this.offsetY;
      this.width = config.width ?? this.width;
      this.height = config.height ?? this.height;
      this.minWidth = config.minWidth ?? this.minWidth;
      this.minHeight = config.minHeight ?? this.minHeight;
      this.backdropClass = config.backdropClass ?? this.backdropClass;
      this.panelClass = config.panelClass ?? this.panelClass;
      this.viewportMargin = config.viewportMargin ?? this.viewportMargin;
      this.scrollStrategy = config.scrollStrategy ?? this.scrollStrategy;
      this.disableClose = config.disableClose ?? this.disableClose;
      this.transformOriginSelector = config.transformOriginSelector ?? this.transformOriginSelector;
      this.hasBackdrop = config.hasBackdrop ?? this.hasBackdrop;
      this.lockPosition = config.lockPosition ?? this.lockPosition;
      this.flexibleDimensions = config.flexibleDimensions ?? this.flexibleDimensions;
      this.growAfterOpen = config.growAfterOpen ?? this.growAfterOpen;
      this.push = config.push ?? this.push;
      this.disposeOnNavigation = config.disposeOnNavigation ?? this.disposeOnNavigation;
      this.usePopover = config.usePopover ?? this.usePopover;
      this.matchWidth = config.matchWidth ?? this.matchWidth;
    }
    static \u0275fac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkConnectedOverlay2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkConnectedOverlay2,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [0, "cdkConnectedOverlayOrigin", "origin"],
        positions: [0, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [0, "cdkConnectedOverlayWidth", "width"],
        height: [0, "cdkConnectedOverlayHeight", "height"],
        minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [0, "cdkConnectedOverlayOpen", "open"],
        disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
        lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
        flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
        growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
        push: [2, "cdkConnectedOverlayPush", "push", booleanAttribute],
        disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", (value) => value === "url-change" || value === "pop-state" ? value : booleanAttribute(value)],
        usePopover: [0, "cdkConnectedOverlayUsePopover", "usePopover"],
        matchWidth: [2, "cdkConnectedOverlayMatchWidth", "matchWidth", booleanAttribute],
        _config: [0, "cdkConnectedOverlay", "_config"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [__NgOnChangesFeature]
    });
  }
  return CdkConnectedOverlay2;
})();

export { ALT as A, BasePortalOutlet as B, ComponentPortal as C, Directionality as D, ESCAPE as E, ENTER as F, SPACE as G, HOME as H, createFlexibleConnectedPositionStrategy as I, STANDARD_DROPDOWN_BELOW_POSITIONS as J, STANDARD_DROPDOWN_ADJACENT_POSITIONS as K, LEFT_ARROW as L, MAC_META as M, NINE as N, Overlay as O, Platform as P, createRepositionScrollStrategy as Q, RIGHT_ARROW as R, SHIFT as S, TemplatePortal as T, UP_ARROW as U, Z, _IdGenerator as _, OverlayContainer as a, OverlayConfig as b, createOverlayRef as c, createGlobalPositionStrategy as d, OverlayRef as e, createBlockScrollStrategy as f, _getFocusedElementPierceShadowDom as g, hasModifierKey as h, CdkPortalOutlet as i, CdkConnectedOverlay as j, CdkOverlayOrigin as k, _getEventTarget as l, coerceElement as m, _getShadowRoot as n, CONTROL as o, META as p, coerceArray as q, coerceNumberProperty as r, _CdkPrivateStyleLoader as s, A as t, ZERO as u, PAGE_DOWN as v, PAGE_UP as w, END as x, DOWN_ARROW as y, TAB as z };
