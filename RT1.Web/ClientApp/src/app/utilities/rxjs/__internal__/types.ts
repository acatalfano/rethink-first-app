import { Observable } from 'rxjs';

export type AccumFn<R, T> = (acc: R, value: T, index?: number) => R;

export type SrcAccumPair<R, U> = [Observable<U>, AccumFn<R, U>];

export type PairList<R> = readonly SrcAccumPair<R, unknown>[];

export interface AccumMap<R> {
    [_: number]: AccumFn<R, unknown>;
}

export type SourceMapper<R> = <U>(
    _value: SrcAccumPair<R, U>,
    _index: number
) => Observable<{ value: U; index: number }>;
