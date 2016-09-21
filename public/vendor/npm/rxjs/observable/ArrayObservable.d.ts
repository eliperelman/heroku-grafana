import { Scheduler } from '../Scheduler';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { TeardownLogic } from '../Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class ArrayObservable<T> extends Observable<T> {
    array: T[];
    scheduler: Scheduler;
    static create<T>(array: T[], scheduler?: Scheduler): Observable<T>;
    /**
     * @param array
     * @return {any}
     * @static true
     * @name of
     * @owner Observable
     */
    static of<T>(...array: Array<T | Scheduler>): Observable<T>;
    static dispatch(state: any): void;
    value: any;
    constructor(array: T[], scheduler?: Scheduler);
    protected _subscribe(subscriber: Subscriber<T>): TeardownLogic;
}
