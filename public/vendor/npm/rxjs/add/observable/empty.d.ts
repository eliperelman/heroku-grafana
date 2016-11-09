import { EmptyObservable } from '../../observable/EmptyObservable';
declare module '../../Observable' {
    namespace Observable {
        let empty: typeof EmptyObservable.create;
    }
}
