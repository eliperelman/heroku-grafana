/// <reference path="../../../../public/app/headers/common.d.ts" />
import { TablePanelCtrl } from './controller';
export declare function tablePanel(): {
    restrict: string;
    templateUrl: string;
    controller: typeof TablePanelCtrl;
    link: (scope: any, elem: any) => void;
};
