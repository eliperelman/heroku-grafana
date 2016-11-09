import { Observable } from '../Observable';
/**
 * @param total
 * @return {any}
 * @method takeLast
 * @owner Observable
 */
export declare function takeLast<T>(total: number): Observable<T>;
export interface TakeLastSignature<T> {
    (total: number): Observable<T>;
}
