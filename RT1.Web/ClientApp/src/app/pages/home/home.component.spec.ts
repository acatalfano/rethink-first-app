import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponents, MockDirectives } from 'ng-mocks';
import { Tooltip } from 'primeng/tooltip';

import { FileUploadComponent } from 'features/input/file-upload/file-upload.component';
import { PatientGridComponent } from 'features/patient-grid/patient-grid.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                MockComponents(PatientGridComponent, FileUploadComponent),
                MockDirectives(Tooltip)
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
    });

    it('should create', () => {
        expect.hasAssertions();
        expect(component).toBeTruthy();
    });
});
