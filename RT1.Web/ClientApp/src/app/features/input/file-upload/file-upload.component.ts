import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'rt1-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
