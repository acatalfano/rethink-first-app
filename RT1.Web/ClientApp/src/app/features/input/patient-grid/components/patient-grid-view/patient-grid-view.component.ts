import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    Input,
    IterableDiffer,
    IterableDiffers,
    TrackByFunction
} from '@angular/core';
import { isNil as _isNil } from 'lodash-es';
import type { Patient } from 'app/model';

@Component({
    selector: 'rt1-patient-grid-view',
    templateUrl: './patient-grid-view.component.html',
    styleUrls: ['./patient-grid-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientGridViewComponent implements DoCheck {
    @Input()
    public set patientData(value: Patient[] | null) {
        this.patientDataValue = value;
        this.differ = this.iterDiffers.find(this.patientDataValue).create(this.iterTrackBy);
    }

    public get patientData(): Patient[] | null {
        return this.patientDataValue;
    }

    public get columns(): string[] {
        return ['actions', 'firstName', 'lastName', 'birthday', 'gender'];
    }

    private patientDataValue: Patient[] | null = [];
    private differ?: IterableDiffer<Patient>;

    constructor(private readonly cd: ChangeDetectorRef, private readonly iterDiffers: IterableDiffers) {}

    public ngDoCheck(): void {
        const diffs = this.differ?.diff(this.patientDataValue);
        if (!_isNil(diffs)) {
            this.cd.detectChanges();
        }
    }

    private readonly iterTrackBy: TrackByFunction<Patient> = (_index, patient) => patient.id;
}
