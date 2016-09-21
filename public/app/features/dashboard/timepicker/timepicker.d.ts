/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class TimePickerCtrl {
    private $scope;
    private $rootScope;
    private timeSrv;
    static tooltipFormat: string;
    static defaults: {
        time_options: string[];
        refresh_intervals: string[];
    };
    dashboard: any;
    panel: any;
    absolute: any;
    timeRaw: any;
    tooltip: string;
    rangeString: string;
    timeOptions: any;
    refresh: any;
    isOpen: boolean;
    isUtc: boolean;
    /** @ngInject */
    constructor($scope: any, $rootScope: any, timeSrv: any);
    init(): void;
    zoom(factor: any): void;
    move(direction: any): void;
    openDropdown(): void;
    applyCustom(): void;
    absoluteFromChanged(): void;
    absoluteToChanged(): void;
    getAbsoluteMomentForTimezone(jsDate: any): any;
    setRelativeFilter(timespan: any): void;
}
export declare function settingsDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof TimePickerCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        dashboard: string;
    };
};
export declare function timePickerDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof TimePickerCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        dashboard: string;
    };
};
