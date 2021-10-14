import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isNil as _isNil } from 'lodash-es';
import { Observable } from 'rxjs';
import { Patient } from 'app/model';
import { patientsActions, PatientSelectors } from 'app/store';
import { RootState } from 'app/store/root-state';

@Component({
    selector: 'rt1-patient-grid',
    templateUrl: './patient-grid.component.html',
    styleUrls: ['./patient-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientGridComponent {
    public get patientsData$(): Observable<Patient[]> {
        if (_isNil(this.patientsDataValue$)) {
            this.patientsDataValue$ = this.acquirePatientsData$();
        }
        return this.patientsDataValue$;
    }

    private patientsDataValue$!: Observable<Patient[]>;

    constructor(private readonly store$: Store<RootState>) {}

    private acquirePatientsData$(): Observable<Patient[]> {
        this.store$.dispatch(patientsActions.loadAllRequestAction());
        return this.store$.pipe(select(PatientSelectors.selectAll));
    }
}
