import { ArrayObservable } from '../../observable/ArrayObservable';
declare module '../../Observable' {
    namespace Observable {
        let of: typeof ArrayObservable.of;
    }
}
