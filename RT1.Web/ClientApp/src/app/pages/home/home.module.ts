import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FileUploadModule, PatientGridModule } from 'app/features/input';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, FileUploadModule, MatTableModule, PatientGridModule],
    exports: [HomeComponent]
})
export class HomeModule {}
