import { AjaxObservable } from '../../../observable/dom/AjaxObservable';
declare module '../../../Observable' {
    namespace Observable {
        let ajax: typeof AjaxObservable.create;
    }
}
