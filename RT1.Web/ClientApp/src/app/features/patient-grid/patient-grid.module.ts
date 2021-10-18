import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';

import { PatientGridActionsComponent } from './components/patient-grid-actions/patient-grid-actions.component';
import { PatientGridViewComponent } from './components/patient-grid-view/patient-grid-view.component';
import { PatientGridComponent } from './patient-grid.component';

@NgModule({
    declarations: [PatientGridViewComponent, PatientGridComponent, PatientGridActionsComponent],
    imports: [CommonModule, FormsModule, FontAwesomeModule, MatButtonModule, MatSlideToggleModule, TableModule],
    exports: [PatientGridComponent]
})
export class PatientGridModule {}
