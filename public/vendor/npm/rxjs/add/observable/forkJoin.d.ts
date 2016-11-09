import { ForkJoinObservable } from '../../observable/ForkJoinObservable';
declare module '../../Observable' {
    namespace Observable {
        let forkJoin: typeof ForkJoinObservable.create;
    }
}
