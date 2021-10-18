import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponents } from 'ng-mocks';

import { FileUploadComponent } from 'app/features/input/file-upload/file-upload.component';
import { PatientGridComponent } from 'app/features/patient-grid/patient-grid.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent, MockComponents(PatientGridComponent, FileUploadComponent)]
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
/*
[{"id":-1,"firstName":"Clark","lastName":"Kent","birthday":"Mon Oct 18 2021 01:27:21 GMT-0400 (Eastern Daylight Time)","gender":{"id":2,"label":"M"}},{"id":-1,"firstName":"Diana","lastName":"Prince","birthday":"Mon Oct 18 2021 01:27:21 GMT-0400 (Eastern Daylight Time)","gender":{"id":1,"label":"F"}},{"id":-1,"firstName":"Tony","lastName":"Stark","birthday":"Mon Oct 18 2021 01:27:21 GMT-0400 (Eastern Daylight Time)","gender":{"id":2,"label":"M"}},{"id":-1,"firstName":"Carol","lastName":"Denvers","birthday":"Mon Oct 18 2021 01:27:21 GMT-0400 (Eastern Daylight Time)","gender":{"id":1,"label":"F"}}]

*/
