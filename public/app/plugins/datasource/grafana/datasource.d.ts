/// <reference path="../../../../../public/app/headers/common.d.ts" />
declare class GrafanaDatasource {
    private backendSrv;
    /** @ngInject */
    constructor(backendSrv: any);
    query(options: any): any;
}
export { GrafanaDatasource };
