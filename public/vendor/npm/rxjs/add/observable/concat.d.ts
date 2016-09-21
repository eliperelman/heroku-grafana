import { concatStatic } from '../../operator/concat';
declare module '../../Observable' {
    namespace Observable {
        let concat: typeof concatStatic;
    }
}
