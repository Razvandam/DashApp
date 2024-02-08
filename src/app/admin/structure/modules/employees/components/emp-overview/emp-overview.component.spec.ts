import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOverviewComponent } from './emp-overview.component';

describe('EmpOverviewComponent', () => {
  let component: EmpOverviewComponent;
  let fixture: ComponentFixture<EmpOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpOverviewComponent]
    });
    fixture = TestBed.createComponent(EmpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
