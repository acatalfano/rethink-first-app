import { map, scan, shareReplay, startWith, switchMap } from 'rxjs/operators';

import { merge, MonoTypeOperatorFunction, Observable } from 'rxjs';

import type { AccumMap, PairList, SourceMapper, SrcAccumPair } from './__internal__/types';

export const multiSwitchScan = <R, P extends PairList<R>>(...srcAccumList: P): MonoTypeOperatorFunction<R> => {
    const accumMap: AccumMap<R> = srcAccumList.reduce(
        <U>(accumObj: AccumMap<R>, [, accumFn]: SrcAccumPair<R, U>, index: number) => ({
            ...accumObj,
            [index]: accumFn
        }),
        {}
    );

    const sourceMapper: SourceMapper<R> = ([src], index) => {
        const srcObs$ = src;
        return srcObs$.pipe(map(value => ({ value, index })));
    };
    const sources = srcAccumList.map(sourceMapper);

    const accumulator = <U>(
        accum: R,
        { index: accumIndexer, value }: { index: number; value: U },
        index: number
    ): R => {
        return accumIndexer === -1 ? accum : accumMap[accumIndexer](accum, value, index);
    };

    return (source: Observable<R>) =>
        source.pipe(
            switchMap((src: R) =>
                merge(...sources).pipe(
                    startWith<{ value: unknown; index: number }>({ value: null, index: -1 }),
                    scan(accumulator, src),
                    shareReplay({ bufferSize: 1, refCount: true })
                )
            )
        );
};
