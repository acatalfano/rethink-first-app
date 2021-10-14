import { Injectable } from '@angular/core';
import { finalize, take, takeUntil } from 'rxjs/operators';
import { AsyncSubject, BehaviorSubject } from 'rxjs';

import { ResourceCounter } from './__internal__/resource-counter';
import type { OnDestroy } from '@angular/core';
import type { Observable } from 'rxjs';

@Injectable()
export class BusyService implements OnDestroy {
    private readonly unsubscribe$: AsyncSubject<void> = new AsyncSubject<void>();
    private readonly isBusySrc$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly resourceCounter: ResourceCounter = new ResourceCounter();

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public attachTo<T>(obs$: Observable<T>): Observable<T> {
        this.acquireResource();
        return obs$.pipe(
            take(1),
            takeUntil(this.unsubscribe$),
            finalize(() => this.releaseResource())
        );
    }

    private acquireResource(): void {
        this.resourceCounter.acquireResource();
        this.isBusySrc$.next(this.resourceCounter.resourcesArePending());
    }

    private releaseResource(): void {
        this.resourceCounter.releaseResource();
        this.isBusySrc$.next(this.resourceCounter.resourcesArePending());
    }
}
