import { DeferObservable } from '../../observable/DeferObservable';
declare module '../../Observable' {
    namespace Observable {
        let defer: typeof DeferObservable.create;
    }
}
