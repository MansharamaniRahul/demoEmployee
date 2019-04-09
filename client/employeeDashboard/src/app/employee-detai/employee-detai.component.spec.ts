import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetaiComponent } from './employee-detai.component';

describe('EmployeeDetaiComponent', () => {
  let component: EmployeeDetaiComponent;
  let fixture: ComponentFixture<EmployeeDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
