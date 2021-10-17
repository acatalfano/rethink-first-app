import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGridComponent } from './patient-grid.component';

describe('PatientGridComponent', () => {
    let component: PatientGridComponent;
    let fixture: ComponentFixture<PatientGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PatientGridComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
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
