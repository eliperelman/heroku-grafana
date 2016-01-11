/// <reference path="../../../public/app/headers/common.d.ts" />
declare class TimeSeries {
    datapoints: any;
    id: string;
    label: string;
    alias: string;
    color: string;
    valueFormater: any;
    stats: any;
    legend: boolean;
    allIsNull: boolean;
    allIsZero: boolean;
    decimals: number;
    scaledDecimals: number;
    lines: any;
    bars: any;
    points: any;
    yaxis: any;
    zindex: any;
    stack: any;
    nullPointMode: any;
    fillBelowTo: any;
    transform: any;
    constructor(opts: any);
    applySeriesOverrides(overrides: any): void;
    getFlotPairs(fillStyle: any): any[];
    updateLegendValues(formater: any, decimals: any, scaledDecimals: any): void;
    formatValue(value: any): any;
}
export = TimeSeries;
