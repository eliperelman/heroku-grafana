/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class DynamicDashboardSrv {
    iteration: number;
    dashboard: any;
    variables: any;
    init(dashboard: any, variableSrv: any): void;
    process(options: any): void;
    getRowClone(sourceRow: any, repeatIndex: any, sourceRowIndex: any): any;
    repeatRow(row: any, rowIndex: any): void;
    getPanelClone(sourcePanel: any, row: any, index: any): any;
    repeatPanel(panel: any, row: any): void;
}
