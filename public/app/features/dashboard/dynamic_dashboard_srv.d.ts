/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class DynamicDashboardSrv {
    iteration: number;
    dashboard: any;
    init(dashboard: any): void;
    update(dashboard: any): void;
    process(dashboard: any, options: any): void;
    getRowClone(sourceRow: any, repeatIndex: any, sourceRowIndex: any): any;
    repeatRow(row: any, rowIndex: any): void;
    getPanelClone(sourcePanel: any, row: any, index: any): any;
    repeatPanel(panel: any, row: any): void;
}
