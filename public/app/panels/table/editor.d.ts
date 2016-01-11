/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class TablePanelEditorCtrl {
    /** @ngInject */
    constructor($scope: any, $q: any, uiSegmentSrv: any);
}
export declare function tablePanelEditor($q: any, uiSegmentSrv: any): {
    restrict: string;
    scope: boolean;
    templateUrl: string;
    controller: typeof TablePanelEditorCtrl;
};
