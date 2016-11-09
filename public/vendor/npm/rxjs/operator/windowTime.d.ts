import { Observable } from '../Observable';
import { Scheduler } from '../Scheduler';
/**
 * @param windowTimeSpan
 * @param windowCreationInterval
 * @param scheduler
 * @return {Observable<Observable<any>>|WebSocketSubject<T>|Observable<T>}
 * @method windowTime
 * @owner Observable
 */
export declare function windowTime<T>(windowTimeSpan: number, windowCreationInterval?: number, scheduler?: Scheduler): Observable<Observable<T>>;
export interface WindowTimeSignature<T> {
    (windowTimeSpan: number, windowCreationInterval?: number, scheduler?: Scheduler): Observable<Observable<T>>;
}
