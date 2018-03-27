/// <reference path="../../../../public/app/headers/common.d.ts" />
import { assignModelProperties } from 'app/core/core';
export interface Variable {
    setValue(option: any): any;
    updateOptions(): any;
    dependsOn(variable: any): any;
    setValueFromUrl(urlValue: any): any;
    getValueForUrl(): any;
    getModel(): any;
}
export declare var variableTypes: {};
export { assignModelProperties };
export declare function containsVariable(...args: any[]): boolean;
