import { Observable } from '../Observable';
/**
 * @param closingNotifier
 * @return {Observable<Observable<any>>|WebSocketSubject<T>|Observable<T>}
 * @method window
 * @owner Observable
 */
export declare function window<T>(closingNotifier: Observable<any>): Observable<Observable<T>>;
export interface WindowSignature<T> {
    (closingNotifier: Observable<any>): Observable<Observable<T>>;
}
