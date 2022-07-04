import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

import { isNil as _isNil } from 'lodash-es';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define _isNil', () => {
    expect(_isNil).toBeTruthy();
  })
});
