/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class ElasticConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    indexPatternTypes: ({
        name: string;
        value: any;
    } | {
        name: string;
        value: string;
        example: string;
    })[];
    esVersions: {
        name: string;
        value: number;
    }[];
    indexPatternTypeChanged(): void;
}
