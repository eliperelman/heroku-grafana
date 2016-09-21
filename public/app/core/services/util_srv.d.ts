/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class UtilSrv {
    private $rootScope;
    private $modal;
    /** @ngInject */
    constructor($rootScope: any, $modal: any);
    init(): void;
    showModal(options: any): void;
}
