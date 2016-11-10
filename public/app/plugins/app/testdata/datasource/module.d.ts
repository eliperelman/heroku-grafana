/// <reference path="../../../../../../public/app/headers/common.d.ts" />
import { TestDataDatasource } from './datasource';
import { TestDataQueryCtrl } from './query_ctrl';
declare class TestDataAnnotationsQueryCtrl {
    annotation: any;
    constructor();
    static template: string;
}
export { TestDataDatasource, TestDataDatasource as Datasource, TestDataQueryCtrl as QueryCtrl, TestDataAnnotationsQueryCtrl as AnnotationsQueryCtrl };
