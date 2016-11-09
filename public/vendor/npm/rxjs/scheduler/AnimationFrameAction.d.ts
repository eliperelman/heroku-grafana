import { Action } from './Action';
import { FutureAction } from './FutureAction';
export declare class AnimationFrameAction<T> extends FutureAction<T> {
    protected _schedule(state?: T, delay?: number): Action;
    protected _unsubscribe(): void;
}
