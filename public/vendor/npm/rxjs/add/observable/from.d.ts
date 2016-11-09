import { FromObservable } from '../../observable/FromObservable';
declare module '../../Observable' {
    namespace Observable {
        let from: typeof FromObservable.create;
    }
}
