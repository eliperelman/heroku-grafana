/// <reference path="../../../../../public/app/headers/common.d.ts" />
/** @ngInject */
export declare function queryPartEditorDirective($compile: any, templateSrv: any): {
    restrict: string;
    template: string;
    scope: {
        part: string;
        removeAction: string;
        partUpdated: string;
        getOptions: string;
    };
    link: ($scope: any, elem: any) => void;
};
