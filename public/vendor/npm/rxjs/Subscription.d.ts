export interface AnonymousSubscription {
    unsubscribe(): void;
}
export declare type TeardownLogic = AnonymousSubscription | Function | void;
export interface ISubscription extends AnonymousSubscription {
    unsubscribe(): void;
    isUnsubscribed: boolean;
    add(teardown: TeardownLogic): ISubscription;
    remove(sub: ISubscription): void;
}
export declare class Subscription implements ISubscription {
    static EMPTY: Subscription;
    isUnsubscribed: boolean;
    constructor(_unsubscribe?: () => void);
    unsubscribe(): void;
    /**
     * Adds a tear down to be called during the unsubscribe() of this subscription.
     *
     * If the tear down being added is a subscription that is already unsubscribed,
     * is the same reference `add` is being called on, or is `Subscription.EMPTY`,
     * it will not be added.
     *
     * If this subscription is already in an `isUnsubscribed` state, the passed tear down logic
     * will be executed immediately
     *
     * @param {TeardownLogic} teardown the additional logic to execute on teardown.
     * @returns {Subscription} returns the subscription used or created to be added to the inner
     *  subscriptions list. This subscription can be used with `remove()` to remove the passed teardown
     *  logic from the inner subscriptions list.
     */
    add(teardown: TeardownLogic): Subscription;
    /**
     * removes a subscription from the internal list of subscriptions that will unsubscribe
     * during unsubscribe process of this subscription.
     * @param {Subscription} subscription the subscription to remove
     */
    remove(subscription: Subscription): void;
}
export declare class UnsubscriptionError extends Error {
    errors: any[];
    constructor(errors: any[]);
}
