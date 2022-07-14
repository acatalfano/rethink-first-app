import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

import type { Patient } from 'model';

@Component({
    selector: 'rt1-patient-grid-actions',
    templateUrl: './patient-grid-actions.component.html',
    styleUrls: ['./patient-grid-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientGridActionsComponent {
    @Output()
    public readonly delete: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public readonly edit: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public set multiSelectMode(value: boolean) {
        if (this.multiSelectModeValue !== value) {
            this.multiSelectModeValue = value;
        }
    }

    public get multiSelectMode(): boolean {
        return this.multiSelectModeValue;
    }

    @Input()
    public checkboxValue: Patient | undefined;

    public readonly faSave = faSave;
    public readonly faTimes = faTimes;

    private multiSelectModeValue: boolean = false;

    public onDelete(): void {
        this.delete.emit();
    }

    public onEdit(): void {
        this.edit.emit();
    }
}
