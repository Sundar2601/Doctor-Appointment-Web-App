import { b as inject, d as Injector, S as Subject, e as defer, t as take, T as TemplateRef, f as InjectionToken, ɵ as __defineService, s as signal, E as EventEmitter, g as ElementRef, h as NgZone, R as Renderer2, j as ChangeDetectorRef, k as DOCUMENT, l as afterNextRender, n as __defineComponent, p as __InheritDefinitionFeature, q as __template, r as __attribute, u as __viewQuery, v as __queryRefresh, w as __loadQuery, x as startWith, m as model, i as input, y as viewChild, V as ViewContainerRef, z as effect, A as untracked, B as DestroyRef, F as filter, G as ViewChild, I as Input, O as Output, _ as __decorate, D as Directive } from './angular-platform-DKqHXYyu.js';
import { a as OverlayContainer, _ as _IdGenerator, c as createOverlayRef, b as OverlayConfig, d as createGlobalPositionStrategy, e as OverlayRef, C as ComponentPortal, T as TemplatePortal, D as Directionality, f as createBlockScrollStrategy, E as ESCAPE, h as hasModifierKey, B as BasePortalOutlet, P as Platform, g as _getFocusedElementPierceShadowDom, i as CdkPortalOutlet } from './_overlay-module-chunk-ZyiIU7hM.js';
import { F as FocusTrapFactory, I as InteractivityChecker } from './_a11y-module-chunk-MHb0DQIo.js';
import { F as FocusMonitor } from './_focus-monitor-chunk-1TA7qkiM.js';

class DialogConfig {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = true;
  backdropClass = "";
  disableClose = false;
  closePredicate;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  positionStrategy;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = false;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  scrollStrategy;
  closeOnNavigation = true;
  closeOnDestroy = true;
  closeOnOverlayDetachments = true;
  disableAnimations = false;
  providers;
  container;
  templateContext;
  bindings;
}
let CdkDialogContainer = /* @__PURE__ */ (() => {
  class CdkDialogContainer2 extends BasePortalOutlet {
    _elementRef = inject(ElementRef);
    _focusTrapFactory = inject(FocusTrapFactory);
    _config;
    _interactivityChecker = inject(InteractivityChecker);
    _ngZone = inject(NgZone);
    _focusMonitor = inject(FocusMonitor);
    _renderer = inject(Renderer2);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _injector = inject(Injector);
    _platform = inject(Platform);
    _document = inject(DOCUMENT);
    _portalOutlet;
    _focusTrapped = new Subject();
    _focusTrap = null;
    _elementFocusedBeforeDialogWasOpened = null;
    _closeInteractionType = null;
    _ariaLabelledByQueue = [];
    _isDestroyed = false;
    constructor() {
      super();
      this._config = inject(DialogConfig, {
        optional: true
      }) || new DialogConfig();
      if (this._config.ariaLabelledBy) {
        this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
    }
    _addAriaLabelledBy(id) {
      this._ariaLabelledByQueue.push(id);
      this._changeDetectorRef.markForCheck();
    }
    _removeAriaLabelledBy(id) {
      const index = this._ariaLabelledByQueue.indexOf(id);
      if (index > -1) {
        this._ariaLabelledByQueue.splice(index, 1);
        this._changeDetectorRef.markForCheck();
      }
    }
    _contentAttached() {
      this._initializeFocusTrap();
      this._captureInitialFocus();
    }
    _captureInitialFocus() {
      this._trapFocus();
    }
    ngOnDestroy() {
      this._focusTrapped.complete();
      this._isDestroyed = true;
      this._restoreFocus();
    }
    attachComponentPortal(portal) {
      if (this._portalOutlet.hasAttached() && false) ;
      const result = this._portalOutlet.attachComponentPortal(portal);
      this._contentAttached();
      return result;
    }
    attachTemplatePortal(portal) {
      if (this._portalOutlet.hasAttached() && false) ;
      const result = this._portalOutlet.attachTemplatePortal(portal);
      this._contentAttached();
      return result;
    }
    attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && false) ;
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    _recaptureFocus() {
      if (!this._containsFocus()) {
        this._trapFocus();
      }
    }
    _forceFocus(element, options) {
      if (!this._interactivityChecker.isFocusable(element)) {
        element.tabIndex = -1;
        this._ngZone.runOutsideAngular(() => {
          const callback = () => {
            deregisterBlur();
            deregisterMousedown();
            element.removeAttribute("tabindex");
          };
          const deregisterBlur = this._renderer.listen(element, "blur", callback);
          const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
        });
      }
      element.focus(options);
    }
    _focusByCssSelector(selector, options) {
      let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
      if (elementToFocus) {
        this._forceFocus(elementToFocus, options);
      }
    }
    _trapFocus(options) {
      if (this._isDestroyed) {
        return;
      }
      afterNextRender(() => {
        const element = this._elementRef.nativeElement;
        switch (this._config.autoFocus) {
          case false:
          case "dialog":
            if (!this._containsFocus()) {
              element.focus(options);
            }
            break;
          case true:
          case "first-tabbable":
            const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
            if (!focusedSuccessfully) {
              this._focusDialogContainer(options);
            }
            break;
          case "first-heading":
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
            break;
          default:
            this._focusByCssSelector(this._config.autoFocus, options);
            break;
        }
        this._focusTrapped.next();
      }, {
        injector: this._injector
      });
    }
    _restoreFocus() {
      const focusConfig = this._config.restoreFocus;
      let focusTargetElement = null;
      if (typeof focusConfig === "string") {
        focusTargetElement = this._document.querySelector(focusConfig);
      } else if (typeof focusConfig === "boolean") {
        focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
      } else if (focusConfig) {
        focusTargetElement = focusConfig;
      }
      if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
        const activeElement = _getFocusedElementPierceShadowDom();
        const element = this._elementRef.nativeElement;
        if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
          if (this._focusMonitor) {
            this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
            this._closeInteractionType = null;
          } else {
            focusTargetElement.focus();
          }
        }
      }
      if (this._focusTrap) {
        this._focusTrap.destroy();
      }
    }
    _focusDialogContainer(options) {
      this._elementRef.nativeElement.focus?.(options);
    }
    _containsFocus() {
      const element = this._elementRef.nativeElement;
      const activeElement = _getFocusedElementPierceShadowDom();
      return element === activeElement || element.contains(activeElement);
    }
    _initializeFocusTrap() {
      if (this._platform.isBrowser) {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        if (this._document) {
          this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
        }
      }
    }
    static \u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDialogContainer2)();
    };
    static \u0275cmp = (function() {
      function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
      }
      return /* @__PURE__ */ __defineComponent({
        type: CdkDialogContainer2,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function CdkDialogContainer_Query(rf, ctx) {
          if (rf & 1) {
            __viewQuery(CdkPortalOutlet, 7);
          }
          if (rf & 2) {
            let _t = void 0;
            __queryRefresh(_t = __loadQuery()) && (ctx._portalOutlet = _t.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            __attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          }
        },
        features: [__InheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function CdkDialogContainer_Template(rf, ctx) {
          if (rf & 1) {
            __template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        dependencies: [CdkPortalOutlet],
        styles: [".cdk-dialog-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n"],
        encapsulation: 2,
        changeDetection: 1
      });
    })();
  }
  return CdkDialogContainer2;
})();
class DialogRef {
  overlayRef;
  config;
  componentInstance = null;
  componentRef = null;
  containerInstance;
  disableClose;
  closed = new Subject();
  backdropClick;
  keydownEvents;
  outsidePointerEvents;
  id;
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose && this._canClose()) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      } else {
        this.containerInstance._recaptureFocus?.();
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  close(result, options) {
    if (this._canClose(result)) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
  _canClose(result) {
    const config = this.config;
    return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
  }
}
const DIALOG_SCROLL_STRATEGY = /* @__PURE__ */ new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
const DIALOG_DATA = /* @__PURE__ */ new InjectionToken("DialogData");
const DEFAULT_DIALOG_CONFIG = /* @__PURE__ */ new InjectionToken("DefaultDialogConfig");
function getDirectionality(value) {
  const valueSignal = signal(value, ...[]);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
let Dialog = /* @__PURE__ */ (() => {
  class Dialog2 {
    _injector = inject(Injector);
    _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
      optional: true
    });
    _parentDialog = inject(Dialog2, {
      optional: true,
      skipSelf: true
    });
    _overlayContainer = inject(OverlayContainer);
    _idGenerator = inject(_IdGenerator);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new Subject();
    _afterOpenedAtThisLevel = new Subject();
    _ariaHiddenElements = /* @__PURE__ */ new Map();
    _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
    get openDialogs() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    get afterOpened() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    open(componentOrTemplateRef, config) {
      const defaults = this._defaultOptions || new DialogConfig();
      config = {
        ...defaults,
        ...config
      };
      config.id = config.id || this._idGenerator.getId("cdk-dialog-");
      if (config.id && this.getDialogById(config.id) && false) ;
      const overlayConfig = this._getOverlayConfig(config);
      const overlayRef = createOverlayRef(this._injector, overlayConfig);
      const dialogRef = new DialogRef(overlayRef, config);
      const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
      dialogRef.containerInstance = dialogContainer;
      if (!this.openDialogs.length) {
        const overlayContainer = this._overlayContainer.getContainerElement();
        if (dialogContainer._focusTrapped) {
          dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
            this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
          });
        } else {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        }
      }
      this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
      this.openDialogs.push(dialogRef);
      dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
      this.afterOpened.next(dialogRef);
      return dialogRef;
    }
    closeAll() {
      reverseForEach(this.openDialogs, (dialog) => dialog.close());
    }
    getDialogById(id) {
      return this.openDialogs.find((dialog) => dialog.id === id);
    }
    ngOnDestroy() {
      reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
        if (dialog.config.closeOnDestroy === false) {
          this._removeOpenDialog(dialog, false);
        }
      });
      reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
      this._afterAllClosedAtThisLevel.complete();
      this._afterOpenedAtThisLevel.complete();
      this._openDialogsAtThisLevel = [];
    }
    _getOverlayConfig(config) {
      const state = new OverlayConfig({
        positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
        scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
        panelClass: config.panelClass,
        hasBackdrop: config.hasBackdrop,
        direction: config.direction,
        minWidth: config.minWidth,
        minHeight: config.minHeight,
        maxWidth: config.maxWidth,
        maxHeight: config.maxHeight,
        width: config.width,
        height: config.height,
        disposeOnNavigation: config.closeOnNavigation,
        disableAnimations: config.disableAnimations
      });
      if (config.backdropClass) {
        state.backdropClass = config.backdropClass;
      }
      return state;
    }
    _attachContainer(overlay, dialogRef, config) {
      const userInjector = config.injector || config.viewContainerRef?.injector;
      const providers = [{
        provide: DialogConfig,
        useValue: config
      }, {
        provide: DialogRef,
        useValue: dialogRef
      }, {
        provide: OverlayRef,
        useValue: overlay
      }];
      let containerType;
      if (config.container) {
        if (typeof config.container === "function") {
          containerType = config.container;
        } else {
          containerType = config.container.type;
          providers.push(...config.container.providers(config));
        }
      } else {
        containerType = CdkDialogContainer;
      }
      const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
        parent: userInjector || this._injector,
        providers
      }));
      const containerRef = overlay.attach(containerPortal);
      return containerRef.instance;
    }
    _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
      if (componentOrTemplateRef instanceof TemplateRef) {
        const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
        let context = {
          $implicit: config.data,
          dialogRef
        };
        if (config.templateContext) {
          context = {
            ...context,
            ...typeof config.templateContext === "function" ? config.templateContext() : config.templateContext
          };
        }
        dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
      } else {
        const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
        const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, null, config.bindings));
        dialogRef.componentRef = contentRef;
        dialogRef.componentInstance = contentRef.instance;
      }
    }
    _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
      const userInjector = config.injector || config.viewContainerRef?.injector;
      const providers = [{
        provide: DIALOG_DATA,
        useValue: config.data
      }, {
        provide: DialogRef,
        useValue: dialogRef
      }];
      if (config.providers) {
        if (typeof config.providers === "function") {
          providers.push(...config.providers(dialogRef, config, dialogContainer));
        } else {
          providers.push(...config.providers);
        }
      }
      if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
        optional: true
      }))) {
        providers.push({
          provide: Directionality,
          useValue: getDirectionality(config.direction)
        });
      }
      return Injector.create({
        parent: userInjector || fallbackInjector,
        providers
      });
    }
    _removeOpenDialog(dialogRef, emitEvent) {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._ariaHiddenElements.forEach((previousValue, element) => {
            if (previousValue) {
              element.setAttribute("aria-hidden", previousValue);
            } else {
              element.removeAttribute("aria-hidden");
            }
          });
          this._ariaHiddenElements.clear();
          if (emitEvent) {
            this._getAfterAllClosed().next();
          }
        }
      }
    }
    _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
      if (overlayContainer.parentElement) {
        const siblings = overlayContainer.parentElement.children;
        for (let i = siblings.length - 1; i > -1; i--) {
          const sibling = siblings[i];
          if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live") && !sibling.hasAttribute("popover")) {
            this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
            sibling.setAttribute("aria-hidden", "true");
          }
        }
      }
    }
    _getAfterAllClosed() {
      const parent = this._parentDialog;
      return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Dialog2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: Dialog2,
      factory: Dialog2.\u0275fac
    });
  }
  return Dialog2;
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}

let uid = 0;
/** Shared base for Dialog / Alert Dialog / Sheet / Drawer: opens the component's `#tpl` template in a CDK Dialog (focus trap, Esc, backdrop). */
let OverlayPanelBase = class OverlayPanelBase {
    open = model(false);
    heading = input();
    description = input();
    titleId = `app-overlay-title-${++uid}`;
    descId = `app-overlay-desc-${uid}`;
    role = 'dialog';
    tpl = viewChild();
    dialog = inject(Dialog);
    vcr = inject(ViewContainerRef);
    ref = null;
    constructor() {
        effect(() => {
            const open = this.open();
            const tpl = this.tpl();
            untracked(() => {
                if (open && tpl)
                    this.show(tpl);
                else if (!open)
                    this.ref?.close();
            });
        });
        inject(DestroyRef).onDestroy(() => this.ref?.close());
    }
    close() {
        this.open.set(false);
    }
    show(tpl) {
        if (this.ref)
            return;
        const alert = this.role === 'alertdialog';
        const cfg = {
            hasBackdrop: true,
            backdropClass: 'bg-black/50',
            role: this.role,
            ariaLabelledBy: this.titleId,
            ariaDescribedBy: this.description() ? this.descId : null,
            autoFocus: 'first-tabbable',
            disableClose: alert,
            viewContainerRef: this.vcr,
            ...this.config(),
        };
        const ref = this.dialog.open(tpl, cfg);
        if (alert)
            ref.keydownEvents.pipe(filter((e) => e.key === 'Escape')).subscribe(() => ref.close());
        ref.closed.subscribe(() => {
            this.ref = null;
            this.open.set(false);
        });
        this.ref = ref;
    }
    static ctorParameters = () => [];
    static propDecorators = {
        open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false },] }, { type: Output, args: ["openChange",] }],
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        tpl: [{ type: ViewChild, args: ['tpl', { isSignal: true },] }]
    };
};
OverlayPanelBase = __decorate([
    Directive()
], OverlayPanelBase);

export { OverlayPanelBase as O };
