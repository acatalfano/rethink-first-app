import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipModule } from 'primeng/tooltip';

import { FileUploadModule } from 'app/features/input';
import { PatientGridModule } from 'app/features/patient-grid';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, FileUploadModule, PatientGridModule, TooltipModule],
    exports: [HomeComponent]
})
export class HomeModule {}
