/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './progress';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_style';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/common/src/directives/ng_class';
export class Wrapper_SemanticProgressComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SemanticProgressComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this._changed = false;
    this.context = new import0.SemanticProgressComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_label(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.label = currValue;
      this._expr_0 = currValue;
    }
  }
  check_class(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.class = currValue;
      this._expr_1 = currValue;
    }
  }
  check_progress(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.progress = currValue;
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
var renderType_SemanticProgressComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SemanticProgressComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SemanticProgressComponent>;
  _SemanticProgressComponent_0_3:Wrapper_SemanticProgressComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticProgressComponent_Host0,renderType_SemanticProgressComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sm-progress',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SemanticProgressComponent0(this.viewUtils,this,0,this._el_0);
    this._SemanticProgressComponent_0_3 = new Wrapper_SemanticProgressComponent();
    this.compView_0.create(this._SemanticProgressComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._SemanticProgressComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SemanticProgressComponent) && (0 === requestNodeIndex))) { return this._SemanticProgressComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._SemanticProgressComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SemanticProgressComponentNgFactory:import8.ComponentFactory<import0.SemanticProgressComponent> = new import8.ComponentFactory<import0.SemanticProgressComponent>('sm-progress',View_SemanticProgressComponent_Host0,import0.SemanticProgressComponent);
const styles_SemanticProgressComponent:any[] = ([] as any[]);
class View_SemanticProgressComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_SemanticProgressComponent1,renderType_SemanticProgressComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','label'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.label,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_SemanticProgressComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_SemanticProgressComponent,{});
export class View_SemanticProgressComponent0 extends import2.AppView<import0.SemanticProgressComponent> {
  _el_0:any;
  _NgClass_0_3:import10.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _NgStyle_2_3:import11.Wrapper_NgStyle;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import9.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import12.Wrapper_NgIf;
  _text_9:any;
  /*private*/ _expr_15:any;
  _map_16:any;
  _map_17:any;
  /*private*/ _expr_18:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SemanticProgressComponent0,renderType_SemanticProgressComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_15 = import1.UNINITIALIZED;
    this._map_16 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {success: p0};
    });
    this._map_17 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {width: p0};
    });
    this._expr_18 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import10.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','bar'),(null as any));
    this._NgStyle_2_3 = new import11.Wrapper_NgStyle(this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','progress'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_8 = new import9.ViewContainer(8,0,this,this._anchor_8);
    this._TemplateRef_8_5 = new import16.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import12.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgStyle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgStyle_2_3.context; }
    if (((token === import16.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import18.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import19.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = import3.inlineInterpolate(1,'ui ',this.context.class,' progress');
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_16((this.context._progress === 100));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._map_17((this.context._progress + '%'));
    this._NgStyle_2_3.check_ngStyle(currVal_2_0_0,throwOnChange,false);
    this._NgStyle_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_8_0_0:any = this.context.label;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    const currVal_15:any = this.context._progress;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementAttribute(this._el_0,'data-percent',((currVal_15 == null)? (null as any): currVal_15.toString()));
      this._expr_15 = currVal_15;
    }
    const currVal_18:any = import3.inlineInterpolate(1,'',this.context._progress,'%');
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_5,currVal_18);
      this._expr_18 = currVal_18;
    }
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_SemanticProgressComponent1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
}