import { mergeStatic } from '../../operator/merge';
declare module '../../Observable' {
    namespace Observable {
        let merge: typeof mergeStatic;
    }
}
