import { Injectable, OnDestroy } from '@angular/core';

import { isNil as _isNil } from 'lodash-es';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { multiSwitchScan } from 'app/utilities/rxjs';

import type { Patient } from 'app/model';

@Injectable()
export class PatientBulkCrudService implements OnDestroy {
    public get patientsToDelete$(): Observable<Patient[]> {
        return this.patientsToDeleteSrc$.asObservable();
    }

    public get patientsToUpdate$(): Observable<Patient[]> {
        if (_isNil(this.patientsToUpdateValue$)) {
            this.patientsToUpdateValue$ = this.buildPatientsToUpdate$();
        }
        return this.patientsToUpdateValue$;
    }

    private patientsToUpdateValue$: Observable<Patient[]>;
    private readonly patientsToDeleteSrc$: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
    private readonly clearUpdates$: Subject<void> = new Subject<void>();
    private readonly targetUpdate$: Subject<Patient> = new Subject<Patient>();

    // in case anyone forgets to unsubscribe
    public ngOnDestroy(): void {
        this.patientsToDeleteSrc$.complete();
        this.targetUpdate$.complete();
    }

    public replaceDeleteTargets(newTargets: Patient[]): void {
        this.patientsToDeleteSrc$.next(newTargets);
    }

    public addNewUpdateTarget(newTarget: Patient): void {
        this.targetUpdate$.next(newTarget);
    }

    public clearAll(): void {
        this.patientsToDeleteSrc$.next([]);
        this.clearUpdates$.next();
    }

    private buildPatientsToUpdate$(): Observable<Patient[]> {
        return of<Patient[]>([] as Patient[]).pipe(
            multiSwitchScan(
                [this.targetUpdate$, (accum, next) => [...accum, next as Patient]],
                [this.clearUpdates$, (_accum, _next) => []]
            )
        );
    }
}
