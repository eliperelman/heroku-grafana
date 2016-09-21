/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
declare class PrometheusQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    metric: any;
    resolutions: any;
    oldTarget: any;
    suggestMetrics: any;
    linkToPrometheus: any;
    /** @ngInject */
    constructor($scope: any, $injector: any, templateSrv: any);
    refreshMetricData(): void;
    updateLink(): void;
}
export { PrometheusQueryCtrl };
