/// <reference path="../../../../public/app/headers/common.d.ts" />
import { PanelCtrl } from './panel_ctrl';
declare class MetricsPanelCtrl extends PanelCtrl {
    error: any;
    loading: boolean;
    datasource: any;
    datasourceName: any;
    $q: any;
    $timeout: any;
    datasourceSrv: any;
    timeSrv: any;
    templateSrv: any;
    timing: any;
    range: any;
    rangeRaw: any;
    interval: any;
    resolution: any;
    timeInfo: any;
    skipDataOnInit: boolean;
    dataStream: any;
    dataSubscription: any;
    constructor($scope: any, $injector: any);
    private onInitMetricsPanelEditMode();
    private onMetricsPanelRefresh();
    setTimeQueryStart(): void;
    setTimeQueryEnd(): void;
    updateTimeRange(): void;
    applyPanelTimeOverrides(): void;
    issueQueries(datasource: any): any;
    handleQueryResult(result: any): void;
    handleDataStream(stream: any): void;
    setDatasource(datasource: any): void;
}
export { MetricsPanelCtrl };
