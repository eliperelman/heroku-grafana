import { Observable } from '../Observable';
/**
 * Returns an Observable that takes a source of observables and propagates the first observable exclusively
 * until it completes before subscribing to the next.
 * Items that come in before the first has exhausted will be dropped.
 * Similar to `concatAll`, but will not hold on to items that come in before the first is exhausted.
 * @return {Observable} an Observable which contains all of the items of the first Observable and following Observables in the source.
 * @method exhaust
 * @owner Observable
 */
export declare function exhaust<T>(): Observable<T>;
export interface SwitchFirstSignature<T> {
    (): T;
}
