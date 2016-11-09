import { Observable, ObservableInput } from '../Observable';
/**
 * Returns an Observable that applies the given function to each item of the source Observable
 * to create a new Observable, which are then concatenated together to produce a new Observable.
 * @param {function} project function called for each item of the source to produce a new Observable.
 * @param {function} [resultSelector] optional function for then selecting on each inner Observable.
 * @return {Observable} an Observable containing all the projected Observables of each item of the source concatenated together.
 * @method exhaustMap
 * @owner Observable
 */
export declare function exhaustMap<T, I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
export interface SwitchFirstMapSignature<T> {
    <R>(project: (value: T, index: number) => ObservableInput<R>): Observable<R>;
    <I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
}
