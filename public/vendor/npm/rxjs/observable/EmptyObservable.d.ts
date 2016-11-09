import { Scheduler } from '../Scheduler';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { TeardownLogic } from '../Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class EmptyObservable<T> extends Observable<T> {
    private scheduler;
    /**
     * @param scheduler
     * @return {Observable<T>}
     * @static true
     * @name empty
     * @owner Observable
     */
    static create<T>(scheduler?: Scheduler): Observable<T>;
    static dispatch({subscriber}: {
        subscriber: any;
    }): void;
    constructor(scheduler?: Scheduler);
    protected _subscribe(subscriber: Subscriber<T>): TeardownLogic;
}
