import { Observable, ObservableInput } from '../Observable';
/**
 * @param observable
 * @param resultSelector
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method switchMapTo
 * @owner Observable
 */
export declare function switchMapTo<T, I, R>(observable: Observable<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
export interface SwitchMapToSignature<T> {
    <R>(observable: ObservableInput<R>): Observable<R>;
    <I, R>(observable: ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
}
