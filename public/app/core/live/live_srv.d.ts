/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class LiveSrv {
    conn: any;
    observers: any;
    initPromise: any;
    constructor();
    getWebSocketUrl(): string;
    getConnection(): any;
    handleMessage(message: any): void;
    reconnect(): void;
    send(data: any): void;
    addObserver(stream: any, observer: any): void;
    removeObserver(stream: any, observer: any): void;
    subscribe(streamName: any): any;
}
declare var instance: LiveSrv;
export { instance as liveSrv };
