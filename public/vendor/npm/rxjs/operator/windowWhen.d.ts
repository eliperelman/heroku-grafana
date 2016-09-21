import { Observable } from '../Observable';
/**
 * @param closingSelector
 * @return {Observable<Observable<any>>|WebSocketSubject<T>|Observable<T>}
 * @method windowWhen
 * @owner Observable
 */
export declare function windowWhen<T>(closingSelector: () => Observable<any>): Observable<Observable<T>>;
export interface WindowWhenSignature<T> {
    (closingSelector: () => Observable<any>): Observable<Observable<T>>;
}
