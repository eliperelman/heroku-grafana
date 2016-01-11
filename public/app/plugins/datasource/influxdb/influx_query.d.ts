/// <reference path="../../../../../public/app/headers/common.d.ts" />
declare class InfluxQuery {
    target: any;
    selectModels: any[];
    groupByParts: any;
    queryBuilder: any;
    constructor(target: any);
    updateProjection(): void;
    updatePersistedParts(): void;
    hasGroupByTime(): any;
    hasFill(): any;
    addGroupBy(value: any): void;
    removeGroupByPart(part: any, index: any): void;
    removeSelect(index: number): void;
    removeSelectPart(selectParts: any, part: any): void;
    addSelectPart(selectParts: any, type: any): void;
    private renderTagCondition(tag, index);
    render(): any;
}
export = InfluxQuery;
