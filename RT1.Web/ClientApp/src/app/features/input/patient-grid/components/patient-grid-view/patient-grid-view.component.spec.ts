import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGridViewComponent } from './patient-grid-view.component';

describe('PatientGridViewComponent', () => {
  let component: PatientGridViewComponent;
  let fixture: ComponentFixture<PatientGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
