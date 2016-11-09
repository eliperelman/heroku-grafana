import { Observable } from '../Observable';
/**
 * Returns an Observable that emits the first item of the source Observable that matches the specified condition.
 * Throws an error if matching element is not found.
 * @param {function} predicate function called with each item to test for condition matching.
 * @return {Observable} an Observable of the first item that matches the condition.
 * @method first
 * @owner Observable
 */
export declare function first<T, R>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, resultSelector?: (value: T, index: number) => R, defaultValue?: R): Observable<T | R>;
export interface FirstSignature<T> {
    (predicate?: (value: T, index: number, source: Observable<T>) => boolean): Observable<T>;
    (predicate: (value: T, index: number, source: Observable<T>) => boolean, resultSelector: void, defaultValue?: T): Observable<T>;
    <R>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, resultSelector?: (value: T, index: number) => R, defaultValue?: R): Observable<R>;
}
