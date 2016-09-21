import { Observable } from '../Observable';
/**
 * @param total
 * @return {any}
 * @method take
 * @owner Observable
 */
export declare function take<T>(total: number): Observable<T>;
export interface TakeSignature<T> {
    (total: number): Observable<T>;
}
