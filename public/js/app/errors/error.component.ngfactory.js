/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './error.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './error.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_style';
import * as import12 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import13 from '@angular/core/src/linker/element_ref';
var renderType_ErrorComponent_Host = null;
var _View_ErrorComponent_Host0 = (function (_super) {
    __extends(_View_ErrorComponent_Host0, _super);
    function _View_ErrorComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ErrorComponent_Host0, renderType_ErrorComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ErrorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-error', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ErrorComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ErrorComponent_0_4 = new import3.ErrorComponent(this.parentInjector.get(import8.ErrorService));
        this._appEl_0.initComponent(this._ErrorComponent_0_4, [], compView_0);
        compView_0.create(this._ErrorComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ErrorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ErrorComponent) && (0 === requestNodeIndex))) {
            return this._ErrorComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ErrorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ErrorComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ErrorComponent_Host0;
}(import1.AppView));
function viewFactory_ErrorComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ErrorComponent_Host === null)) {
        (renderType_ErrorComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ErrorComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ErrorComponentNgFactory = new import10.ComponentFactory('app-error', viewFactory_ErrorComponent_Host0, import3.ErrorComponent);
var styles_ErrorComponent = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
var renderType_ErrorComponent = null;
var _View_ErrorComponent0 = (function (_super) {
    __extends(_View_ErrorComponent0, _super);
    function _View_ErrorComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ErrorComponent0, renderType_ErrorComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ErrorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'backdrop');
        this._NgStyle_0_3 = new import11.NgStyle(this.parentInjector.get(import12.KeyValueDiffers), new import13.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'modal');
        this.renderer.setElementAttribute(this._el_2, 'role', 'dialog');
        this.renderer.setElementAttribute(this._el_2, 'tabindex', '-1');
        this._NgStyle_2_3 = new import11.NgStyle(this.parentInjector.get(import12.KeyValueDiffers), new import13.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'modal-dialog');
        this.renderer.setElementAttribute(this._el_4, 'role', 'document');
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'modal-content');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'modal-header');
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'button', null);
        this.renderer.setElementAttribute(this._el_10, 'aria-label', 'Close');
        this.renderer.setElementAttribute(this._el_10, 'class', 'close');
        this.renderer.setElementAttribute(this._el_10, 'type', 'button');
        this._el_11 = this.renderer.createElement(this._el_10, 'span', null);
        this.renderer.setElementAttribute(this._el_11, 'aria-hidden', 'true');
        this._text_12 = this.renderer.createText(this._el_11, '×', null);
        this._text_13 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_14 = this.renderer.createElement(this._el_8, 'h4', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'modal-title');
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_18 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'modal-body');
        this._text_19 = this.renderer.createText(this._el_18, '\n                ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'p', null);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n            ', null);
        this._text_23 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_24 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'modal-footer');
        this._text_25 = this.renderer.createText(this._el_24, '\n                ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'btn btn-default');
        this.renderer.setElementAttribute(this._el_26, 'type', 'button');
        this._text_27 = this.renderer.createText(this._el_26, 'Close', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n            ', null);
        this._text_29 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_2, '\n', null);
        this._map_0 = import4.pureProxy1(function (p0) {
            return { display: p0 };
        });
        this._expr_0 = import7.UNINITIALIZED;
        this._map_1 = import4.pureProxy1(function (p0) {
            return { display: p0 };
        });
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_26, 'click', this.eventHandler(this._handle_click_26_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ErrorComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.NgStyle) && (0 === requestNodeIndex))) {
            return this._NgStyle_0_3;
        }
        if (((token === import11.NgStyle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgStyle_2_3;
        }
        return notFoundResult;
    };
    _View_ErrorComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._map_0(this.context.display);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgStyle_0_3.ngStyle = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgStyle_0_3.ngDoCheck();
        }
        var currVal_1 = this._map_1(this.context.display);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgStyle_2_3.ngStyle = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgStyle_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = import4.interpolate(1, '', ((this.context.error == null) ? null : this.context.error.title), '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_15, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', ((this.context.error == null) ? null : this.context.error.message), '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_21, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ErrorComponent0.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onErrorHandled() !== false);
        return (true && pd_0);
    };
    _View_ErrorComponent0.prototype._handle_click_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onErrorHandled() !== false);
        return (true && pd_0);
    };
    return _View_ErrorComponent0;
}(import1.AppView));
export function viewFactory_ErrorComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ErrorComponent === null)) {
        (renderType_ErrorComponent = viewUtils.createRenderComponentType('D:/TOOLS/Books/JavaScript/AngularJS/MEAN2/social-network/assets/app/errors/error.component.html', 0, import9.ViewEncapsulation.Emulated, styles_ErrorComponent, {}));
    }
    return new _View_ErrorComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=error.component.ngfactory.js.map