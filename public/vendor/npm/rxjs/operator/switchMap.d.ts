import { Observable, ObservableInput } from '../Observable';
/**
 * Returns a new Observable by applying a function that you supply to each item emitted by the source Observable that
 * returns an Observable, and then emitting the items emitted by the most recently emitted of these Observables.
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * @param {Observable} a function that, when applied to an item emitted by the source Observable, returns an Observable.
 * @return {Observable} an Observable that emits the items emitted by the Observable returned from applying func to
 * the most recently emitted item emitted by the source Observable.
 * @method switchMap
 * @owner Observable
 */
export declare function switchMap<T, I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
export interface SwitchMapSignature<T> {
    <R>(project: (value: T, index: number) => ObservableInput<R>): Observable<R>;
    <I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
}
