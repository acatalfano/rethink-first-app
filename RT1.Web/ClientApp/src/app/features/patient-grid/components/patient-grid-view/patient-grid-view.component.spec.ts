import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';

import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { PrimeTemplate } from 'primeng/api';
import { InputText } from 'primeng/inputtext';
import { CellEditor, EditableColumn, SortableColumn, SortIcon, Table, TableHeaderCheckbox } from 'primeng/table';

import { PatientBulkCrudService } from '../../services';
import { PatientGridActionsComponent } from '../patient-grid-actions/patient-grid-actions.component';

import { PatientGridViewComponent } from './patient-grid-view.component';

import type { Patient } from 'app/model';

describe('PatientGridViewComponent', () => {
    let replaceDeleteTargets: jest.Mock<void, [Patient[]]>;
    let bulkCrudServiceMock: Partial<PatientBulkCrudService>;

    let component: PatientGridViewComponent;
    let fixture: ComponentFixture<PatientGridViewComponent>;

    beforeEach(() => {
        replaceDeleteTargets = jest.fn();
        bulkCrudServiceMock = { replaceDeleteTargets };
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PatientGridViewComponent,
                MockComponents(CellEditor, Table, TableHeaderCheckbox, PatientGridActionsComponent, SortIcon),
                MockDirectives(EditableColumn, InputText, NgModel, PrimeTemplate, SortableColumn)
            ],
            providers: [
                { provide: PatientBulkCrudService, useValue: bulkCrudServiceMock },
                provideMockStore({ initialState: {} })
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(PatientGridViewComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
    });

    it('should create', () => {
        expect.hasAssertions();
        expect(component).toBeTruthy();
    });

    describe('patientData', () => {
        it('should store', () => {
            expect.hasAssertions();
            const testPatient: Patient = {
                id: 3,
                firstName: 'first',
                lastName: 'last',
                birthday: new Date(2000, 0, 15),
                gender: { id: 0, label: 'M' }
            };
            const testPatientData: Patient[] = [{ ...testPatient }];
            component.patientData = testPatientData;
            const actualPatientData = component.patientData;
            expect(actualPatientData).toHaveLength(1);
            expect(actualPatientData[0]).toEqual(expect.objectContaining(testPatient));
        });
    });
});
