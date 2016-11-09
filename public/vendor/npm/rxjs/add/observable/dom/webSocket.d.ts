import { WebSocketSubject } from '../../../observable/dom/WebSocketSubject';
declare module '../../../Observable' {
    namespace Observable {
        let webSocket: typeof WebSocketSubject.create;
    }
}
