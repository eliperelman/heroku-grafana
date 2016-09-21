/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { PanelCtrl } from 'app/plugins/sdk';
export declare class TextPanelCtrl extends PanelCtrl {
    private templateSrv;
    private $sce;
    static templateUrl: string;
    remarkable: any;
    content: string;
    panelDefaults: {
        mode: string;
        content: string;
    };
    /** @ngInject */
    constructor($scope: any, $injector: any, templateSrv: any, $sce: any);
    onInitEditMode(): void;
    onRender(): void;
    renderText(content: any): void;
    renderMarkdown(content: any): any;
    updateContent(html: any): void;
}
export { TextPanelCtrl as PanelCtrl };
