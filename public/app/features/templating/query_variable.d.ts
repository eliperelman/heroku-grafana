/// <reference path="../../../../public/app/headers/common.d.ts" />
import { Variable } from './variable';
export declare class QueryVariable implements Variable {
    private model;
    private datasourceSrv;
    private templateSrv;
    private variableSrv;
    private $q;
    datasource: any;
    query: any;
    regex: any;
    sort: any;
    options: any;
    current: any;
    refresh: number;
    hide: number;
    name: string;
    multi: boolean;
    includeAll: boolean;
    defaults: {
        type: string;
        label: any;
        query: string;
        regex: string;
        sort: number;
        datasource: any;
        refresh: number;
        hide: number;
        name: string;
        multi: boolean;
        includeAll: boolean;
        allValue: any;
        options: any[];
        current: {};
        tagsQuery: any;
        tagValuesQuery: any;
    };
    /** @ngInject **/
    constructor(model: any, datasourceSrv: any, templateSrv: any, variableSrv: any, $q: any);
    getModel(): any;
    setValue(option: any): any;
    setValueFromUrl(urlValue: any): any;
    getValueForUrl(): any;
    updateOptions(): any;
    updateOptionsFromMetricFindQuery(datasource: any): any;
    addAllOption(): void;
    metricNamesToVariableValues(metricNames: any): any;
    sortVariableValues(options: any, sortOrder: any): any;
    dependsOn(variable: any): boolean;
}
