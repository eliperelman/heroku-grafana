import { Observable } from '../Observable';
/**
 * @param openings
 * @param closingSelector
 * @return {Observable<Observable<any>>|WebSocketSubject<T>|Observable<T>}
 * @method windowToggle
 * @owner Observable
 */
export declare function windowToggle<T, O>(openings: Observable<O>, closingSelector: (openValue: O) => Observable<any>): Observable<Observable<T>>;
export interface WindowToggleSignature<T> {
    <O>(openings: Observable<O>, closingSelector: (openValue: O) => Observable<any>): Observable<Observable<T>>;
}
