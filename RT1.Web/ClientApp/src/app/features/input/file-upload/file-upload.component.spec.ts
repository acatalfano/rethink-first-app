import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { FileUpload } from 'primeng/fileupload';

import { FileUploadComponent } from './file-upload.component';

// TODO: this triggers a circular structure to JSON error somehow
describe('FileUploadComponent', () => {
    let component: FileUploadComponent;
    let fixture: ComponentFixture<FileUploadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileUploadComponent, MockComponents(FileUpload)],
            providers: [provideMockStore({ initialState: {} })]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect.hasAssertions();
        expect(component).toBeTruthy();
    });
});
