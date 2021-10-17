import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

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

    @Output()
    public readonly checkboxSelect: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    public set multiSelectMode(value: boolean) {
        if (this.multiSelectModeValue !== value) {
            this.multiSelectModeValue = value;
            //TODO: vvv drop all the checkboxStateValue stuff if not used...
            this.checkboxStateValue = false;
        }
    }

    public get multiSelectMode(): boolean {
        return this.multiSelectModeValue;
    }

    public get checkboxState(): boolean {
        return this.checkboxStateValue;
    }

    public readonly faPencilAlt = faPencilAlt;
    public readonly faTimes = faTimes;

    private multiSelectModeValue: boolean = false;
    private checkboxStateValue: boolean = false;

    public onDelete(): void {
        this.delete.emit();
    }

    public onEdit(): void {
        this.edit.emit();
    }

    public onCheckboxClick(): void {
        this.checkboxStateValue = !this.checkboxStateValue;
        this.checkboxSelect.emit(this.checkboxStateValue);
    }
}
