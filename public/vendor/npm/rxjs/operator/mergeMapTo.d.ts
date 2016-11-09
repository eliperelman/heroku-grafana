import { Observable, ObservableInput, SubscribableOrPromise } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
/**
 * @param observable
 * @param resultSelector
 * @param concurrent
 * @return {Observable<R>|WebSocketSubject<*>|Observable<*>}
 * @method mergeMapTo
 * @owner Observable
 */
export declare function mergeMapTo<T, I, R>(observable: Observable<I>, resultSelector?: ((outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R) | number, concurrent?: number): Observable<R>;
export interface MergeMapToSignature<T> {
    <R>(observable: ObservableInput<R>, concurrent?: number): Observable<R>;
    <I, R>(observable: ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number): Observable<R>;
}
export declare class MergeMapToOperator<T, I, R> implements Operator<Observable<T>, R> {
    private ish;
    private resultSelector;
    private concurrent;
    constructor(ish: SubscribableOrPromise<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number);
    call(observer: Subscriber<R>): Subscriber<any>;
}
export declare class MergeMapToSubscriber<T, I, R> extends OuterSubscriber<T, I> {
    private ish;
    private resultSelector;
    private concurrent;
    private hasCompleted;
    private buffer;
    private active;
    protected index: number;
    constructor(destination: Subscriber<R>, ish: SubscribableOrPromise<I>, resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number);
    protected _next(value: any): void;
    private _innerSub(ish, destination, resultSelector, value, index);
    protected _complete(): void;
    notifyNext(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, I>): void;
    private trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
    notifyError(err: any): void;
    notifyComplete(innerSub: Subscription): void;
}
