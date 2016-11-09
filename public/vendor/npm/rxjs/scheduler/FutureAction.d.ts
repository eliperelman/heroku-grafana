import { Action } from './Action';
import { Scheduler } from '../Scheduler';
import { Subscription } from '../Subscription';
export declare class FutureAction<T> extends Subscription implements Action {
    scheduler: Scheduler;
    work: (x?: T) => Subscription | void;
    id: number;
    state: T;
    delay: number;
    error: any;
    private pending;
    constructor(scheduler: Scheduler, work: (x?: T) => Subscription | void);
    execute(): void;
    schedule(state?: T, delay?: number): Action;
    protected _schedule(state?: T, delay?: number): Action;
    protected _unsubscribe(): void;
}
