import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { S as Subject, af as tap, a6 as debounceTime, F as filter, a7 as map, s as signal, ag as Subscription, ah as QueryList, ai as isSignal, e as effect, ɵ as __defineService, b as inject, E as EventEmitter, X as takeUntil, a1 as __defineDirective, q as __InheritDefinitionFeature, aj as __ProvidersFeature, g as InjectionToken, ak as __listener, al as __classProp, h as ElementRef, j as NgZone, R as Renderer2, ac as booleanAttribute, am as __domProperty, u as __attribute, k as ChangeDetectorRef, d as Injector, ad as __NgOnChangesFeature, an as partition, ao as merge, Z as skip, ap as skipWhile, aq as __getInheritedFactory, y as startWith, $ as distinctUntilChanged, c as computed, ar as mergeMap, as as mapTo, at as mergeAll, au as switchMap, av as __contentQuery, w as __queryRefresh, x as __loadQuery, V as ViewContainerRef, _ as __decorate, D as Directive, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { t as A, Z, u as ZERO, N as NINE, h as hasModifierKey, v as PAGE_DOWN, w as PAGE_UP, x as END, H as HOME, L as LEFT_ARROW, R as RIGHT_ARROW, U as UP_ARROW, y as DOWN_ARROW, z as TAB, E as ESCAPE, D as Directionality, F as ENTER, G as SPACE, c as createOverlayRef, b as OverlayConfig, I as createFlexibleConnectedPositionStrategy, J as STANDARD_DROPDOWN_BELOW_POSITIONS, K as STANDARD_DROPDOWN_ADJACENT_POSITIONS, l as _getEventTarget, _ as _IdGenerator, T as TemplatePortal, Q as createRepositionScrollStrategy } from './_overlay-module-chunk-BeBLRxp0.js';
import { I as InputModalityDetector, F as FocusMonitor } from './_focus-monitor-chunk-DzyvtaEj.js';
import { N as NgIcon, p as provideIcons, r as lucideCheck } from './ng-icons-lucide-DF7QvMAc.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import './preload-helper-D5QYaGzd.js';

const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
class Typeahead {
  _letterKeyStream = new Subject();
  _items = [];
  _selectedItemIndex = -1;
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = new Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}

class ListKeyManager {
  _items;
  _activeItemIndex = signal(-1, ...[]);
  _activeItem = signal(null, ...[]);
  _wrap = false;
  _typeaheadSubscription = Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal = null;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  _skipPredicateFn = (item) => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      this._effectRef = effect(() => this._itemsChanged(_items()), {
        ...{},
        injector
      });
    }
  }
  tabOut = new Subject();
  change = new Subject();
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  withTypeAhead(debounceInterval = 200) {
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.setActiveItem(item);
    });
    return this;
  }
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  get activeItem() {
    return this._activeItem();
  }
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}

class FocusKeyManager extends ListKeyManager {
  _origin = 'program';
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}

let UniqueSelectionDispatcher = /* @__PURE__ */ (() => {
  class UniqueSelectionDispatcher2 {
    _listeners = [];
    notify(id, name) {
      for (let listener of this._listeners) {
        listener(id, name);
      }
    }
    listen(listener) {
      this._listeners.push(listener);
      return () => {
        this._listeners = this._listeners.filter((registered) => {
          return listener !== registered;
        });
      };
    }
    ngOnDestroy() {
      this._listeners = [];
    }
    static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UniqueSelectionDispatcher2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: UniqueSelectionDispatcher2,
      factory: UniqueSelectionDispatcher2.\u0275fac
    });
  }
  return UniqueSelectionDispatcher2;
})();

let CdkMenuGroup = /* @__PURE__ */ (() => {
  class CdkMenuGroup2 {
    static \u0275fac = function CdkMenuGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMenuGroup2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuGroup2,
      selectors: [["", "cdkMenuGroup", ""]],
      hostAttrs: ["role", "group", 1, "cdk-menu-group"],
      exportAs: ["cdkMenuGroup"],
      features: [__ProvidersFeature([{
        provide: UniqueSelectionDispatcher,
        useClass: UniqueSelectionDispatcher
      }])]
    });
  }
  return CdkMenuGroup2;
})();
const CDK_MENU = /* @__PURE__ */ new InjectionToken("cdk-menu");
var FocusNext = /* @__PURE__ */ (function(FocusNext2) {
  FocusNext2[FocusNext2["nextItem"] = 0] = "nextItem";
  FocusNext2[FocusNext2["previousItem"] = 1] = "previousItem";
  FocusNext2[FocusNext2["currentItem"] = 2] = "currentItem";
  return FocusNext2;
})(FocusNext || {});
const MENU_STACK = /* @__PURE__ */ new InjectionToken("cdk-menu-stack");
const PARENT_OR_NEW_MENU_STACK_PROVIDER = {
  provide: MENU_STACK,
  useFactory: () => inject(MENU_STACK, {
    optional: true,
    skipSelf: true
  }) || new MenuStack()
};
const PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER = (orientation) => ({
  provide: MENU_STACK,
  useFactory: () => inject(MENU_STACK, {
    optional: true,
    skipSelf: true
  }) || MenuStack.inline(orientation)
});
let MenuStack = /* @__PURE__ */ (() => {
  class MenuStack2 {
    id = inject(_IdGenerator).getId("cdk-menu-stack-");
    _elements = [];
    _close = new Subject();
    _empty = new Subject();
    _hasFocus = new Subject();
    closed = this._close;
    hasFocus = this._hasFocus.pipe(startWith(false), debounceTime(0), distinctUntilChanged());
    emptied = this._empty;
    _inlineMenuOrientation = null;
    static inline(orientation) {
      const stack = new MenuStack2();
      stack._inlineMenuOrientation = orientation;
      return stack;
    }
    push(menu) {
      this._elements.push(menu);
    }
    close(lastItem, options) {
      const {
        focusNextOnEmpty,
        focusParentTrigger
      } = {
        ...options
      };
      if (this._elements.indexOf(lastItem) >= 0) {
        let poppedElement;
        do {
          poppedElement = this._elements.pop();
          this._close.next({
            item: poppedElement,
            focusParentTrigger
          });
        } while (poppedElement !== lastItem);
        if (this.isEmpty()) {
          this._empty.next(focusNextOnEmpty);
        }
      }
    }
    closeSubMenuOf(lastItem) {
      let removed = false;
      if (this._elements.indexOf(lastItem) >= 0) {
        removed = this.peek() !== lastItem;
        while (this.peek() !== lastItem) {
          this._close.next({
            item: this._elements.pop()
          });
        }
      }
      return removed;
    }
    closeAll(options) {
      const {
        focusNextOnEmpty,
        focusParentTrigger
      } = {
        ...options
      };
      if (!this.isEmpty()) {
        while (!this.isEmpty()) {
          const menuStackItem = this._elements.pop();
          if (menuStackItem) {
            this._close.next({
              item: menuStackItem,
              focusParentTrigger
            });
          }
        }
        this._empty.next(focusNextOnEmpty);
      }
    }
    isEmpty() {
      return !this._elements.length;
    }
    length() {
      return this._elements.length;
    }
    peek() {
      return this._elements[this._elements.length - 1];
    }
    hasInlineMenu() {
      return this._inlineMenuOrientation != null;
    }
    inlineMenuOrientation() {
      return this._inlineMenuOrientation;
    }
    setHasFocus(hasFocus) {
      this._hasFocus.next(hasFocus);
    }
    static \u0275fac = function MenuStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuStack2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: MenuStack2,
      factory: MenuStack2.\u0275fac,
      autoProvided: false
    });
  }
  return MenuStack2;
})();
const MENU_TRIGGER = /* @__PURE__ */ new InjectionToken("cdk-menu-trigger");
const MENU_SCROLL_STRATEGY = /* @__PURE__ */ new InjectionToken("cdk-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
let MenuTracker = /* @__PURE__ */ (() => {
  class MenuTracker2 {
    static _openMenuTrigger;
    update(trigger) {
      if (MenuTracker2._openMenuTrigger !== trigger) {
        MenuTracker2._openMenuTrigger?.close();
        MenuTracker2._openMenuTrigger = trigger;
      }
    }
    static \u0275fac = function MenuTracker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuTracker2)();
    };
    static \u0275prov = /* @__PURE__ */ __defineService({
      token: MenuTracker2,
      factory: MenuTracker2.\u0275fac
    });
  }
  return MenuTracker2;
})();
let CdkMenuTriggerBase = /* @__PURE__ */ (() => {
  class CdkMenuTriggerBase2 {
    injector = inject(Injector);
    viewContainerRef = inject(ViewContainerRef);
    menuStack = inject(MENU_STACK);
    menuScrollStrategy = inject(MENU_SCROLL_STRATEGY);
    menuPosition;
    opened = new EventEmitter();
    closed = new EventEmitter();
    menuTemplateRef = null;
    menuData;
    transformOriginSelector = null;
    overlayRef = null;
    destroyed = new Subject();
    stopOutsideClicksListener = merge(this.closed, this.destroyed);
    childMenu;
    _menuPortal;
    _childMenuInjector;
    ngOnDestroy() {
      this._destroyOverlay();
      this.destroyed.next();
      this.destroyed.complete();
    }
    isOpen() {
      return !!this.overlayRef?.hasAttached();
    }
    registerChildMenu(child) {
      this.childMenu = child;
    }
    getMenuContentPortal() {
      const hasMenuContentChanged = this.menuTemplateRef !== this._menuPortal?.templateRef || this.menuData !== this._menuPortal?.context;
      if (this.menuTemplateRef && (!this._menuPortal || hasMenuContentChanged)) {
        this._menuPortal = new TemplatePortal(this.menuTemplateRef, this.viewContainerRef, this.menuData, this._getChildMenuInjector());
      }
      return this._menuPortal;
    }
    isElementInsideMenuStack(element) {
      for (let el = element; el; el = el?.parentElement ?? null) {
        if (el.getAttribute("data-cdk-menu-stack-id") === this.menuStack.id) {
          return true;
        }
      }
      return false;
    }
    _destroyOverlay() {
      if (this.overlayRef) {
        this.overlayRef.dispose();
        this.overlayRef = null;
      }
    }
    _getChildMenuInjector() {
      this._childMenuInjector = this._childMenuInjector || Injector.create({
        providers: [{
          provide: MENU_TRIGGER,
          useValue: this
        }, {
          provide: MENU_STACK,
          useValue: this.menuStack
        }],
        parent: this.injector
      });
      return this._childMenuInjector;
    }
    static \u0275fac = function CdkMenuTriggerBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMenuTriggerBase2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuTriggerBase2,
      hostVars: 2,
      hostBindings: function CdkMenuTriggerBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          __attribute("aria-controls", ctx.childMenu?.id)("data-cdk-menu-stack-id", ctx.menuStack.id);
        }
      }
    });
  }
  return CdkMenuTriggerBase2;
})();
const MENU_AIM = /* @__PURE__ */ new InjectionToken("cdk-menu-aim");
function eventDispatchesNativeClick(elementRef, event) {
  if (!event.isTrusted) {
    return false;
  }
  const el = elementRef.nativeElement;
  const keyCode = event.keyCode;
  if (el.nodeName === "BUTTON" && !el.disabled) {
    return keyCode === ENTER || keyCode === SPACE;
  }
  if (el.nodeName === "A") {
    return keyCode === ENTER;
  }
  return false;
}
let CdkMenuTrigger = /* @__PURE__ */ (() => {
  class CdkMenuTrigger2 extends CdkMenuTriggerBase {
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _inputModalityDetector = inject(InputModalityDetector);
    _directionality = inject(Directionality, {
      optional: true
    });
    _renderer = inject(Renderer2);
    _injector = inject(Injector);
    _cleanupMouseenter;
    _menuTracker = inject(MenuTracker);
    _parentMenu = inject(CDK_MENU, {
      optional: true
    });
    _menuAim = inject(MENU_AIM, {
      optional: true
    });
    constructor() {
      super();
      this._setRole();
      this._registerCloseHandler();
      this._subscribeToMenuStackClosed();
      this._subscribeToMouseEnter();
      this._subscribeToMenuStackHasFocus();
      this._setType();
    }
    toggle() {
      this.isOpen() ? this.close() : this.open();
    }
    open() {
      if (!this._parentMenu) {
        this._menuTracker.update(this);
      }
      if (!this.isOpen() && this.menuTemplateRef != null) {
        this.opened.next();
        this.overlayRef = this.overlayRef || createOverlayRef(this._injector, this._getOverlayConfig());
        this.overlayRef.attach(this.getMenuContentPortal());
        this._changeDetectorRef.markForCheck();
        this._subscribeToOutsideClicks();
      }
    }
    close() {
      if (this.isOpen()) {
        this.closed.next();
        this.overlayRef.detach();
        this._changeDetectorRef.markForCheck();
      }
      this._closeSiblingTriggers();
    }
    getMenu() {
      return this.childMenu;
    }
    ngOnChanges(changes) {
      if (changes["menuPosition"] && this.overlayRef) {
        this.overlayRef.updatePositionStrategy(this._getOverlayPositionStrategy());
      }
    }
    ngOnDestroy() {
      this._cleanupMouseenter();
      super.ngOnDestroy();
    }
    _toggleOnKeydown(event) {
      const isParentVertical = this._parentMenu?.orientation === "vertical";
      switch (event.keyCode) {
        case SPACE:
        case ENTER:
          if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
            this.toggle();
            this.childMenu?.focusFirstItem("keyboard");
          }
          break;
        case RIGHT_ARROW:
          if (!hasModifierKey(event)) {
            if (this._parentMenu && isParentVertical && this._directionality?.value !== "rtl") {
              event.preventDefault();
              this.open();
              this.childMenu?.focusFirstItem("keyboard");
            }
          }
          break;
        case LEFT_ARROW:
          if (!hasModifierKey(event)) {
            if (this._parentMenu && isParentVertical && this._directionality?.value === "rtl") {
              event.preventDefault();
              this.open();
              this.childMenu?.focusFirstItem("keyboard");
            }
          }
          break;
        case DOWN_ARROW:
        case UP_ARROW:
          if (!hasModifierKey(event)) {
            if (!isParentVertical) {
              event.preventDefault();
              this.open();
              event.keyCode === DOWN_ARROW ? this.childMenu?.focusFirstItem("keyboard") : this.childMenu?.focusLastItem("keyboard");
            }
          }
          break;
      }
    }
    _handleClick() {
      this.toggle();
      this.childMenu?.focusFirstItem("mouse");
    }
    _setHasFocus(hasFocus) {
      if (!this._parentMenu) {
        this.menuStack.setHasFocus(hasFocus);
      }
    }
    _subscribeToMouseEnter() {
      this._cleanupMouseenter = this._ngZone.runOutsideAngular(() => {
        return this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
          if (this._inputModalityDetector.mostRecentModality !== "touch" && !this.menuStack.isEmpty() && !this.isOpen()) {
            const toggleMenus = () => this._ngZone.run(() => {
              this._closeSiblingTriggers();
              this.open();
            });
            if (this._menuAim) {
              this._menuAim.toggle(toggleMenus);
            } else {
              toggleMenus();
            }
          }
        });
      });
    }
    _closeSiblingTriggers() {
      if (this._parentMenu) {
        const isParentMenuBar = !this.menuStack.closeSubMenuOf(this._parentMenu) && this.menuStack.peek() !== this._parentMenu;
        if (isParentMenuBar) {
          this.menuStack.closeAll();
        }
      } else {
        this.menuStack.closeAll();
      }
    }
    _getOverlayConfig() {
      return new OverlayConfig({
        positionStrategy: this._getOverlayPositionStrategy(),
        scrollStrategy: this.menuScrollStrategy(),
        direction: this._directionality || void 0
      });
    }
    _getOverlayPositionStrategy() {
      const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._elementRef).withLockedPosition().withFlexibleDimensions(false).withPositions(this._getOverlayPositions());
      if (this.transformOriginSelector) {
        strategy.withTransformOriginOn(this.transformOriginSelector);
      }
      return strategy;
    }
    _getOverlayPositions() {
      return this.menuPosition ?? (!this._parentMenu || this._parentMenu.orientation === "horizontal" ? STANDARD_DROPDOWN_BELOW_POSITIONS : STANDARD_DROPDOWN_ADJACENT_POSITIONS);
    }
    _registerCloseHandler() {
      if (!this._parentMenu) {
        this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
          item
        }) => {
          if (item === this.childMenu) {
            this.close();
          }
        });
      }
    }
    _subscribeToOutsideClicks() {
      if (this.overlayRef) {
        this.overlayRef.outsidePointerEvents().pipe(takeUntil(this.stopOutsideClicksListener)).subscribe((event) => {
          const target = _getEventTarget(event);
          const element = this._elementRef.nativeElement;
          if (target !== element && !element.contains(target)) {
            if (!this.isElementInsideMenuStack(target)) {
              this.menuStack.closeAll();
            } else {
              this._closeSiblingTriggers();
            }
          }
        });
      }
    }
    _subscribeToMenuStackHasFocus() {
      if (!this._parentMenu) {
        this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe((hasFocus) => {
          if (!hasFocus) {
            this.menuStack.closeAll();
          }
        });
      }
    }
    _subscribeToMenuStackClosed() {
      if (!this._parentMenu) {
        this.menuStack.closed.subscribe(({
          focusParentTrigger
        }) => {
          if (focusParentTrigger && !this.menuStack.length()) {
            this._elementRef.nativeElement.focus();
          }
        });
      }
    }
    _setRole() {
      if (!this._parentMenu) {
        this._elementRef.nativeElement.setAttribute("role", "button");
      }
    }
    _setType() {
      const element = this._elementRef.nativeElement;
      if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
        element.setAttribute("type", "button");
      }
    }
    static \u0275fac = function CdkMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMenuTrigger2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuTrigger2,
      selectors: [["", "cdkMenuTriggerFor", ""]],
      hostAttrs: [1, "cdk-menu-trigger"],
      hostVars: 2,
      hostBindings: function CdkMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("focusin", function CdkMenuTrigger_focusin_HostBindingHandler() {
            return ctx._setHasFocus(true);
          })("focusout", function CdkMenuTrigger_focusout_HostBindingHandler() {
            return ctx._setHasFocus(false);
          })("keydown", function CdkMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._toggleOnKeydown($event);
          })("click", function CdkMenuTrigger_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }
        if (rf & 2) {
          __attribute("aria-haspopup", ctx.menuTemplateRef ? "menu" : null)("aria-expanded", ctx.menuTemplateRef == null ? null : ctx.isOpen());
        }
      },
      inputs: {
        menuTemplateRef: [0, "cdkMenuTriggerFor", "menuTemplateRef"],
        menuPosition: [0, "cdkMenuPosition", "menuPosition"],
        menuData: [0, "cdkMenuTriggerData", "menuData"],
        transformOriginSelector: [0, "cdkMenuTriggerTransformOriginOn", "transformOriginSelector"]
      },
      outputs: {
        opened: "cdkMenuOpened",
        closed: "cdkMenuClosed"
      },
      exportAs: ["cdkMenuTriggerFor"],
      features: [__ProvidersFeature([{
        provide: MENU_TRIGGER,
        useExisting: CdkMenuTrigger2
      }, PARENT_OR_NEW_MENU_STACK_PROVIDER]), __InheritDefinitionFeature, __NgOnChangesFeature]
    });
  }
  return CdkMenuTrigger2;
})();
let CdkMenuItem = /* @__PURE__ */ (() => {
  class CdkMenuItem2 {
    _dir = inject(Directionality, {
      optional: true
    });
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _inputModalityDetector = inject(InputModalityDetector);
    _renderer = inject(Renderer2);
    _cleanupMouseEnter;
    _menuAim = inject(MENU_AIM, {
      optional: true
    });
    _menuStack = inject(MENU_STACK);
    _parentMenu = inject(CDK_MENU, {
      optional: true
    });
    _menuTrigger = inject(CdkMenuTrigger, {
      optional: true,
      self: true
    });
    disabled = false;
    typeaheadLabel = null;
    triggered = new EventEmitter();
    get hasMenu() {
      return this._menuTrigger?.menuTemplateRef != null;
    }
    _tabindex = -1;
    closeOnSpacebarTrigger = true;
    destroyed = new Subject();
    constructor() {
      this._setupMouseEnter();
      this._setType();
      if (this._isStandaloneItem()) {
        this._tabindex = 0;
      }
    }
    ngOnDestroy() {
      this._cleanupMouseEnter?.();
      this.destroyed.next();
      this.destroyed.complete();
    }
    focus() {
      this._elementRef.nativeElement.focus();
    }
    trigger(options) {
      const {
        keepOpen
      } = {
        ...options
      };
      if (!this.disabled && !this.hasMenu) {
        this.triggered.next();
        if (!keepOpen) {
          this._menuStack.closeAll({
            focusParentTrigger: true
          });
        }
      }
    }
    isMenuOpen() {
      return !!this._menuTrigger?.isOpen();
    }
    getMenu() {
      return this._menuTrigger?.getMenu();
    }
    getMenuTrigger() {
      return this._menuTrigger;
    }
    getLabel() {
      return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
    }
    _resetTabIndex() {
      if (!this._isStandaloneItem()) {
        this._tabindex = -1;
      }
    }
    _setTabIndex(event) {
      if (this.disabled) {
        return;
      }
      if (!event || !this._menuStack.isEmpty()) {
        this._tabindex = 0;
      }
    }
    _handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        this.trigger();
      }
    }
    _onKeydown(event) {
      switch (event.keyCode) {
        case SPACE:
        case ENTER:
          if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
            const nodeName = this._elementRef.nativeElement.nodeName;
            if (nodeName !== "A" && nodeName !== "BUTTON") {
              event.preventDefault();
            }
            this.trigger({
              keepOpen: event.keyCode === SPACE && !this.closeOnSpacebarTrigger
            });
          }
          break;
        case RIGHT_ARROW:
          if (!hasModifierKey(event)) {
            if (this._parentMenu && this._isParentVertical()) {
              if (this._dir?.value !== "rtl") {
                this._forwardArrowPressed(event);
              } else {
                this._backArrowPressed(event);
              }
            }
          }
          break;
        case LEFT_ARROW:
          if (!hasModifierKey(event)) {
            if (this._parentMenu && this._isParentVertical()) {
              if (this._dir?.value !== "rtl") {
                this._backArrowPressed(event);
              } else {
                this._forwardArrowPressed(event);
              }
            }
          }
          break;
      }
    }
    _isStandaloneItem() {
      return !this._parentMenu;
    }
    _backArrowPressed(event) {
      const parentMenu = this._parentMenu;
      if (this._menuStack.hasInlineMenu() || this._menuStack.length() > 1) {
        event.preventDefault();
        this._menuStack.close(parentMenu, {
          focusNextOnEmpty: this._menuStack.inlineMenuOrientation() === "horizontal" ? FocusNext.previousItem : FocusNext.currentItem,
          focusParentTrigger: true
        });
      }
    }
    _forwardArrowPressed(event) {
      if (!this.hasMenu && this._menuStack.inlineMenuOrientation() === "horizontal") {
        event.preventDefault();
        this._menuStack.closeAll({
          focusNextOnEmpty: FocusNext.nextItem,
          focusParentTrigger: true
        });
      }
    }
    _setupMouseEnter() {
      if (!this._isStandaloneItem()) {
        const closeOpenSiblings = () => this._ngZone.run(() => this._menuStack.closeSubMenuOf(this._parentMenu));
        this._cleanupMouseEnter = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
          if (this._inputModalityDetector.mostRecentModality !== "touch" && !this._menuStack.isEmpty() && !this.hasMenu) {
            if (this._menuAim) {
              this._menuAim.toggle(closeOpenSiblings);
            } else {
              closeOpenSiblings();
            }
          }
        }));
      }
    }
    _isParentVertical() {
      return this._parentMenu?.orientation === "vertical";
    }
    _setType() {
      const element = this._elementRef.nativeElement;
      if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
        element.setAttribute("type", "button");
      }
    }
    static \u0275fac = function CdkMenuItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMenuItem2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuItem2,
      selectors: [["", "cdkMenuItem", ""]],
      hostAttrs: ["role", "menuitem", 1, "cdk-menu-item"],
      hostVars: 4,
      hostBindings: function CdkMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("blur", function CdkMenuItem_blur_HostBindingHandler() {
            return ctx._resetTabIndex();
          })("focus", function CdkMenuItem_focus_HostBindingHandler() {
            return ctx._setTabIndex();
          })("click", function CdkMenuItem_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("keydown", function CdkMenuItem_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          });
        }
        if (rf & 2) {
          __domProperty("tabIndex", ctx._tabindex);
          __attribute("aria-disabled", ctx.disabled || null);
          __classProp("cdk-menu-item-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: [2, "cdkMenuItemDisabled", "disabled", booleanAttribute],
        typeaheadLabel: [0, "cdkMenuitemTypeaheadLabel", "typeaheadLabel"]
      },
      outputs: {
        triggered: "cdkMenuItemTriggered"
      },
      exportAs: ["cdkMenuItem"]
    });
  }
  return CdkMenuItem2;
})();
class PointerFocusTracker {
  _renderer;
  _items;
  _eventCleanups;
  _itemsSubscription;
  entered = new Subject();
  exited = new Subject();
  activeElement;
  previousElement;
  constructor(_renderer, _items) {
    this._renderer = _renderer;
    this._items = _items;
    this._bindEvents();
    this.entered.subscribe((element) => this.activeElement = element);
    this.exited.subscribe(() => {
      this.previousElement = this.activeElement;
      this.activeElement = void 0;
    });
  }
  destroy() {
    this._cleanupEvents();
    this._itemsSubscription?.unsubscribe();
  }
  _bindEvents() {
    this._itemsSubscription = this._items.changes.pipe(startWith(this._items)).subscribe(() => {
      this._cleanupEvents();
      this._eventCleanups = [];
      this._items.forEach((item) => {
        const element = item._elementRef.nativeElement;
        this._eventCleanups.push(this._renderer.listen(element, "mouseenter", () => {
          this.entered.next(item);
        }), this._renderer.listen(element, "mouseout", () => {
          this.exited.next(item);
        }));
      });
    });
  }
  _cleanupEvents() {
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._eventCleanups = void 0;
  }
}
let CdkMenuBase = /* @__PURE__ */ (() => {
  class CdkMenuBase2 extends CdkMenuGroup {
    _focusMonitor = inject(FocusMonitor);
    ngZone = inject(NgZone);
    _renderer = inject(Renderer2);
    nativeElement = inject(ElementRef).nativeElement;
    menuStack = inject(MENU_STACK);
    menuAim = inject(MENU_AIM, {
      optional: true,
      self: true
    });
    dir = inject(Directionality, {
      optional: true
    });
    _allItems;
    id = inject(_IdGenerator).getId("cdk-menu-");
    items = new QueryList();
    orientation = "vertical";
    isInline = false;
    keyManager;
    destroyed = new Subject();
    triggerItem;
    pointerTracker;
    _menuStackHasFocus = signal(false, ...[]);
    _tabIndexSignal = computed(() => {
      const tabindexIfInline = this._menuStackHasFocus() ? -1 : 0;
      return this.isInline ? tabindexIfInline : null;
    }, ...[]);
    ngAfterContentInit() {
      if (!this.isInline) {
        this.menuStack.push(this);
      }
      this._setItems();
      this._setKeyManager();
      this._handleFocus();
      this._subscribeToMenuStackHasFocus();
      this._subscribeToMenuOpen();
      this._subscribeToMenuStackClosed();
      this._setUpPointerTracker();
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this.nativeElement);
      this.keyManager?.destroy();
      this.destroyed.next();
      this.destroyed.complete();
      this.pointerTracker?.destroy();
    }
    focusFirstItem(focusOrigin = "program") {
      this.keyManager.setFocusOrigin(focusOrigin);
      this.keyManager.setFirstItemActive();
    }
    focusLastItem(focusOrigin = "program") {
      this.keyManager.setFocusOrigin(focusOrigin);
      this.keyManager.setLastItemActive();
    }
    setActiveMenuItem(item) {
      this.keyManager?.setActiveItem(item);
    }
    _getTabIndex() {
      return this._tabIndexSignal();
    }
    closeOpenMenu(menu, options) {
      const {
        focusParentTrigger
      } = {
        ...options
      };
      const keyManager = this.keyManager;
      const trigger = this.triggerItem;
      if (menu === trigger?.getMenuTrigger()?.getMenu()) {
        trigger?.getMenuTrigger()?.close();
        if (focusParentTrigger) {
          if (trigger) {
            keyManager.setActiveItem(trigger);
          } else {
            keyManager.setFirstItemActive();
          }
        }
      }
    }
    _setItems() {
      this._allItems.changes.pipe(startWith(this._allItems), takeUntil(this.destroyed)).subscribe((items) => {
        this.items.reset(items.filter((item) => item._parentMenu === this));
        this.items.notifyOnChanges();
      });
    }
    _setKeyManager() {
      this.keyManager = new FocusKeyManager(this.items).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(() => false);
      if (this.orientation === "horizontal") {
        this.keyManager.withHorizontalOrientation(this.dir?.value || "ltr");
      } else {
        this.keyManager.withVerticalOrientation();
      }
    }
    _subscribeToMenuOpen() {
      const exitCondition = merge(this.items.changes, this.destroyed);
      this.items.changes.pipe(startWith(this.items), mergeMap((list) => list.filter((item) => item.hasMenu).map((item) => item.getMenuTrigger().opened.pipe(mapTo(item), takeUntil(exitCondition)))), mergeAll(), switchMap((item) => {
        this.triggerItem = item;
        return item.getMenuTrigger().closed;
      }), takeUntil(this.destroyed)).subscribe(() => this.triggerItem = void 0);
    }
    _subscribeToMenuStackClosed() {
      this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
        item,
        focusParentTrigger
      }) => this.closeOpenMenu(item, {
        focusParentTrigger
      }));
    }
    _subscribeToMenuStackHasFocus() {
      if (this.isInline) {
        this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe((hasFocus) => {
          this._menuStackHasFocus.set(hasFocus);
        });
      }
    }
    _setUpPointerTracker() {
      if (this.menuAim) {
        this.ngZone.runOutsideAngular(() => {
          this.pointerTracker = new PointerFocusTracker(this._renderer, this.items);
        });
        this.menuAim.initialize(this, this.pointerTracker);
      }
    }
    _handleFocus() {
      this._focusMonitor.monitor(this.nativeElement, false).pipe(takeUntil(this.destroyed)).subscribe((origin) => {
        if (origin !== null && origin !== "mouse") {
          this.focusFirstItem(origin);
        }
      });
    }
    static \u0275fac = /* @__PURE__ */ (() => {
      let \u0275CdkMenuBase_BaseFactory = void 0;
      return function CdkMenuBase_Factory(__ngFactoryType__) {
        return (\u0275CdkMenuBase_BaseFactory || (\u0275CdkMenuBase_BaseFactory = __getInheritedFactory(CdkMenuBase2)))(__ngFactoryType__ || CdkMenuBase2);
      };
    })();
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuBase2,
      contentQueries: function CdkMenuBase_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          __contentQuery(dirIndex, CdkMenuItem, 5);
        }
        if (rf & 2) {
          let _t = void 0;
          __queryRefresh(_t = __loadQuery()) && (ctx._allItems = _t);
        }
      },
      hostAttrs: ["role", "menu"],
      hostVars: 4,
      hostBindings: function CdkMenuBase_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("focusin", function CdkMenuBase_focusin_HostBindingHandler() {
            return ctx.menuStack.setHasFocus(true);
          })("focusout", function CdkMenuBase_focusout_HostBindingHandler() {
            return ctx.menuStack.setHasFocus(false);
          });
        }
        if (rf & 2) {
          __domProperty("tabIndex", ctx._getTabIndex())("id", ctx.id);
          __attribute("aria-orientation", ctx.orientation)("data-cdk-menu-stack-id", ctx.menuStack.id);
        }
      },
      inputs: {
        id: "id"
      },
      features: [__InheritDefinitionFeature]
    });
  }
  return CdkMenuBase2;
})();
let CdkMenu = /* @__PURE__ */ (() => {
  class CdkMenu2 extends CdkMenuBase {
    _parentTrigger = inject(MENU_TRIGGER, {
      optional: true
    });
    closed = new EventEmitter();
    orientation = "vertical";
    isInline = !this._parentTrigger;
    constructor() {
      super();
      this.destroyed.subscribe(this.closed);
      this._parentTrigger?.registerChildMenu(this);
    }
    ngAfterContentInit() {
      super.ngAfterContentInit();
      this._subscribeToMenuStackEmptied();
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.closed.complete();
    }
    _handleKeyEvent(event) {
      const keyManager = this.keyManager;
      switch (event.keyCode) {
        case LEFT_ARROW:
        case RIGHT_ARROW:
          if (!hasModifierKey(event)) {
            event.preventDefault();
            keyManager.setFocusOrigin("keyboard");
            keyManager.onKeydown(event);
          }
          break;
        case ESCAPE:
          if (!hasModifierKey(event)) {
            event.preventDefault();
            this.menuStack.close(this, {
              focusNextOnEmpty: FocusNext.currentItem,
              focusParentTrigger: true
            });
          }
          break;
        case TAB:
          if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
            this.menuStack.closeAll({
              focusParentTrigger: true
            });
          }
          break;
        default:
          keyManager.onKeydown(event);
      }
    }
    _toggleMenuFocus(focusNext) {
      const keyManager = this.keyManager;
      switch (focusNext) {
        case FocusNext.nextItem:
          keyManager.setFocusOrigin("keyboard");
          keyManager.setNextItemActive();
          break;
        case FocusNext.previousItem:
          keyManager.setFocusOrigin("keyboard");
          keyManager.setPreviousItemActive();
          break;
        case FocusNext.currentItem:
          if (keyManager.activeItem) {
            keyManager.setFocusOrigin("keyboard");
            keyManager.setActiveItem(keyManager.activeItem);
          }
          break;
      }
    }
    _subscribeToMenuStackEmptied() {
      this.menuStack.emptied.pipe(takeUntil(this.destroyed)).subscribe((event) => this._toggleMenuFocus(event));
    }
    static \u0275fac = function CdkMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMenu2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenu2,
      selectors: [["", "cdkMenu", ""]],
      hostAttrs: ["role", "menu", 1, "cdk-menu"],
      hostVars: 2,
      hostBindings: function CdkMenu_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("keydown", function CdkMenu_keydown_HostBindingHandler($event) {
            return ctx._handleKeyEvent($event);
          });
        }
        if (rf & 2) {
          __classProp("cdk-menu-inline", ctx.isInline);
        }
      },
      outputs: {
        closed: "closed"
      },
      exportAs: ["cdkMenu"],
      features: [__ProvidersFeature([{
        provide: CdkMenuGroup,
        useExisting: CdkMenu2
      }, {
        provide: CDK_MENU,
        useExisting: CdkMenu2
      }, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER("vertical")]), __InheritDefinitionFeature]
    });
  }
  return CdkMenu2;
})();
let CdkMenuBar = /* @__PURE__ */ (() => {
  class CdkMenuBar2 extends CdkMenuBase {
    orientation = "horizontal";
    isInline = true;
    ngAfterContentInit() {
      super.ngAfterContentInit();
      this._subscribeToMenuStackEmptied();
    }
    _handleKeyEvent(event) {
      const keyManager = this.keyManager;
      switch (event.keyCode) {
        case UP_ARROW:
        case DOWN_ARROW:
        case LEFT_ARROW:
        case RIGHT_ARROW:
          if (!hasModifierKey(event)) {
            const horizontalArrows = event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW;
            if (horizontalArrows) {
              event.preventDefault();
              const prevIsOpen = keyManager.activeItem?.isMenuOpen();
              keyManager.activeItem?.getMenuTrigger()?.close();
              keyManager.setFocusOrigin("keyboard");
              keyManager.onKeydown(event);
              if (prevIsOpen) {
                keyManager.activeItem?.getMenuTrigger()?.open();
              }
            }
          }
          break;
        case ESCAPE:
          if (!hasModifierKey(event)) {
            event.preventDefault();
            keyManager.activeItem?.getMenuTrigger()?.close();
          }
          break;
        case TAB:
          if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
            keyManager.activeItem?.getMenuTrigger()?.close();
          }
          break;
        default:
          keyManager.onKeydown(event);
      }
    }
    _toggleOpenMenu(focusNext) {
      const keyManager = this.keyManager;
      switch (focusNext) {
        case FocusNext.nextItem:
          keyManager.setFocusOrigin("keyboard");
          keyManager.setNextItemActive();
          keyManager.activeItem?.getMenuTrigger()?.open();
          break;
        case FocusNext.previousItem:
          keyManager.setFocusOrigin("keyboard");
          keyManager.setPreviousItemActive();
          keyManager.activeItem?.getMenuTrigger()?.open();
          break;
        case FocusNext.currentItem:
          if (keyManager.activeItem) {
            keyManager.setFocusOrigin("keyboard");
            keyManager.setActiveItem(keyManager.activeItem);
          }
          break;
      }
    }
    _subscribeToMenuStackEmptied() {
      this.menuStack?.emptied.pipe(takeUntil(this.destroyed)).subscribe((event) => this._toggleOpenMenu(event));
    }
    static \u0275fac = /* @__PURE__ */ (() => {
      let \u0275CdkMenuBar_BaseFactory = void 0;
      return function CdkMenuBar_Factory(__ngFactoryType__) {
        return (\u0275CdkMenuBar_BaseFactory || (\u0275CdkMenuBar_BaseFactory = __getInheritedFactory(CdkMenuBar2)))(__ngFactoryType__ || CdkMenuBar2);
      };
    })();
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkMenuBar2,
      selectors: [["", "cdkMenuBar", ""]],
      hostAttrs: ["role", "menubar", 1, "cdk-menu-bar"],
      hostBindings: function CdkMenuBar_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("keydown", function CdkMenuBar_keydown_HostBindingHandler($event) {
            return ctx._handleKeyEvent($event);
          });
        }
      },
      exportAs: ["cdkMenuBar"],
      features: [__ProvidersFeature([{
        provide: CdkMenuGroup,
        useExisting: CdkMenuBar2
      }, {
        provide: CDK_MENU,
        useExisting: CdkMenuBar2
      }, {
        provide: MENU_STACK,
        useFactory: () => MenuStack.inline("horizontal")
      }]), __InheritDefinitionFeature]
    });
  }
  return CdkMenuBar2;
})();
const CONTEXT_MENU_POSITIONS = /* @__PURE__ */ STANDARD_DROPDOWN_BELOW_POSITIONS.map((position) => {
  const offsetX = position.overlayX === "start" ? 2 : -2;
  const offsetY = position.overlayY === "top" ? 2 : -2;
  return {
    ...position,
    offsetX,
    offsetY
  };
});
let CdkContextMenuTrigger = /* @__PURE__ */ (() => {
  class CdkContextMenuTrigger2 extends CdkMenuTriggerBase {
    _injector = inject(Injector);
    _directionality = inject(Directionality, {
      optional: true
    });
    _menuTracker = inject(MenuTracker);
    _changeDetectorRef = inject(ChangeDetectorRef);
    disabled = false;
    constructor() {
      super();
      this._setMenuStackCloseListener();
    }
    open(coordinates) {
      this._open(null, coordinates);
      this._changeDetectorRef.markForCheck();
    }
    close() {
      this.menuStack.closeAll();
    }
    _openOnContextMenu(event) {
      if (!this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        this._menuTracker.update(this);
        this._open(event, {
          x: event.clientX,
          y: event.clientY
        });
        if (event.button === 2) {
          this.childMenu?.focusFirstItem("mouse");
        } else if (event.button === 0) {
          this.childMenu?.focusFirstItem("keyboard");
        } else {
          this.childMenu?.focusFirstItem("program");
        }
      }
    }
    _getOverlayConfig(coordinates) {
      return new OverlayConfig({
        positionStrategy: this._getOverlayPositionStrategy(coordinates),
        scrollStrategy: this.menuScrollStrategy(),
        direction: this._directionality || void 0
      });
    }
    _getOverlayPositionStrategy(coordinates) {
      const strategy = createFlexibleConnectedPositionStrategy(this._injector, coordinates).withLockedPosition().withGrowAfterOpen().withPositions(this.menuPosition ?? CONTEXT_MENU_POSITIONS);
      if (this.transformOriginSelector) {
        strategy.withTransformOriginOn(this.transformOriginSelector);
      }
      return strategy;
    }
    _setMenuStackCloseListener() {
      this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
        item
      }) => {
        if (item === this.childMenu && this.isOpen()) {
          this.closed.next();
          this.overlayRef.detach();
          this.childMenu = void 0;
          this._changeDetectorRef.markForCheck();
        }
      });
    }
    _subscribeToOutsideClicks(userEvent) {
      if (this.overlayRef) {
        let outsideClicks = this.overlayRef.outsidePointerEvents();
        if (userEvent) {
          const [auxClicks, nonAuxClicks] = partition(outsideClicks, ({
            type
          }) => type === "auxclick");
          outsideClicks = merge(nonAuxClicks.pipe(skipWhile((event, index) => userEvent.ctrlKey && index === 0 && event.ctrlKey)), auxClicks.pipe(skip(1)));
        }
        outsideClicks.pipe(takeUntil(this.stopOutsideClicksListener)).subscribe((event) => {
          if (!this.isElementInsideMenuStack(_getEventTarget(event))) {
            this.menuStack.closeAll();
          }
        });
      }
    }
    _open(userEvent, coordinates) {
      if (this.disabled) {
        return;
      }
      if (this.isOpen()) {
        this.menuStack.closeSubMenuOf(this.childMenu);
        this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
        this.overlayRef.updatePosition();
      } else {
        this.opened.next();
        if (this.overlayRef) {
          this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
          this.overlayRef.updatePosition();
        } else {
          this.overlayRef = createOverlayRef(this._injector, this._getOverlayConfig(coordinates));
        }
        this.overlayRef.attach(this.getMenuContentPortal());
        this._subscribeToOutsideClicks(userEvent);
      }
    }
    static \u0275fac = function CdkContextMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkContextMenuTrigger2)();
    };
    static \u0275dir = /* @__PURE__ */ __defineDirective({
      type: CdkContextMenuTrigger2,
      selectors: [["", "cdkContextMenuTriggerFor", ""]],
      hostVars: 1,
      hostBindings: function CdkContextMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("contextmenu", function CdkContextMenuTrigger_contextmenu_HostBindingHandler($event) {
            return ctx._openOnContextMenu($event);
          });
        }
        if (rf & 2) {
          __attribute("data-cdk-menu-stack-id", null);
        }
      },
      inputs: {
        menuTemplateRef: [0, "cdkContextMenuTriggerFor", "menuTemplateRef"],
        menuPosition: [0, "cdkContextMenuPosition", "menuPosition"],
        menuData: [0, "cdkContextMenuTriggerData", "menuData"],
        transformOriginSelector: [0, "cdkContextMenuTriggerTransformOriginOn", "transformOriginSelector"],
        disabled: [2, "cdkContextMenuDisabled", "disabled", booleanAttribute]
      },
      outputs: {
        opened: "cdkContextMenuOpened",
        closed: "cdkContextMenuClosed"
      },
      exportAs: ["cdkContextMenuTriggerFor"],
      features: [__ProvidersFeature([{
        provide: MENU_TRIGGER,
        useExisting: CdkContextMenuTrigger2
      }, {
        provide: MENU_STACK,
        useClass: MenuStack
      }]), __InheritDefinitionFeature]
    });
  }
  return CdkContextMenuTrigger2;
})();

/** Styled menu surface (CDK menu, role=menu, arrow-key navigation). */
let MenuPanelDirective = class MenuPanelDirective {
};
MenuPanelDirective = __decorate([
    Directive({
        selector: 'div[appMenuPanel]',
        hostDirectives: [CdkMenu],
        host: { class: 'bg-popover text-popover-foreground flex min-w-60 flex-col rounded-md border p-1 shadow-md outline-none' },
    })
], MenuPanelDirective);
/** Renders `entries` as menu items; must sit inside an `appMenuPanel`. */
let MenuEntriesComponent = class MenuEntriesComponent {
    entries = input.required();
    picked = output();
    static propDecorators = {
        entries: [{ type: Input, args: [{ isSignal: true, alias: "entries", required: true, transform: undefined },] }],
        picked: [{ type: Output, args: ["picked",] }]
    };
};
MenuEntriesComponent = __decorate([
    Component({
        selector: 'app-menu-entries',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CdkMenuItem, NgIcon],
        viewProviders: [provideIcons({ lucideCheck })],
        host: { class: 'contents' },
        template: `
    @for (e of entries(); track $index) {
      @if (e.separator) {
        <div role="separator" class="bg-border -mx-1 my-1 h-px"></div>
      } @else if (e.heading) {
        <div class="px-2 py-1.5 text-sm font-medium">{{ e.label }}</div>
      } @else {
        <button
          type="button"
          cdkMenuItem
          [cdkMenuItemDisabled]="!!e.disabled"
          (cdkMenuItemTriggered)="picked.emit(e)"
          class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50"
          [class.text-destructive]="e.destructive"
        >
          <span class="flex-1">{{ e.label }}</span>
          @if (e.checked) {
            <ng-icon name="lucideCheck" size="16" />
          }
          @if (e.shortcut) {
            <span class="text-muted-foreground ml-auto text-xs tracking-widest">{{ e.shortcut }}</span>
          }
        </button>
      }
    }
  `,
    })
], MenuEntriesComponent);
/** Usage: `<app-dropdown-menu label="Open" [entries]="items" (selected)="onPick($event)" />`. */
let DropdownMenuComponent = class DropdownMenuComponent {
    label = input('Open');
    variant = input('outline');
    entries = input.required();
    selected = output();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        entries: [{ type: Input, args: [{ isSignal: true, alias: "entries", required: true, transform: undefined },] }],
        selected: [{ type: Output, args: ["selected",] }]
    };
};
DropdownMenuComponent = __decorate([
    Component({
        selector: 'app-dropdown-menu',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CdkMenuTrigger, MenuPanelDirective, MenuEntriesComponent, ButtonDirective],
        host: { class: 'inline-block' },
        template: `
    <button type="button" appButton [variant]="variant()" [cdkMenuTriggerFor]="menu">{{ label() }}</button>
    <ng-template #menu>
      <div appMenuPanel><app-menu-entries [entries]="entries()" (picked)="selected.emit($event)" /></div>
    </ng-template>
  `,
    })
], DropdownMenuComponent);
/** Right-click menu around projected content. Usage: `<app-context-menu [entries]="items"><div>Right click here</div></app-context-menu>`. */
let ContextMenuComponent = class ContextMenuComponent {
    entries = input.required();
    selected = output();
    static propDecorators = {
        entries: [{ type: Input, args: [{ isSignal: true, alias: "entries", required: true, transform: undefined },] }],
        selected: [{ type: Output, args: ["selected",] }]
    };
};
ContextMenuComponent = __decorate([
    Component({
        selector: 'app-context-menu',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CdkContextMenuTrigger, MenuPanelDirective, MenuEntriesComponent],
        host: { class: 'block' },
        template: `
    <div [cdkContextMenuTriggerFor]="menu"><ng-content /></div>
    <ng-template #menu>
      <div appMenuPanel><app-menu-entries [entries]="entries()" (picked)="selected.emit($event)" /></div>
    </ng-template>
  `,
    })
], ContextMenuComponent);
/** Horizontal menu bar. Usage: `<app-menubar [menus]="[{label:'File', entries:[...]}]" (selected)="..." />`. */
let MenubarComponent = class MenubarComponent {
    menus = input.required();
    selected = output();
    static propDecorators = {
        menus: [{ type: Input, args: [{ isSignal: true, alias: "menus", required: true, transform: undefined },] }],
        selected: [{ type: Output, args: ["selected",] }]
    };
};
MenubarComponent = __decorate([
    Component({
        selector: 'app-menubar',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CdkMenuBar, CdkMenuItem, CdkMenuTrigger, MenuPanelDirective, MenuEntriesComponent],
        host: { class: 'inline-block' },
        template: `
    <div cdkMenuBar class="bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs">
      @for (m of menus(); track m.label) {
        <button
          type="button"
          cdkMenuItem
          [cdkMenuTriggerFor]="menu"
          class="hover:bg-accent focus:bg-accent aria-expanded:bg-accent rounded-sm px-2 py-1 text-sm font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {{ m.label }}
        </button>
        <ng-template #menu>
          <div appMenuPanel><app-menu-entries [entries]="m.entries" (picked)="selected.emit($event)" /></div>
        </ng-template>
      }
    </div>
  `,
    })
], MenubarComponent);

const entries = [{
  heading: true,
  label: 'My account'
}, {
  label: 'Profile',
  value: 'profile',
  shortcut: 'Ctrl+P'
}, {
  label: 'Settings',
  value: 'settings',
  shortcut: 'Ctrl+S'
}, {
  label: 'Notifications',
  value: 'notifications',
  checked: true
}, {
  label: 'Billing',
  value: 'billing',
  disabled: true
}, {
  separator: true
}, {
  label: 'Log out',
  value: 'logout',
  destructive: true
}];
const meta = {
  title: 'Overlays/Menus',
  decorators: [moduleMetadata({
    imports: [DropdownMenuComponent, ContextMenuComponent, MenubarComponent, MenuPanelDirective, MenuEntriesComponent]
  })],
  parameters: {
    layout: 'padded'
  }
};
const Dropdown = {
  args: {
    label: 'Open menu',
    variant: 'outline',
    entries
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost', 'link']
    }
  },
  render: args => ({
    props: {
      ...args,
      last: '',
      pick(e) {
        this['last'] = e.label ?? '';
      }
    },
    template: `
      <app-dropdown-menu [label]="label" [variant]="variant" [entries]="entries" (selected)="pick($event)" />
      <p class="mt-4 text-sm">Last selected: {{ last || 'none' }}</p>
    `
  })
};
/** The open menu panel rendered inline (as it appears when the dropdown / context menu is open). */
const Panel = {
  args: {
    entries
  },
  render: args => ({
    props: args,
    template: `<div appMenuPanel class="w-60"><app-menu-entries [entries]="entries" /></div>`
  })
};
const ContextMenu = {
  args: {
    entries
  },
  render: args => ({
    props: args,
    template: `
      <app-context-menu [entries]="entries">
        <div class="text-muted-foreground flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">Right click here</div>
      </app-context-menu>
    `
  })
};
const Menubar = {
  args: {
    menus: [{
      label: 'File',
      entries: [{
        label: 'New appointment',
        value: 'new',
        shortcut: 'Ctrl+N'
      }, {
        label: 'Export',
        value: 'export'
      }, {
        separator: true
      }, {
        label: 'Quit',
        value: 'quit',
        destructive: true
      }]
    }, {
      label: 'Edit',
      entries: [{
        label: 'Undo',
        value: 'undo',
        shortcut: 'Ctrl+Z'
      }, {
        label: 'Redo',
        value: 'redo',
        shortcut: 'Ctrl+Y'
      }]
    }, {
      label: 'View',
      entries: [{
        label: 'Show sidebar',
        value: 'sidebar',
        checked: true
      }, {
        label: 'Compact mode',
        value: 'compact'
      }]
    }, {
      label: 'Profiles',
      entries: [{
        label: 'Andy',
        value: 'andy'
      }, {
        label: 'Benoit',
        value: 'benoit'
      }]
    }]
  },
  render: args => ({
    props: args,
    template: `<app-menubar [menus]="menus" />`
  })
};
const __namedExportsOrder = ["Dropdown", "Panel", "ContextMenu", "Menubar"];
Dropdown.parameters = {
  ...Dropdown.parameters,
  docs: {
    ...Dropdown.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Open menu',\n    variant: 'outline',\n    entries\n  },\n  argTypes: {\n    variant: {\n      control: 'select',\n      options: ['primary', 'outline', 'ghost', 'link']\n    }\n  },\n  render: args => ({\n    props: {\n      ...args,\n      last: '',\n      pick(e: MenuEntry) {\n        this['last'] = e.label ?? '';\n      }\n    },\n    template: `\n      <app-dropdown-menu [label]=\"label\" [variant]=\"variant\" [entries]=\"entries\" (selected)=\"pick($event)\" />\n      <p class=\"mt-4 text-sm\">Last selected: {{ last || 'none' }}</p>\n    `\n  })\n}",
      ...Dropdown.parameters?.docs?.source
    }
  }
};
Panel.parameters = {
  ...Panel.parameters,
  docs: {
    ...Panel.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    entries\n  },\n  render: args => ({\n    props: args,\n    template: `<div appMenuPanel class=\"w-60\"><app-menu-entries [entries]=\"entries\" /></div>`\n  })\n}",
      ...Panel.parameters?.docs?.source
    },
    description: {
      story: "The open menu panel rendered inline (as it appears when the dropdown / context menu is open).",
      ...Panel.parameters?.docs?.description
    }
  }
};
ContextMenu.parameters = {
  ...ContextMenu.parameters,
  docs: {
    ...ContextMenu.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    entries\n  },\n  render: args => ({\n    props: args,\n    template: `\n      <app-context-menu [entries]=\"entries\">\n        <div class=\"text-muted-foreground flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm\">Right click here</div>\n      </app-context-menu>\n    `\n  })\n}",
      ...ContextMenu.parameters?.docs?.source
    }
  }
};
Menubar.parameters = {
  ...Menubar.parameters,
  docs: {
    ...Menubar.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    menus: [{\n      label: 'File',\n      entries: [{\n        label: 'New appointment',\n        value: 'new',\n        shortcut: 'Ctrl+N'\n      }, {\n        label: 'Export',\n        value: 'export'\n      }, {\n        separator: true\n      }, {\n        label: 'Quit',\n        value: 'quit',\n        destructive: true\n      }]\n    }, {\n      label: 'Edit',\n      entries: [{\n        label: 'Undo',\n        value: 'undo',\n        shortcut: 'Ctrl+Z'\n      }, {\n        label: 'Redo',\n        value: 'redo',\n        shortcut: 'Ctrl+Y'\n      }]\n    }, {\n      label: 'View',\n      entries: [{\n        label: 'Show sidebar',\n        value: 'sidebar',\n        checked: true\n      }, {\n        label: 'Compact mode',\n        value: 'compact'\n      }]\n    }, {\n      label: 'Profiles',\n      entries: [{\n        label: 'Andy',\n        value: 'andy'\n      }, {\n        label: 'Benoit',\n        value: 'benoit'\n      }]\n    }]\n  },\n  render: args => ({\n    props: args,\n    template: `<app-menubar [menus]=\"menus\" />`\n  })\n}",
      ...Menubar.parameters?.docs?.source
    }
  }
};

export { ContextMenu, Dropdown, Menubar, Panel, __namedExportsOrder, meta as default };
