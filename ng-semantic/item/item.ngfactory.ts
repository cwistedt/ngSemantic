/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './item';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/security';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
export class Wrapper_SemanticItemComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SemanticItemComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this._changed = false;
    this.context = new import0.SemanticItemComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_icon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.icon = currValue;
      this._expr_0 = currValue;
    }
  }
  check_header(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.header = currValue;
      this._expr_1 = currValue;
    }
  }
  check_image(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.image = currValue;
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
var renderType_SemanticItemComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SemanticItemComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SemanticItemComponent>;
  _SemanticItemComponent_0_3:Wrapper_SemanticItemComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticItemComponent_Host0,renderType_SemanticItemComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'a',new import3.InlineArray2(2,'sm-item',''),rootSelector,(null as any));
    this.compView_0 = new View_SemanticItemComponent0(this.viewUtils,this,0,this._el_0);
    this._SemanticItemComponent_0_3 = new Wrapper_SemanticItemComponent();
    this.compView_0.create(this._SemanticItemComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._SemanticItemComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SemanticItemComponent) && (0 === requestNodeIndex))) { return this._SemanticItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SemanticItemComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._SemanticItemComponent_0_3.context.ngAfterViewInit(); } }
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
export const SemanticItemComponentNgFactory:import8.ComponentFactory<import0.SemanticItemComponent> = new import8.ComponentFactory<import0.SemanticItemComponent>('a[sm-item], sm-item',View_SemanticItemComponent_Host0,import0.SemanticItemComponent);
const styles_SemanticItemComponent:any[] = ([] as any[]);
class View_SemanticItemComponent1 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_SemanticItemComponent1,renderType_SemanticItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'i',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = import3.inlineInterpolate(1,'',this.parentView.context.icon,' icon');
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_SemanticItemComponent2 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_SemanticItemComponent2,renderType_SemanticItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'class','ui avatar image'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = import3.inlineInterpolate(1,'',this.parentView.context.image,'');
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'src',this.viewUtils.sanitizer.sanitize(import10.SecurityContext.URL,currVal_1));
      this._expr_1 = currVal_1;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_SemanticItemComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_SemanticItemComponent3,renderType_SemanticItemComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','header'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'\n    ',this.parentView.context.header,'\n  ');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_SemanticItemComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_SemanticItemComponent,{});
export class View_SemanticItemComponent0 extends import2.AppView<import0.SemanticItemComponent> {
  _viewQuery_innerItemElement_0:import11.QueryList<any>;
  _anchor_0:any;
  /*private*/ _vc_0:import9.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import12.Wrapper_NgIf;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import12.Wrapper_NgIf;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import9.ViewContainer;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import12.Wrapper_NgIf;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticItemComponent0,renderType_SemanticItemComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_innerItemElement_0 = new import11.QueryList<any>();
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import9.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import12.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_2 = new import9.ViewContainer(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import12.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','content'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n  ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._vc_6 = new import9.ViewContainer(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import13.TemplateRef_(this,6,this._anchor_6);
    this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_4,'\n  ',(null as any));
    this.projectNodes(this._el_4,0);
    this._text_8 = this.renderer.createText(this._el_4,'\n',(null as any));
    this._viewQuery_innerItemElement_0.reset([new import14.ElementRef(this._el_4)]);
    this.context.innerItemElement = this._viewQuery_innerItemElement_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import15.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import15.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.icon;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    const currVal_2_0_0:any = this.context.image;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_6_0_0:any = this.context.header;
    this._NgIf_6_6.check_ngIf(currVal_6_0_0,throwOnChange,false);
    this._NgIf_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this._vc_2.destroyNestedViews();
    this._vc_6.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_SemanticItemComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    if ((nodeIndex == 2)) { return new View_SemanticItemComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 6)) { return new View_SemanticItemComponent3(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    return (null as any);
  }
}