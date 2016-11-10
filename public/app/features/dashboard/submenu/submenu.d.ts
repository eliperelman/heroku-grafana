/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class SubmenuCtrl {
    private $rootScope;
    private variableSrv;
    private templateSrv;
    private $location;
    annotations: any;
    variables: any;
    dashboard: any;
    /** @ngInject */
    constructor($rootScope: any, variableSrv: any, templateSrv: any, $location: any);
    annotationStateChanged(): void;
    getValuesForTag(variable: any, tagKey: any): any;
    variableUpdated(variable: any): void;
    openEditView(editview: any): void;
    exitBuildMode(): void;
}
export declare function submenuDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof SubmenuCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        dashboard: string;
    };
};
