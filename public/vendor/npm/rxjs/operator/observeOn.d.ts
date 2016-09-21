import { Observable } from '../Observable';
import { Scheduler } from '../Scheduler';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
/**
 * @param scheduler
 * @param delay
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method observeOn
 * @owner Observable
 */
export declare function observeOn<T>(scheduler: Scheduler, delay?: number): Observable<T>;
export interface ObserveOnSignature<T> {
    (scheduler: Scheduler, delay?: number): Observable<T>;
}
export declare class ObserveOnOperator<T> implements Operator<T, T> {
    private scheduler;
    private delay;
    constructor(scheduler: Scheduler, delay?: number);
    call(subscriber: Subscriber<T>): Subscriber<T>;
}
export declare class ObserveOnSubscriber<T> extends Subscriber<T> {
    private scheduler;
    private delay;
    static dispatch({notification, destination}: {
        notification: any;
        destination: any;
    }): void;
    constructor(destination: Subscriber<T>, scheduler: Scheduler, delay?: number);
    private scheduleMessage(notification);
    protected _next(value: T): void;
    protected _error(err: any): void;
    protected _complete(): void;
}
