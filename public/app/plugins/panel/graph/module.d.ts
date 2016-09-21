/// <reference path="../../../../../public/app/headers/common.d.ts" />
import TimeSeries from 'app/core/time_series2';
import { MetricsPanelCtrl } from 'app/plugins/sdk';
declare class GraphCtrl extends MetricsPanelCtrl {
    private annotationsSrv;
    static template: string;
    hiddenSeries: any;
    seriesList: any;
    logScales: any;
    unitFormats: any;
    annotationsPromise: any;
    datapointsCount: number;
    datapointsOutside: boolean;
    datapointsWarning: boolean;
    colors: any;
    panelDefaults: {
        datasource: any;
        renderer: string;
        yaxes: {
            label: any;
            show: boolean;
            logBase: number;
            min: any;
            max: any;
            format: string;
        }[];
        xaxis: {
            show: boolean;
        };
        grid: {
            threshold1: any;
            threshold2: any;
            threshold1Color: string;
            threshold2Color: string;
        };
        lines: boolean;
        fill: number;
        linewidth: number;
        points: boolean;
        pointradius: number;
        bars: boolean;
        stack: boolean;
        percentage: boolean;
        legend: {
            show: boolean;
            values: boolean;
            min: boolean;
            max: boolean;
            current: boolean;
            total: boolean;
            avg: boolean;
        };
        nullPointMode: string;
        steppedLine: boolean;
        tooltip: {
            value_type: string;
            shared: boolean;
            sort: number;
            msResolution: boolean;
        };
        timeFrom: any;
        timeShift: any;
        targets: {}[];
        aliasColors: {};
        seriesOverrides: any[];
    };
    /** @ngInject */
    constructor($scope: any, $injector: any, annotationsSrv: any);
    onInitEditMode(): void;
    onInitPanelActions(actions: any): void;
    setUnitFormat(axis: any, subItem: any): void;
    issueQueries(datasource: any): any;
    zoomOut(evt: any): void;
    onDataSnapshotLoad(snapshotData: any): void;
    onDataError(err: any): void;
    onDataReceived(dataList: any): void;
    seriesHandler(seriesData: any, index: any): TimeSeries;
    onRender(): void;
    changeSeriesColor(series: any, color: any): void;
    toggleSeries(serie: any, event: any): void;
    toggleSeriesExclusiveMode(serie: any): void;
    toggleAxis(info: any): void;
    addSeriesOverride(override: any): void;
    removeSeriesOverride(override: any): void;
    toggleLegend(): void;
    legendValuesOptionChanged(): void;
    exportCsv(): void;
    exportCsvColumns(): void;
}
export { GraphCtrl, GraphCtrl as PanelCtrl };
