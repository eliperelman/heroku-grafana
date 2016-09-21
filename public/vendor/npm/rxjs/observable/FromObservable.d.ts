import { Scheduler } from '../Scheduler';
import { Observable, ObservableInput } from '../Observable';
import { Subscriber } from '../Subscriber';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class FromObservable<T> extends Observable<T> {
    private ish;
    private scheduler;
    constructor(ish: ObservableInput<T>, scheduler: Scheduler);
    /**
     * @param ish
     * @param mapFnOrScheduler
     * @param thisArg
     * @param lastScheduler
     * @return {any}
     * @static true
     * @name from
     * @owner Observable
     */
    static create<T>(ish: any, mapFnOrScheduler?: Scheduler | ((x: any, y: number) => T), thisArg?: any, lastScheduler?: Scheduler): Observable<T>;
    protected _subscribe(subscriber: Subscriber<T>): any;
}
