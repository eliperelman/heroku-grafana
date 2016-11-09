import { Observable, ObservableInput } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
/**
 * Returns an Observable that emits items based on applying a function that you supply to each item emitted by the
 * source Observable, where that function returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * @param {Function} a function that, when applied to an item emitted by the source Observable, returns an Observable.
 * @return {Observable} an Observable that emits the result of applying the transformation function to each item
 * emitted by the source Observable and merging the results of the Observables obtained from this transformation
 * @method mergeMap
 * @owner Observable
 */
export declare function mergeMap<T, I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector?: ((outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R) | number, concurrent?: number): Observable<R>;
export interface MergeMapSignature<T> {
    <R>(project: (value: T, index: number) => ObservableInput<R>, concurrent?: number): Observable<R>;
    <I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number): Observable<R>;
}
export declare class MergeMapOperator<T, I, R> implements Operator<T, I> {
    private project;
    private resultSelector;
    private concurrent;
    constructor(project: (value: T, index: number) => ObservableInput<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number);
    call(observer: Subscriber<I>): Subscriber<T>;
}
export declare class MergeMapSubscriber<T, I, R> extends OuterSubscriber<T, I> {
    private project;
    private resultSelector;
    private concurrent;
    private hasCompleted;
    private buffer;
    private active;
    protected index: number;
    constructor(destination: Subscriber<I>, project: (value: T, index: number) => ObservableInput<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number);
    protected _next(value: any): void;
    protected _tryNext(value: any): void;
    private _innerSub(ish, value, index);
    protected _complete(): void;
    notifyNext(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, I>): void;
    _notifyResultSelector(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): void;
    notifyComplete(innerSub: Subscription): void;
}
