import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PatientGridViewComponent } from './components/patient-grid-view/patient-grid-view.component';
import { PatientGridComponent } from './patient-grid.component';

@NgModule({
    declarations: [PatientGridViewComponent, PatientGridComponent],
    imports: [CommonModule, MatTableModule, MatIconModule],
    exports: [PatientGridComponent]
})
export class PatientGridModule {}
