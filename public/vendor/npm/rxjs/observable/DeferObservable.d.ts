import { Observable, SubscribableOrPromise } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class DeferObservable<T> extends Observable<T> {
    private observableFactory;
    /**
     * @param observableFactory
     * @return {DeferObservable}
     * @static true
     * @name defer
     * @owner Observable
     */
    static create<T>(observableFactory: () => SubscribableOrPromise<T> | void): Observable<T>;
    constructor(observableFactory: () => SubscribableOrPromise<T> | void);
    protected _subscribe(subscriber: Subscriber<T>): Subscription;
}
