import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponents, MockDirectives } from 'ng-mocks';
import { PrimeTemplate } from 'primeng/api';
import { SortableColumn, Table, TableHeaderCheckbox } from 'primeng/table';

import { PatientGridActionsComponent } from '../patient-grid-actions/patient-grid-actions.component';

import { PatientGridViewComponent } from './patient-grid-view.component';

import type { Patient } from 'app/model';

describe('PatientGridViewComponent', () => {
    let component: PatientGridViewComponent;
    let fixture: ComponentFixture<PatientGridViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PatientGridViewComponent,
                MockComponents(Table, TableHeaderCheckbox, PatientGridActionsComponent),
                MockDirectives(PrimeTemplate, SortableColumn)
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(PatientGridViewComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
    });

    beforeEach(() => {});

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
                genderId: 0
            };
            const testPatientData: Patient[] = [{ ...testPatient }];
            component.patientData = testPatientData;
            const actualPatientData = component.patientData;
            expect(actualPatientData).toHaveLength(1);
            expect(actualPatientData[0]).toEqual(expect.objectContaining(testPatient));
        });

        it('should handle external modifications', () => {
            expect.hasAssertions();
            const testPatient: Patient = {
                id: 3,
                firstName: 'first',
                lastName: 'last',
                birthday: new Date(2000, 0, 15),
                genderId: 0
            };
            const testPatientData: Patient[] = [{ ...testPatient }];
            component.patientData = testPatientData;

            const newPatient: Patient = {
                id: 5,
                firstName: 'new',
                lastName: 'patient',
                birthday: new Date(1998, 3, 18),
                genderId: 1
            };

            testPatientData.push(newPatient);

            const actualPatientData = component.patientData;
            expect(actualPatientData).toHaveLength(2);
            expect(actualPatientData[0]).toEqual(expect.objectContaining(testPatient));
            expect(actualPatientData[1]).toEqual(expect.objectContaining(newPatient));
        });
    });
});
