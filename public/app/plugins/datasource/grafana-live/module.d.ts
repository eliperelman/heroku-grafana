/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { GrafanaStreamDS } from './datasource';
import { QueryCtrl } from 'app/plugins/sdk';
declare class GrafanaQueryCtrl extends QueryCtrl {
    static templateUrl: string;
}
export { GrafanaStreamDS as Datasource, GrafanaQueryCtrl as QueryCtrl };
