import { NeverObservable } from '../../observable/NeverObservable';
declare module '../../Observable' {
    namespace Observable {
        let never: typeof NeverObservable.create;
    }
}
