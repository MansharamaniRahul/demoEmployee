import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailChildComponent } from './employee-detail-child.component';

describe('EmployeeDetailChildComponent', () => {
  let component: EmployeeDetailChildComponent;
  let fixture: ComponentFixture<EmployeeDetailChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
