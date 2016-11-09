import { TimerObservable } from '../../observable/TimerObservable';
declare module '../../Observable' {
    namespace Observable {
        let timer: typeof TimerObservable.create;
    }
}
