import { Observable, ObservableInput } from '../Observable';
import { Scheduler } from '../Scheduler';
/**
 * Creates a result Observable which emits values from every given input Observable.
 *
 * <img src="./img/merge.png" width="100%">
 *
 * @param {Observable} input Observables
 * @return {Observable} an Observable that emits items that are the result of every input Observable.
 * @method merge
 * @owner Observable
 */
export declare function merge<T, R>(...observables: Array<ObservableInput<any> | Scheduler | number>): Observable<R>;
export interface MergeSignature<T> {
    (scheduler?: Scheduler): Observable<T>;
    (concurrent?: number, scheduler?: Scheduler): Observable<T>;
    <T2>(v2: ObservableInput<T2>, scheduler?: Scheduler): Observable<T | T2>;
    <T2>(v2: ObservableInput<T2>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2>;
    <T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: Scheduler): Observable<T | T2 | T3>;
    <T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3>;
    <T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
    <T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
    <T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
    <T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
    <T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
    <T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
    (...observables: Array<ObservableInput<T> | Scheduler | number>): Observable<T>;
    <R>(...observables: Array<ObservableInput<any> | Scheduler | number>): Observable<R>;
}
export declare function mergeStatic<T>(v1: ObservableInput<T>, scheduler?: Scheduler): Observable<T>;
export declare function mergeStatic<T>(v1: ObservableInput<T>, concurrent?: number, scheduler?: Scheduler): Observable<T>;
export declare function mergeStatic<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, scheduler?: Scheduler): Observable<T | T2>;
export declare function mergeStatic<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2>;
export declare function mergeStatic<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: Scheduler): Observable<T | T2 | T3>;
export declare function mergeStatic<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3>;
export declare function mergeStatic<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
export declare function mergeStatic<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4>;
export declare function mergeStatic<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function mergeStatic<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function mergeStatic<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function mergeStatic<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number, scheduler?: Scheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function mergeStatic<T>(...observables: (ObservableInput<T> | Scheduler | number)[]): Observable<T>;
export declare function mergeStatic<T, R>(...observables: (ObservableInput<any> | Scheduler | number)[]): Observable<R>;
