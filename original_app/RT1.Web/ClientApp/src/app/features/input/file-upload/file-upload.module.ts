import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadModule as PrimeNgFileUploadModule } from 'primeng/fileupload';

import { FileUploadComponent } from './file-upload.component';

@NgModule({
    declarations: [FileUploadComponent],
    imports: [CommonModule, PrimeNgFileUploadModule],
    exports: [FileUploadComponent]
})
export class FileUploadModule {}
