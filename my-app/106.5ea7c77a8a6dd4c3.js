"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[106],{106:(Be,A,c)=>{c.r(A),c.d(A,{ImageSplitterModule:()=>Fe});var p=c(6814);function F(o,r,a){(function Q(o,r){if(r.has(o))throw new TypeError("Cannot initialize the same private elements twice on an object")})(o,r),r.set(o,a)}function B(o,r,a){if(!r.has(o))throw new TypeError("attempted to "+a+" private field on non-instance");return r.get(o)}function Z(o,r){return function V(o,r){return r.get?r.get.call(o):r.value}(o,B(o,r,"get"))}function H(o,r,a){return function $(o,r,a){if(r.set)r.set.call(o,a);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=a}}(o,B(o,r,"set"),a),a}var e=c(5879),Y=c(2939),z=c(2296),g=c(3680),L=c(1175),_=c(4300),N=c(2495),h=c(6028),P=c(8645),D=c(3019),k=c(7394),U=c(2096),G=c(6410),E=c(7921),j=c(4664),O=c(8180),S=c(9773),C=c(2181),J=c(5177),q=c(8484),u=c(6825),ee=c(9388),x=c(9594),te=c(2831),ne=c(9829);const ie=["mat-menu-item",""];function oe(o,r){1&o&&(e.O4$(),e.TgZ(0,"svg",3),e._UZ(1,"polygon",4),e.qZA())}const se=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ae=["mat-icon, [matMenuItemIcon]","*"];function re(o,r){if(1&o){const a=e.EpF();e.TgZ(0,"div",0),e.NdJ("keydown",function(n){e.CHM(a);const i=e.oxw();return e.KtG(i._handleKeydown(n))})("click",function(){e.CHM(a);const n=e.oxw();return e.KtG(n.closed.emit("click"))})("@transformMenu.start",function(n){e.CHM(a);const i=e.oxw();return e.KtG(i._onAnimationStart(n))})("@transformMenu.done",function(n){e.CHM(a);const i=e.oxw();return e.KtG(i._onAnimationDone(n))}),e.TgZ(1,"div",1),e.Hsn(2),e.qZA()()}if(2&o){const a=e.oxw();e.Q6J("id",a.panelId)("ngClass",a._classList)("@transformMenu",a._panelAnimationState),e.uIk("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null)}}const le=["*"],R=new e.OlP("MAT_MENU_PANEL"),ce=(0,g.Kr)((0,g.Id)(class{}));let w=(()=>{var o;class r extends ce{constructor(t,n,i,s,l){super(),this._elementRef=t,this._document=n,this._focusMonitor=i,this._parentMenu=s,this._changeDetectorRef=l,this.role="menuitem",this._hovered=new P.x,this._focused=new P.x,this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this)}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const t=this._elementRef.nativeElement.cloneNode(!0),n=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<n.length;i++)n[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return(o=r).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(p.K0),e.Y36(_.tE),e.Y36(R,8),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){1&t&&e.NdJ("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),2&t&&(e.uIk("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),e.ekj("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[e.qOj],attrs:ie,ngContentSelectors:ae,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true",4,"ngIf"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){1&t&&(e.F$t(se),e.Hsn(0),e.TgZ(1,"span",0),e.Hsn(2,1),e.qZA(),e._UZ(3,"div",1),e.YNc(4,oe,2,0,"svg",2)),2&t&&(e.xp6(3),e.Q6J("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),e.xp6(1),e.Q6J("ngIf",n._triggersSubmenu))},dependencies:[p.O5,g.wG],encapsulation:2,changeDetection:0}),r})();const me=new e.OlP("MatMenuContent"),I={transformMenu:(0,u.X$)("transformMenu",[(0,u.SB)("void",(0,u.oB)({opacity:0,transform:"scale(0.8)"})),(0,u.eR)("void => enter",(0,u.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,u.oB)({opacity:1,transform:"scale(1)"}))),(0,u.eR)("* => void",(0,u.jt)("100ms 25ms linear",(0,u.oB)({opacity:0})))]),fadeInItems:(0,u.X$)("fadeInItems",[(0,u.SB)("showing",(0,u.oB)({opacity:1})),(0,u.eR)("void => *",[(0,u.oB)({opacity:0}),(0,u.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let ue=0;const K=new e.OlP("mat-menu-default-options",{providedIn:"root",factory:function de(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let y=(()=>{var o;class r{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(t){this._overlapTrigger=(0,N.Ig)(t)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(t){this._hasBackdrop=(0,N.Ig)(t)}set panelClass(t){const n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,n,i,s){this._elementRef=t,this._ngZone=n,this._changeDetectorRef=s,this._directDescendantItems=new e.n_E,this._classList={},this._panelAnimationState="void",this._animationDone=new P.x,this.closed=new e.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+ue++,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this._overlapTrigger=i.overlapTrigger,this._hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,E.O)(this._directDescendantItems),(0,j.w)(t=>(0,D.T)(...t.map(n=>n._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const i=t.toArray(),s=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[s]&&!i[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,E.O)(this._directDescendantItems),(0,j.w)(n=>(0,D.T)(...n.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){const n=t.keyCode,i=this._keyManager;switch(n){case h.hY:(0,h.Vb)(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case h.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case h.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===h.LH||n===h.JH)&&i.setFocusOrigin("keyboard"),void i.onKeydown(t)}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,O.q)(1)).subscribe(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&n&&n.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){const n=Math.min(this._baseElevation+t,24),i=`${this._elevationPrefix}${n}`,s=Object.keys(this._classList).find(l=>l.startsWith(this._elevationPrefix));(!s||s===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(t=this.xPosition,n=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===t,i["mat-menu-after"]="after"===t,i["mat-menu-above"]="above"===n,i["mat-menu-below"]="below"===n,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,E.O)(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return(o=r).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(K),e.Y36(e.sBO))},o.\u0275dir=e.lG2({type:o,contentQueries:function(t,n,i){if(1&t&&(e.Suo(i,me,5),e.Suo(i,w,5),e.Suo(i,w,4)),2&t){let s;e.iGM(s=e.CRH())&&(n.lazyContent=s.first),e.iGM(s=e.CRH())&&(n._allItems=s),e.iGM(s=e.CRH())&&(n.items=s)}},viewQuery:function(t,n){if(1&t&&e.Gf(e.Rgc,5),2&t){let i;e.iGM(i=e.CRH())&&(n.templateRef=i.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),r})(),he=(()=>{var o;class r extends y{constructor(t,n,i,s){super(t,n,i,s),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return(o=r).\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(K),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-menu"]],hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(t,n){2&t&&e.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[e._Bn([{provide:R,useExisting:o}]),e.qOj],ngContentSelectors:le,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,n){1&t&&(e.F$t(),e.YNc(0,re,3,6,"ng-template"))},dependencies:[p.mk],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{--mat-menu-container-shape:4px;min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[I.transformMenu,I.fadeInItems]},changeDetection:0}),r})();const X=new e.OlP("mat-menu-scroll-strategy"),ge={provide:X,deps:[x.aV],useFactory:function pe(o){return()=>o.scrollStrategies.reposition()}},W=(0,te.i$)({passive:!0});let fe=(()=>{var o;class r{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._menuCloseSubscription=t.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,n,i,s,l,m,d,f,v){this._overlay=t,this._element=n,this._viewContainerRef=i,this._menuItemInstance=m,this._dir=d,this._focusMonitor=f,this._ngZone=v,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=k.w0.EMPTY,this._hoverSubscription=k.w0.EMPTY,this._menuCloseSubscription=k.w0.EMPTY,this._changeDetectorRef=(0,e.f3M)(e.sBO),this._handleTouchStart=b=>{(0,_.yG)(b)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new e.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new e.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=l instanceof y?l:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,W)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,W),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const t=this.menu;if(this._menuOpen||!t)return;const n=this._createOverlay(t),i=n.getConfig(),s=i.positionStrategy;this._setPosition(t,s),i.hasBackdrop=null==t.hasBackdrop?!this.triggersSubmenu():t.hasBackdrop,n.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof y&&(t._startAnimation(),t._directDescendantItems.changes.pipe((0,S.R)(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===t||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof y?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,C.h)(i=>"void"===i.toState),(0,O.q)(1),(0,S.R)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let n=0,i=t.parentMenu;for(;i;)n++,i=i.parentMenu;t.setElevation(n)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){const n=this._getOverlayConfig(t);this._subscribeToPositions(t,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new x.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,n){t.setPositionClasses&&n.positionChanges.subscribe(i=>{const s="start"===i.connectionPair.overlayX?"after":"before",l="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(s,l)):t.setPositionClasses(s,l)})}_setPosition(t,n){let[i,s]="before"===t.xPosition?["end","start"]:["start","end"],[l,m]="above"===t.yPosition?["bottom","top"]:["top","bottom"],[d,f]=[l,m],[v,b]=[i,s],M=0;if(this.triggersSubmenu()){if(b=i="before"===t.xPosition?"start":"end",s=v="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const T=this._parentMaterialMenu.items.first;this._parentInnerPadding=T?T._getHostElement().offsetTop:0}M="bottom"===l?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(d="top"===l?"bottom":"top",f="top"===m?"bottom":"top");n.withPositions([{originX:i,originY:d,overlayX:v,overlayY:l,offsetY:M},{originX:s,originY:d,overlayX:b,overlayY:l,offsetY:M},{originX:i,originY:f,overlayX:v,overlayY:m,offsetY:-M},{originX:s,originY:f,overlayX:b,overlayY:m,offsetY:-M}])}_menuClosingActions(){const t=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,U.of)(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,C.h)(l=>l!==this._menuItemInstance),(0,C.h)(()=>this._menuOpen)):(0,U.of)();return(0,D.T)(t,i,s,n)}_handleMousedown(t){(0,_.X6)(t)||(this._openedBy=0===t.button?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){const n=t.keyCode;(n===h.K5||n===h.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===h.SV&&"ltr"===this.dir||n===h.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,C.h)(t=>t===this._menuItemInstance&&!t.disabled),(0,J.g)(0,G.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof y&&this.menu._isAnimating?this.menu._animationDone.pipe((0,O.q)(1),(0,J.g)(0,G.E),(0,S.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new q.UE(t.templateRef,this._viewContainerRef)),this._portal}}return(o=r).\u0275fac=function(t){return new(t||o)(e.Y36(x.aV),e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(X),e.Y36(R,8),e.Y36(w,10),e.Y36(ee.Is,8),e.Y36(_.tE),e.Y36(e.R0b))},o.\u0275dir=e.lG2({type:o,hostVars:3,hostBindings:function(t,n){1&t&&e.NdJ("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),2&t&&e.uIk("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),r})(),_e=(()=>{var o;class r extends fe{}return(o=r).\u0275fac=function(){let a;return function(n){return(a||(a=e.n5z(o)))(n||o)}}(),o.\u0275dir=e.lG2({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[e.qOj]}),r})(),ve=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[ge],imports:[p.ez,g.si,g.BQ,x.U8,ne.ZD,g.BQ]}),r})();var be=c(6593);let Me=(()=>{var o,r=new WeakMap;class a{constructor(){F(this,r,{writable:!0,value:void 0}),this.files=new e.vpe,this.fileDragging="",H(this,r,(0,e.f3M)(be.H7)),this.draggingClassName="file-dragging"}onDragOver(n){n.preventDefault(),n.stopPropagation(),this.fileDragging=this.draggingClassName}onDragLeave(n){n.preventDefault(),n.stopPropagation(),this.fileDragging=""}onDrop(n){n.preventDefault(),n.stopPropagation(),this.fileDragging="";let i=[];for(let s=0;s<n.dataTransfer.files.length;s++){const l=n.dataTransfer.files[s],m=Z(this,r).bypassSecurityTrustUrl(window.URL.createObjectURL(l));i.push({file:l,url:m})}i.length>0&&this.files.emit(i)}}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275dir=e.lG2({type:o,selectors:[["","dropFile",""]],hostVars:2,hostBindings:function(n,i){1&n&&e.NdJ("dragover",function(l){return i.onDragOver(l)})("dragleave",function(l){return i.onDragLeave(l)})("drop",function(l){return i.onDrop(l)}),2&n&&e.Tol(i.fileDragging)},outputs:{files:"files"}}),a})();const ye=["canvas"],Ce=["cutter"],xe=["imgSource"],we=["getByUrl"],Ie=["selectZone"],Te=["inputZone"];function Pe(o,r){if(1&o){const a=e.EpF();e.TgZ(0,"div",22)(1,"label",23),e._uU(2,"t\u1eeb URL"),e.qZA(),e.TgZ(3,"input",24,25),e.NdJ("keyup.enter",function(){e.CHM(a);const n=e.MAs(4),i=e.oxw();return e.KtG(i.getImageFromUrl(n.value))})("keyup",function(n){e.CHM(a);const i=e.oxw();return e.KtG(i.handleKeyUp(n))}),e.qZA(),e.TgZ(5,"div",26)(6,"button",27),e.NdJ("click",function(){e.CHM(a);const n=e.MAs(4),i=e.oxw();return e.KtG(i.getImageFromUrl(n.value))}),e._uU(7,"L\u1ea5y"),e.qZA(),e.TgZ(8,"button",28),e.NdJ("click",function(){e.CHM(a);const n=e.MAs(4);return e.oxw().getFromOther=!1,e.KtG(n.value="")}),e._uU(9,"\u0110\xf3ng"),e.qZA()()()}}function De(o,r){1&o&&(e.TgZ(0,"span",29),e.O4$(),e.TgZ(1,"svg",30),e._UZ(2,"use",31),e.qZA()())}function ke(o,r){if(1&o){const a=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(a);const n=e.oxw();return e.KtG(n.cutFrom())}),e._uU(1,"Xem tr\u01b0\u1edbc"),e.qZA()}}function Ee(o,r){if(1&o){const a=e.EpF();e.TgZ(0,"div",33)(1,"button",34),e.NdJ("click",function(){e.CHM(a);const n=e.oxw();return e.KtG(n.download())}),e._uU(2),e.qZA(),e.TgZ(3,"button",35)(4,"mat-icon",36),e._uU(5,"arrow_forward_ios"),e.qZA()()()}if(2&o){const a=e.oxw(),t=e.MAs(25);e.xp6(2),e.hij("T\u1ea3i xu\u1ed1ng (.",a.fileTypes[a.typeDefault].label,")"),e.xp6(1),e.Q6J("matMenuTriggerFor",t)}}function Oe(o,r){1&o&&(e.TgZ(0,"mat-icon",39),e._uU(1,"done"),e.qZA())}function Se(o,r){if(1&o){const a=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){const n=e.CHM(a),i=n.$implicit,s=n.index,l=e.oxw();return e.KtG(l.changeType(i,s))}),e._uU(1),e.YNc(2,Oe,2,0,"mat-icon",38),e.qZA()}if(2&o){const a=r.$implicit,t=r.index,n=e.oxw();e.ekj("selected",n.typeDefault===t),e.xp6(1),e.hij(" ",a.label," "),e.xp6(1),e.Q6J("ngIf",n.typeDefault===t)}}let Re=(()=>{var o,r=new WeakMap;class a{constructor(n){F(this,r,{writable:!0,value:void 0}),this.dcm=n,this.filled=!1,this.fileTypes=[{type:"image/png",label:"png"},{type:"image/jpeg",label:"jpeg"},{type:"image/webp",label:"webp"}],this.typeDefault=0,this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.objectPosition={x:0,y:0,w:0,h:0},this.getFromOther=!1,this.isSelecting=!1,this.imgTemp=new Image,this.downloadAvailable=!1,this.ready=!1,H(this,r,(0,e.f3M)(Y.ux)),this.zone=this.dcm.createElement("div"),this.overlayZone=this.dcm.createElement("div")}onDown(n){this.isSelecting=!0,this.startPosition={x:n.offsetX,y:n.offsetY},this.zone.classList.contains("selected")&&this.zone.classList.remove("selected"),this.selectZone.nativeElement.contains(this.overlayZone)||(this.overlayZone.style.borderWidth="0",this.selectZone.nativeElement.append(this.overlayZone))}onMove(n){if(this.endPosition={x:n.x,y:n.y},this.isSelecting){const i=this.startPosition.x,s=this.startPosition.y,l=n.offsetX-this.startPosition.x,m=n.offsetY-this.startPosition.y;this.dcm.body.contains(this.zone)||this.selectZone.nativeElement.append(this.zone),this.zone.style.left=(l<0?i+l:i)+"px",this.zone.style.top=(m<0?s+m:s)+"px",this.zone.style.width=Math.abs(l)+"px",this.zone.style.height=Math.abs(m)+"px"}}onUp(){if(this.isSelecting=!1,!this.zone.classList.contains("selected")&&this.zone.offsetHeight>0&&this.zone.offsetWidth>0){this.zone.classList.add("selected"),this.filled=!0;const n=this.zone.offsetWidth,i=this.zone.offsetHeight,s=this.zone.offsetTop,l=this.zone.offsetLeft,{offsetWidth:m,offsetHeight:d}=this.selectZone.nativeElement;this.overlayZone.style.borderTopWidth=s+"px",this.overlayZone.style.borderLeftWidth=l+"px",this.overlayZone.style.borderRightWidth=m-n-l+"px",this.overlayZone.style.borderBottomWidth=d-i-s+"px"}}getImageFromUrl(n){const i=new Image;i.src=n,i.addEventListener("load",()=>{console.log("load"),this.generatePreview(i)}),i.addEventListener("error",()=>{console.log("error"),Z(this,r).open("Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c \u1ea3nh, check l\u1ea1i nh\xe9!","\u0110\xf3ng",{duration:3e3})}),console.log(n)}onFile(n){const s=n.target.files?.item(0);this.generatePreview(s)}generatePreview(n){this.ready=!0,this.getFromOther=!1,this.selectZone.nativeElement.contains(this.overlayZone)&&(this.overlayZone.style.borderWidth="0",this.selectZone.nativeElement.removeChild(this.overlayZone)),this.selectZone.nativeElement.contains(this.zone)&&this.selectZone.nativeElement.removeChild(this.zone),this.selectZone.nativeElement.style.width="fit-content",createImageBitmap(n).then(i=>{const s=i.width,l=i.height,m=this.inputZone.nativeElement.offsetWidth,d=s>m?m:s,f=s>m?m*l/s:l;this.canvas.nativeElement.width=d,this.canvas.nativeElement.height=f,this.context.drawImage(i,0,0,d,f);const{top:v,height:b,width:M,left:T}=this.canvas.nativeElement.getBoundingClientRect();this.objectPosition={x:T,y:v,w:M,h:b}})}cutFrom(){this.downloadAvailable=!0,this.imgTemp.src=this.canvas.nativeElement.toDataURL(),this.imgTemp.onload=()=>{const{height:n,width:i}=this.zone.getBoundingClientRect(),{offsetLeft:s,offsetTop:l}=this.zone;createImageBitmap(this.imgTemp).then(m=>{this.cutter.nativeElement.width=i,this.cutter.nativeElement.height=n,this.contextCutter.drawImage(m,s,l,i,n,0,0,i,n)})}}onFileDropped(n){this.generatePreview(n[0].file)}download(){const n=this.cutter.nativeElement.toDataURL(this.fileTypes[this.typeDefault].type),i=this.dcm.createElement("a");i.href=n,i.download=`your_new_image.${this.fileTypes[this.typeDefault].label}`,i.click()}changeType(n,i){this.typeDefault=i}ngAfterViewInit(){this.zone.className="select-zone",this.context=this.canvas.nativeElement.getContext("2d"),this.contextCutter=this.cutter.nativeElement.getContext("2d"),this.overlayZone.className="trash-zone-overlay"}handleKeyUp(n){n.ctrlKey&&"b"===n.key&&(this.url.nativeElement.value="")}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(p.K0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-image-splitter"]],viewQuery:function(n,i){if(1&n&&(e.Gf(ye,5),e.Gf(Ce,5),e.Gf(xe,5),e.Gf(we,5),e.Gf(Ie,5),e.Gf(Te,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.canvas=s.first),e.iGM(s=e.CRH())&&(i.cutter=s.first),e.iGM(s=e.CRH())&&(i.imgSource=s.first),e.iGM(s=e.CRH())&&(i.url=s.first),e.iGM(s=e.CRH())&&(i.selectZone=s.first),e.iGM(s=e.CRH())&&(i.inputZone=s.first)}},hostAttrs:[1,"py-3","block"],features:[e._Bn([Y.ux])],decls:27,vars:11,consts:[[1,"lout"],[1,"box-actions","flex","content-center","mb-3"],[1,"position-relative","flex"],["matRipple","","matRippleColor","rgba(255, 255, 255, .2)",1,"c-btn","choose-btn"],["type","file",1,"file-input",3,"change"],["imgSource",""],["matRipple","","matRippleColor","rgba(255, 255, 255, .2)",1,"c-btn","opt-btn",3,"click"],[1,"rotate-90"],["class","open-option position-absolute top-100 w-100 start-0",4,"ngIf"],["dropFile","",1,"drop-zone","input-zone","position-relative",3,"files"],["inputZone",""],[1,"img-select-zone",3,"mousedown","mousemove","mouseup"],["selectZone",""],["canvas",""],["class","position-absolute translate-middle top-50 start-50",4,"ngIf"],[1,"flex","my-3"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["class","download-buttons box-actions flex ms-3",4,"ngIf"],[1,"preview-zone"],["cutter",""],["imageType",""],["mat-menu-item","","class","menu-item-selection position-relative",3,"selected","click",4,"ngFor","ngForOf"],[1,"open-option","position-absolute","top-100","w-100","start-0"],["for","url"],["type","text","id","url",1,"get-from-url","mt-2",3,"keyup.enter","keyup"],["getByUrl",""],[1,"flex","content-end","mt-3"],["mat-raised-button","",3,"click"],["cdkTrapFocus","","mat-raised-button","",1,"ms-3",3,"click"],[1,"position-absolute","translate-middle","top-50","start-50"],[1,"drop-icon"],[0,"xlink","href","#drop"],["mat-raised-button","","color","primary",3,"click"],[1,"download-buttons","box-actions","flex","ms-3"],["matRipple","","matRippleColor","rgba(255, 255, 255, .2)",1,"c-btn","choose-btn","download",3,"click"],["matRipple","","matRippleColor","rgba(255, 255, 255, .2)",1,"c-btn","opt-btn","download-type",3,"matMenuTriggerFor"],[1,"rotate-90","fis"],["mat-menu-item","",1,"menu-item-selection","position-relative",3,"click"],["class","position-absolute top-50 translate-middle-y selected-icon",4,"ngIf"],[1,"position-absolute","top-50","translate-middle-y","selected-icon"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4," Ch\u1ecdn \u1ea3nh "),e.TgZ(5,"input",4,5),e.NdJ("change",function(l){return i.onFile(l)}),e.qZA()(),e.TgZ(7,"button",6),e.NdJ("click",function(){return i.getFromOther=!0}),e.TgZ(8,"mat-icon",7),e._uU(9,"arrow_forward_ios"),e.qZA()(),e.YNc(10,Pe,10,0,"div",8),e.qZA()(),e.TgZ(11,"div",9,10),e.NdJ("files",function(l){return i.onFileDropped(l)}),e.TgZ(13,"div",11,12),e.NdJ("mousedown",function(l){return i.onDown(l)})("mousemove",function(l){return i.onMove(l)})("mouseup",function(){return i.onUp()}),e._UZ(15,"canvas",null,13),e.qZA(),e.YNc(17,De,3,0,"span",14),e.qZA(),e.TgZ(18,"div",15),e.YNc(19,ke,2,0,"button",16),e.YNc(20,Ee,6,2,"div",17),e.qZA(),e.TgZ(21,"div",18),e._UZ(22,"canvas",null,19),e.qZA()(),e.TgZ(24,"mat-menu",null,20),e.YNc(26,Se,3,4,"button",21),e.qZA()),2&n&&(e.xp6(10),e.Q6J("ngIf",i.getFromOther),e.xp6(3),e.Udp("height",i.ready?"fit-content":"300px"),e.ekj("none-ready",!i.ready),e.xp6(4),e.Q6J("ngIf",!i.ready),e.xp6(2),e.Q6J("ngIf",i.filled),e.xp6(1),e.Q6J("ngIf",i.downloadAvailable),e.xp6(1),e.ekj("preview-available",i.downloadAvailable),e.xp6(5),e.Q6J("ngForOf",i.fileTypes))},dependencies:[p.sg,p.O5,z.lW,g.wG,L.Hw,he,w,_e,_.mK,Me],styles:[".box-actions[_ngcontent-%COMP%]{--radius: 8px}.box-actions[_ngcontent-%COMP%]   .open-option[_ngcontent-%COMP%]{border-radius:var(--radius);padding:12px;background-color:#fff;z-index:86;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.box-actions[_ngcontent-%COMP%]   .open-option[_ngcontent-%COMP%]   .get-from-url[_ngcontent-%COMP%]{border-radius:4px;padding:10px 6px;width:100%;font-size:16px;border:1px solid #c4c4c4;transition:.2s}.box-actions[_ngcontent-%COMP%]   .open-option[_ngcontent-%COMP%]   .get-from-url[_ngcontent-%COMP%]:focus{outline:none;border-color:#a6a6a6}.box-actions[_ngcontent-%COMP%]   .open-option[_ngcontent-%COMP%]   .get-from-url[_ngcontent-%COMP%]:hover{border-color:#a6a6a6}.box-actions[_ngcontent-%COMP%]   .c-btn[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;font-size:18px;border:none;cursor:pointer}.box-actions[_ngcontent-%COMP%]   .choose-btn[_ngcontent-%COMP%]{padding:16px 40px;border-top-left-radius:var(--radius);border-bottom-left-radius:var(--radius);position:relative}.box-actions[_ngcontent-%COMP%]   .choose-btn[_ngcontent-%COMP%]   input.file-input[_ngcontent-%COMP%]{opacity:0;position:absolute;inset:0}.box-actions[_ngcontent-%COMP%]   .opt-btn[_ngcontent-%COMP%]{align-items:center;display:flex;padding:0 20px;border-top-right-radius:var(--radius);border-bottom-right-radius:var(--radius)}.box-actions.download-buttons[_ngcontent-%COMP%]{--radius: 5px}.box-actions.download-buttons[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]{padding:8px 20px!important;font-size:14px}.box-actions.download-buttons[_ngcontent-%COMP%]   .download-type[_ngcontent-%COMP%]{padding:0 10px}.box-actions.download-buttons[_ngcontent-%COMP%]   .download-type[_ngcontent-%COMP%]   .fis[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px}.box-actions[_ngcontent-%COMP%]   .rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}.img-select-zone[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%]{height:100%;z-index:-1}.none-ready[_ngcontent-%COMP%]{pointer-events:none;align-items:center;justify-content:center}.drop-icon[_ngcontent-%COMP%]{width:80px;height:80px;fill:#575757;transition:.2s}.lout[_ngcontent-%COMP%]{width:calc(100% - 48px);margin:0 auto}.selected-icon[_ngcontent-%COMP%]{right:6px;font-size:15px;color:#3f51b5!important;width:15px;height:15px;margin-right:0!important}.preview-available[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border:1px solid #cbd4ff}"]}),a})();var Ae=c(3403);let Fe=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,Ae.Bz.forChild([{path:"",component:Re}]),z.ot,g.si,L.Ps,ve,_.rt]}),r})()}}]);