import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { map } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { isEmpty as _isEmpty, isNil as _isNil } from 'lodash-es';
import { Observable } from 'rxjs';

import { patientsActions, PatientSelectors } from 'app/store';
import { RootState } from 'app/store/root.state';

import { PatientBulkCrudService } from './services';

import type { Patient } from 'app/model';

/**
 * N.B: to finish making this fully reusable, patient-grid-view.component
 *      must be updated to hide the top <tr> in the header when no
 *      <ng-content> is passed in
 */
@Component({
    selector: 'rt1-patient-grid',
    templateUrl: './patient-grid.component.html',
    styleUrls: ['./patient-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PatientBulkCrudService]
})
export class PatientGridComponent {
    @HostBinding('class')
    public readonly klass: string = 'max-h-inherit';

    public get patientsData$(): Observable<Patient[]> {
        if (_isNil(this.patientsDataValue$)) {
            this.patientsDataValue$ = this.acquirePatientsData$();
        }
        return this.patientsDataValue$;
    }

    public get patientsLoading$(): Observable<boolean> {
        if (_isNil(this.patientsLoadingValue$)) {
            this.patientsLoadingValue$ = this.store$.pipe(select(PatientSelectors.isLoading));
        }
        return this.patientsLoadingValue$;
    }

    public get patientsAreMarkedForDeletion$(): Observable<boolean> {
        return this.bulkCrudService.patientsToDelete$.pipe(map(_isEmpty));
    }

    public get patientsAreMarkedForUpdate$(): Observable<boolean> {
        return this.bulkCrudService.patientsToUpdate$.pipe(map(_isEmpty));
    }

    private patientsDataValue$: Observable<Patient[]>;
    private patientsLoadingValue$: Observable<boolean>;

    constructor(private readonly store$: Store<RootState>, private readonly bulkCrudService: PatientBulkCrudService) {}

    public onEdit(patient: Patient): void {
        this.store$.dispatch(patientsActions.updateOneRequestAction({ id: patient.id, patient }));
    }

    public onDelete(id: number): void {
        this.store$.dispatch(patientsActions.deleteRequestAction({ id }));
    }

    private acquirePatientsData$(): Observable<Patient[]> {
        this.store$.dispatch(patientsActions.loadAllRequestAction());
        return this.store$.pipe(select(PatientSelectors.selectAll));
    }
}
