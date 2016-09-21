import { RangeObservable } from '../../observable/RangeObservable';
declare module '../../Observable' {
    namespace Observable {
        let range: typeof RangeObservable.create;
    }
}
