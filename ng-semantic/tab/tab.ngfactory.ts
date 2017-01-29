/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './tab';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_for';
export class Wrapper_SemanticTabsComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SemanticTabsComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.SemanticTabsComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_options(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.options = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_SemanticTabComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SemanticTabComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this._changed = false;
    this.context = new import0.SemanticTabComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_tab(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.tab = currValue;
      this._expr_0 = currValue;
    }
  }
  check_title(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.title = currValue;
      this._expr_1 = currValue;
    }
  }
  check_active(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.active = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SemanticTabsComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SemanticTabsComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SemanticTabsComponent>;
  _SemanticTabsComponent_0_3:Wrapper_SemanticTabsComponent;
  _query_SemanticTabComponent_0_0:import6.QueryList<any>;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticTabsComponent_Host0,renderType_SemanticTabsComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sm-tabs',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SemanticTabsComponent0(this.viewUtils,this,0,this._el_0);
    this._SemanticTabsComponent_0_3 = new Wrapper_SemanticTabsComponent(new import10.ElementRef(this._el_0));
    this._query_SemanticTabComponent_0_0 = new import6.QueryList<any>();
    this.compView_0.create(this._SemanticTabsComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._SemanticTabsComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SemanticTabsComponent) && (0 === requestNodeIndex))) { return this._SemanticTabsComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SemanticTabsComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if (this._query_SemanticTabComponent_0_0.dirty) {
      this._query_SemanticTabComponent_0_0.reset(([] as any[]));
      this._SemanticTabsComponent_0_3.context.tabs = this._query_SemanticTabComponent_0_0;
      this._query_SemanticTabComponent_0_0.notifyOnChanges();
    } }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._SemanticTabsComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const SemanticTabsComponentNgFactory:import9.ComponentFactory<import0.SemanticTabsComponent> = new import9.ComponentFactory<import0.SemanticTabsComponent>('sm-tabs',View_SemanticTabsComponent_Host0,import0.SemanticTabsComponent);
const styles_SemanticTabsComponent:any[] = ([] as any[]);
class View_SemanticTabsComponent1 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import11.Wrapper_NgClass;
  _text_1:any;
  _map_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_SemanticTabsComponent1,renderType_SemanticTabsComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_3 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'class','item'),(null as any));
    this._NgClass_0_3 = new import11.Wrapper_NgClass(this.parentView.parentView.injectorGet(import13.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentIndex),new import10.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'item';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_3(this.context.$implicit.active);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_4:any = import3.inlineInterpolate(1,'',this.context.$implicit.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_SemanticTabsComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_SemanticTabsComponent,{});
export class View_SemanticTabsComponent0 extends import2.AppView<import0.SemanticTabsComponent> {
  _viewQuery_menu_0:import6.QueryList<any>;
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import16.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticTabsComponent0,renderType_SemanticTabsComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_menu_0 = new import6.QueryList<any>();
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','ui top attached tabular menu'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import17.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import16.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.projectNodes(parentRenderNode,0);
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._viewQuery_menu_0.reset([new import10.ElementRef(this._el_0)]);
    this.context.menu = this._viewQuery_menu_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import18.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.tabs;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_SemanticTabsComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
var renderType_SemanticTabComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SemanticTabComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SemanticTabComponent>;
  _SemanticTabComponent_0_3:Wrapper_SemanticTabComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticTabComponent_Host0,renderType_SemanticTabComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sm-tab',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SemanticTabComponent0(this.viewUtils,this,0,this._el_0);
    this._SemanticTabComponent_0_3 = new Wrapper_SemanticTabComponent();
    this.compView_0.create(this._SemanticTabComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._SemanticTabComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SemanticTabComponent) && (0 === requestNodeIndex))) { return this._SemanticTabComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SemanticTabComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._SemanticTabComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const SemanticTabComponentNgFactory:import9.ComponentFactory<import0.SemanticTabComponent> = new import9.ComponentFactory<import0.SemanticTabComponent>('sm-tab',View_SemanticTabComponent_Host0,import0.SemanticTabComponent);
const styles_SemanticTabComponent:any[] = ([] as any[]);
var renderType_SemanticTabComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_SemanticTabComponent,{});
export class View_SemanticTabComponent0 extends import2.AppView<import0.SemanticTabComponent> {
  _viewQuery_tab_0:import6.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticTabComponent0,renderType_SemanticTabComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_tab_0 = new import6.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this.projectNodes(this._el_1,0);
    this._text_3 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'  ',(null as any));
    this._viewQuery_tab_0.reset([new import10.ElementRef(this._el_1)]);
    this.context.tabEl = this._viewQuery_tab_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
}