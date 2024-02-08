import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNewEditComponent } from './emp-new-edit.component';

describe('EmpAddEditComponent', () => {
  let component: EmpNewEditComponent;
  let fixture: ComponentFixture<EmpNewEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpNewEditComponent],
    });
    fixture = TestBed.createComponent(EmpNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
