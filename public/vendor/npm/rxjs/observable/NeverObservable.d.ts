import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class NeverObservable<T> extends Observable<T> {
    /**
     * @return {NeverObservable<T>}
     * @static true
     * @name never
     * @owner Observable
     */
    static create<T>(): NeverObservable<T>;
    constructor();
    protected _subscribe(subscriber: Subscriber<T>): void;
}
