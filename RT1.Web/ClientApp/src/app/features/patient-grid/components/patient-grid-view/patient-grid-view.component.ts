import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { map } from 'rxjs/operators';

import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { cloneDeep as _cloneDeep, isNil as _isNil } from 'lodash-es';
import { AsyncSubject, Observable } from 'rxjs';

import { Gender, Patient } from 'src/app/model';
import { gendersActions, GendersSelectors } from 'src/app/store/genders-store';

import { PatientBulkCrudService } from '../../services';

import type { ColumnDescriptor } from './model/column-descriptor.interface';
import type { RootState } from 'src/app/store/root.state';
import type { RecursiveKeyOf } from 'src/app/utilities/types';

@Component({
    selector: 'rt1-patient-grid-view',
    templateUrl: './patient-grid-view.component.html',
    styleUrls: ['./patient-grid-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientGridViewComponent implements OnInit, OnDestroy {
    @Output() public readonly deletePatient: EventEmitter<number> = new EventEmitter<number>();
    @Output() public readonly editPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

    @Input()
    public set patientData(value: Patient[] | null) {
        this.patientDataValue = _cloneDeep(value);
    }

    public get patientData(): Patient[] | null {
        return this.patientDataValue;
    }

    @Input()
    public set multiselectMode(value: boolean) {
        this.multiselectModeValue = value;
    }

    public get multiselectMode(): boolean {
        return this.multiselectModeValue;
    }

    @Input()
    public tableDataLoading: boolean | null = false;

    public get genders$(): Observable<Gender[]> {
        if (_isNil(this.gendersValue$)) {
            this.gendersValue$ = this.store$.pipe(select(GendersSelectors.selectAll), map(_cloneDeep));
            this.store$.dispatch(gendersActions.loadAllRequestAction());
        }
        return this.gendersValue$;
    }

    public readonly dataColumnDescriptors: ColumnDescriptor[] = [
        { field: 'firstName', label: 'First Name' },
        { field: 'lastName', label: 'Last Name' },
        { field: 'birthday', label: 'Birthday' },
        { field: 'gender.label', label: 'Gender' }
    ];

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    public readonly pagerOptions: number[] = [10, 15, 25, 50];
    public readonly initialRows: number = this.pagerOptions[0];
    public readonly currentPageReportTemplate = 'Items {first} - {last} of {totalRecords}';

    public readonly faPencilAlt = faPencilAlt;
    public readonly faTimes = faTimes;
    public readonly filterableFields: RecursiveKeyOf<Patient>[] = ['firstName', 'lastName'];
    private multiselectModeValue: boolean = false;
    private patientDataValue: Patient[] | null = [];
    private gendersValue$!: Observable<Gender[]>;
    private readonly unsubscribe$: AsyncSubject<void> = new AsyncSubject<void>();

    constructor(private readonly bulkCrudService: PatientBulkCrudService, private readonly store$: Store<RootState>) {}

    public ngOnInit(): void {
        this.store$.dispatch(gendersActions.loadAllRequestAction());
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public onEdit(patient: Patient): void {
        this.editPatient.emit(patient);
    }

    public onDelete({ id }: Patient): void {
        this.deletePatient.emit(id);
    }

    public onSelectionChange(selection: Patient[]): void {
        this.bulkCrudService.replaceDeleteTargets(selection);
    }

    public updateGender(patient: Patient, gender: Gender): void {
        patient.gender = gender;
    }

    // TODO: buggy behavior with PrimeNG's calendar component when inside a cellEditor
}
