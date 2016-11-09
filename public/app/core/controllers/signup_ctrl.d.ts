/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class SignUpCtrl {
    private $scope;
    private $location;
    private contextSrv;
    private backendSrv;
    /** @ngInject */
    constructor($scope: any, $location: any, contextSrv: any, backendSrv: any);
    submit(): void;
}
