/// <reference path="../../../../../public/app/headers/common.d.ts" />
import { PanelCtrl } from 'app/plugins/sdk';
declare class AlertListPanel extends PanelCtrl {
    private $location;
    private backendSrv;
    private timeSrv;
    private templateSrv;
    static templateUrl: string;
    showOptions: {
        text: string;
        value: string;
    }[];
    contentHeight: string;
    stateFilter: any;
    currentAlerts: any;
    alertHistory: any;
    panelDefaults: {
        show: string;
        limit: number;
        stateFilter: any[];
    };
    /** @ngInject */
    constructor($scope: any, $injector: any, $location: any, backendSrv: any, timeSrv: any, templateSrv: any);
    updateStateFilter(): void;
    onRender(): void;
    getStateChanges(): void;
    getCurrentAlertState(): void;
    onInitEditMode(): void;
}
export { AlertListPanel, AlertListPanel as PanelCtrl };
