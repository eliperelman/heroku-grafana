/// <reference path="../../../../../public/app/headers/common.d.ts" />
import InfluxQuery from './influx_query';
import { QueryCtrl } from 'app/plugins/sdk';
export declare class InfluxQueryCtrl extends QueryCtrl {
    private templateSrv;
    private $q;
    private uiSegmentSrv;
    static templateUrl: string;
    queryModel: InfluxQuery;
    queryBuilder: any;
    groupBySegment: any;
    resultFormats: any[];
    policySegment: any;
    tagSegments: any[];
    selectMenu: any;
    measurementSegment: any;
    removeTagFilterSegment: any;
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any, $q: any, uiSegmentSrv: any);
    buildSelectMenu(): void;
    getGroupByOptions(): any;
    groupByAction(): void;
    removeGroupByPart(part: any, index: any): void;
    addSelectPart(selectParts: any, cat: any, subitem: any): void;
    removeSelectPart(selectParts: any, part: any): void;
    selectPartUpdated(): void;
    fixTagSegments(): void;
    measurementChanged(): void;
    getPolicySegments(): any;
    policyChanged(): void;
    toggleEditorMode(): void;
    getMeasurements(): any;
    getPartOptions(part: any): any;
    handleQueryError(err: any): any[];
    transformToSegments(addTemplateVars: any): (results: any) => any;
    getTagsOrValues(segment: any, index: any): any;
    getFieldSegments(): any;
    setFill(fill: any): void;
    tagSegmentUpdated(segment: any, index: any): void;
    rebuildTargetTagConditions(): void;
    getTagValueOperator(tagValue: any, tagOperator: any): string;
    getCollapsedText(): any;
}
