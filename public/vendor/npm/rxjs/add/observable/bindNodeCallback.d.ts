import { BoundNodeCallbackObservable } from '../../observable/BoundNodeCallbackObservable';
declare module '../../Observable' {
    namespace Observable {
        let bindNodeCallback: typeof BoundNodeCallbackObservable.create;
    }
}
