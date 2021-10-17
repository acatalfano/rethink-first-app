import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGridActionsComponent } from './patient-grid-actions.component';

describe('PatientGridActionsComponent', () => {
    let component: PatientGridActionsComponent;
    let fixture: ComponentFixture<PatientGridActionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PatientGridActionsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientGridActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
