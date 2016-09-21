/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class DashNavCtrl {
    /** @ngInject */
    constructor($scope: any, $rootScope: any, alertSrv: any, $location: any, playlistSrv: any, backendSrv: any, $timeout: any, datasourceSrv: any);
}
export declare function dashNavDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof DashNavCtrl;
    transclude: boolean;
};
