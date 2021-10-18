import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { Observable, OperatorFunction } from 'rxjs';

import { Patient } from 'app/model';

import { PatientGridViewComponent } from './components/patient-grid-view/patient-grid-view.component';
import { PatientGridComponent } from './patient-grid.component';
import { PatientBulkCrudService } from './services';

describe('PatientGridComponent', () => {
    let deletePipe: jest.Mock<Observable<boolean>, [OperatorFunction<Patient[], boolean>]>;
    let updatePipe: jest.Mock<Observable<boolean>, [OperatorFunction<Patient[], boolean>]>;
    let bulkCrudServiceMock: Partial<PatientBulkCrudService>;

    let component: PatientGridComponent;
    let fixture: ComponentFixture<PatientGridComponent>;

    beforeEach(() => {
        deletePipe = jest.fn();
        updatePipe = jest.fn();
        bulkCrudServiceMock = {
            patientsToDelete$: { pipe: deletePipe as any } as any,
            patientsToUpdate$: { pipe: updatePipe as any } as any
        };
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PatientGridComponent, MockComponents(MatSlideToggle, PatientGridViewComponent, MatButton)],
            providers: [
                provideMockStore({ initialState: {} }),
                { provide: PatientBulkCrudService, useValue: bulkCrudServiceMock }
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(PatientGridComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
    });

    it('should create', () => {
        expect.hasAssertions();
        expect(component).toBeTruthy();
    });

    it.todo('should get patient data');

    it.todo('should get patient data loading state');

    describe('bulk delete', () => {
        it.todo('should disable when no selections');

        it.todo('should enable when a selection is made');

        it.todo('should stay enabled after subsequent selections are made');

        it.todo('should open delete confirmation dialog');
    });

    describe('bulk edit', () => {
        it.todo('should disable when no changes');

        it.todo('should enable when a change is made');

        it.todo('should stay enabled after subsequent changes are made');

        it.todo('should open update confirmation dialog');
    });
});
