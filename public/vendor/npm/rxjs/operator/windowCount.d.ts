import { Observable } from '../Observable';
/**
 * @param windowSize
 * @param startWindowEvery
 * @return {Observable<Observable<any>>|WebSocketSubject<T>|Observable<T>}
 * @method windowCount
 * @owner Observable
 */
export declare function windowCount<T>(windowSize: number, startWindowEvery?: number): Observable<Observable<T>>;
export interface WindowCountSignature<T> {
    (windowSize: number, startWindowEvery?: number): Observable<Observable<T>>;
}
