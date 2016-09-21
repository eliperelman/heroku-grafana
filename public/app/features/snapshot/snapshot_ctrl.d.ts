/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class SnapshotsCtrl {
    private $rootScope;
    private backendSrv;
    snapshots: any;
    /** @ngInject */
    constructor($rootScope: any, backendSrv: any);
    removeSnapshotConfirmed(snapshot: any): void;
    removeSnapshot(snapshot: any): void;
}
