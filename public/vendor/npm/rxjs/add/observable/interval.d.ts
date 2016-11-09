import { IntervalObservable } from '../../observable/IntervalObservable';
declare module '../../Observable' {
    namespace Observable {
        let interval: typeof IntervalObservable.create;
    }
}
