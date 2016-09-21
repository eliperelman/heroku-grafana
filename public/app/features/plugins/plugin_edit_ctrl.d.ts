/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class PluginEditCtrl {
    private $scope;
    private $rootScope;
    private backendSrv;
    private $routeParams;
    private $sce;
    private $http;
    model: any;
    pluginIcon: string;
    pluginId: any;
    includes: any;
    readmeHtml: any;
    includedDatasources: any;
    tabIndex: number;
    tabs: any;
    hasDashboards: any;
    preUpdateHook: () => any;
    postUpdateHook: () => any;
    /** @ngInject */
    constructor($scope: any, $rootScope: any, backendSrv: any, $routeParams: any, $sce: any, $http: any);
    init(): any;
    initReadme(): any;
    getPluginIcon(type: any): string;
    update(): void;
    importDashboards(): Promise<void>;
    setPreUpdateHook(callback: () => any): void;
    setPostUpdateHook(callback: () => any): void;
    updateAvailable(): void;
    enable(): void;
    disable(): void;
}
