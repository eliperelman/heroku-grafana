import { zipStatic } from '../../operator/zip';
declare module '../../Observable' {
    namespace Observable {
        let zip: typeof zipStatic;
    }
}
