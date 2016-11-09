import { FromEventPatternObservable } from '../../observable/FromEventPatternObservable';
declare module '../../Observable' {
    namespace Observable {
        let fromEventPattern: typeof FromEventPatternObservable.create;
    }
}
