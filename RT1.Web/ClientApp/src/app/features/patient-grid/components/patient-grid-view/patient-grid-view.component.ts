import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    IterableDiffers,
    Output
} from '@angular/core';

import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { cloneDeep as _cloneDeep, isNil as _isNil } from 'lodash-es';

import { PatientBulkCrudService } from '../../services';

import type { ColumnDescriptor } from './model/column-descriptor.interface';
import type { TrackByFunction, IterableDiffer, DoCheck } from '@angular/core';
import type { Patient } from 'app/model';
import type { RecursiveKeyOf } from 'app/utilities/types';

@Component({
    selector: 'rt1-patient-grid-view',
    templateUrl: './patient-grid-view.component.html',
    styleUrls: ['./patient-grid-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientGridViewComponent implements DoCheck {
    @Output() public readonly deletePatient: EventEmitter<number> = new EventEmitter<number>();
    @Output() public readonly editPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

    @Input()
    public set patientData(value: Patient[] | null) {
        this.patientDataValue = _cloneDeep(value);
        this.differ = this.iterDiffers.find(this.patientDataValue).create(this.iterTrackBy);
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
    private differ?: IterableDiffer<Patient>;
    private patientDataValue: Patient[] | null = [];

    constructor(
        private readonly cd: ChangeDetectorRef,
        private readonly iterDiffers: IterableDiffers,
        private readonly bulkCrudService: PatientBulkCrudService
    ) {}

    public ngDoCheck(): void {
        const diffs = this.differ?.diff(this.patientDataValue);
        if (!_isNil(diffs)) {
            this.cd.detectChanges();
        }
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

    private readonly iterTrackBy: TrackByFunction<Patient> = (_index, patient) => patient.id;
}
