/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class ImpressionsStore {
    constructor();
    addDashboardImpression(dashboardId: any): void;
    getDashboardOpened(): any;
    impressionKey(config: any): string;
}
declare var impressions: ImpressionsStore;
export { impressions };
