/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class Emitter {
    emitter: any;
    constructor();
    emit(name: any, data?: any): void;
    on(name: any, handler: any, scope?: any): void;
    off(name: any, handler: any): void;
}
