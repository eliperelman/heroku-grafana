import { PromiseObservable } from '../../observable/PromiseObservable';
declare module '../../Observable' {
    namespace Observable {
        let fromPromise: typeof PromiseObservable.create;
    }
}
