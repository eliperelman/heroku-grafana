import { Observable, ObservableInput } from '../Observable';
import { Scheduler } from '../Scheduler';
/**
 * Joins this observable with multiple other observables by subscribing to them one at a time, starting with the source,
 * and merging their results into the returned observable. Will wait for each observable to complete before moving
 * on to the next.
 * @params {...Observable} the observables to concatenate
 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
 * @return {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
export declare function concat<T, R>(...observables: Array<ObservableInput<any> | Scheduler>): Observable<R>;
export interface ConcatSignature<T> {
    (scheduler?: Scheduler): Observable<T>;
    <T2>(v2: ObservableInput<T2>, scheduler?: Scheduler): Observable<T | T2>;
    <T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: Scheduler): Observable<T | T2 | T3>;
    <T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
    <T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
    <T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
    (...observables: Array<ObservableInput<T> | Scheduler>): Observable<T>;
    <R>(...observables: Array<ObservableInput<any> | Scheduler>): Observable<R>;
}
/**
 * Joins multiple observables together by subscribing to them one at a time and merging their results
 * into the returned observable. Will wait for each observable to complete before moving on to the next.
 * @params {...Observable} the observables to concatenate
 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
 * @return {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
export declare function concatStatic<T>(v1: ObservableInput<T>, scheduler?: Scheduler): Observable<T>;
export declare function concatStatic<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, scheduler?: Scheduler): Observable<T | T2>;
export declare function concatStatic<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: Scheduler): Observable<T | T2 | T3>;
export declare function concatStatic<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
export declare function concatStatic<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function concatStatic<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function concatStatic<T>(...observables: (ObservableInput<T> | Scheduler)[]): Observable<T>;
export declare function concatStatic<T, R>(...observables: (ObservableInput<any> | Scheduler)[]): Observable<R>;
