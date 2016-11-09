import { FromEventObservable } from '../../observable/FromEventObservable';
declare module '../../Observable' {
    namespace Observable {
        let fromEvent: typeof FromEventObservable.create;
    }
}
