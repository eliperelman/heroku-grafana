import { BoundCallbackObservable } from '../../observable/BoundCallbackObservable';
declare module '../../Observable' {
    namespace Observable {
        let bindCallback: typeof BoundCallbackObservable.create;
    }
}
