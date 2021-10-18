import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallbackErrorPageComponent } from './fallback-error-page.component';

describe('FallbackErrorPageComponent', () => {
  let component: FallbackErrorPageComponent;
  let fixture: ComponentFixture<FallbackErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallbackErrorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallbackErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
