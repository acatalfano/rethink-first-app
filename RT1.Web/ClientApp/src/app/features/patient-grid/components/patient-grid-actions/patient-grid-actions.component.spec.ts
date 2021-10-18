import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MockComponents } from 'ng-mocks';
import { TableCheckbox } from 'primeng/table';

import { PatientGridActionsComponent } from './patient-grid-actions.component';

describe('PatientGridActionsComponent', () => {
    let component: PatientGridActionsComponent;
    let fixture: ComponentFixture<PatientGridActionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PatientGridActionsComponent, MockComponents(TableCheckbox, FaIconComponent)]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientGridActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect.hasAssertions();
        expect(component).toBeTruthy();
    });
});
