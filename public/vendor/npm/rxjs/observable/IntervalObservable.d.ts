import { Subscriber } from '../Subscriber';
import { Scheduler } from '../Scheduler';
import { Observable } from '../Observable';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class IntervalObservable extends Observable<number> {
    private period;
    private scheduler;
    /**
     * @param period
     * @param scheduler
     * @return {IntervalObservable}
     * @static true
     * @name interval
     * @owner Observable
     */
    static create(period?: number, scheduler?: Scheduler): Observable<number>;
    static dispatch(state: any): void;
    constructor(period?: number, scheduler?: Scheduler);
    protected _subscribe(subscriber: Subscriber<number>): void;
}
